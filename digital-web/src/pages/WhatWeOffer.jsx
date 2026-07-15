import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Target,
    PenTool,
    ArrowRight,
    Search,
    MapPin,
    Share2,
    Code2,
    Star,
    PhoneMissed,
    Facebook,
    Chrome,
    Music2,
    Bot,
    Workflow,
    MessageCircle,
    Zap,
} from "lucide-react";

export default function WhatWeOffer2025() {
    const services = [
        {
            icon: <Workflow className="h-7 w-7 text-white" />,
            title: "AI Workflow Automations",
            link: "/services/ai-workflows",
            desc: "Smart automations that eliminate manual work and streamline your business operations.",
        },
        {
            icon: <Bot className="h-7 w-7 text-white" />,
            title: "AI Voice Agents",
            link: "/services/ai-voice-agents",
            desc: "AI-powered voice agents that answer calls, qualify leads, and book appointments 24/7.",
        },
        {
            icon: <Bot className="h-7 w-7 text-white" />,
            title: "AI Chatbots",
            link: "/services/ai-chatbots",
            desc: "Smart chatbots that engage visitors, answer questions, and capture leads automatically.",
        },
        {
            icon: <Facebook className="h-7 w-7 text-white" />,
            title: "Meta Ads",
            link: "/services/meta-ads",
            desc: "High-converting Facebook and Instagram ads optimized for engagement and sales.",
        },
        {
            icon: <Chrome className="h-7 w-7 text-white" />,
            title: "Google Ads",
            link: "/services/google-ads",
            desc: "Intent-driven Google Ads campaigns that capture demand and convert fast.",
        },
        {
            icon: <Music2 className="h-7 w-7 text-white" />,
            title: "TikTok Ads",
            link: "/services/tiktok-ads",
            desc: "Scroll-stopping TikTok ad campaigns built to drive awareness and conversions.",
        },
        {
            icon: <Code2 className="h-7 w-7 text-white" />,
            title: "Web Design & Development",
            link: "/services/web-design",
            desc: "High-performance, mobile-first websites designed to reflect your brand and turn visitors into leads.",
        },
        {
            icon: <Target className="h-7 w-7 text-white" />,
            title: "PPC Management",
            link: "/services/ppc-management",
            desc: "ROI-focused ad campaigns designed to generate consistent leads and measurable results.",
        },
        {
            icon: <PenTool className="h-7 w-7 text-white" />,
            title: "Content Writing",
            link: "/services/content-writing",
            desc: "Persuasive, SEO-friendly content that educates, builds trust, and converts readers.",
        },
        {
            icon: <Search className="h-7 w-7 text-white" />,
            title: "Search Engine Optimization",
            link: "/services/seo",
            desc: "Data-driven SEO strategies that improve rankings, increase organic traffic, and deliver long-term growth.",
        },
        {
            icon: <MapPin className="h-7 w-7 text-white" />,
            title: "Local Maps Optimization",
            link: "/services/local-maps",
            desc: "Dominate local searches and Google Maps with fully optimized business listings.",
        },
        {
            icon: <Share2 className="h-7 w-7 text-white" />,
            title: "Social Media Marketing",
            link: "/services/social-media",
            desc: "Strategic social campaigns that build brand awareness, engagement, and loyal communities.",
        },


        {
            icon: <Star className="h-7 w-7 text-white" />,
            title: "5-Star Reviews",
            link: "/services/reviews",
            desc: "Increase positive online reviews and build instant trust with automated review strategies.",
        },
        {
            icon: <PhoneMissed className="h-7 w-7 text-white" />,
            title: "Missed Call Text Back",
            link: "/services/missed-call-text-back",
            desc: "Never lose a lead again. Automatically follow up missed calls with instant SMS responses.",
        },

        {
            icon: <MessageCircle className="h-7 w-7 text-white" />,
            title: "Automated Lead Follow-Up",
            link: "/services/lead-follow-up",
            desc: "Convert more leads automatically with instant SMS, email, and WhatsApp follow-ups.",
        },
        {
            icon: <Zap className="h-7 w-7 text-white" />,
            title: "One-Click Marketing Campaigns",
            link: "/services/one-click-campaigns",
            desc: "Launch complete marketing campaigns instantly with pre-built, proven systems.",
        },
    ];


    return (
        <section className="relative py-10 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-5 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-md border border-[#00A693]/40">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Shaping the Future of <span className="text-[#00A693]">Digital Marketing</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Innovative strategies. Impactful execution. Every service is designed to elevate your brand in the digital era.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#00A693]/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_#00A69340]"
                        >
                            <div
                                className="
                                    flex h-14 w-14 items-center justify-center rounded-xl
                                    border border-[#00A693]/60
                                    text-[#00A693]
                                    bg-transparent
                                    mb-6
                                    transition-all duration-300
                                    
                                "
                            >
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 mb-6">{service.desc}</p>

                            <Link
                                to={service.link}
                                className="inline-flex items-center text-[#00A693] font-medium cursor-pointer"
                            >
                                Lets Start
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00A693]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center bg-[#00A693] hover:bg-[#00947F] text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-[0_0_30px_#00A69360] transition-transform hover:scale-105"
                    >
                        Explore All Services
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
