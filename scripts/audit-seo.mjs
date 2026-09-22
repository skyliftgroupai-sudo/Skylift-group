// Crawls the built output in dist/ the way a search engine would: raw HTML only,
// no JavaScript. Reports the things that actually stop a page from being indexed
// or ranked. Run with `npm run audit:seo` after `npm run build`.

import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = "https://www.skyliftgroup.com";

if (!existsSync(dist)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const files = execSync(`find ${dist} -name "*.html"`).toString().trim().split("\n").sort();
const pages = [];
const issues = [];
const add = (sev, route, msg) => issues.push({ sev, route, msg });

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"));
  return m ? m[1] : "";
}

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const route = file.replace(dist, "").replace(/\/index\.html$/, "") || "/";
  if (route === "/googlee8ada53be5805e5a.html") continue; // Search Console verification file

  const head = (html.match(/<head[\s\S]*?<\/head>/i) || [""])[0];
  const body = (html.match(/<div id="root">[\s\S]*<\/div>/i) || [""])[0];

  const title = (head.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "";
  const desc = attr((head.match(/<meta\s+name="description"[^>]*>/i) || [""])[0], "content");
  const canonical = attr((head.match(/<link\s+rel="canonical"[^>]*>/i) || [""])[0], "href");
  const robots = attr((head.match(/<meta\s+name="robots"[^>]*>/i) || [""])[0], "content");

  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
  const h2s = [...body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].length;

  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").length : 0;

  const imgs = [...body.matchAll(/<img[^>]*>/gi)].map((m) => m[0]);
  const links = [...body.matchAll(/<a[^>]*href="([^"]*)"[^>]*>/gi)].map((m) => m[1]);

  const ld = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const ldTypes = [];
  const declaredIds = new Set();
  const referencedIds = new Set();
  const faqPairs = [];

  ld.forEach((raw, i) => {
    let parsed;
    try {
      parsed = JSON.parse(raw.replace(/\\u003c/g, "<"));
    } catch (e) {
      add("CRITICAL", route, `JSON-LD block ${i} is not valid JSON: ${e.message}`);
      return;
    }
    if (!parsed["@context"]) add("CRITICAL", route, `JSON-LD block ${i} has no @context`);

    const walk = (n, parentKey) => {
      if (!n || typeof n !== "object") return;
      if (Array.isArray(n)) return n.forEach((x) => walk(x, parentKey));

      const keys = Object.keys(n);
      // { "@id": "..." } on its own is a reference to a node defined elsewhere.
      if (keys.length === 1 && keys[0] === "@id") {
        referencedIds.add(n["@id"]);
        return;
      }
      if (n["@type"]) {
        if (parentKey === "@graph" || parentKey === "@root") {
          ldTypes.push([].concat(n["@type"]).join("/"));
        }
        if (n["@id"]) declaredIds.add(n["@id"]);
      }
      if (n["@type"] === "Question") {
        faqPairs.push({ q: n.name, a: n.acceptedAnswer && n.acceptedAnswer.text });
      }
      for (const [k, v] of Object.entries(n)) walk(v, k === "@graph" ? "@graph" : k);
    };
    walk(parsed, "@root");
  });

  // Duplicate @type in one page's graph means the same entity described twice.
  const typeCounts = ldTypes.reduce((a, t) => ((a[t] = (a[t] || 0) + 1), a), {});
  for (const [t, n] of Object.entries(typeCounts)) {
    if (n > 1 && ["Organization", "WebSite", "ProfessionalService", "FAQPage", "BreadcrumbList", "BlogPosting"].includes(t)) {
      add("CRITICAL", route, `schema declares ${n} ${t} nodes — duplicate entity definitions conflict`);
    }
  }

  // An @id that is referenced but never defined is a dangling pointer.
  for (const id of referencedIds) {
    if (!declaredIds.has(id)) add("HIGH", route, `schema references @id ${id} which no node on this page defines`);
  }

  // Google requires FAQ schema to describe text the visitor can actually see.
  const visibleText = text.replace(/\s+/g, " ");
  for (const pair of faqPairs) {
    if (!pair.q || !pair.a) {
      add("CRITICAL", route, `FAQ schema entry is missing a question or answer`);
      continue;
    }
    // Compare the whole answer, not a prefix. A 60-character sample passed a
    // FAQ whose schema text contained raw markdown link syntax further in,
    // which is exactly the mismatch this check exists to catch.
    const needle = pair.a.replace(/\s+/g, " ").trim();
    if (needle && !visibleText.includes(needle)) {
      add("CRITICAL", route, `FAQ schema answer is not visible on the page: "${pair.q}"`);
    }
  }

  pages.push({ route, title, desc, canonical, robots, h1s, h2s, words, imgs, links, ldTypes });
}

