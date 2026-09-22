// Minimal, dependency-free frontmatter parser.
// Works in both the browser (Vite) and Node (build scripts) with no polyfills.
// We control the file format, so the grammar is intentionally simple:
//   - `key: "string value"`  -> string (surrounding quotes stripped)
//   - `key: ["a", "b"]`      -> array (parsed as JSON)
//   - `key: 123`             -> kept as string unless it is valid JSON

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/\r\n/g, "\n");
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);

  if (!match) {
    return { data: {}, content: text.trim() };
  }

  const [, block, body] = match;
  const data = {};

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.startsWith("[") || value.startsWith("{")) {
      try {
        value = JSON.parse(value);
      } catch {
        // leave as raw string if it is not valid JSON
      }
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return { data, content: body.trim() };
}

// FAQ text goes into FAQPage schema, which Google requires to match the text a
// visitor can actually see. The page renders markdown, so "[SMS marketing](/x)"
// displays as "SMS marketing" — putting the raw markdown in the schema would
// describe text that is not on the page.
function stripMarkdown(text) {
  return String(text)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> label
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/(^|\W)_([^_]+)_(\W|$)/g, "$1$2$3") // underscore italics
    .replace(/`([^`]+)`/g, "$1") // inline code
    .trim();
}

// Pull the FAQ pairs out of the article body so we can emit FAQPage schema.
// Convention: an "## ... FAQ ..." (or "Frequently Asked Questions") H2,
// followed by "### question" headings, each answered by the text beneath it.
export function extractFaqs(content) {
  const lines = String(content).replace(/\r\n/g, "\n").split("\n");
  const faqs = [];

  let inFaq = false;
  let current = null;

  for (const line of lines) {
    const h2 = /^##\s+(.*)$/.exec(line);
    const h3 = /^###\s+(.*)$/.exec(line);

    if (h2) {
      inFaq = /faq|frequently asked/i.test(h2[1]);
      if (current) {
        faqs.push(current);
        current = null;
      }
      continue;
    }

    if (!inFaq) continue;

    // A horizontal rule ends the FAQ block. Without this, everything after the
    // last question — a rule, a closing CTA — was appended to that question's
    // answer and emitted as FAQ schema, describing text no visitor sees as part
    // of the answer.
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line.trim())) {
      inFaq = false;
      if (current) {
        faqs.push(current);
        current = null;
      }
      continue;
    }

    if (h3) {
      if (current) faqs.push(current);
      current = { q: stripMarkdown(h3[1]), a: "" };
    } else if (current && line.trim()) {
      current.a += (current.a ? " " : "") + stripMarkdown(line);
    }
  }

  if (current) faqs.push(current);

  return faqs.filter((f) => f.q && f.a);
}

// Rough reading-time estimate for post cards.
export function readingTime(content) {
  const words = String(content).trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
