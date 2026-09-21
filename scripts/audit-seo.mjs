// Audits the prerendered HTML in dist/ — the exact bytes Googlebot fetches before
// it runs any JavaScript. Flags canonical mismatches, over-length or duplicate
// titles and descriptions, and missing tags.
//
//   npm run build && node scripts/audit-seo.mjs

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = "https://www.skyliftgroup.com";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry !== "assets") walk(full, out);
    } else if (entry === "index.html" || entry === "404.html") {
      out.push(full);
    }
  }
  return out;
}

const grab = (html, re) => {
  const m = re.exec(html);
  return m ? m[1] : "";
};

const rows = walk(dist).map((file) => {
  const html = readFileSync(file, "utf8");
  const rel = relative(dist, file).split("\\").join("/");
  const url = "/" + rel.replace(/index\.html$/, "").replace(/\/$/, "");
  return {
    url: url === "/" ? "/" : url,
    title: grab(html, /<title>([^<]*)<\/title>/i),
    canonical: grab(html, /rel="canonical" href="([^"]*)"/i),
    description: grab(html, /name="description" content="([^"]*)"/i),
    ogUrl: grab(html, /property="og:url" content="([^"]*)"/i),
    ogImage: grab(html, /property="og:image" content="([^"]*)"/i),
    robots: grab(html, /name="robots" content="([^"]*)"/i),
  };
});

const titleCounts = new Map();
const descCounts = new Map();
for (const r of rows) {
  titleCounts.set(r.title, (titleCounts.get(r.title) || 0) + 1);
  descCounts.set(r.description, (descCounts.get(r.description) || 0) + 1);
}

let problems = 0;
console.log("      TLEN DLEN  URL");
for (const r of rows.sort((a, b) => a.url.localeCompare(b.url))) {
  const isNoindex = Boolean(r.robots);
  const expected = SITE + (r.url === "/" ? "/" : r.url);
  const flags = [];

  if (!isNoindex) {
    if (r.canonical !== expected) flags.push(`CANONICAL="${r.canonical}"`);
    if (r.ogUrl !== expected) flags.push(`OG:URL="${r.ogUrl}"`);
  } else if (r.canonical) {
    flags.push("NOINDEX PAGE STILL HAS A CANONICAL");
  }
  if (!r.title) flags.push("NO TITLE");
  else if (r.title.length > 60) flags.push("TITLE OVER 60");
  if (!r.description) flags.push("NO DESCRIPTION");
  else if (r.description.length > 155) flags.push("DESCRIPTION OVER 155");
  if (!r.ogImage) flags.push("NO OG:IMAGE");
  if (titleCounts.get(r.title) > 1) flags.push("DUPLICATE TITLE");
  if (descCounts.get(r.description) > 1) flags.push("DUPLICATE DESCRIPTION");

  if (flags.length) problems++;
  console.log(
    `${flags.length ? "FLAG " : "ok   "} ${String(r.title.length).padStart(4)} ${String(
      r.description.length
    ).padStart(4)}  ${r.url}${flags.length ? "\n         << " + flags.join("; ") : ""}`
  );
}

console.log(`\n${rows.length} pages, ${problems} with problems.`);
process.exit(problems ? 1 : 0);
