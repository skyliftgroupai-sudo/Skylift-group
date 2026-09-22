import { useParams, Link } from "react-router-dom";
import { useMemo, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ArrowLeft, ArrowRight, List } from "lucide-react";
import useSeo from "../hooks/useSeo";
import NotFound from "../components/Notfound";
import FinalCta from "../components/home/FinalCta";
import Reveal from "../components/Reveal";
import { getAllPosts, getPostBySlug, getRelatedPosts, SITE_URL } from "../lib/posts";
import {
  MIN_POSTS_PER_CATEGORY,
  categorySlug,
  postsInCategory,
} from "../lib/blog-taxonomy";
import { blogPostingSchema } from "../lib/schema";
import { tocFromMarkdown, slugifyHeading } from "../lib/toc";

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

/** Flattens a react-markdown heading's children back to plain text. */
function nodeText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(nodeText).join("");
  if (children && typeof children === "object" && children.props)
    return nodeText(children.props.children);
  return "";
}

// Markdown elements mapped to the design system. No typography plugin: the
// measure, colors and rhythm all come from tokens so an article matches the
// rest of the site instead of matching a plugin's defaults.
//
// `node` is supplied by react-markdown but unused here, so it is stripped
// before spreading.
function buildComponents(headingIds) {
  // Same counter logic as tocFromMarkdown, so the nth "## Foo" in the source
  // gets the same id here as the nth entry in the contents list. Anything else
  // and the jump links point at nothing.
  const seen = new Map();

  return {
    h2: ({ node: _node, children, ...props }) => {
      const base = slugifyHeading(nodeText(children));
      const n = (seen.get(base) || 0) + 1;
      seen.set(base, n);
      const id = n === 1 ? base : `${base}-${n}`;
      return (
        <h2
          id={headingIds.has(id) ? id : undefined}
          className="mt-14 mb-4 scroll-mt-28 font-display text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.75rem]"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ node: _node, ...props }) => (
      <h3
        className="mt-10 mb-3 font-display text-[1.1875rem] font-bold text-[#142A47] sm:text-[1.3125rem]"
        {...props}
      />
    ),
    h4: ({ node: _node, ...props }) => (
      <h4 className="mt-8 mb-2 font-display text-[1.0625rem] font-bold text-[#142A47]" {...props} />
    ),
    p: ({ node: _node, ...props }) => (
      <p className="my-5 text-[1.0625rem] leading-[1.8] text-[#475569]" {...props} />
    ),
    a: ({ node: _node, href = "", ...props }) => {
      const cls =
        "font-medium text-[#1C8A90] underline decoration-[#26A6AD]/40 underline-offset-[3px] transition-colors hover:decoration-[#26A6AD]";
      return href.startsWith("/") ? (
        <Link to={href} className={cls} {...props} />
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props} />
      );
    },
    ul: ({ node: _node, ...props }) => (
      <ul
        className="my-5 list-disc space-y-2.5 pl-6 text-[1.0625rem] leading-[1.75] text-[#475569] marker:text-[#26A6AD]"
        {...props}
      />
    ),
    ol: ({ node: _node, ...props }) => (
      <ol
        className="my-5 list-decimal space-y-2.5 pl-6 text-[1.0625rem] leading-[1.75] text-[#475569] marker:font-semibold marker:text-[#26A6AD]"
        {...props}
      />
    ),
    li: ({ node: _node, ...props }) => <li className="leading-[1.75]" {...props} />,
    strong: ({ node: _node, ...props }) => (
      <strong className="font-semibold text-[#142A47]" {...props} />
    ),
    em: ({ node: _node, ...props }) => <em className="italic text-[#334155]" {...props} />,
    blockquote: ({ node: _node, ...props }) => (
      <blockquote
        className="my-7 rounded-r-[12px] border-l-4 border-[#26A6AD] bg-[#F7F8FA] px-6 py-4 text-[1.0625rem] leading-[1.75] text-[#334155]"
        {...props}
      />
    ),
    code: ({ node: _node, inline, ...props }) =>
      inline ? (
        <code
          className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-[0.9em] text-[#1C8A90]"
          {...props}
        />
      ) : (
        <code
          className="my-6 block overflow-x-auto rounded-[12px] bg-[#0B1220] p-5 text-sm leading-[1.6] text-slate-200"
          {...props}
        />
      ),
    hr: () => <hr className="my-12 border-[#E2E8F0]" />,
    table: ({ node: _node, ...props }) => (
      <div className="my-7 overflow-x-auto rounded-[12px] border border-[#E2E8F0]">
        <table className="w-full text-left text-sm" {...props} />
      </div>
    ),
    thead: ({ node: _node, ...props }) => <thead className="bg-[#F7F8FA]" {...props} />,
    th: ({ node: _node, ...props }) => (
      <th
        className="border-b border-[#E2E8F0] px-4 py-3 font-display font-bold text-[#142A47]"
        {...props}
      />
    ),
    td: ({ node: _node, ...props }) => (
      <td className="border-b border-[#E2E8F0] px-4 py-3 align-top text-[#475569]" {...props} />
    ),
  };
}

