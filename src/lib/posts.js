import { parseFrontmatter, extractFaqs, readingTime } from "./frontmatter";

export const SITE_URL = "https://www.skyliftllc.com";

// Eagerly load every markdown file in /content/blog as a raw string.
// New posts (added by the daily automation) are picked up automatically.
const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function build() {
  const posts = Object.entries(modules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const fallbackSlug = path.split("/").pop().replace(/\.md$/, "");
    return {
      slug: data.slug || fallbackSlug,
      title: data.title || "Untitled",
      seoTitle: data.seoTitle || data.title || "Untitled",
      description: data.description || "",
      excerpt: data.excerpt || data.description || "",
      category: data.category || "Digital Marketing",
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: data.date || "1970-01-01",
      // Only set when a post has genuinely been revised, so Article schema does
      // not claim a freshness that did not happen.
      dateModified: data.dateModified || data.date || "1970-01-01",
      author: data.author || "Sky Lift LLC",
      image: data.image || "/og-image.png",
      imageAlt: data.imageAlt || data.title || "Sky Lift LLC",
      content,
      faqs: extractFaqs(content),
      readingTime: readingTime(content),
    };
  });

  // Newest first.
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

const allPosts = build();

export function getAllPosts() {
  return allPosts;
}

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return allPosts.slice(0, limit);

  // Score by topical overlap rather than category alone. Matching only on
  // category meant the tie-break fell through to publication date, so older
  // posts were almost never surfaced — which left them with one inbound link
  // and starved of exactly the crawl signal internal linking is meant to give.
  const tagsOf = (p) => new Set((p.tags || []).map((t) => t.toLowerCase()));
  const currentTags = tagsOf(current);

  return allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = p.category === current.category ? 3 : 0;
      for (const t of tagsOf(p)) if (currentTags.has(t)) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.post);
}


export function getAllCategories() {
  return [...new Set(allPosts.map((p) => p.category))].sort();
}
