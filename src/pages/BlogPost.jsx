import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import useSeo from "../hooks/useSeo";
import NotFound from "../components/Notfound";
import CTASection from "./CtaSection";
import { getPostBySlug, getRelatedPosts, SITE_URL } from "../lib/posts";

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

// Map markdown elements to theme-matched, styled components (no typography plugin needed).
// `node` is provided by react-markdown but unused here, so it is stripped before spreading.
const mdComponents = {
  h2: ({ node: _node, ...props }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 scroll-mt-24" {...props} />
  ),
  h3: ({ node: _node, ...props }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3" {...props} />
  ),
  h4: ({ node: _node, ...props }) => (
    <h4 className="text-lg font-semibold text-gray-100 mt-6 mb-2" {...props} />
  ),
  p: ({ node: _node, ...props }) => (
    <p className="text-gray-300 leading-relaxed my-4 text-[1.05rem]" {...props} />
  ),
  a: ({ node: _node, href = "", ...props }) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          to={href}
          className="text-[#00A693] font-medium underline underline-offset-2 hover:text-[#00cbb3]"
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00A693] font-medium underline underline-offset-2 hover:text-[#00cbb3]"
        {...props}
      />
    );
  },
  ul: ({ node: _node, ...props }) => (
    <ul className="list-disc pl-6 my-4 space-y-2 text-gray-300 marker:text-[#00A693]" {...props} />
  ),
  ol: ({ node: _node, ...props }) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-300 marker:text-[#00A693]" {...props} />
  ),
  li: ({ node: _node, ...props }) => <li className="leading-relaxed" {...props} />,
  strong: ({ node: _node, ...props }) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  em: ({ node: _node, ...props }) => <em className="text-gray-200 italic" {...props} />,
  blockquote: ({ node: _node, ...props }) => (
    <blockquote
      className="border-l-4 border-[#00A693] bg-white/[0.04] rounded-r-lg px-5 py-3 my-6 text-gray-200 italic"
      {...props}
    />
  ),
  code: ({ node: _node, inline, ...props }) =>
    inline ? (
      <code className="bg-white/10 text-[#00cbb3] rounded px-1.5 py-0.5 text-[0.9em]" {...props} />
    ) : (
      <code className="block bg-black/60 rounded-lg p-4 my-4 overflow-x-auto text-sm text-gray-200" {...props} />
    ),
  hr: () => <hr className="border-white/10 my-10" />,
  table: ({ node: _node, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  thead: ({ node: _node, ...props }) => <thead className="bg-white/[0.06]" {...props} />,
  th: ({ node: _node, ...props }) => (
    <th className="px-4 py-3 font-semibold text-white border-b border-white/10" {...props} />
  ),
  td: ({ node: _node, ...props }) => (
    <td className="px-4 py-3 text-gray-300 border-b border-white/5 align-top" {...props} />
  ),
};

// Guard wrapper: keeps hooks in the view unconditional (no hooks after an early return).
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFound />;
  return <BlogPostView post={post} />;
};

const BlogPostView = ({ post }) => {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Sky Lift Group",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/sky-lift.webp`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    keywords: post.tags.join(", "),
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  useSeo({
    title: `${post.seoTitle} | Sky Lift Group`,
    description: post.description,
    canonical,
    image: post.image,
    type: "article",
    jsonLd: [articleSchema, faqSchema, breadcrumbSchema].filter(Boolean),
  });

  return (
    <div className="w-full bg-[#0a0a0a] text-gray-100">
      {/* HERO */}
      <section className="relative w-full">
        <div className="h-[42vh] md:h-[52vh] w-full overflow-hidden">
          {/* The post hero is the LCP element on an article page, so it loads
              eagerly at high priority while every other image on the page lazies. */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-black/40" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-6 pb-10 w-full">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#00A693] mb-4"
            >
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <div>
              <span className="inline-block text-xs font-semibold tracking-wide text-[#00A693] border border-[#00A693]/40 rounded-full px-3 py-1">
                {post.category}
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight"
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300 mt-5">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> {post.readingTime} min read
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="max-w-3xl mx-auto px-6 py-14">
        <Markdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {post.content}
        </Markdown>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-300 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#00A693]/40 transition-all duration-500 flex flex-col"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#00A693]">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold mt-2 leading-snug group-hover:text-[#00A693] transition-colors">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#00A693] mt-3">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
};

export default BlogPost;
