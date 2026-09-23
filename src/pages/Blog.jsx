import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { getAllPosts } from "../lib/posts";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import {
  MIN_POSTS_PER_CATEGORY,
  categoryIntro,
  categoriesFrom,
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

const chipBase =
  "inline-block rounded-full border px-4 py-2 text-sm font-medium transition-colors";
const chipOn = "border-[#26A6AD] bg-[#E6F5F6] text-[#1C8A90]";
const chipOff =
  "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#26A6AD]/50 hover:text-[#1C8A90]";

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
    canonical: `https://www.skyliftllc.com${pageUrl(page)}`,
  });

  return (
    <div className="w-full">
      <PageHero
        eyebrow="The Sky Lift LLC Blog"
        title="Grow Your Local Business with AI & SEO"
        titleAccent="AI & SEO"
        subtitle="Practical, no-fluff guides on local SEO, Google Business Profile, AI marketing, lead generation, and automation — written to help home service and local businesses win more customers."
      />

      <div className="slg-light">
        {/* CATEGORIES — real links, so a crawler can reach every category
            listing and the posts filed under it. */}
        {categories.length > 0 && (
          <nav
            className="slg-container pt-14"
            aria-label="Blog categories"
          >
            <ul className="flex flex-wrap justify-center gap-2.5">
              <li>
                <Link to="/blog" className={`${chipBase} ${!catSlug ? chipOn : chipOff}`}>
                  All articles
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/blog/category/${c.slug}`}
                    className={`${chipBase} ${catSlug === c.slug ? chipOn : chipOff}`}
                  >
                    {c.name} ({c.count})
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {activeCategory && (
          <div className="slg-container pt-12 text-center">
            <h2 className="text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem]">
              {activeCategory.name}
              {page > 1 ? ` — Page ${page}` : ""}
            </h2>
            {categoryIntro(activeCategory.slug) && (
              <p className="mx-auto mt-4 max-w-2xl text-[1.0625rem] leading-[1.7] text-[#475569]">
                {categoryIntro(activeCategory.slug)}
              </p>
            )}
          </div>
        )}

        {posts.length === 0 ? (
          <section className="slg-container py-24 text-center text-[#475569]">
            <p>New articles are on the way. Check back soon.</p>
          </section>
        ) : (
          <div className="slg-container py-14 lg:py-16">
            {/* FEATURED */}
            {featured && (
              <Reveal className="mb-14">
                <Link
                  to={`/blog/${featured.slug}`}
                  className="slg-card slg-card-link group grid overflow-hidden md:grid-cols-2"
                >
                  <div className="h-60 overflow-hidden md:h-full md:min-h-[20rem]">
                    <img
                      src={featured.image}
                      alt={featured.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className="slg-chip">{featured.category}</span>
                    <h2 className="mt-5 font-display text-[1.375rem] font-extrabold leading-[1.25] text-[#142A47] transition-colors group-hover:text-[#1C8A90] sm:text-[1.75rem]">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-[1.0625rem] leading-[1.7] text-[#475569]">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-sm text-[#94A3B8]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={15} aria-hidden="true" /> {formatDate(featured.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} aria-hidden="true" /> {featured.readingTime} min read
                      </span>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#26A6AD]">
                      Read article
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}

            {/* GRID */}
            {rest.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, idx) => (
                  <Reveal
                    key={post.slug}
                    as="article"
                    delay={(idx % 3) * 60}
                    className="h-full"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="slg-card slg-card-link group flex h-full flex-col overflow-hidden"
                    >
                      <div className="h-44 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#26A6AD]">
                          {post.category}
                        </span>
                        <h3 className="mt-2.5 font-display text-[1.0625rem] font-bold leading-[1.35] text-[#142A47] transition-colors group-hover:text-[#1C8A90]">
                          {post.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-[1.65] text-[#475569]">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-[#94A3B8]">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} aria-hidden="true" /> {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} aria-hidden="true" /> {post.readingTime} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}

            {/* PAGINATION — anchor tags with real hrefs, not a load-more button.
                A button is invisible to a crawler, which would leave older posts
                reachable only from the sitemap. */}
            {totalPages > 1 && (
              <nav
                className="mt-14 flex flex-wrap items-center justify-center gap-2.5"
                aria-label="Pagination"
              >
                {page > 1 && (
                  <Link to={pageUrl(page - 1)} rel="prev" className={`${chipBase} ${chipOff}`}>
                    Previous
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    to={pageUrl(n)}
                    aria-current={n === page ? "page" : undefined}
                    className={`${chipBase} ${n === page ? chipOn : chipOff}`}
                  >
                    {n}
                  </Link>
                ))}
                {page < totalPages && (
                  <Link to={pageUrl(page + 1)} rel="next" className={`${chipBase} ${chipOff}`}>
                    Next
                  </Link>
                )}
              </nav>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
