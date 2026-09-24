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
import { ChevronDown, ArrowRight } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import CTASection from "./CtaSection";
import {
  DirectAnswer,
  ServiceSections,
  RelatedServices,
} from "../components/ServiceSections";

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
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      >
        {/* Real <img> rather than a CSS background: the preload scanner can see
            this in the initial HTML, which is what makes it the LCP it should be. */}
        <img
          src={content.heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
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

      <DirectAnswer text={content.directAnswer} />
      <ServiceSections sections={content.sections} />

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

      <RelatedServices related={content.related} />

      <CTASection />
    </div>
  );
}
