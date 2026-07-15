import { use, useState } from "react";
import { ChevronDown, Users, TrendingUp, MessageCircle, Zap, BarChart2, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SliderBar from "./Sliderbar";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <Users size={34} />,
        title: "Social Media Strategy",
        desc: "Craft tailored social media strategies to grow your audience and increase engagement.",
        highlight: true,
    },
    {
        icon: <TrendingUp size={34} />,
        title: "Paid Advertising Campaigns",
        desc: "Maximize reach and ROI with Facebook, Instagram, LinkedIn, and TikTok ads.",
    },
    {
        icon: <MessageCircle size={34} />,
        title: "Content Creation & Scheduling",
        desc: "Design engaging posts, videos, and stories to attract and retain followers.",
    },
    {
        icon: <Zap size={34} />,
        title: "Community Management",
        desc: "Interact with your audience, respond to messages, and build brand loyalty.",
    },
    {
        icon: <BarChart2 size={34} />,
        title: "Analytics & Performance Reporting",
        desc: "Track growth, engagement, and campaign performance to optimize results.",
    },
    {
        icon: <Settings size={34} />,
        title: "Influencer & Collaboration Management",
        desc: "Partner with influencers to expand your brand reach and credibility.",
    },
];

const faqs = [
    {
        q: "Which platforms do you manage?",
        a: "We manage Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube depending on your target audience.",
    },
    {
        q: "Do you create content for our social accounts?",
        a: "Yes, we provide graphics, videos, stories, and captions tailored to your brand voice.",
    },
    {
        q: "Do you run paid ad campaigns?",
        a: "Absolutely. We create, monitor, and optimize ad campaigns to maximize ROI and conversions.",
    },
    {
        q: "Will I get performance reports?",
        a: "Yes, detailed monthly reports show audience growth, engagement, reach, and ad performance.",
    },
];

const SocialMediaMarketing = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "Social Media Marketing | Sky Lift Group",
        description:
            "Sky Lift Group offers expert social media marketing services to increase brand awareness, engage your audience, and drive business growth across platforms like Facebook, Instagram, LinkedIn, and more.",
        canonical: "https://www.skyliftgroup.com/services/social-media"
    });

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/socialmedia-bg.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    Social Media Marketing
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Grow your brand, engage your audience, and boost conversions with our full-service social media marketing solutions.
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
                            HELPING BRANDS GROW AND ENGAGE ON SOCIAL MEDIA
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Effective Strategies for
                            <span className="text-[#00A693]"> Social Growth</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Build your online presence, increase engagement, and drive conversions.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Strategy & Planning
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Content Creation
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Paid Campaigns
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Community Management
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Influencer Collaboration
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Analytics & Reporting
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
                            Social media marketing helps your brand reach the right audience, engage followers, and convert them into loyal customers. At <strong>Sky Lift Group</strong>, we create strategies tailored to your business goals.
                        </p>
                        <p>
                            From content creation and paid campaigns to influencer collaborations and performance reporting, we cover all aspects of social media marketing.
                        </p>
                        <p>
                            Start building your online presence today and maximize your social media impact.
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
                            <img src="/assets/social-side.avif" alt="Social Media Marketing Services" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default SocialMediaMarketing;
