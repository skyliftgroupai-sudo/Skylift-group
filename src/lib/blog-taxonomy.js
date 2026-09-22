// Category slugs and pagination maths for the blog index.
//
// Plain ESM with no Vite-only syntax, because both the React pages and the Node
// build scripts import it — the prerenderer has to know every category and page
// URL in order to emit a crawlable static file for each one.

export const POSTS_PER_PAGE = 9;

// A category listing with one post says nothing the post itself does not, and
// shipping it produces exactly the kind of thin page that ends up "crawled,
// currently not indexed". Categories become real pages once they have enough
// posts to be a useful index.
export const MIN_POSTS_PER_CATEGORY = 2;

// Written rather than generated. A templated sentence with the category name
// slotted in is filler, and filler on an index page is what makes it thin.
const CATEGORY_INTROS = {
  "crm-automation":
    "Guides on the systems that catch a lead and follow it up — missed-call text back, automated sequences, shared inboxes, and the CRM plumbing that keeps a busy contractor from losing work between the phone and the calendar.",
  "google-business-profile":
    "Everything that decides whether your business shows up in the Google Map Pack: categories, service areas, review flow, photos, and the guideline violations that get listings suspended.",
  "local-seo":
    "How home service businesses get found by people searching in their service area — what actually moves rankings for a contractor working one territory, and what is generic advice that will not.",
  "digital-marketing-tips":
    "Practical marketing for trades businesses, including what to look for in an agency, where budgets get wasted, and which channels are worth the effort for a company that installs and repairs things for a living.",
  "sms-marketing":
    "Text message marketing for contractors — compliance, A2P 10DLC registration, what to send, how often, and where texting outperforms every other channel for a home service business.",
  "google-ads":
    "Paid search for home service businesses: where the money leaks, which keywords are worth bidding on, and how to tell whether an account is producing booked jobs or just clicks.",
  "ai-automation":
    "AI that does something useful for a contracting business — answering calls, qualifying website visitors, booking appointments — and an honest account of where it is the wrong tool.",
};

export function categoryIntro(slug) {
  return CATEGORY_INTROS[slug] || null;
}

export function categorySlug(name) {
  return String(name)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Unique categories with their post counts, most posts first. */
export function categoriesFrom(posts) {
  const map = new Map();
  for (const p of posts) {
    const name = p.category || "Digital Marketing";
    const slug = categorySlug(name);
    if (!map.has(slug)) map.set(slug, { name, slug, count: 0 });
    map.get(slug).count += 1;
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function postsInCategory(posts, slug) {
  return posts.filter((p) => categorySlug(p.category || "Digital Marketing") === slug);
}

export function pageCount(total) {
  return Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
}

export function postsOnPage(posts, page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

/**
 * Every blog index URL the site should serve: the root, each extra page, each
 * category, and each category's extra pages. Pagination links have to be real
 * URLs rather than a "load more" button — a button is invisible to a crawler,
 * which would leave older posts reachable only from the sitemap.
 */
export function blogIndexRoutes(posts) {
  const routes = [{ path: "/blog", kind: "index", page: 1 }];

  const total = pageCount(posts.length);
  for (let p = 2; p <= total; p++) {
    routes.push({ path: `/blog/page/${p}`, kind: "index", page: p });
  }

  for (const cat of categoriesFrom(posts)) {
    if (cat.count < MIN_POSTS_PER_CATEGORY) continue;
    const inCat = postsInCategory(posts, cat.slug);
    routes.push({ path: `/blog/category/${cat.slug}`, kind: "category", page: 1, category: cat });
    const catPages = pageCount(inCat.length);
    for (let p = 2; p <= catPages; p++) {
      routes.push({
        path: `/blog/category/${cat.slug}/page/${p}`,
        kind: "category",
        page: p,
        category: cat,
      });
    }
  }
  return routes;
}

/** Title and description for a blog index route, used by the prerenderer and the page. */
export function blogIndexSeo(route) {
  const suffix = route.page > 1 ? ` — Page ${route.page}` : "";
  if (route.kind === "category") {
    return {
      title: `${route.category.name} Articles${suffix} | Sky Lift Group`,
      description: `${route.category.name} guides for home service business owners — practical articles on winning and keeping more local customers.`,
    };
  }
  return {
    title: route.page > 1
      ? `AI Marketing & Local SEO Blog — Page ${route.page} | Sky Lift Group`
      : "AI Marketing & Local SEO Blog | Sky Lift Group",
    description:
      "Practical guides on SMS marketing, local SEO, Google Business Profile, AI lead capture, and automation for home service business owners.",
  };
}
