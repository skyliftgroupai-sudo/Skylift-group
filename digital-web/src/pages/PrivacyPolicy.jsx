// import React from "react";
// import { motion } from "framer-motion";
// import useSeo from "../hooks/useSeo";
// import { Link } from "react-router-dom";

// const PrivacyPolicy = () => {
//     const sections = [
//         {
//             title: "1. Information We Collect",
//             content:
//                 "We collect information such as your name, email, phone number, business data, and website details when you interact with Sky Lift Group or use our services."
//         },
//         {
//             title: "2. How We Use Your Information",
//             content:
//                 "Your data helps us improve SEO performance, manage PPC campaigns, optimize websites, enhance social media strategies, and power intelligent AI automation systems."
//         },
//         {
//             title: "3. AI Chatbot, AI Work Agent & AI Voice",
//             content:
//                 "Our AI systems process information strictly to provide automation, workflow efficiency, smart communication, and customer engagement. We never sell or misuse your data."
//         },
//         {
//             title: "4. Data Protection & Security",
//             content:
//                 "We implement encryption, secure hosting, and modern cybersecurity practices to protect your information from unauthorized access."
//         },
//         {
//             title: "5. Third-Party Integrations",
//             content:
//                 "We may use trusted tools for analytics, advertising, hosting, and automation. Each provider follows its own privacy and security standards."
//         },
//         {
//             title: "6. Your Rights",
//             content:
//                 "You may request access, updates, or deletion of your personal data at any time by contacting our team."
//         }
//     ];

//     useSeo({
//         title: "Privacy Policy | Sky Lift Group – Data Protection & AI Security",
//         description:
//             "Learn how Sky Lift Group protects your data across AI chatbots, voice agents, automation systems, and digital marketing services. We prioritize security, transparency, and privacy.",
//         canonical: "https://www.skyliftgroup.com/privacy-policy"
//     });

//     return (
//         <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">

//             {/* Animated Background Glow */}
//             <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#00A693]/20 rounded-full blur-[140px]"></div>
//             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00A693]/10 rounded-full blur-[120px]"></div>

//             <div className="relative max-w-6xl mx-auto px-6 z-10">

//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-24"
//                     initial={{ opacity: 0, y: -40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
//                         Privacy & Data Protection
//                     </span>

//                     <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//                         Built on
//                         <span className="bg-gradient-to-r from-[#00A693] to-teal-300 bg-clip-text text-transparent">
//                             {" "}Trust & Transparency
//                         </span>
//                     </h1>

//                     <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
//                         At Sky Lift Group, we combine digital marketing expertise with AI innovation
//                         while keeping your data secure and protected.
//                     </p>
//                 </motion.div>

//                 {/* Policy Sections */}
//                 <div className="space-y-12">
//                     {sections.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             whileHover={{ y: -6 }}
//                             className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-lg transition-all duration-500 hover:border-[#00A693]/50 hover:shadow-[0_0_40px_#00A69340]"
//                         >
//                             {/* Left Accent Line */}
//                             {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#00A693] to-transparent rounded-l-3xl"></div> */}

//                             <h2 className="text-2xl font-semibold text-white mb-4">
//                                 {item.title}
//                             </h2>
//                             <p className="text-gray-400 leading-relaxed text-lg">
//                                 {item.content}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* AI Highlight Section */}
//                 <motion.div
//                     className="mt-28 relative bg-gradient-to-r from-[#00A693]/20 via-transparent to-[#00A693]/10 border border-[#00A693]/30 rounded-3xl p-14 text-center backdrop-blur-xl shadow-xl"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-4xl font-bold text-white mb-6">
//                         Secure AI-Powered Growth
//                     </h3>
//                     <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
//                         From AI Chatbots and AI Work Agents to AI Voice automation,
//                         our intelligent systems are designed with privacy-first architecture.
//                         Your data stays protected while your business scales smarter.
//                     </p>
//                 </motion.div>

//                 {/* CTA */}
//                 <motion.div
//                     className="text-center mt-24"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-3xl font-bold text-white mb-8">
//                         Questions About Our Privacy Policy?
//                     </h3>

//                     <Link
//                         to="/contact"
//                         className="relative inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
//                     >
//                         Contact Sky Lift Group
//                     </Link>

//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default PrivacyPolicy;



