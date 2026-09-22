import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";

/**
 * Service page FAQ.
 *
 * Answers collapse with grid-template-rows and are never unmounted. The
 * FAQPage schema for this route asserts that every answer's full text is on
 * the page, and an accordion that mounts on click makes that assertion false —
 * which is the exact bug that had to be fixed across sixteen pages once
 * already. It does not come back.
 */
export default function ServiceFaq({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="slg-light slg-section-tight">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl">
          <p className="slg-eyebrow mb-4">FAQ</p>
          <h2 className="text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem] lg:text-[2.125rem]">
            Frequently Asked{" "}
            <span className="accent text-[#26A6AD]">Questions</span>
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="slg-card overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`svc-faq-${i}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-display text-[1.0625rem] font-bold text-[#142A47]"
                    >
                      {faq.q}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#26A6AD] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`svc-faq-${i}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#E2E8F0] px-6 py-5 text-[0.9375rem] leading-[1.75] text-[#475569]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
