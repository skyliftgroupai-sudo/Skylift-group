import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import useSeo from "../hooks/useSeo";

const Faq = () => {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "What services does Sky Lift Group provide?",
            answer:
                "We provide AI chatbots, AI voice agents, workflow automation, SEO, PPC advertising, social media management, and high-converting web design solutions."
        },
        {
            question: "How do AI chatbots help my business?",
            answer:
                "AI chatbots automate customer support, capture leads 24/7, answer queries instantly, and improve user engagement without increasing staffing costs."
        },
        {
            question: "What is an AI Work Agent?",
            answer:
                "An AI Work Agent automates repetitive business processes like follow-ups, scheduling, CRM updates, and workflow management to improve efficiency."
        },
        {
            question: "Do you offer custom automation solutions?",
            answer:
                "Yes. We build tailored AI automation systems based on your business goals, tools, and operational structure."
        },
        {
            question: "How long does it take to see marketing results?",
            answer:
                "SEO results typically take 2–4 months, while PPC and paid campaigns can generate results immediately depending on budget and targeting."
        },
        {
            question: "Is my business data secure?",
            answer:
                "Absolutely. We implement secure hosting, encryption, and privacy-first AI architecture to protect your business and customer data."
        }
    ];

    useSeo({
        title: "FAQ | Sky Lift Group – AI Automation & Digital Marketing Questions",
        description:
            "Find answers about AI chatbots, voice agents, automation systems, SEO, PPC, and digital marketing services offered by Sky Lift Group.",
        canonical: "https://www.skyliftgroup.com/faq"
    });

    return (
        <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#00A693]/20 rounded-full blur-[140px]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00A693]/10 rounded-full blur-[120px]"></div>

            <div className="relative max-w-4xl mx-auto px-6 z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
                        Frequently Asked Questions
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Everything You Need
                        <span className="bg-gradient-to-r from-[#00A693] to-teal-300 bg-clip-text text-transparent">
                            {" "}To Know
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
                        Answers about our AI automation, digital marketing,
                        and smart growth systems.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-6 ">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#00A693]/50 transition-all duration-500"
                        >
                            <button
                                onClick={() => setActive(active === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-white">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`text-[#00A693] transition-transform duration-300 cursor-pointer ${active === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-gray-400"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-24"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mb-8">
                        Still Have Questions?
                    </h3>

                    <Link
                        to="/contact"
                        className="inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
                    >
                        Contact Sky Lift Group
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;