import React from "react";
import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const PrivacyPolicy = () => {
    useSeo({
        title: "Privacy Policy | Sky Lift Group – Data Protection & AI Security",
        description:
            "Learn how Sky Lift Group protects your data across AI chatbots, voice agents, automation systems, and digital marketing services. We prioritize security, transparency, and privacy.",
        canonical: "https://www.skyliftgroup.com/privacy-policy"
    });

    return (
        <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 blur-3xl opacity-20"></div>

            <div className="relative max-w-5xl mx-auto px-6 z-10 text-gray-300">

                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
                        Privacy Policy
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Privacy <span className="text-[#00A693]">Policy</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg">
                        We are committed to protecting your information while delivering
                        high-performance digital marketing and AI-powered solutions.
                    </p>
                </motion.div>

                <div className="space-y-12">

                    {/* Introduction */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Introduction
                        </h2>
                        <p>
                            This Privacy Policy explains how Sky Lift Group collects, uses,
                            processes, and protects your information when you use our website
                            and services. By accessing or using our services, you agree to the
                            collection and use of information in accordance with this policy.
                        </p>
                    </div>

                    {/* Information Collected */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Information We Collect
                        </h2>

                        <h3 className="text-xl font-semibold text-white mb-2">
                            Personal Information
                        </h3>
                        <p className="mb-4">
                            When you request information or register for our services, we may
                            collect personal details such as your name, company name, email
                            address, phone number, and billing information.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">
                            Usage Information
                        </h3>
                        <p>
                            We may collect information about how you interact with our website
                            and services, including IP address, browser type, pages visited,
                            and other diagnostic data to improve user experience.
                        </p>
                    </div>

                    {/* Cookies & Tracking */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Cookies & Tracking Technologies
                        </h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can choose to disable cookies through your browser settings; however, some parts of the website may not function properly.
                        </p>
                    </div>

                    {/* No Selling of Data */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Data Protection & Non-Sale of Information
                        </h2>
                        <p>
                            Sky Lift Group does not sell, rent, trade, or share your personal
                            information with third parties for their marketing or promotional
                            purposes. Your information is used strictly to provide and improve
                            our services.
                        </p>
                    </div>
                    {/* User Rights */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or request deletion of your personal information at any time. To make such a request, please contact us using the information provided below.
                        </p>
                    </div>

                    {/* SMS Compliance Section */}
                    {/* SMS Compliance Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Mobile Information & SMS Privacy
                        </h2>

                        <p className="mb-4">
                            By submitting your information through our website forms, you consent to receive SMS messages from Sky Lift Group related to our services, updates, and customer support. Message frequency may vary based on your interaction with us. Message and data rates may apply depending on your mobile carrier.
                        </p>

                        <p className="mb-4">
                            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                        </p>

                        <p className="mb-4">
                            SMS consent and mobile opt-in information will not be shared with any third parties or affiliates for marketing purposes. We do not disclose mobile information to external organizations except as required by law or to fulfill services you have requested.
                        </p>

                        <p>
                            You may opt out of SMS communications at any time by replying “STOP” to any message or by contacting us directly.
                        </p>
                    </div>

                    {/* Security */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Data Security
                        </h2>
                        <p>
                            We implement appropriate technical and organizational safeguards
                            to protect your personal information against unauthorized access,
                            alteration, disclosure, or destruction.
                        </p>
                    </div>

                    {/* Age Restriction */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Age Restriction
                        </h2>
                        <p>
                            Our services are intended for individuals who are at least 18 years old. We do not knowingly collect personal information from individuals under the age of 18.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Contact Information
                        </h2>

                        <p className="text-gray-400">
                            If you have questions about this Privacy Policy, please contact us:
                        </p>

                        <div className="mt-4 space-y-2 text-gray-300">
                            <div>Sky Lift Group</div>

                            <div className="flex items-center gap-2">
                                <Mail className="text-[#00A693]" size={18} />
                                <a
                                    href="mailto:hello@skyliftgroup.com"
                                    className="hover:text-[#00A693] transition-colors"
                                >
                                    hello@skyliftgroup.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-24"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mb-8">
                        Questions About Our Privacy Policy?
                    </h3>

                    <Link
                        to="/contact"
                        className="relative inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
                    >
                        Contact Sky Lift Group
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default PrivacyPolicy;
