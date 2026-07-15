import { useState } from "react";
import { Workflow, Cpu, GitBranch, Zap, Settings, TrendingUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
    {
        icon: <Workflow size={34} />,  // Custom Workflow Design
        title: "Custom Workflow Design",
        desc: "We map out and design AI-powered workflows tailored to your business processes, eliminating manual tasks and accelerating productivity across every department.",
        highlight: true,
    },
    {
        icon: <Cpu size={34} />,  // AI-Powered Process Automation
        title: "AI-Powered Process Automation",
        desc: "Deploy intelligent AI agents that handle repetitive tasks, data entry, and decision-making, freeing your team to focus on high-value strategic work.",
    },
    {
        icon: <GitBranch size={34} />,  // Multi-System Integration
        title: "Multi-System Integration",
        desc: "Seamlessly connect your CRM, email, calendar, and business tools through smart AI workflows that ensure data flows where it's needed automatically.",
    },
    {
        icon: <Zap size={34} />,  // Trigger-Based Automations
        title: "Trigger-Based Automations",
        desc: "Set up smart triggers that initiate actions instantly, from sending follow-ups to updating records, ensuring nothing falls through the cracks.",
    },
    {
        icon: <Settings size={34} />,  // Continuous Optimization
        title: "Continuous Optimization",
        desc: "Our AI continuously learns from your workflows and refines processes for maximum efficiency, reducing bottlenecks and improving performance over time.",
    },
    {
        icon: <TrendingUp size={34} />,  // Performance Insights & Reports
        title: "Performance Insights & Reports",
        desc: "Track time saved, tasks completed, and ROI with detailed dashboards that show exactly how AI is transforming your business operations.",
    },
];

const faqs = [
    {
        q: "What is AI workflow automation?",
        a: "AI workflow automation uses artificial intelligence to handle repetitive tasks, connect systems, and execute business processes automatically, saving time and reducing human error.",
    },
    {
        q: "Which tasks can be automated with AI?",
        a: "Almost any repetitive task including data entry, email responses, lead routing, scheduling, document processing, customer onboarding, and reporting can be fully automated using AI.",
    },
    {
        q: "How long does setup take?",
        a: "Most AI workflows are designed and deployed within 2 to 4 weeks, depending on complexity. We work closely with you to ensure smooth integration with your existing tools.",
    },
    {
        q: "Will AI replace my employees?",
        a: "No. AI workflow automation handles repetitive, time-consuming tasks so your team can focus on creative, strategic, and customer-facing work that drives real business value.",
    },
];


const AIWorkflowAutomation = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useSeo({
        title: "AI Workflow Automation Services | Sky Lift Group",
        description:
            "Sky Lift Group delivers intelligent AI workflow automation that streamlines processes, eliminates manual tasks, and scales your business with smart automation.",
        canonical: "https://www.skyliftgroup.com/services/ai-workflows"
    });


    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url("/assets/aiworkflow.png")` }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    AI Workflow Automation <br />
                    <span className="text-[#00A693]"> Smarter, Faster, Effortless</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    Streamline your business with intelligent AI automation that handles repetitive tasks, connects your tools, and accelerates growth on autopilot.
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
                            INTELLIGENT BUSINESS AUTOMATION
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                            Automate Tasks
                            <span className="text-[#00A693]"> Scale Your Business</span>
                        </h2>

                        <p className="italic text-lg sm:text-xl mt-4">
                            Eliminate repetitive work and free your team to focus on what truly matters with AI-powered automation.
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Custom Workflow Design
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Process Automation
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                System Integration
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Smart Triggers
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                AI Decision Making
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Data Sync & Flow
                            </span>
                            <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                                Performance Tracking
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
                            Our AI workflow automation transforms how your business operates by intelligently handling tasks that used to consume hours of your team's time every single day.
                        </p>

                        <p>
                            From lead processing to customer onboarding and internal reporting, we design custom AI workflows that connect your systems and execute flawlessly without manual intervention.
                        </p>

                        <p>
                            Powered by cutting-edge AI and seamless integrations, our solution helps you scale faster, reduce costs, and unlock new levels of operational efficiency.
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
                            <img src="/assets/workflowai.png" alt="AI Workflow Automation" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <CTASection />
            <Testimonials />
        </div>
    );
};

export default AIWorkflowAutomation;