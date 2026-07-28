import { parseFrontmatter, extractFaqs, readingTime } from "./frontmatter";

export const SITE_URL = "https://www.skyliftgroup.com";

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
      author: data.author || "Sky Lift Group",
      image: data.image || "/og-image.png",
      imageAlt: data.imageAlt || data.title || "Sky Lift Group",
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
  return allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aShared = a.category === current.category ? 1 : 0;
      const bShared = b.category === current.category ? 1 : 0;
      return bShared - aShared;
    })
    .slice(0, limit);
}

export function getAllCategories() {
  return [...new Set(allPosts.map((p) => p.category))].sort();
}
