// Post-build static render.
//
// Two things happen here, and the second one is the whole point:
//
//   1. Every route gets a UNIQUE <title>, meta description, canonical and Open
//      Graph block baked into the raw HTML.
//   2. Every route's ACTUAL PAGE CONTENT is rendered to HTML and written into
//      <div id="root">.
//
// Step 2 exists because a Vite SPA ships `<div id="root"></div>` and nothing
// else. Google will eventually render the JavaScript, but rendering is queued
// and deferred, which is a large part of why pages sat "crawled, not indexed".
// The AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot and friends)
// mostly do not run JavaScript at all, so to them every page on the site was
// blank. Rendering at build time removes both problems at once.
//
// The React app still hydrates on top of each file, so behavior for real users
// is unchanged.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createElement } from "react";
import { prerender } from "react-dom/static";
import { staticRoutes } from "./seo-routes.js";
import { parseFrontmatter } from "../src/lib/frontmatter.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const distSsr = join(root, "dist-ssr");
const SITE = "https://www.skyliftgroup.com";
const DEFAULT_OG = `${SITE}/og-image.png`;

if (!existsSync(join(dist, "index.html"))) {
  console.error("[prerender] dist/index.html not found — run vite build first.");
  process.exit(1);
}
if (!existsSync(join(distSsr, "entry-server.js"))) {
  console.error("[prerender] dist-ssr/entry-server.js not found — run the --ssr build first.");
  process.exit(1);
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const { ServerApp } = await import(join(distSsr, "entry-server.js"));

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

// Render one route's React tree to HTML. `prerender` (React 19's static API) is
// used rather than renderToString because the route components are lazy() — it
// waits for every Suspense boundary to resolve instead of emitting fallbacks.
async function renderRoute(url) {
  const { prelude } = await prerender(createElement(ServerApp, { url }));
  const chunks = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}

function jsonLdScript(blocks) {
  const list = blocks.filter(Boolean);
  if (!list.length) return "";
  // Escaped so a "</script>" inside any string value cannot break out of the tag.
  return list
    .map(
      (b) =>
        `<script type="application/ld+json">${JSON.stringify(b).replace(
          /</g,
          "\\u003c"
        )}</script>`
    )
    .join("\n  ");
}

function buildHtml({ path, title, description, image, noindex = false, body = "", jsonLd = [] }) {
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
  html = setTag(
    html,
    /<meta\s+name=["']twitter:title["'][\s\S]*?>/i,
    `<meta name="twitter:title" content="${esc(title)}" />`
  );
  html = setTag(
    html,
    /<meta\s+name=["']twitter:description["'][\s\S]*?>/i,
    `<meta name="twitter:description" content="${esc(description)}" />`
  );
  html = setTag(
    html,
    /<meta\s+name=["']twitter:image["'][\s\S]*?>/i,
    `<meta name="twitter:image" content="${esc(og)}" />`
  );

  const extraLd = jsonLdScript(jsonLd);
  if (extraLd) html = html.replace("</head>", `  ${extraLd}\n</head>`);

  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function writeRoute(path, html) {
  // "/" -> dist/index.html ; "/x/y" -> dist/x/y/index.html
  const target =
    path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

// Guard: vercel.json no longer rewrites unknown paths to the SPA shell, so a route
// that exists in the route table but has no prerendered file would 404 in
// production. Fail the build loudly instead of shipping a dead page.
const routeSource = readFileSync(join(root, "src", "routes.jsx"), "utf8");
const appRoutes = [...routeSource.matchAll(/path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== "*" && !p.includes(":")); // "*" and /blog/:slug are handled separately
const uncovered = appRoutes.filter((p) => !(p in staticRoutes));
if (uncovered.length) {
  console.error(
    `[prerender] These routes have no entry in src/lib/seo-config.js and would 404:\n  ${uncovered.join(
      "\n  "
    )}`
  );
  process.exit(1);
}

let count = 0;
let emptyBodies = [];

async function emit(path, meta) {
  const body = await renderRoute(path);
  // A route that renders to almost nothing means the static render silently
  // failed. Better to know at build time than to ship another blank page.
  if (body.replace(/<[^>]+>/g, "").trim().length < 200 && !meta.noindex) {
    emptyBodies.push(path);
  }
  writeRoute(path, buildHtml({ path, ...meta, body }));
  count++;
}

// Static routes
for (const [path, meta] of Object.entries(staticRoutes)) {
  await emit(path, meta);
}

// 404 page. Vercel serves dist/404.html with a real HTTP 404 for anything that
// does not match a file, which is what stops Google logging bad URLs as soft 404s
// or as duplicates of the homepage.
const notFoundBody = await renderRoute("/__not-found__");
writeFileSync(
  join(dist, "404.html"),
  buildHtml({
    path: "/404",
    title: "Page Not Found | Sky Lift Group",
    description: "The page you are looking for does not exist or has been moved.",
    noindex: true,
    body: notFoundBody,
  })
);
count++;

// Blog posts (from frontmatter)
const blogDir = join(root, "src", "content", "blog");
if (existsSync(blogDir)) {
  for (const file of readdirSync(blogDir).filter((f) => f.endsWith(".md"))) {
    const { data } = parseFrontmatter(readFileSync(join(blogDir, file), "utf8"));
    const slug = data.slug || file.replace(/\.md$/, "");
    await emit(`/blog/${slug}`, {
      title: `${data.seoTitle || data.title || "Blog"} | Sky Lift Group`,
      description: data.description || data.excerpt || "",
      image: data.image,
    });
  }
}

if (emptyBodies.length) {
  console.error(
    `[prerender] These routes rendered with no meaningful content:\n  ${emptyBodies.join("\n  ")}`
  );
  process.exit(1);
}

console.log(`[prerender] Wrote ${count} fully rendered static HTML pages.`);
