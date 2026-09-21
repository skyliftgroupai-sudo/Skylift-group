// The long-form body of a Phase 3 service page: direct answer, section bodies,
// numbered steps, benefit cards, industries and related links.
//
// Shared by two callers. src/pages/ServicePage.jsx builds a whole new page
// around it, and the six pre-existing service pages drop it in between their
// own sections — those pages already have a hero, a feature grid, an FAQ
// accordion and a CTA, so rebuilding them from scratch would throw away a
// working design to gain nothing.

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function DirectAnswer({ text }) {
  // Sits before any marketing copy on purpose: an answer engine quoting this
  // page should be able to lift one self-contained paragraph.
  return (
    <section className="px-6 py-14 bg-[#0a0a0a]">
      <motion.div
        {...fadeUp}
        className="max-w-3xl mx-auto rounded-2xl border border-[#00A693]/30 bg-white/[0.04] p-8"
      >
        <p className="text-lg leading-relaxed text-gray-100">{text}</p>
      </motion.div>
    </section>
  );
}

export function ServiceSections({ sections }) {
  return (
    <>
      {sections.map((section, i) => (
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
    </>
  );
}

export function RelatedServices({ related }) {
  if (!related || related.length === 0) return null;
  return (
    <section className="px-6 py-14 bg-[#0a0a0a]">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Related services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {related.map((r, i) => (
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
  );
}

/** Everything a pre-existing service page needs, in one drop-in. */
export default function ServiceLongform({ content }) {
  return (
    <>
      <DirectAnswer text={content.directAnswer} />
      <ServiceSections sections={content.sections} />
      <RelatedServices related={content.related} />
    </>
  );
}
