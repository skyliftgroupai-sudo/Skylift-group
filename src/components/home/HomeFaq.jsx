import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { FAQS } from "../../lib/home-content";

/**
 * Homepage FAQ. Same six questions and answers as before, restyled.
 *
 * The answers are collapsed with max-height, never unmounted. An accordion
 * that mounts its answer only when open ships a page with no answer text in
 * it, which is exactly the bug that had to be fixed across sixteen service
 * pages — so the pattern is kept deliberately.
 */
export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="slg-light slg-section">
      <div className="slg-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <p className="slg-eyebrow mb-4">FAQ</p>
            <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem]">
              Frequently Asked{" "}
              <span className="accent text-[#26A6AD]">Questions</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
              Everything you need to know about working with Sky Lift LLC.
            </p>
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center text-[0.9375rem] font-semibold text-[#26A6AD] hover:text-[#1C8A90]"
            >
              Read the full FAQ
            </Link>
          </Reveal>

          <Reveal className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="slg-card overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`home-faq-answer-${index}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-display text-[1.0625rem] font-bold text-[#142A47]"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#26A6AD] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`home-faq-answer-${index}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#E2E8F0] px-6 py-5 text-[0.9375rem] leading-[1.7] text-[#475569]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
