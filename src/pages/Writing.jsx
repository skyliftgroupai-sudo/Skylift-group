import { use, useState } from "react";
import { ChevronDown, PenTool, FileText, Users, Zap, BarChart2, Settings } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import ServiceLongform from "../components/ServiceLongform";
import longform from "../content/services/content-writing";

const services = [
    {
        icon: <PenTool size={34} />,
        title: "Blog & Article Writing",
        desc: "Create engaging and SEO-friendly blogs and articles to attract and retain your audience.",
        highlight: true,
    },
    {
        icon: <FileText size={34} />,
        title: "Website Content",
        desc: "Craft compelling web pages that communicate your brand message and convert visitors.",
    },
    {
        icon: <Users size={34} />,
        title: "Social Media Content",
        desc: "Develop captivating posts, captions, and graphics to boost engagement on social platforms.",
    },
    {
        icon: <Zap size={34} />,
        title: "Email & Newsletter Writing",
        desc: "Write persuasive email campaigns that drive opens, clicks, and conversions.",
    },
    {
        icon: <BarChart2 size={34} />,
        title: "SEO Content Optimization",
        desc: "Optimize existing content with keywords, meta tags, and structure for better search rankings.",
    },
    {
        icon: <Settings size={34} />,
        title: "Content Strategy & Planning",
        desc: "Develop a content roadmap that aligns with your business goals and audience needs.",
    },
];

// Shared with the FAQPage schema emitted for this route — see src/lib/service-faqs.js.
const faqs = routeFaqs["/services/content-writing"];

const ContentWritingServices = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo(seoFor("/services/content-writing"));

    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center overflow-hidden"
            >
                {/* Real <img> rather than a CSS background: the preload scanner can see
                    this in the initial HTML, which is what makes it the LCP it should be. */}
                <img
                  src="/assets/writing-bg.webp"
                  alt=""
                  aria-hidden="true"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    SEO Content Writing for Contractors
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Engage your audience, boost SEO rankings, and communicate your brand effectively with high-quality content.
                </motion.p>
            </section>


            {/* STRATEGY SECTION */}
            <motion.section
                className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute "></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center px-6 md:px-0">
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs sm:text-sm tracking-wide opacity-80">
                            DELIVERING HIGH-QUALITY CONTENT FOR BUSINESSES
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Targeted <span className="text-[#00A693]">Content Writing</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Attract readers, engage your audience, and convert them with well-crafted content.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Blog & Articles
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Website Content
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Social Media Posts
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Email Campaigns
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                SEO Optimization
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Content Strategy
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-white text-base sm:text-lg leading-relaxed space-y-4"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Our content writing services help businesses connect with their audience. At <strong>Sky Lift Group</strong>, we create blogs, articles, web pages, and social media content that engages and converts.
                        </p>
                        <p>
                            We focus on SEO-friendly content, compelling storytelling, and consistent messaging to ensure your brand stands out.
                        </p>
                        <p>
                            Let us help you communicate effectively and grow your business with high-quality content.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* CONTENT SERVICES SECTION */}
            <motion.section
                className="py-20 px-6 md:px-12 bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative group rounded-2xl p-8 border transition-all duration-500 shadow-md backdrop-blur-xl bg-white/10 hover:shadow-[0_0_25px_#00A69340] hover:border-[#00A693]/40 ${service.highlight ? "border-[#00A693]/30" : "border-gray-700"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-[#00A693] mb-4">{service.icon}</div>
                            <h3 className="font-semibold text-xl mb-3 text-gray-100">{service.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.desc}</p>
                            <Link to="/contact">
                                <button
                                    className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer ${service.highlight
                                        ? "bg-[#00A693] text-white hover:bg-[#00927f]"
                                        : "text-[#00A693] border border-[#00A693] hover:bg-[#00A693] hover:text-white"
                                        }`}
                                >
                                    Let's Start
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <ServiceLongform content={longform} />

            {/* FAQ SECTION */}
            <motion.section
                className="bg-[#0a0a0a] py-20 px-6 md:px-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-100">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    className="border border-[#00A693] rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_12px_#00A69350] hover:border-[#00A693] hover:scale-[1.01]"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3
                                            className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? "text-[#00A693]" : "text-[#00A693] group-hover:text-[#008d7c]"
                                                }`}
                                        >
                                            {item.q}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-[#00A693] transition-all duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                                } group-hover:text-[#008d7c]`}
                                        />
                                    </div>
                                    {/* Always mounted, collapsed by height. Rendering the answer only while
                                        open kept it out of the HTML entirely, so crawlers and AI
                                        answer engines saw the question and no answer. */}
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={false}
                                        animate={{
                                            height: openIndex === index ? "auto" : 0,
                                            opacity: openIndex === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-4 border-t border-gray-700 pt-3">
                                                    <p className="text-gray-300 text-md leading-relaxed">{item.a}</p>
                                                </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <div className="w-full h-80 flex items-center justify-center shadow-md">
                            <img src="/assets/writing-side.webp" alt="Content Writing Services" className="rounded-2xl shadow-lg"
          width={500}
          height={335}
          loading="lazy"
          decoding="async"
        />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default ContentWritingServices;
