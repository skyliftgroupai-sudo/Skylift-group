import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs1 = [
    {
        question: "What digital marketing services do you offer?",
        answer:
            "We provide strategy, SEO, social media management, content creation, paid advertising, and analytics tailored to your brand.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "Initial results are typically visible within 2–3 months, depending on the campaign and strategy.",
    },
    {
        question: "Do you provide custom packages?",
        answer:
            "Yes. Each business is unique, so we create a package that fits your goals and audience.",
    },
    {
        question: "Can you manage multiple platforms for my brand?",
        answer:
            "Absolutely. We handle Google, Facebook, Instagram, LinkedIn, and more with consistent messaging.",
    },
    {
        question: "How do you track and report performance?",
        answer:
            "We provide dashboards, clear reports, and actionable insights so you always know your ROI.",
    },
    {
        question: "Can I request ongoing support?",
        answer:
            "Yes, we offer ongoing optimization and support for long-term growth.",
    },
];

export default function FAQQuoteSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-14">

                {/* FAQ */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Everything you need to know about working with Sky Lift Group.
                    </p>

                    <div className="space-y-4">
                        {faqs1.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center p-5 text-left text-white font-medium hover:bg-white/5 transition"
                                >
                                    {faq.question}
                                    <ChevronDown
                                        className={`h-5 w-5 cursor-pointer text-[#00A693] transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-5 py-5 pb-5 text-gray-300 border-t border-white/10"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quote Form */}
                <div className="lg:w-1/2">
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-3xl font-bold text-white mb-3">
                            Request a Free Quote
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Share your details and we’ll prepare a tailored strategy for you.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="md:col-span-2 input-dark" placeholder="Business Name" />
                            <input className="input-dark" placeholder="First Name" />
                            <input className="input-dark" placeholder="Last Name" />
                            <input className="input-dark" placeholder="Phone" />
                            <input className="input-dark" placeholder="Email" />
                            <input className="md:col-span-2 input-dark" placeholder="Website URL" />

                            <div className="md:col-span-2">
                                <label
                                    htmlFor="service"
                                    className="sr-only"
                                >
                                    Choose a Service
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    className="
            w-full cursor-pointer
            bg-white/5 text-white
            border border-white/10 rounded-lg px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-[#00A693]
        "
                                >
                                    <option value="" className="bg-[#0a0a0a] text-gray-400">
                                        Choose a Service
                                    </option>
                                    <option className="bg-[#0a0a0a] text-white">Web Design & Development</option>
                                    <option className="bg-[#0a0a0a] text-white">SEO</option>
                                    <option className="bg-[#0a0a0a] text-white">Content Marketing</option>
                                    <option className="bg-[#0a0a0a] text-white">Paid Advertising</option>
                                    <option className="bg-[#0a0a0a] text-white">Full Digital Strategy</option>
                                    <option className="bg-[#0a0a0a] text-white">Local Maps Optimization</option>
                                    <option className="bg-[#0a0a0a] text-white">PPC Management</option>
                                </select>
                            </div>

                        </div>

                        <textarea
                            rows="4"
                            placeholder="Describe your requirements..."
                            className="input-dark mt-6"
                        ></textarea>

                        <label className="flex items-start gap-3 mt-6 text-gray-400 text-sm">
                            <input type="checkbox" className="accent-[#00A693] mt-1" />
                            I agree to be contacted by Sky Lift Group regarding my request.
                        </label>

                        <button
                            type="submit"
                            className="
                w-full mt-8 py-4 rounded-xl font-semibold
                bg-[#00A693] text-white cursor-pointer
                hover:bg-[#00947F]
                hover:shadow-[0_0_30px_rgba(0,166,147,0.6)]
                transition-all duration-300
              "
                        >
                            Submit Request
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
