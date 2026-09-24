import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync, globSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const mime = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css", ".webp":"image/webp",
  ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".svg":"image/svg+xml",
  ".ico":"image/x-icon", ".gif":"image/gif", ".xml":"application/xml", ".txt":"text/plain", ".avif":"image/avif" };

// Optional verification tool — not part of `npm run build`, and Playwright is
// deliberately not a dependency so it never has to install on a deploy:
//   npm i -D playwright   (a preinstalled Chromium is picked up automatically)
//
// Loads every route the way a phone and a desktop would, checks the page
// hydrates without errors, has exactly one h1, does not scroll sideways, and
// that every JSON-LD block on the page parses. Run after `npm run build`.
//
// Mimics Vercel: cleanUrls + trailingSlash:false + 404.html fallback.
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
await new Promise((r) => server.listen(4178, r));

const routes = process.argv.slice(2);
// Use a pre-installed Chromium when one is present (CI images ship one and
// `npx playwright install` is not always available); otherwise fall back to
// whatever Playwright resolves on its own.
const preinstalled = globSync("/opt/pw-browsers/chromium-*/chrome-linux/chrome")[0];
const browser = await chromium.launch(preinstalled ? { executablePath: preinstalled } : {});
const results = [];

for (const viewport of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
  const ctx = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  for (const route of routes) {
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 160)); });
    page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message.slice(0, 160)));
    // Third-party chat/booking/analytics scripts are not part of what we are
    // verifying, and in a sandboxed CI environment they cannot be reached at all
    // -- an unreachable script logs a console error that would fail every page.
    await page.route("**://widgets.leadconnectorhq.com/**", (r) => r.abort());
    await page.route("**://link.msgsndr.com/**", (r) => r.abort());
    await page.route("**://www.googletagmanager.com/**", (r) => r.abort());
    await page.goto(`http://localhost:4178${route}`, { waitUntil: "networkidle", timeout: 30000 });
    const overflow = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    const h1 = await page.evaluate(() => document.querySelectorAll("h1").length);
    const title = await page.title();
    const canonical = await page.evaluate(() => document.querySelector("link[rel=canonical]")?.href || "");
    const ld = await page.evaluate(() =>
      [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
        try { JSON.parse(s.textContent); return "ok"; } catch (e) { return "BAD:" + e.message; }
      })
    );
    const hydrationErrors = errors.filter((e) => /hydrat|did not match|Minified React error #(418|423|425)/i.test(e));
    results.push({ viewport: viewport.name, route, overflow, h1, title, canonical, ld: ld.join(","), errors, hydrationErrors });
    await page.close();
  }
  await ctx.close();
}
await browser.close();
server.close();

let bad = 0;
for (const r of results) {
  const flags = [];
  if (r.overflow > 0) flags.push(`H-SCROLL +${r.overflow}px`);
  if (r.h1 !== 1) flags.push(`${r.h1} h1`);
  if (r.hydrationErrors.length) flags.push("HYDRATION: " + r.hydrationErrors[0]);
  if (r.ld.includes("BAD")) flags.push("BAD JSON-LD");
  const other = r.errors
    .filter((e) => !r.hydrationErrors.includes(e))
    // Noise from the third-party widgets we deliberately blocked, and from the
    // 404 route, which is supposed to 404.
    .filter((e) => !/ERR_FAILED|status of 404/.test(e));
  if (other.length) flags.push("console: " + other[0]);
  if (flags.length) bad++;
  console.log(`${flags.length ? "FAIL" : " ok "} [${r.viewport.padEnd(7)}] ${r.route.padEnd(50)} ld=[${r.ld}] ${flags.join(" | ")}`);
}
console.log(`\n${results.length - bad}/${results.length} page loads clean`);
