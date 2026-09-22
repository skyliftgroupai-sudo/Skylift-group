// Builds a table of contents from a post's raw markdown.
//
// Parsing the source string rather than the rendered DOM matters: this runs
// during the static build, so the finished list of links is in the HTML a
// crawler fetches. A DOM-walking version would produce nothing at build time
// and the contents box would only exist for readers running JavaScript.

/** Lowercase, punctuation-stripped, hyphenated — the usual anchor shape. */
export function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Every `## ` heading in the markdown, in document order, with a unique id.
 * Fenced code blocks are skipped so a `## ` inside one is not mistaken for a
 * heading. Only h2s: an article's h3s are detail, and listing them turns a
 * useful jump list into a second copy of the article.
 */
export function tocFromMarkdown(markdown) {
  if (!markdown) return [];
  const out = [];
  const seen = new Map();
  let inFence = false;

  for (const line of String(markdown).split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = line.match(/^##\s+(.+?)\s*#*\s*$/);
    if (!m) continue;

    // Strip inline markdown so the link text reads as plain prose.
    const text = m[1]
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[`*_]/g, "")
      .trim();
    if (!text) continue;

    const base = slugifyHeading(text);
    const n = (seen.get(base) || 0) + 1;
    seen.set(base, n);
    out.push({ text, id: n === 1 ? base : `${base}-${n}` });
  }

  return out;
}