const byRoute = new Map(pages.map((p) => [p.route, p]));
const titles = new Map();
const descs = new Map();
for (const p of pages) {
  titles.set(p.title, (titles.get(p.title) || 0) + 1);
  descs.set(p.desc, (descs.get(p.desc) || 0) + 1);
}

for (const p of pages) {
  const indexable = !/noindex/i.test(p.robots);

  if (!p.title) add("CRITICAL", p.route, "no <title>");
  else if (p.title.length > 60) add("MEDIUM", p.route, `title is ${p.title.length} chars (>60, will truncate)`);
  if (titles.get(p.title) > 1) add("HIGH", p.route, "duplicate <title> shared with another page");

  if (!p.desc) add("HIGH", p.route, "no meta description");
  else if (p.desc.length > 155) add("MEDIUM", p.route, `meta description is ${p.desc.length} chars (>155)`);
  if (descs.get(p.desc) > 1) add("HIGH", p.route, "duplicate meta description shared with another page");

  if (indexable) {
    const expected = `${SITE}${p.route === "/" ? "/" : p.route}`;
    if (!p.canonical) add("CRITICAL", p.route, "no canonical");
    else if (p.canonical !== expected) add("CRITICAL", p.route, `canonical points to ${p.canonical}, not itself`);
  }

  if (p.h1s.length === 0) add("HIGH", p.route, "no <h1> in the server-rendered HTML");
  else if (p.h1s.length > 1) add("MEDIUM", p.route, `${p.h1s.length} <h1> tags: ${p.h1s.join(" | ").slice(0, 120)}`);

  if (indexable && p.words < 300) add("HIGH", p.route, `thin: only ${p.words} words of rendered text`);

  for (const img of p.imgs) {
    const src = attr(img, "src");
    if (!/alt=/i.test(img)) add("MEDIUM", p.route, `image missing alt: ${src}`);
    // An <img> with an explicit height utility (h-full inside a sized box, h-[350px], h-48)
    // already has its box settled before the file loads, so it cannot shift layout.
    const sized = /\b(h-full|h-\[|h-\d)/.test(attr(img, "class"));
    if (!sized && (!attr(img, "width") || !attr(img, "height")))
      add("MEDIUM", p.route, `image has no width/height and no fixed height (layout shift): ${src}`);
    if (/\.(png|jpe?g)(\?|$)/i.test(src)) add("LOW", p.route, `image not served as WebP/AVIF: ${src}`);
  }

  // Internal links that point at a route with no built page.
  for (const href of p.links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
    if (/\.(webp|png|jpe?g|svg|pdf|xml|txt|ico)$/i.test(clean)) continue;
    if (!byRoute.has(clean)) add("HIGH", p.route, `internal link to a page that does not exist: ${href}`);
  }
}

// Orphan check: an indexable page nothing else links to.
const linkedTo = new Set();
for (const p of pages) {
  for (const href of p.links) {
    if (!href.startsWith("/")) continue;
    const clean = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
    if (clean !== p.route) linkedTo.add(clean);
  }
}
// Count inbound links, not just presence. A page reachable from one other page
// is not an orphan but is still starved of crawl signal — that is precisely the
// state Search Console reports as "Discovered - currently not indexed", and a
// pure orphan check reports it as fine.
const inboundCounts = new Map();
for (const p of pages) {
  const seen = new Set();
  for (const href of p.links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
    if (clean === p.route) continue;
    seen.add(clean);
  }
  for (const target of seen) inboundCounts.set(target, (inboundCounts.get(target) || 0) + 1);
}
for (const p of pages) {
  if (/noindex/i.test(p.robots) || p.route === "/") continue;
  const inbound = inboundCounts.get(p.route) || 0;
  // A paginated listing is reachable from its siblings by design — page 2 of a
  // two-page archive legitimately has one inbound link.
  const isPagination = /\/page\/\d+$/.test(p.route);
  if (inbound === 0) add("HIGH", p.route, "orphan: no other page links to it");
  else if (inbound < 3 && !isPagination)
    add("HIGH", p.route, `under-linked: only ${inbound} page(s) link to it`);
}

// Sitemap agreement.
const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const url of sitemapUrls) {
  const r = url.replace(SITE, "").replace(/\/$/, "") || "/";
  if (!byRoute.has(r)) add("CRITICAL", r, "in sitemap.xml but no page was built for it");
  else if (/noindex/i.test(byRoute.get(r).robots)) add("CRITICAL", r, "in sitemap.xml but marked noindex");
}
for (const p of pages) {
  if (/noindex/i.test(p.robots)) continue;
  const url = `${SITE}${p.route === "/" ? "/" : p.route}`;
  if (!sitemapUrls.includes(url)) add("HIGH", p.route, "indexable but missing from sitemap.xml");
}

