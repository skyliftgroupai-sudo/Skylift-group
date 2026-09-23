import React from "react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";

const PrivacyPolicy = () => {
    useSeo(seoFor("/privacy-policy"));

    return (
        <section className="slg-light slg-section-tight">
            

            <div className="slg-legal mx-auto px-6">

                {/* Header */}
                <Reveal as="div"
                    className="text-center mb-14"
                >
                    <span className="slg-chip mb-6">
                        Privacy Policy
                    </span>

                    <h1 className="text-[1.875rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem] mb-6">
                        Privacy <span className="accent text-[#26A6AD]">Policy</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-[1.0625rem] leading-[1.7] text-[#475569]">
                        We are committed to protecting your information while delivering
                        high-performance digital marketing and AI-powered solutions.
                    </p>
                </Reveal>

                <div className="space-y-12">

                    {/* Introduction */}
                    <div>
                        <h2>
                            Introduction
                        </h2>
                        <p>
Last updated: September 23, 2026. This website (skyliftllc.com) is operated by Sky Lift LLC, referred to as "Sky Lift LLC," "we," "us," or "our" throughout this policy.                             This Privacy Policy explains how Sky Lift LLC collects, uses,
                            processes, and protects your information when you use our website
                            and services. By accessing or using our services, you agree to the
                            collection and use of information in accordance with this policy.
                        </p>
                    </div>

                    {/* Information Collected */}
                    <div>
                        <h2>
                            Information We Collect
                        </h2>

                        <h3>
                            Personal Information
                        </h3>
                        <p className="mb-4">
                            When you request information or register for our services, we may
                            collect personal details such as your name, company name, email
                            address, phone number, and billing information.
                        </p>

                        <h3>
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
                        <h2>
                            Cookies & Tracking Technologies
                        </h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can choose to disable cookies through your browser settings; however, some parts of the website may not function properly.
                        </p>
                    </div>

                    {/* No Selling of Data */}
                    <div>
                        <h2>
                            Data Protection & Non-Sale of Information
                        </h2>
                        <p>
                            Sky Lift LLC does not sell, rent, trade, or share your personal
                            information with third parties for their marketing or promotional
                            purposes. Your information is used strictly to provide and improve
                            our services.
                        </p>
                    </div>
                    {/* User Rights */}
                    <div>
                        <h2>
                            Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or request deletion of your personal information at any time. To make such a request, please contact us using the information provided below.
                        </p>
                    </div>

                    {/* SMS Compliance Section */}
                    {/* SMS Compliance Section */}
                    <div>
                        <h2>
                            Mobile Information & SMS Privacy
                        </h2>

                        <p className="mb-4">
                            By submitting your information through our website forms, you consent to receive SMS messages from Sky Lift LLC related to our services, updates, and customer support. Message frequency may vary based on your interaction with us. Message and data rates may apply depending on your mobile carrier.
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
                        <h2>
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
                        <h2>
                            Age Restriction
                        </h2>
                        <p>
                            Our services are intended for individuals who are at least 18 years old. We do not knowingly collect personal information from individuals under the age of 18.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2>
                            Contact Information
                        </h2>

                        <p >
                            If you have questions about this Privacy Policy, please contact us:
                        </p>

                        <div className="mt-4">
                            <div>Sky Lift LLC</div>

                            <div className="flex items-center gap-2">
                                <Mail className="text-[#1C8A90]" size={18} />
                                <a
                                    href="mailto:info@skyliftllc.com"
                                    className="hover:text-[#1C8A90]"
                                >
                                    info@skyliftllc.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Reveal as="div"
                    className="text-center mt-24"
                >
                    <h3 className="font-display text-[1.375rem] font-extrabold text-[#142A47] sm:text-[1.75rem] mb-8">
                        Questions About Our Privacy Policy?
                    </h3>

                    <Link
                        to="/contact"
                        className="btn btn-primary"
                    >
                        Contact Sky Lift LLC
                    </Link>
                </Reveal>

            </div>
        </section>
    );
};

export default PrivacyPolicy;
