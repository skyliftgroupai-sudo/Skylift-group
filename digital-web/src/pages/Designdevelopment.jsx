import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Smartphone,
    ShoppingCart,
    Search,
    Settings,
    Code2,
    Wrench
} from "lucide-react";
import SliderBar from "./Sliderbar";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import useSeo from "../hooks/useSeo";


const services = [
    {
        icon: <Code2 size={34} />,
        title: "Custom Website Design",
        desc: "Unique layouts that match your brand with clean visuals and a smooth user experience.",
        highlight: true,
    },
    {
        icon: <Wrench size={34} />,
        title: "WordPress Website Development",
        desc: "Custom themes, plugins and performance-optimized sites built for stability.",
    },
    {
        icon: <Smartphone size={34} />,
        title: "Mobile Responsive Design",
        desc: "Fully responsive interfaces tested on all major screen sizes.",
    },
    {
        icon: <ShoppingCart size={34} />,
        title: "E-Commerce Development",
        desc: "Secure stores with payment integration, product management and order automation.",
    },
    {
        icon: <Search size={34} />,
        title: "SEO-Friendly Web Development",
        desc: "Fast, structured, and optimized for better visibility on search engines.",
    },
    {
        icon: <Settings size={34} />,
        title: "Website Maintenance & Support",
        desc: "Updates, security monitoring, backups and speed improvements.",
    },
];

const faqs = [
    {
        q: "What is the typical development timeline?",
        a: "The timeline varies based on complexity, but most projects are completed within 1–4 weeks.",
    },
    {
        q: "Do you offer post-launch support?",
        a: "Yes. We provide maintenance plans that include updates, monitoring, and security enhancements.",
    },
    {
        q: "Will my website be optimized for SEO?",
        a: "Yes. Every site is developed with modern SEO structure, clean markup, and fast performance.",
    },
    {
        q: "Can you develop advanced or custom features?",
        a: "Yes. We build custom modules, integrations, and tailored functionality based on your goals.",
    },
];

const Designweb = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useSeo({
        title: "Website Design & Development | Sky Lift Group",
        description:
            "Sky Lift Group provides professional website design and development services to create stunning, responsive, and SEO-friendly websites that drive business growth.",
        canonical: "https://www.skyliftgroup.com/services/web-design"
    });

    return (
        <div className="w-full">
            {/* SECTION 1 */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/web-design.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    Website Design & Development
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Helping brands rise with creativity, strategy and measurable growth.
                </motion.p>
            </section>

            {/* <SliderBar /> */}

            {/* SECTION 2 — Web Maintenance */}
            <motion.section
                className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center px-6 md:px-0">
                    {/* LEFT SIDE */}
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs sm:text-sm tracking-wide opacity-80">
                            PROUDLY AWARDED 20+ WEB DESIGN AWARDS
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Web Maintenance <br />
                            <span className="text-[#00A693]">& Support</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            We’re Also Specialists In...
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                SEO Services
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Content Marketing
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Local Maps Optimization
                            </span>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="text-white text-base sm:text-lg leading-relaxed space-y-4"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            In today’s digital world, your website is often the first interaction potential customers have with your brand. At <strong>Sky Lift Group</strong>, we create modern, user-friendly websites that look great and perform even better.
                        </p>
                        <p>
                            Whether you’re starting new or redesigning an existing site, we bring your vision to life.
                        </p>
                        <p>
                            Let’s build a website that reflects your brand and supports your business goals. Get in touch to start your project.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* SECTION 3 — SERVICE CARDS */}
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

            {/* SECTION 4 — FAQ */}
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
                            <img src="/assets/web-side.jpg" alt="web-development" className="rounded-2xl shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>

    );
};

export default Designweb;
