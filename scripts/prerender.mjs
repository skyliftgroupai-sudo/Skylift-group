// Post-build prerender: writes a static HTML file per route with a UNIQUE
// <title>, meta description, canonical, and Open Graph tags baked into the raw
// HTML. This is what lets Google index every page as a distinct page instead of
// treating them all as duplicates of the homepage.
//
// The React app still hydrates normally on top of each file (same #root + script
// tags), so behavior is unchanged for users — only the crawlable head differs.
// Vercel's catch-all rewrite is a fallback, so these static files are served
// first for known routes; unknown routes still fall through to the SPA.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { staticRoutes } from "./seo-routes.js";
import { parseFrontmatter } from "../src/lib/frontmatter.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const SITE = "https://www.skyliftgroup.com";
const DEFAULT_OG = `${SITE}/og-image.png`;

if (!existsSync(join(dist, "index.html"))) {
  console.error("[prerender] dist/index.html not found — run vite build first.");
  process.exit(1);
}
const template = readFileSync(join(dist, "index.html"), "utf8");

function esc(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Replace the first tag matching `regex` with `replacement`; if none exists,
// insert `replacement` right before </head>.
function setTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function buildHtml({ path, title, description, image, noindex = false }) {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  const og = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : DEFAULT_OG;
  let html = template;

  html = setTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  html = setTag(
    html,
    /<meta\s+name=["']description["'][\s\S]*?>/i,
    `<meta name="description" content="${esc(description)}" />`
  );
  // The 404 page must never claim a canonical — a canonical on an error page is
  // exactly what made every bad URL look like a duplicate of the homepage.
  html = noindex
    ? setTag(
        html,
        /<link\s+rel=["']canonical["'][\s\S]*?>/i,
        `<meta name="robots" content="noindex, follow" />`
      )
    : setTag(
        html,
        /<link\s+rel=["']canonical["'][\s\S]*?>/i,
        `<link rel="canonical" href="${esc(url)}" />`
      );
  html = setTag(
    html,
    /<meta\s+property=["']og:title["'][\s\S]*?>/i,
    `<meta property="og:title" content="${esc(title)}" />`
  );
  html = setTag(
    html,
    /<meta\s+property=["']og:description["'][\s\S]*?>/i,
    `<meta property="og:description" content="${esc(description)}" />`
  );
  html = setTag(
    html,
    /<meta\s+property=["']og:url["'][\s\S]*?>/i,
    `<meta property="og:url" content="${esc(url)}" />`
  );
  html = setTag(
    html,
    /<meta\s+property=["']og:image["'][\s\S]*?>/i,
    `<meta property="og:image" content="${esc(og)}" />`
  );
  return html;
}

function writeRoute(path, html) {
  // "/" -> dist/index.html ; "/x/y" -> dist/x/y/index.html
  const target =
    path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

// Guard: vercel.json no longer rewrites unknown paths to the SPA shell, so a route
// that exists in App.jsx but has no prerendered file would 404 in production.
// Fail the build loudly instead of shipping a dead page.
const appSource = readFileSync(join(root, "src", "App.jsx"), "utf8");
const appRoutes = [...appSource.matchAll(/path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== "*" && !p.includes(":")); // "*" and /blog/:slug are handled separately
const uncovered = appRoutes.filter((p) => !(p in staticRoutes));
if (uncovered.length) {
  console.error(
    `[prerender] These App.jsx routes have no entry in src/lib/seo-config.js and would 404:\n  ${uncovered.join(
      "\n  "
    )}`
  );
  process.exit(1);
}

let count = 0;

// Static routes
for (const [path, meta] of Object.entries(staticRoutes)) {
  writeRoute(path, buildHtml({ path, ...meta }));
  count++;
}

// 404 page. Vercel serves dist/404.html with a real HTTP 404 for anything that
// does not match a file, which is what stops Google logging bad URLs as soft 404s
// or as duplicates of the homepage.
writeFileSync(
  join(dist, "404.html"),
  buildHtml({
    path: "/404",
    title: "Page Not Found | Sky Lift Group",
    description: "The page you are looking for does not exist or has been moved.",
    noindex: true,
  })
);
count++;

// Blog posts (from frontmatter)
const blogDir = join(root, "src", "content", "blog");
if (existsSync(blogDir)) {
  for (const file of readdirSync(blogDir).filter((f) => f.endsWith(".md"))) {
    const { data } = parseFrontmatter(readFileSync(join(blogDir, file), "utf8"));
    const slug = data.slug || file.replace(/\.md$/, "");
    writeRoute(`/blog/${slug}`, buildHtml({
      path: `/blog/${slug}`,
      title: `${data.seoTitle || data.title || "Blog"} | Sky Lift Group`,
      description: data.description || data.excerpt || "",
      image: data.image,
    }));
    count++;
  }
}

console.log(`[prerender] Wrote ${count} static HTML pages with unique SEO tags.`);