// Guard wrapper: keeps hooks in the view unconditional (no hooks after an early return).
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFound />;
  return <BlogPostView post={post} />;
};

const BlogPostView = ({ post }) => {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const categoryHasPage =
    postsInCategory(getAllPosts(), categorySlug(post.category)).length >= MIN_POSTS_PER_CATEGORY;
  const related = getRelatedPosts(post.slug, 3);

  const toc = useMemo(() => tocFromMarkdown(post.content), [post.content]);
  const headingIds = useMemo(() => new Set(toc.map((t) => t.id)), [toc]);
  // react-markdown re-renders on every parent render and the component map
  // carries a counter, so it is built once per post rather than per render.
  const componentsRef = useRef(null);
  if (!componentsRef.current || componentsRef.current.slug !== post.slug) {
    componentsRef.current = { slug: post.slug, components: buildComponents(headingIds) };
  }

  useSeo({
    title: `${post.seoTitle} | Sky Lift Group`,
    description: post.description,
    canonical,
    image: post.image,
    type: "article",
    jsonLd: blogPostingSchema(post),
  });

  return (
    <div className="w-full">
      {/* HERO — type on the brand gradient rather than over the post image.
          The image now runs full width below it, where it is a picture instead
          of a dark wash behind white text. */}
      <section className="slg-dark relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(38,166,173,0.20) 0%, rgba(20,42,71,0.55) 40%, #0B1220 80%)",
          }}
          aria-hidden="true"
        />
        <div className="slg-container relative py-14 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#26A6AD]"
            >
              <ArrowLeft size={15} aria-hidden="true" /> Back to Blog
            </Link>

            <div className="mt-5">
              {/* Links to the category listing when that listing exists, which
                  gives every category page an inbound link from each of its
                  posts rather than only from the blog index. */}
              {categoryHasPage ? (
                <Link
                  to={`/blog/category/${categorySlug(post.category)}`}
                  className="slg-chip slg-chip-dark transition-colors hover:border-[#26A6AD]"
                >
                  {post.category}
                </Link>
              ) : (
                <span className="slg-chip slg-chip-dark">{post.category}</span>
              )}
            </div>

            <h1 className="mt-5 text-[1.75rem] font-extrabold text-white sm:text-[2.25rem] lg:text-[2.75rem]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} aria-hidden="true" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} aria-hidden="true" /> {post.readingTime} min read
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="slg-light pb-16 lg:pb-20">
        <div className="slg-container">
          {/* The hero image, pulled up so it straddles the dark/light seam. */}
          <div className="-mt-10 overflow-hidden rounded-[16px] border border-[#E2E8F0] shadow-[var(--shadow-lift)] lg:-mt-14">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={630}
              className="aspect-[1200/630] w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <article className="slg-prose mx-auto w-full lg:mx-0">
              {toc.length > 2 && (
                // Duplicated on purpose. This copy is the one phones and
                // narrow tablets see, inline above the article; the sticky
                // sidebar copy below is hidden under lg. Both are real anchors
                // in the static HTML either way.
                <nav
                  className="slg-card mb-10 p-6 lg:hidden"
                  aria-label="Table of contents"
                >
                  <p className="slg-eyebrow mb-4">
                    <List className="h-4 w-4" aria-hidden="true" />
                    In this article
                  </p>
                  <ol className="space-y-2.5">
                    {toc.map((item, i) => (
                      <li key={item.id} className="flex gap-3">
                        <span
                          className="font-display text-xs font-bold text-[#26A6AD]"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${item.id}`}
                          className="text-[0.9375rem] leading-[1.5] text-[#475569] transition-colors hover:text-[#1C8A90]"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <Markdown remarkPlugins={[remarkGfm]} components={componentsRef.current.components}>
                {post.content}
              </Markdown>

              {post.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-2 border-t border-[#E2E8F0] pt-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {toc.length > 2 && (
              <aside className="hidden lg:block">
                <nav
                  className="sticky top-[96px] slg-card p-6"
                  aria-label="Table of contents"
                >
                  <p className="slg-eyebrow mb-4">
                    <List className="h-4 w-4" aria-hidden="true" />
                    In this article
                  </p>
                  <ol className="space-y-2.5">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block text-[0.875rem] leading-[1.5] text-[#475569] transition-colors hover:text-[#1C8A90]"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="slg-section-tight bg-white">
          <div className="slg-container">
            <Reveal>
              <h2 className="text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem]">
                Keep Reading
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="slg-card slg-card-link group flex h-full flex-col overflow-hidden"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#26A6AD]">
                        {r.category}
                      </span>
                      <h3 className="mt-2 font-display text-[0.9375rem] font-bold leading-[1.4] text-[#142A47] transition-colors group-hover:text-[#1C8A90]">
                        {r.title}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#26A6AD]">
                        Read
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <FinalCta />
    </div>
  );
};

export default BlogPost;
