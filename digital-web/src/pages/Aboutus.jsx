import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, ShieldCheck, Award } from "lucide-react";
import CTASection from "./CtaSection";
import SliderBar from "./Sliderbar";
import Testimonials from "./Testionmial";
import useSeo from "../hooks/useSeo";
import CeoMessage from "../components/CEO";

export default function AboutUs() {

    useSeo({
        title: "About Us | Sky Lift Group – Digital Marketing Experts",
        description:
            "Learn about Sky Lift Group, a results-driven digital marketing agency helping brands grow through SEO, social media, PPC, and web design.",
        canonical: "https://www.skyliftgroup.com/about"
    });

    return (
        <div className="w-full overflow-hidden bg-[#0a0a0a]">
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/servicebgimg.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/80" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    About Skylift Group
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

            {/* Our Story */}
            <section className="max-w-6xl mx-auto px-4 py-16 ">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-lg leading-8 text-gray-300"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold text-left text-white mb-12"
                        >
                            Our Story
                        </motion.h2>
                        <span className="text-[#00A693] text-semibold">Skylift Group</span> began with a simple idea: support businesses with smart digital
                        solutions that actually make a difference. What started as a small team grew into
                        a full-service agency trusted by clients worldwide. Our focus is on real results,
                        clear communication and long-term success.
                    </motion.p>

                    {/* Image */}
                    <motion.img
                        src="/assets/ourstory.jpg"
                        alt="Our Story"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl shadow-xl object-cover w-full h-[350px]"
                    />
                </div>
            </section>
            <CeoMessage />

            {/* Mission & Vision */}
            <section className="bg-[#0a0a0a] py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl font-bold text-center text-white mb-5"
                    >
                        Our Mission & Vision
                        <br />
                        <span className="text-xl text-gray-300">
                            Driving digital transformation through innovative marketing strategies
                        </span>
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="p-8 bg-white/5 rounded-2xl shadow-md border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-md">
                                    <Target size={28} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-gray-300 leading-7">
                                To empower businesses with cutting-edge digital marketing solutions that drive growth, increase visibility, and deliver measurable results. We're committed to being the strategic partner that helps our clients navigate the ever-evolving digital landscape.
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="p-8 bg-white/5 rounded-2xl shadow-md border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-md">
                                    <Lightbulb size={28} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                            </div>

                            <p className="text-gray-300 leading-7">
                                To be the leading global digital marketing agency recognized for innovation, excellence, and transformative results. We envision a future where every business, regardless of size, has access to world-class digital marketing expertise.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="max-w-6xl mx-auto px-4 py-5">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold text-center text-white mb-12"
                >
                    Our Core Values <br />
                    <span className="text-xl text-gray-300">
                        The principles that guide everything we do
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Integrity", text: "We operate with complete transparency and honesty in all our client relationships and business practices." },
                        { icon: Lightbulb, title: "Innovation", text: "We continuously explore new technologies and strategies to stay ahead of industry trends." },
                        { icon: Award, title: "Excellence", text: "We strive for perfection in every project, delivering results that exceed expectations." },
                        { icon: Users, title: "Collaboration", text: "We work closely with our clients as true partners, ensuring their success is our success." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className=" text-center flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-lg">
                                <item.icon size={34} className="text-white" />
                            </div>

                            <h4 className="text-xl font-bold mt-4 mb-2 text-white">{item.title}</h4>
                            <p className="text-gray-300 text-sm md:text-base leading-6">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTASection />
            {/* Why Choose Us */}
            <section className="bg-[#0a0a0a] py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        Why Choose Us
                        <br />
                        <span className="text-xl text-gray-300">
                            Trusted by businesses looking for real growth
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Reliable Results",
                                text: "We focus on campaigns that deliver measurable outcomes, not guesswork.",
                                icon: Award,
                            },
                            {
                                title: "Client-First Approach",
                                text: "Your goals guide every strategy we build. We treat your brand like our own.",
                                icon: Users,
                            },
                            {
                                title: "Experienced Team",
                                text: "Our specialists bring years of practical experience across multiple industries.",
                                icon: Lightbulb,
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-8 bg-white/5 rounded-2xl shadow-md hover:shadow-lg transition border border-white/10"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-md mb-4">
                                    <item.icon size={30} className="text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 leading-7">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Testimonials />
        </div>
    );
}
