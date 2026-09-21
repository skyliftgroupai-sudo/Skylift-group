// Renders a full service page from a content object in src/content/services/.
//
// Phase 3 pages are long-form (1,200+ words) and share a fixed shape: a direct
// answer block first for answer engines, then how-it-works, benefits,
// compliance or detail notes, industries served, FAQs and a CTA. Keeping that
// shape in one component means every page gets the same structure, the same
// heading hierarchy and the same schema wiring — and a fix to any of it applies
// everywhere at once.

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import CTASection from "./CtaSection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ServicePage({ content }) {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = routeFaqs[content.route] || [];

  useSeo(seoFor(content.route, { image: content.heroImage }));

  return (
    <div className="w-full bg-[#0a0a0a] text-gray-100">
      {/* HERO */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-cover bg-center px-6 py-24"
        style={{ backgroundImage: `url("${content.heroImage}")` }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {content.h1}
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            {content.heroSub}
          </p>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#00A693] px-8 py-4 font-semibold text-white transition hover:bg-[#00947F]"
          >
            Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* DIRECT ANSWER — first thing after the hero, on purpose. An answer engine
          quoting this page should be able to lift one self-contained paragraph. */}
      <section className="px-6 py-16 bg-[#0a0a0a]">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto rounded-2xl border border-[#00A693]/30 bg-white/[0.04] p-8"
        >
          <p className="text-lg leading-relaxed text-gray-100">{content.directAnswer}</p>
        </motion.div>
      </section>

      {/* BODY SECTIONS */}
      {content.sections.map((section, i) => (
        <section key={i} className="px-6 py-14 bg-[#0a0a0a]">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
              {section.h2}
            </h2>

            {section.body &&
              section.body.map((p, j) => (
                <p key={j} className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
                  {p}
                </p>
              ))}

            {section.steps && (
              <ol className="space-y-6 mt-2">
                {section.steps.map((s, j) => (
                  <li key={j} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#00A693]/50 text-sm font-semibold text-[#00A693]">
                      {j + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {section.benefits && (
              <div className="grid md:grid-cols-2 gap-6 mt-2">
                {section.benefits.map((b, j) => (
                  <div
                    key={j}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00A693]/40"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#00A693] mt-0.5" />
                      {b.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-[0.98rem]">{b.body}</p>
                  </div>
                ))}
              </div>
            )}

            {section.industries && (
              <div className="grid sm:grid-cols-2 gap-5 mt-2">
                {section.industries.map((ind, j) => (
                  <div key={j} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="font-semibold text-[#00A693] mb-1.5">{ind.name}</h3>
                    <p className="text-gray-300 text-[0.97rem] leading-relaxed">{ind.body}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      ))}

      {/* FAQ — answers stay mounted and collapse by height so the text exists in
          the HTML, which is also what the FAQPage schema for this route asserts. */}
      {faqs.length > 0 && (
        <section className="px-6 py-16 bg-[#0a0a0a]">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition hover:border-[#00A693]/40"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                    aria-controls={`svc-faq-${i}`}
                  >
                    <h3 className="font-semibold text-white text-[1.05rem]">{faq.q}</h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#00A693] transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    id={`svc-faq-${i}`}
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* RELATED — internal links out to the other money pages and supporting posts. */}
      {content.related && content.related.length > 0 && (
        <section className="px-6 py-14 bg-[#0a0a0a]">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Related services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.related.map((r, i) => (
                <Link
                  key={i}
                  to={r.to}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#00A693]/50"
                >
                  <span className="font-semibold text-white group-hover:text-[#00A693] transition-colors">
                    {r.label}
                  </span>
                  <p className="text-gray-400 text-[0.95rem] mt-1">{r.note}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
