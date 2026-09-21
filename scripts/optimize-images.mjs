// Converts every referenced raster image in public/assets to WebP and rewrites
// the references in src/ to point at the new files.
//
// The originals are 26 MB of unoptimized PNG/JPG — several single images were
// over 2 MB, which is more than the whole JS bundle. Run with --apply to write.
//
//   node scripts/optimize-images.mjs          # dry run, prints the plan
//   node scripts/optimize-images.mjs --apply  # convert + rewrite references

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetsDir = join(root, "public", "assets");
const APPLY = process.argv.includes("--apply");

// Nothing on the site is displayed wider than a full-bleed hero, so anything
// beyond this is pixels the browser downloads and throws away.
const MAX_WIDTH = 1920;
const QUALITY = 82;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// Collect every /assets/... reference the app actually uses.
const sourceFiles = walk(join(root, "src")).filter((f) =>
  /\.(jsx?|tsx?|css|md)$/.test(f)
);
sourceFiles.push(join(root, "index.html"));

const referenced = new Set();
for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/\/assets\/([\w.-]+\.(?:png|jpe?g))/gi)) {
    referenced.add(m[1]);
  }
}

const plan = [];
for (const name of [...referenced].sort()) {
  const src = join(assetsDir, name);
  if (!existsSync(src)) {
    console.warn(`MISSING  /assets/${name} is referenced but not in public/assets`);
    continue;
  }
  plan.push({ name, src, out: basename(name, extname(name)) + ".webp" });
}

let before = 0;
let after = 0;

for (const item of plan) {
  const srcBytes = statSync(item.src).size;
  before += srcBytes;

  const pipeline = sharp(item.src).rotate();
  const meta = await pipeline.metadata();
  const resized =
    meta.width > MAX_WIDTH ? pipeline.resize({ width: MAX_WIDTH }) : pipeline;
  const buf = await resized.webp({ quality: QUALITY, effort: 6 }).toBuffer();
  after += buf.length;

  const kbIn = Math.round(srcBytes / 1024);
  const kbOut = Math.round(buf.length / 1024);
  console.log(
    `${APPLY ? "WRITE" : "PLAN "}  ${item.name.padEnd(28)} ${String(kbIn).padStart(
      5
    )} KB -> ${String(kbOut).padStart(5)} KB  (${meta.width}x${meta.height})`
  );

  if (APPLY) writeFileSync(join(assetsDir, item.out), buf);
}

if (APPLY) {
  // Point every reference at the .webp twin. Originals stay on disk so any
  // reference this script did not find keeps working.
  let rewritten = 0;
  for (const file of sourceFiles) {
    const text = readFileSync(file, "utf8");
    const next = text.replace(
      /\/assets\/([\w.-]+)\.(png|jpe?g)/gi,
      (whole, stem) =>
        plan.some((p) => basename(p.name, extname(p.name)) === stem)
          ? `/assets/${stem}.webp`
          : whole
    );
    if (next !== text) {
      writeFileSync(file, next);
      rewritten++;
    }
  }
  console.log(`\nRewrote references in ${rewritten} files.`);
}

const pct = before ? Math.round((1 - after / before) * 100) : 0;
console.log(
  `\n${plan.length} images: ${Math.round(before / 1024)} KB -> ${Math.round(
    after / 1024
  )} KB  (${pct}% smaller)`
);
if (!APPLY) console.log("Dry run. Re-run with --apply to write the files.");
