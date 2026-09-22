import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, globSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Optional verification tool, like scripts/smoke-test.mjs: Playwright is not a
// dependency so it never installs on a deploy. Serves dist/ the way Vercel does
// and writes a full-page PNG per route at desktop and mobile widths.
//   node scripts/screenshot.mjs <out-dir> <route> [route...]
const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const mime = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css", ".webp":"image/webp",
  ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".svg":"image/svg+xml",
  ".ico":"image/x-icon", ".gif":"image/gif", ".xml":"application/xml", ".txt":"text/plain",
  ".avif":"image/avif", ".woff2":"font/woff2" };

const server = createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const candidates = [join(dist, url), join(dist, url, "index.html"), join(dist, url + ".html")];
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) {
      res.writeHead(200, { "Content-Type": mime[extname(c)] || "application/octet-stream" });
      return res.end(readFileSync(c));
    }
  }
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(readFileSync(join(dist, "404.html")));
});
await new Promise((r) => server.listen(4179, r));

const [outDir, ...routes] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const preinstalled = globSync("/opt/pw-browsers/chromium-*/chrome-linux/chrome")[0];
const browser = await chromium.launch(preinstalled ? { executablePath: preinstalled } : {});

for (const vp of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  for (const route of routes) {
    const page = await ctx.newPage();
    await page.route("**://widgets.leadconnectorhq.com/**", (r) => r.abort());
    await page.route("**://link.msgsndr.com/**", (r) => r.abort());
    await page.goto(`http://localhost:4179${route}`, { waitUntil: "networkidle", timeout: 40000 });
    // Scroll the whole page so every scroll-reveal section has animated in,
    // then return to the top. IntersectionObserver callbacks are async, so the
    // steps are deliberately small and unhurried — a faster pass leaves whole
    // sections still at opacity 0 in the capture.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.5;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 250));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 900));
    });
    const stragglers = await page.evaluate(
      () => document.querySelectorAll(".reveal:not(.is-visible)").length
    );
    if (stragglers > 0) {
      console.warn(`  ! ${route} (${vp.name}): ${stragglers} reveal blocks never became visible`);
    }
    const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
    const file = join(outDir, `${slug}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`  ${file}`);
    await page.close();
  }
  await ctx.close();
}
await browser.close();
server.close();
