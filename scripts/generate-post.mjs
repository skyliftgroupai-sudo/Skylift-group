// Generates one new SEO blog post via the Anthropic API and writes it to
// src/content/blog/. Designed to run in CI (GitHub Actions) with zero extra
// npm dependencies — uses Node's built-in global fetch.
//
// Required env: ANTHROPIC_API_KEY
// Optional env: ANTHROPIC_MODEL (default claude-opus-4-8)

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const blogDir = join(root, "src", "content", "blog");

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

if (!API_KEY) {
  console.error("ERROR: ANTHROPIC_API_KEY is not set.");
  process.exit(1);
}

// Real service pages the article should link to (verified against src/App.jsx).
const SERVICE_LINKS = `
- AI Website Design: /services/web-design
- Local SEO: /services/seo
- Google Business Profile / Local Maps: /services/local-maps
- Google Ads: /services/google-ads
- Meta Ads: /services/meta-ads
- AI Chatbots: /services/ai-chatbots
- AI Voice Agents: /services/ai-voice-agents
- AI Workflow Automation: /services/ai-workflows
- Review Management: /services/reviews
- Missed-Call Text-Back: /services/missed-call-text-back
- Automated Lead Follow-Up: /services/lead-follow-up
- Book a free strategy call (use for the final CTA): /book`.trim();

// Category -> existing public/assets image, so posts never reference a missing file.
const CATEGORY_IMAGE = {
  "Local SEO": "/assets/maps-bg.jpeg",
  "Google Business Profile": "/assets/google.jpg",
  "AI Marketing": "/assets/aiworkflow.png",
  "AI Automation": "/assets/aiworkflow.png",
  "AI Chatbots": "/assets/Chatbot.png",
  "Google Ads": "/assets/goole-ads.png",
  "Meta Ads": "/assets/meta-ads.jpg",
  "Landing Pages": "/assets/analytics.jpg",
  "CRM Automation": "/assets/missed-call.png",
  "Lead Generation": "/assets/lead.png",
  "Home Service Marketing": "/assets/marketing.png",
  "Digital Marketing Tips": "/assets/marketing-service.png",
  "Small Business Growth": "/assets/analytics.jpg",
};
const DEFAULT_IMAGE = "/assets/marketing.png";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function existingSlugs() {
  if (!existsSync(blogDir)) return new Set();
  return new Set(
    readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
  );
}

function existingTitles() {
  if (!existsSync(blogDir)) return [];
  return readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = readFileSync(join(blogDir, f), "utf8");
      const m = /title:\s*"?([^"\n]+)"?/.exec(raw);
      return m ? m[1].trim() : f;
    });
}

function pickTopic() {
  const topics = JSON.parse(
    readFileSync(join(__dirname, "topics.json"), "utf8")
  );
  const used = existingSlugs();
  const next = topics.find((t) => !used.has(t.slug));
  return next || null; // null => ask the model to invent a fresh topic
}

const today = new Date().toISOString().slice(0, 10);