// Source-level guard for the defect that made three separate FAQ sections
// invisible to crawlers: an answer rendered only while its accordion item is
// open never exists in the HTML at all. Word counts do not catch it, because
// the surrounding page is still long enough to pass.
const pageFiles = execSync(`find ${join(root, "src")} -name "*.jsx"`).toString().trim().split("\n");
for (const file of pageFiles) {
  const src = readFileSync(file, "utf8");
  const rel = file.replace(root + "/", "");
  // <AnimatePresence>{open === i && ( ... )}</AnimatePresence> around answer text.
  const conditional = /<AnimatePresence>[\s\S]{0,200}?(?:openIndex|active|activeIndex|isOpen)\s*===\s*\w+\s*&&\s*\(/.exec(src);
  if (conditional) {
    add("HIGH", rel, "FAQ answer is conditionally mounted — the text will not exist in the HTML crawlers see. Collapse it with height instead.");
  }
}

// ---- report ----
const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
issues.sort((a, b) => order[a.sev] - order[b.sev] || a.route.localeCompare(b.route));

console.log(`\nPAGE INVENTORY (${pages.length} pages, raw HTML with no JavaScript)\n`);
console.log("route".padEnd(56), "words".padStart(6), "h1".padStart(3), "h2".padStart(3), "imgs".padStart(5), " schema");
for (const p of pages.sort((a, b) => a.route.localeCompare(b.route))) {
  console.log(
    p.route.padEnd(56),
    String(p.words).padStart(6),
    String(p.h1s.length).padStart(3),
    String(p.h2s).padStart(3),
    String(p.imgs.length).padStart(5),
    " " + (p.ldTypes.join(",") || "none")
  );
}

const counts = issues.reduce((a, i) => ((a[i.sev] = (a[i.sev] || 0) + 1), a), {});
console.log(
  `\nISSUES: ${issues.length} total — ` +
    ["CRITICAL", "HIGH", "MEDIUM", "LOW"].map((s) => `${counts[s] || 0} ${s.toLowerCase()}`).join(", ") +
    "\n"
);
for (const i of issues) console.log(`[${i.sev}] ${i.route} — ${i.msg}`);

process.exit(counts.CRITICAL ? 1 : 0);
