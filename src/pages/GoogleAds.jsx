import { useState } from "react";
import { Users, Globe, Edit3, Activity, PieChart, Cpu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <Users size={34} />,  // Audience & Keyword Strategy
        title: "Audience & Keyword Strategy",
        desc: "We identify the most valuable audiences and high-performing keywords to connect with users who are ready to take action.",
        highlight: true,
    },
    {
        icon: <Globe size={34} />,  // Google Search & Display Campaigns
        title: "Google Search & Display Campaigns",
        desc: "Crafting campaigns across Search, Display, YouTube, and Gmail that drive measurable traffic, leads, and sales.",
    },
    {
        icon: <Edit3 size={34} />,  // Compelling Ad Copy & Creatives
        title: "Compelling Ad Copy & Creatives",
        desc: "We design persuasive ad copy and engaging visuals that capture attention and encourage clicks and conversions.",
    },
    {
        icon: <Activity size={34} />,  // Conversion Tracking & Analytics
        title: "Conversion Tracking & Analytics",
        desc: "Advanced tracking and analytics to measure every click, lead, and sale, giving you a clear view of ROI.",
    },
    {
        icon: <PieChart size={34} />,  // Continuous Testing & Optimization
        title: "Continuous Testing & Optimization",
        desc: "We test ad variations, bidding strategies, and audience segments to lower costs and boost performance over time.",
    },
    {
        icon: <Cpu size={34} />,  // Campaign Scaling & Budget Management
        title: "Campaign Scaling & Budget Management",
        desc: "Scale campaigns strategically while optimizing budget allocation and maintaining high ROI.",
    },
];

const faqs = [
    {
        q: "Where do your Google Ads run?",
        a: "Our campaigns appear on Google Search, Display Network, YouTube, Gmail, and Discovery placements, reaching users when they’re most engaged.",
    },
    {
        q: "Do you create ad copy and visuals?",
        a: "Absolutely. We craft attention-grabbing copy, responsive ads, and visual creatives tailored to your audience to drive action.",
    },
    {
        q: "How do you measure performance?",
        a: "We implement Google Ads conversion tracking, Analytics, and event tracking to monitor clicks, leads, and revenue precisely.",
    },
    {
        q: "When can I expect results?",
        a: "Insights usually appear within 2–3 weeks, and continuous optimization ensures improved performance over time.",
    },
];


const Googleads = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "Google Ads Services | Sky Lift Group",
        description:
            "Sky Lift Group delivers high-performing Google Ads campaigns on Facebook and Instagram to drive leads, sales, and scalable growth.",
        canonical: "https://www.skyliftgroup.com/services/google-ads"
    });


    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/tik-tok-ads.png")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    Google Ads That Convert <br />
                    <span className="text-[#00A693]"> Clicks Into Customers</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Performance-focused Google advertising designed to drive leads, sales, and tangible business growth.
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
                            RESULTS-DRIVEN GOOGLE ADVERTISING
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Smart Campaigns for
                            <span className="text-[#00A693]"> Measurable Growth</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Maximize your ROI with Google Ads that attract clicks, generate leads, and drive sales.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Keyword & Audience Targeting
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Ad Copy & Creatives
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Search & Display Ads
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                YouTube & Gmail Ads
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Conversion Tracking
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                A/B Testing & Optimization
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Budget Management & Scaling
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
                            Google Ads allow you to reach customers at the precise moment they are searching for products and services you offer. At <strong>Sky Lift Group</strong>, we design campaigns to attract high-quality traffic and drive measurable results.
                        </p>

                        <p>
                            We handle everything from keyword research and ad creation to testing and scaling, ensuring your campaigns run efficiently and profitably.
                        </p>

                        <p>
                            Every decision is guided by data, performance insights, and continuous optimization to maximize ROI and accelerate business growth.
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
                            <img src="/assets/tik-tok.png" alt="TikTok ADs" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default Googleads;
