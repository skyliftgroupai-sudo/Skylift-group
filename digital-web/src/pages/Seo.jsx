import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    BarChart2,
    TrendingUp,
    Users,
    Settings,
    Zap
} from "lucide-react";
import SliderBar from "./Sliderbar";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <Search size={34} />,
        title: "Keyword Research",
        desc: "Discover high-value keywords to drive qualified traffic to your website.",
        highlight: true,
    },
    {
        icon: <TrendingUp size={34} />,
        title: "On-Page SEO",
        desc: "Optimize your content, meta tags, and site structure for better rankings.",
    },
    {
        icon: <BarChart2 size={34} />,
        title: "SEO Analytics & Reporting",
        desc: "Track your website’s performance and monitor improvements with advanced analytics.",
    },
    {
        icon: <Users size={34} />,
        title: "Off-Page SEO",
        desc: "Get your business found locally with Google Maps and local search strategies.",
    },
    {
        icon: <Settings size={34} />,
        title: "Technical SEO",
        desc: "Enhance site speed, crawlability, and structured data for search engines.",
    },
    {
        icon: <Zap size={34} />,
        title: "Content & Link Building",
        desc: "Drive organic growth with optimized content and authoritative backlinks.",
    },
];

const faqs = [
    {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term strategy. You can typically see improvements within 3-6 months depending on competition.",
    },
    {
        q: "Do you provide monthly reports?",
        a: "Yes, we deliver detailed monthly reports covering rankings, traffic, and progress.",
    },
    {
        q: "Can you help with local SEO?",
        a: "Absolutely. We optimize Google Business Profile, local keywords, and maps visibility for your business.",
    },
    {
        q: "Do you offer SEO for e-commerce websites?",
        a: "Yes. We optimize product pages, category pages, and integrate structured data to improve search visibility.",
    },
];

const Seo = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "SEO & Digital Marketing Services | Sky Lift Group",
        description:
            "Sky Lift Group provides expert SEO and digital marketing services to improve website rankings, drive traffic, and grow your business online.",
        canonical: "https://www.skyliftgroup.com/services/seo"
    });

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/seo.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    SEO & Digital Marketing
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Boost your online visibility and attract qualified leads with proven SEO strategies.
                </motion.p>
            </section>

            {/* <SliderBar /> */}
            <motion.section
                className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center px-6 md:px-0">
                    {/* LEFT SIDE */}
                    <motion.div
                        className="text-gray-100"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs sm:text-sm tracking-wide opacity-80">
                            PROUDLY OPTIMIZING 100+ BUSINESSES FOR GOOGLE
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Proven Strategies for
                            <span className="text-[#00A693]"> SEO & Digital Growth</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4 text-gray-200">
                            Boost visibility, drive traffic, and increase conversions.
                        </p>

                        {/* SEO TAG BADGES */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            {["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO & Maps", "Analytics & Reporting"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-2 sm:px-4 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm backdrop-blur text-gray-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="text-gray-200 text-base sm:text-lg leading-relaxed space-y-4"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            In the competitive online world, ranking high on search engines is crucial. At <strong className="text-gray-100">Sky Lift Group</strong>, we use proven SEO strategies to increase your visibility and attract the right audience.
                        </p>
                        <p>
                            From optimizing your website’s structure to creating targeted content, our team ensures your business stays ahead in search results.
                        </p>
                        <p>
                            Let’s grow your traffic, improve rankings, and convert visitors into loyal customers. Contact us today to start your SEO journey!
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
                            <img src="/assets/seo-side.jpg" alt="Seo" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>


            <CTASection />
            <Testimonials />
        </div>
    );
};

export default Seo;
