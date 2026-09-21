import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { pageSeo } from "../lib/seo-config";
import { getAllPosts, SITE_URL } from "../lib/posts";

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
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  useSeo(
    pageSeo("/blog", {
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Sky Lift Group Blog",
        url: `${SITE_URL}/blog`,
        description:
          "Practical guides on SMS marketing, local SEO, Google Business Profile, AI lead capture, and automation for home service business owners.",
        publisher: {
          "@type": "Organization",
          name: "Sky Lift Group",
          url: SITE_URL,
        },
      },
    })
  );

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
        </div>
      )}
    </div>
  );
};

export default Blog;
