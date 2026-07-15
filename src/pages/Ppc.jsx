import { use, useState } from "react";
import { ChevronDown, BarChart2, TrendingUp, Zap, Settings, Search, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SliderBar from "./Sliderbar";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <TrendingUp size={34} />,
        title: "Campaign Strategy & Planning",
        desc: "Develop targeted PPC campaigns that align with your business goals and maximize ROI.",
        highlight: true,
    },
    {
        icon: <Search size={34} />,
        title: "Keyword Research & Selection",
        desc: "Identify high-performing keywords to drive qualified traffic and conversions.",
    },
    {
        icon: <Users size={34} />,
        title: "Ad Creation & Copywriting",
        desc: "Craft compelling ad copies and creatives that attract clicks and engagement.",
    },
    {
        icon: <Zap size={34} />,
        title: "Bid Management & Optimization",
        desc: "Continuously optimize bids, budgets, and targeting for maximum campaign efficiency.",
    },
    {
        icon: <BarChart2 size={34} />,
        title: "Conversion Tracking & Analytics",
        desc: "Monitor and analyze campaign performance to refine strategies and improve results.",
    },
    {
        icon: <Settings size={34} />,
        title: "Landing Page & CRO Optimization",
        desc: "Enhance landing pages for higher conversion rates and better user experience.",
    },
];

const faqs = [
    {
        q: "Which platforms do you manage PPC campaigns on?",
        a: "We run campaigns on Google Ads, Microsoft Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more depending on your audience.",
    },
    {
        q: "Do you handle ad creation and creatives?",
        a: "Yes, we create ad copies, banners, videos, and other creatives to boost engagement and conversions.",
    },
    {
        q: "Can you optimize campaigns for better ROI?",
        a: "Absolutely. We continuously monitor, adjust bids, and optimize targeting to maximize results.",
    },
    {
        q: "Do you provide reports for PPC campaigns?",
        a: "Yes, detailed performance reports track clicks, conversions, costs, and ROI to help you make informed decisions.",
    },
];

const PPCManagement = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "PPC Management Services | Sky Lift Group",
        description:
            "Sky Lift Group provides professional PPC management services to optimize your ad campaigns, maximize ROI, and drive targeted traffic to your website.",
        canonical: "https://www.skyliftgroup.com/services/ppc-management"
    });

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/ppc-side.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    PPC Management Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Drive targeted traffic, generate leads, and maximize ROI with expertly managed PPC campaigns across multiple platforms.
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
                            BOOST YOUR BUSINESS WITH TARGETED PPC CAMPAIGNS
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Results-Driven <span className="text-[#00A693]">PPC Management</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Attract high-intent customers, increase conversions, and grow revenue with data-driven PPC campaigns.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Campaign Strategy
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Keyword Research
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Ad Creation
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Bid Optimization
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Analytics & Reporting
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Landing Page CRO
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
                            Our PPC management services help businesses target the right audience at the right time. At <strong>Sky Lift Group</strong>, we design campaigns to maximize clicks, conversions, and ROI.
                        </p>
                        <p>
                            From keyword research and ad creation to bid management and analytics, we optimize every aspect of your PPC campaigns for success.
                        </p>
                        <p>
                            Let’s scale your business with precise, performance-driven paid advertising.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* PPC SERVICES SECTION */}
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
                            <img src="/assets/ppc-bg.jpg" alt="PPC Management Services" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default PPCManagement;
