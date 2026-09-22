import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

/**
 * The long-form body of a service page, restyled on the design system.
 *
 * These are new files rather than edits to src/components/ServiceSections.jsx
 * on purpose: that file is also dropped into six hand-built service pages that
 * still carry the old dark design, and restyling it in place would leave those
 * pages half-new down the middle. Once the rollout is approved they all move
 * over and the old file goes.
 *
 * Every string rendered here comes from the page's content object unchanged.
 */

export function DirectAnswer({ text }) {
  // Sits before any marketing copy on purpose: an answer engine quoting this
  // page should be able to lift one self-contained paragraph.
  return (
    <section className="slg-light slg-section-tight">
      <div className="slg-container">
        <Reveal className="slg-card mx-auto max-w-3xl border-l-4 border-l-[#26A6AD] p-8 sm:p-10">
          <p className="slg-eyebrow mb-4">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            The short answer
          </p>
          <p className="text-[1.125rem] leading-[1.7] text-[#142A47]">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceSections({ sections }) {
  return (
    <>
      {sections.map((section, i) => {
        // Sections alternate white and #F7F8FA so a 1,500-word page has some
        // rhythm instead of reading as one unbroken column.
        const light = i % 2 === 1;
        return (
          <section
            key={i}
            className={`slg-section-tight ${light ? "slg-light" : "bg-white"}`}
          >
            <div className="slg-container">
              <Reveal className="mx-auto max-w-3xl">
                <h2 className="text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem] lg:text-[2.125rem]">
                  {section.h2}
                </h2>

                {section.body &&
                  section.body.map((p, j) => (
                    <p
                      key={j}
                      className="mt-5 text-[1.0625rem] leading-[1.75] text-[#475569]"
                    >
                      {p}
                    </p>
                  ))}

                {section.steps && (
                  <ol className="mt-9 space-y-3">
                    {section.steps.map((s, j) => (
                      <li key={j} className="slg-card flex gap-5 p-6">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#26A6AD]/40 font-display text-sm font-bold text-[#26A6AD]"
                          aria-hidden="true"
                        >
                          {j + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-[1.0625rem] font-bold text-[#142A47]">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#475569]">
                            {s.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}

                {section.benefits && (
                  <div className="mt-9 grid gap-4 md:grid-cols-2">
                    {section.benefits.map((b, j) => (
                      <div key={j} className="slg-card p-6">
                        <h3 className="flex items-start gap-2.5 font-display text-[1.0625rem] font-bold text-[#142A47]">
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#26A6AD]"
                            aria-hidden="true"
                          />
                          {b.title}
                        </h3>
                        <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#475569]">
                          {b.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.industries && (
                  <div className="mt-9 grid gap-4 sm:grid-cols-2">
                    {section.industries.map((ind, j) => (
                      <div key={j} className="slg-card p-6">
                        <h3 className="font-display text-[1.0625rem] font-bold text-[#26A6AD]">
                          {ind.name}
                        </h3>
                        <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#475569]">
                          {ind.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}

export function RelatedServices({ related }) {
  if (!related || related.length === 0) return null;
  return (
    <section className="slg-section-tight bg-white">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem]">
            Related services
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((r, i) => (
              <Link
                key={i}
                to={r.to}
                className="slg-card slg-card-link group flex items-start justify-between gap-4 p-6"
              >
                <span>
                  <span className="block font-display text-[1.0625rem] font-bold text-[#142A47]">
                    {r.label}
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-[1.6] text-[#475569]">
                    {r.note}
                  </span>
                </span>
                <ArrowRight
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-[#26A6AD] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
