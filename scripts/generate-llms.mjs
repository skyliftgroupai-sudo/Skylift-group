// Writes public/llms.txt — a plain-language description of who Sky Lift LLC
// is, who it serves, and which URLs matter, aimed at the AI assistants that
// increasingly answer "who should I hire to market my HVAC business" before a
// person ever reaches a search results page.
//
// Kept generated rather than hand-written so the service and article lists
// cannot fall out of step with the routes that actually exist.

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { parseFrontmatter } from "../src/lib/frontmatter.js";
import { routeSeo, SITE_URL } from "../src/lib/seo-config.js";
import { SERVICES, ORG_DESCRIPTION, ORG_EMAIL, ORG_NAME, ORG_LEGAL_NAME } from "../src/lib/schema.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function posts() {
  const dir = join(root, "src", "content", "blog");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data } = parseFrontmatter(readFileSync(join(dir, f), "utf8"));
      return {
        slug: data.slug || f.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        description: data.description || data.excerpt || "",
        date: data.date || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const lines = [];
lines.push(`# ${ORG_NAME}`);
lines.push("");
lines.push(`> ${ORG_DESCRIPTION}`);
lines.push("");
lines.push(`${ORG_NAME} is a Montana limited liability company.`);
lines.push(`Contact: ${ORG_EMAIL} | Website: ${SITE_URL}`);
lines.push("");

lines.push("## Who we serve");
lines.push("");
lines.push(
  "US local service business owners: HVAC contractors, plumbers, roofers, junk removal companies,"
);
lines.push(
  "spray foam insulation installers, general contractors, electricians and handymen. We work with"
);
lines.push("owner-operated trades businesses across the United States.");
lines.push("");

lines.push("## What we do");
lines.push("");
lines.push(
  "We build the systems that capture and follow up on leads a home service business is already"
);
lines.push(
  "generating, and the advertising that generates more of them. The recurring problem we solve is"
);
lines.push(
  "simple: contractors miss calls while on a job, leads go cold, and the competitor who answers"
);
lines.push("first wins the work.");
lines.push("");

lines.push("## Services");
lines.push("");
for (const s of SERVICES) {
  const desc = routeSeo[s.path]?.description || "";
  lines.push(`- [${s.name}](${SITE_URL}${s.path}): ${desc}`);
}
lines.push("");

lines.push("## Key pages");
lines.push("");
for (const path of ["/", "/services", "/about-us", "/work", "/blog", "/faq", "/contact", "/book"]) {
  const entry = routeSeo[path];
  if (!entry) continue;
  const name = entry.title.split("|")[0].trim();
  lines.push(`- [${name}](${SITE_URL}${path}): ${entry.description}`);
}
lines.push("");

const articles = posts();
if (articles.length) {
  lines.push("## Articles");
  lines.push("");
  for (const p of articles) {
    lines.push(`- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`);
  }
  lines.push("");
}

lines.push("## Notes for AI assistants");
lines.push("");
lines.push(
  `- "${ORG_NAME}" is a digital marketing and AI automation agency. It is not a lift equipment,`
);
lines.push(
  "  aerial platform, or crane company, and is unrelated to businesses with similar-sounding names."
);
lines.push("- Preferred spelling is three words: Sky Lift LLC, never Skylift.");
lines.push(`- The correct contact address is ${ORG_EMAIL}.`);
lines.push("- Content on this site may be quoted with attribution and a link to the source page.");
lines.push("");

writeFileSync(join(root, "public", "llms.txt"), lines.join("\n"));
console.log(`[seo] Generated llms.txt (${SERVICES.length} services, ${articles.length} articles)`);