function buildPrompt(topic, titlesToAvoid) {
  const topicLine = topic
    ? `Write about this topic:
- Working title: ${topic.title}
- Primary keyword: ${topic.primaryKeyword}
- Category: ${topic.category}
- Most relevant Sky Lift Group service page to feature: ${topic.serviceLink}`
    : `Pick a fresh, high-intent topic (not already covered) in one of these categories:
Local SEO, Google Business Profile, AI Marketing, AI Automation, Google Ads,
Meta Ads, Landing Pages, AI Chatbots, CRM Automation, Lead Generation,
Home Service Marketing, Digital Marketing Tips, Small Business Growth.`;

  return `You are the senior content strategist for Sky Lift Group (https://www.skyliftgroup.com), a digital marketing agency that helps local and home-service businesses (HVAC, roofing, plumbing, electricians, remodelers, tree services, junk removal, movers, auto detailers, medical practices, law firms) generate more leads through AI-powered marketing and automation.

${topicLine}

Do NOT duplicate any of these already-published titles:
${titlesToAvoid.map((t) => `- ${t}`).join("\n") || "- (none yet)"}

Write ONE original, publish-ready blog post. Requirements:
- 2,000-2,600 words, conversational but expert (E-E-A-T), no fluff, no AI clichés, no keyword stuffing.
- Open with a bold one-sentence direct answer (for featured snippets / AI Overviews) before expanding.
- Use H2 (##), H3 (###), and H4 (####) headings, bullet lists, and at least one Markdown table.
- Include a "## Frequently Asked Questions" section with 5-6 "### Question" headings, each answered in 2-4 sentences directly under it.
- Naturally link to 3-5 of these Sky Lift Group service pages using Markdown links with descriptive anchor text:
${SERVICE_LINKS}
- End with an H2 "## Ready to Generate More Leads for Your Business?" section, one short paragraph, and this exact CTA link on its own line: [Contact us today for a free strategy consultation.](/book)
- Do not invent specific statistics, percentages, or study numbers. Speak in directional terms instead.

Output format — output ONLY the article, starting on the very first line with a YAML frontmatter block delimited by --- lines, then the Markdown body. No preamble, no explanation, no code fences. Use exactly these frontmatter keys:

---
title: "The full post title"
seoTitle: "SEO title tag, under 60 characters"
slug: "url-slug-in-kebab-case"
description: "Meta description, 150-160 characters"
excerpt: "One punchy sentence used on blog cards"
category: "One of the categories above"
tags: ["Tag One", "Tag Two", "Tag Three"]
date: "${today}"
author: "Sky Lift Group"
imageAlt: "Descriptive alt text for the featured image"
---

(then the article body in Markdown, starting with the bold direct-answer sentence)`;
}

function parseFrontmatterField(raw, key) {
  const re = new RegExp(`^${key}:\\s*(.*)$`, "m");
  const m = re.exec(raw);
  if (!m) return null;
  let v = m[1].trim();
  if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
  return v;
}

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Anthropic API ${res.status}: ${text}`);
  }

  const data = await res.json();
  if (data.stop_reason === "refusal") {
    throw new Error("Model refused the request.");
  }
  return (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
}

async function main() {
  const topic = pickTopic();
  const titlesToAvoid = existingTitles();
  console.log(
    topic ? `[gen] Topic: ${topic.title}` : "[gen] No preset topic left — model will choose."
  );

  let text = await callClaude(buildPrompt(topic, titlesToAvoid));

  // Keep everything from the first frontmatter fence onward.
  const idx = text.indexOf("---");
  if (idx === -1) throw new Error("Model output had no frontmatter block.");
  text = text.slice(idx).trim();

  // Determine slug and guarantee uniqueness.
  const category =
    parseFrontmatterField(text, "category") || (topic && topic.category) || "Digital Marketing Tips";
  let slug =
    parseFrontmatterField(text, "slug") ||
    (topic && topic.slug) ||
    slugify(parseFrontmatterField(text, "title") || `post-${today}`);
  slug = slugify(slug);

  const used = existingSlugs();
  if (used.has(slug)) {
    let n = 2;
    while (used.has(`${slug}-${n}`)) n++;
    slug = `${slug}-${n}`;
    // rewrite the slug line so it matches the filename
    text = text.replace(/^slug:.*$/m, `slug: "${slug}"`);
  }

  // Force today's date and inject a guaranteed-valid image path.
  const image = CATEGORY_IMAGE[category] || DEFAULT_IMAGE;
  text = text.replace(/^date:.*$/m, `date: "${today}"`);
  if (/^image:/m.test(text)) {
    text = text.replace(/^image:.*$/m, `image: "${image}"`);
  } else {
    // insert image line right after imageAlt (or before the closing fence)
    text = text.replace(/^imageAlt:(.*)$/m, `image: "${image}"\nimageAlt:$1`);
  }

  const outPath = join(blogDir, `${slug}.md`);
  writeFileSync(outPath, text.endsWith("\n") ? text : text + "\n");
  console.log(`[gen] Wrote ${outPath}`);
  console.log(`::notice::Published new post: ${slug}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
