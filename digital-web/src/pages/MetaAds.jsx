import { useState } from "react";
import { ChevronDown, TrendingUp, MessageCircle, Zap, BarChart2, Settings, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <Target size={34} />,
        title: "Audience Research & Targeting",
        desc: "We identify high-intent audiences using demographics, behaviors, interests, and lookalike data to reach buyers, not just traffic.",
        highlight: true,
    },
    {
        icon: <TrendingUp size={34} />,
        title: "Facebook & Instagram Ads",
        desc: "High-converting ad campaigns optimized for feeds, stories, reels, and placements across Meta platforms.",
    },
    {
        icon: <MessageCircle size={34} />,
        title: "Ad Creative & Copywriting",
        desc: "Scroll-stopping visuals and persuasive ad copy designed to drive clicks, leads, and sales.",
    },
    {
        icon: <Zap size={34} />,
        title: "Conversion Tracking & Funnels",
        desc: "Pixel setup, event tracking, and conversion funnels to measure real performance and ROI.",
    },
    {
        icon: <BarChart2 size={34} />,
        title: "A/B Testing & Optimization",
        desc: "Continuous testing of creatives, audiences, and budgets to lower costs and improve results.",
    },
    {
        icon: <Settings size={34} />,
        title: "Scaling & Budget Management",
        desc: "We scale winning campaigns intelligently while protecting performance and ad spend efficiency.",
    },
];


const faqs = [
    {
        q: "Which platforms do your Meta Ads run on?",
        a: "Our Meta Ads run across Facebook, Instagram, Messenger, and Meta Audience Network to maximize reach and performance.",
    },
    {
        q: "Do you handle ad creatives and copy?",
        a: "Yes. We design visuals, write ad copy, and create multiple variations to test and improve performance.",
    },
    {
        q: "How do you track conversions and results?",
        a: "We set up Meta Pixel, event tracking, and conversion funnels to measure leads, purchases, and ROI accurately.",
    },
    {
        q: "How long does it take to see results?",
        a: "Most campaigns start generating insights within the first 2–3 weeks, with consistent optimization improving results over time.",
    },
];


const MetaAds = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "Meta Ads Services | Sky Lift Group",
        description:
            "Sky Lift Group delivers high-performing Meta Ads campaigns on Facebook and Instagram to drive leads, sales, and scalable growth.",
        canonical: "https://www.skyliftgroup.com/services/meta-ads"
    });


    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/meta-ads.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    Meta Ads That Drive <br />
                    <span className="text-[#00A693]"> Real Conversions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Data-driven Facebook & Instagram advertising built to generate leads,
                    sales, and measurable growth for your business.
                </motion.p>

            </section>

            {/* <SliderBar /> */}

            {/* STRATEGY SECTION */}
            <motion.section
                className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center px-6 md:px-0">
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs sm:text-sm tracking-wide opacity-80">
                            PERFORMANCE-DRIVEN META ADVERTISING
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Smart Paid Ads for
                            <span className="text-[#00A693]"> Scalable Growth</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Turn ad spend into predictable revenue with Meta Ads that convert.
                        </p>


                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Audience Targeting
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Ad Creative & Copy
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Facebook & Instagram Ads
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Conversion Tracking
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                A/B Testing
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Scaling & Optimization
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
                            Meta Ads are one of the most powerful ways to reach your ideal customers
                            at the right moment. At <strong>Sky Lift Group</strong>, we create
                            conversion-focused campaigns that deliver measurable business results.
                        </p>

                        <p>
                            From audience research and creative development to advanced optimization
                            and scaling, we manage the full lifecycle of your Facebook and Instagram
                            ad campaigns.
                        </p>

                        <p>
                            Every decision is backed by data, testing, and performance insights to
                            maximize ROI and long-term growth.
                        </p>

                    </motion.div>
                </div>
            </motion.section>

            {/* SERVICES SECTION */}
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
                                    Lets Start
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

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
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="mt-4 border-t border-gray-700 pt-3">
                                                    <p className="text-gray-300 text-md leading-relaxed">{item.a}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
                            <img src="/assets/meta.jpg" alt="Social Media Marketing Services" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default MetaAds;
