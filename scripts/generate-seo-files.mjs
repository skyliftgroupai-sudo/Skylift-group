// Regenerates public/sitemap.xml and public/rss.xml from the static routes
// and every markdown post in src/content/blog. Runs automatically before
// `vite build` (see package.json), so search engines always see fresh posts.

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { parseFrontmatter } from "../src/lib/frontmatter.js";
import { blogIndexRoutes } from "../src/lib/blog-taxonomy.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE = "https://www.skyliftgroup.com";

// Static routes mirror src/App.jsx.
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-us", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/work", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "daily" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/book", priority: "0.7", changefreq: "monthly" },
  { path: "/services/web-design", priority: "0.8", changefreq: "monthly" },
  { path: "/services/seo", priority: "0.8", changefreq: "monthly" },
  { path: "/services/local-maps", priority: "0.8", changefreq: "monthly" },
  { path: "/services/social-media", priority: "0.8", changefreq: "monthly" },
  { path: "/services/ppc-management", priority: "0.8", changefreq: "monthly" },
  { path: "/services/content-writing", priority: "0.8", changefreq: "monthly" },
  { path: "/services/meta-ads", priority: "0.8", changefreq: "monthly" },
  { path: "/services/one-click-campaigns", priority: "0.8", changefreq: "monthly" },
  { path: "/services/tiktok-ads", priority: "0.8", changefreq: "monthly" },
  { path: "/services/google-ads", priority: "0.8", changefreq: "monthly" },
  { path: "/services/reviews", priority: "0.8", changefreq: "monthly" },
  { path: "/services/ai-workflows", priority: "0.8", changefreq: "monthly" },
  { path: "/services/ai-voice-agents", priority: "0.8", changefreq: "monthly" },
  { path: "/services/ai-chatbots", priority: "0.8", changefreq: "monthly" },
  { path: "/services/sms-marketing", priority: "0.9", changefreq: "monthly" },
  { path: "/services/database-reactivation", priority: "0.9", changefreq: "monthly" },
  { path: "/services/missed-call-text-back", priority: "0.8", changefreq: "monthly" },
  { path: "/services/lead-follow-up", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-conditions", priority: "0.3", changefreq: "yearly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
];

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function loadPosts() {
  const dir = join(root, "src", "content", "blog");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = readFileSync(join(dir, file), "utf8");
      const { data } = parseFrontmatter(raw);
      return {
        slug: data.slug || file.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        description: data.description || data.excerpt || "",
        category: data.category || "Digital Marketing",
        date: data.date || "1970-01-01",
        lastmod: lastModified([`src/content/blog/${file}`]) || data.date,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Stamping every URL with today's date tells search engines the whole site
// changed daily, which is both false and a reason to trust lastmod less. Use
// the last commit that actually touched the page's source instead.
const today = new Date().toISOString().slice(0, 10);
function lastModified(files) {
  for (const file of files) {
    try {
      const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
        cwd: root,
        encoding: "utf8",
      }).trim();
      if (out) return out;
    } catch {
      // Not a git checkout, or the file is untracked — fall through.
    }
  }
  return today;
}

// Which source files a route's content actually comes from. Deliberately NOT
// the header, footer or layout: a nav tweak is not a reason to tell search
// engines that all 31 pages changed, and a lastmod that moves for everything
// at once is a lastmod nobody can use.
const ROUTE_SOURCES = {
  "/": ["src/pages/Home.jsx"],
  "/about-us": ["src/pages/Aboutus.jsx"],
  "/services": ["src/pages/Services.jsx"],
  "/work": ["src/pages/Work.jsx"],
  "/blog": ["src/pages/Blog.jsx"],
  "/contact": ["src/pages/Contact.jsx"],
  "/book": ["src/pages/Schedule.jsx"],
  "/services/web-design": ["src/pages/Designdevelopment.jsx"],
  "/services/seo": ["src/pages/Seo.jsx"],
  "/services/local-maps": ["src/pages/LocalMaps.jsx"],
  "/services/social-media": ["src/pages/SocialMedia.jsx"],
  "/services/ppc-management": ["src/pages/Ppc.jsx"],
  "/services/content-writing": ["src/pages/Writing.jsx"],
  "/services/meta-ads": ["src/pages/MetaAds.jsx"],
  "/services/one-click-campaigns": ["src/pages/Oneclickmarketing.jsx"],
  "/services/tiktok-ads": ["src/pages/TikTok-ads.jsx"],
  "/services/google-ads": ["src/pages/GoogleAds.jsx"],
  "/services/reviews": ["src/pages/FivestarReviews.jsx"],
  "/services/ai-workflows": ["src/pages/Aiworkflowautomation.jsx"],
  "/services/ai-voice-agents": ["src/pages/Aivoiceagents.jsx"],
  "/services/ai-chatbots": ["src/pages/Aichatbot.jsx"],
  "/services/sms-marketing": ["src/content/services/sms-marketing.js", "src/pages/ServicePage.jsx"],
  "/services/database-reactivation": ["src/content/services/database-reactivation.js", "src/pages/ServicePage.jsx"],
  "/services/missed-call-text-back": ["src/pages/MissedCall.jsx"],
  "/services/lead-follow-up": ["src/pages/Automatedleadfollowup.jsx"],
  "/privacy-policy": ["src/pages/PrivacyPolicy.jsx"],
  "/terms-conditions": ["src/pages/TermsCondition.jsx"],
  "/faq": ["src/pages/Faqs.jsx", "src/lib/service-faqs.js"],
};

function buildSitemap(posts) {
  const urls = [];

  for (const r of staticRoutes) {
    const sources = ROUTE_SOURCES[r.path] || [];
    const lastmod = lastModified(sources);
    urls.push(
      `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    );
  }

  // Category and pagination pages. Listing them keeps them discoverable even
  // before Google walks the pagination links.
  for (const route of blogIndexRoutes(posts)) {
    if (route.path === "/blog") continue; // already in staticRoutes
    urls.push(
      `  <url>\n    <loc>${SITE}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>`
    );
  }

  for (const p of posts) {
    urls.push(
      `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

function buildRss(posts) {
  const items = posts
    .map((p) => {
      const link = `${SITE}/blog/${p.slug}`;
      return `    <item>\n      <title>${escapeXml(p.title)}</title>\n      <link>${link}</link>\n      <guid isPermaLink="true">${link}</guid>\n      <category>${escapeXml(p.category)}</category>\n      <pubDate>${new Date(p.date).toUTCString()}</pubDate>\n      <description>${escapeXml(p.description)}</description>\n    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>Sky Lift Group Blog</title>\n    <link>${SITE}/blog</link>\n    <description>AI marketing, local SEO, and lead generation guides for local and home service businesses.</description>\n    <language>en-us</language>\n    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
}

const posts = loadPosts();
writeFileSync(join(root, "public", "sitemap.xml"), buildSitemap(posts));
writeFileSync(join(root, "public", "rss.xml"), buildRss(posts));
console.log(
  `[seo] Generated sitemap.xml (${staticRoutes.length} static + ${posts.length} posts) and rss.xml`
);
