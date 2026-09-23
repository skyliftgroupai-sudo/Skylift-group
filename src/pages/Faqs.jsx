import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";

const Faq = () => {
    const [active, setActive] = useState(0);

    // Shared with the FAQPage schema for this route — see src/lib/service-faqs.js.
    const faqs = routeFaqs["/faq"];

    useSeo(seoFor("/faq"));

    return (
        <div className="w-full">
            <PageHero
                eyebrow="Frequently Asked Questions"
                title="Everything You Need To Know"
                titleAccent="To Know"
                subtitle="Answers about our AI automation, digital marketing, and smart growth systems."
                primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
            />

            <section className="slg-light slg-section-tight">
                <div className="slg-container">
                    <div className="mx-auto max-w-3xl space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = active === index;
                            return (
                                <Reveal key={index} delay={(index % 3) * 50} className="slg-card overflow-hidden">
                                    {/* The questions are h2s, as they were before the
                                        redesign — this page's only job is these answers,
                                        so they sit one level under the h1. */}
                                    <h2>
                                        <button
                                            type="button"
                                            onClick={() => setActive(isOpen ? null : index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${index}`}
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
                                    </h2>

                                    {/* The answer stays mounted and is collapsed by row
                                        height, not unmounted. Conditionally rendering it
                                        meant the answers were absent from the HTML entirely
                                        — crawlers and AI answer engines saw six questions
                                        and no answers, and the FAQ schema described text
                                        that was not on the page. */}
                                    <div
                                        id={`faq-answer-${index}`}
                                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="border-t border-[#E2E8F0] px-6 py-5 text-[0.9375rem] leading-[1.75] text-[#475569]">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <Reveal className="mt-14 text-center">
                        <h3 className="font-display text-[1.375rem] font-extrabold text-[#142A47] sm:text-[1.75rem]">
                            Still Have Questions?
                        </h3>
                        <Link to="/contact" className="btn btn-primary mt-7">
                            Contact Sky Lift LLC
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Faq;
