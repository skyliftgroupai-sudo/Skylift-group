import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { getAllPosts } from "../lib/posts";
import {
  MIN_POSTS_PER_CATEGORY,
  categoryIntro,
  categoriesFrom,
  categorySlug,
  postsInCategory,
  pageCount,
  postsOnPage,
  blogIndexSeo,
} from "../lib/blog-taxonomy";

function formatDate(iso) {
  // Parse as a local date to avoid the UTC-midnight off-by-one day shift.
  const [y, m, d] = String(iso).split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Blog = () => {
  const all = getAllPosts();
  const { slug: catSlug, page: pageParam } = useParams();
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  // Only categories with enough posts to be worth a page of their own get a
  // link here, matching what the prerenderer actually builds.
  const categories = categoriesFrom(all).filter((c) => c.count >= MIN_POSTS_PER_CATEGORY);
  const activeCategory = catSlug ? categories.find((c) => c.slug === catSlug) : null;
  const posts = catSlug ? postsInCategory(all, catSlug) : all;

  const totalPages = pageCount(posts.length);
  const visible = postsOnPage(posts, page);

  // Only the first page of the unfiltered index gets a featured card. On page 2
  // or inside a category it would repeat a post that already appears in the grid.
  const isRoot = !catSlug && page === 1;
  const featured = isRoot ? visible[0] : null;
  const rest = isRoot ? visible.slice(1) : visible;

  const basePath = catSlug ? `/blog/category/${catSlug}` : "/blog";
  const pageUrl = (n) => (n === 1 ? basePath : `${basePath}/page/${n}`);

  const route = activeCategory
    ? { kind: "category", page, category: activeCategory }
    : { kind: "index", page };
  useSeo({
    ...seoFor("/blog"),
    ...blogIndexSeo(route),
    canonical: `https://www.skyliftgroup.com${pageUrl(page)}`,
  });

  return (
    <div className="w-full bg-[#0a0a0a] text-gray-100">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest text-[#00A693] uppercase"
          >
            The Sky Lift Group Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mt-4 leading-tight"
          >
            Grow Your Local Business with{" "}
            <span className="text-[#00A693]">AI & SEO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Practical, no-fluff guides on local SEO, Google Business Profile, AI
            marketing, lead generation, and automation — written to help home
            service and local businesses win more customers.
          </motion.p>
        </div>
      </section>

      {/* CATEGORIES — real links, so a crawler can reach every category listing
          and the posts filed under it. */}
      {categories.length > 0 && (
        <nav className="max-w-6xl mx-auto px-6 md:px-8 pb-10" aria-label="Blog categories">
          <ul className="flex flex-wrap justify-center gap-3">
            <li>
              <Link
                to="/blog"
                className={`inline-block rounded-full border px-4 py-2 text-sm transition ${
                  !catSlug
                    ? "border-[#00A693] bg-[#00A693]/15 text-[#00A693]"
                    : "border-white/15 text-gray-300 hover:border-[#00A693]/50 hover:text-[#00A693]"
                }`}
              >
                All articles
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/blog/category/${c.slug}`}
                  className={`inline-block rounded-full border px-4 py-2 text-sm transition ${
                    catSlug === c.slug
                      ? "border-[#00A693] bg-[#00A693]/15 text-[#00A693]"
                      : "border-white/15 text-gray-300 hover:border-[#00A693]/50 hover:text-[#00A693]"
                  }`}
                >
                  {c.name} ({c.count})
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {activeCategory && (
        <div className="max-w-6xl mx-auto px-6 md:px-8 pb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {activeCategory.name}
            {page > 1 ? ` — Page ${page}` : ""}
          </h2>
          {categoryIntro(activeCategory.slug) && (
            <p className="mt-4 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              {categoryIntro(activeCategory.slug)}
            </p>
          )}
        </div>
      )}

      {posts.length === 0 ? (
        <section className="py-24 text-center text-gray-400">
          <p>New articles are on the way. Check back soon.</p>
        </section>
      ) : (
        <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
          {/* FEATURED */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#00A693]/40 transition-all duration-500"
              >
                <div className="h-64 md:h-full min-h-[18rem] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" />
                </div>
                <div className="p-8 md:p-10">
                  <span className="inline-block text-xs font-semibold tracking-wide text-[#00A693] border border-[#00A693]/40 rounded-full px-3 py-1">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-5 leading-snug group-hover:text-[#00A693] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-sm text-gray-400 mt-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} /> {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} /> {featured.readingTime} min read
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#00A693] font-semibold mt-6">
                    Read article <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* GRID */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#00A693]/40 hover:shadow-[0_0_25px_#00A69330] transition-all duration-500 flex flex-col"
                >
                  <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold tracking-wide text-[#00A693]">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold mt-2 leading-snug group-hover:text-[#00A693] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {post.readingTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* PAGINATION — anchor tags with real hrefs, not a load-more button.
              A button is invisible to a crawler, which would leave older posts
              reachable only from the sitemap. */}
          {totalPages > 1 && (
            <nav className="mt-16 flex flex-wrap items-center justify-center gap-3" aria-label="Pagination">
              {page > 1 && (
                <Link
                  to={pageUrl(page - 1)}
                  rel="prev"
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-[#00A693]/50 hover:text-[#00A693]"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  to={pageUrl(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={`rounded-lg border px-4 py-2 text-sm transition ${
                    n === page
                      ? "border-[#00A693] bg-[#00A693]/15 text-[#00A693]"
                      : "border-white/15 text-gray-300 hover:border-[#00A693]/50 hover:text-[#00A693]"
                  }`}
                >
                  {n}
                </Link>
              ))}
              {page < totalPages && (
                <Link
                  to={pageUrl(page + 1)}
                  rel="next"
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-[#00A693]/50 hover:text-[#00A693]"
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
