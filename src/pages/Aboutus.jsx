import { Lightbulb, Target, Users, ShieldCheck, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FinalCta from "../components/home/FinalCta";
import CeoMessage from "../components/CEO";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

// Every heading and paragraph on this page is the copy that was already here.
// The redesign changed the surfaces, the type and the spacing; it did not
// rewrite the story, the mission, the values or the h1.

const VALUES = [
    {
        icon: ShieldCheck,
        title: "Integrity",
        text: "We operate with complete transparency and honesty in all our client relationships and business practices.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        text: "We continuously explore new technologies and strategies to stay ahead of industry trends.",
    },
    {
        icon: Award,
        title: "Excellence",
        text: "We strive for perfection in every project, delivering results that exceed expectations.",
    },
    {
        icon: Users,
        title: "Collaboration",
        text: "We work closely with our clients as true partners, ensuring their success is our success.",
    },
];

const WHY_US = [
    {
        icon: Award,
        title: "Reliable Results",
        text: "We focus on campaigns that deliver measurable outcomes, not guesswork.",
    },
    {
        icon: Users,
        title: "Client-First Approach",
        text: "Your goals guide every strategy we build. We treat your brand like our own.",
    },
    {
        icon: Lightbulb,
        title: "Experienced Team",
        text: "Our specialists bring years of practical experience across multiple industries.",
    },
];

export default function AboutUs() {
    useSeo(seoFor("/about-us"));

    return (
        <div className="w-full">
            <PageHero
                eyebrow="About us"
                title="About Sky Lift LLC — AI Marketing for Home Service Businesses"
                titleAccent="AI Marketing"
                subtitle="We build the AI lead capture, follow-up and advertising systems that turn a home service business’s missed calls and cold leads into booked jobs."
                primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
                secondaryCta={{ to: "/services", label: "See What We Do" }}
            />

            {/* Our Story */}
            <section className="slg-light slg-section-tight">
                <div className="slg-container">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <Reveal>
                            <p className="slg-eyebrow mb-4">Our story</p>
                            <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem]">
                                Our <span className="accent text-[#26A6AD]">Story</span>
                            </h2>
                            <p className="mt-6 text-[1.0625rem] leading-[1.8] text-[#475569]">
                                <span className="font-semibold text-[#1C8A90]">Sky Lift LLC</span>{" "}
                                began with a simple idea: support businesses with smart digital
                                solutions that actually make a difference. What started as a small
                                team grew into a full-service agency trusted by clients worldwide.
                                Our focus is on real results, clear communication and long-term
                                success.
                            </p>
                        </Reveal>

                        <Reveal delay={80}>
                            <img
                                src="/assets/ourstory.webp"
                                alt="Our Story"
                                width={1200}
                                height={800}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[3/2] w-full rounded-[16px] border border-[#E2E8F0] object-cover shadow-[var(--shadow-lift)]"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <CeoMessage />

            {/* Mission & Vision */}
            <section className="slg-section-tight bg-white">
                <div className="slg-container">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <p className="slg-eyebrow mb-4">Mission &amp; vision</p>
                        <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem]">
                            Our Mission &amp;{" "}
                            <span className="accent text-[#26A6AD]">Vision</span>
                        </h2>
                        <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
                            Driving digital transformation through innovative marketing strategies
                        </p>
                    </Reveal>

                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        <Reveal className="slg-card h-full p-8">
                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                                <Target size={22} aria-hidden="true" strokeWidth={1.75} />
                            </span>
                            <h3 className="font-display text-[1.25rem] font-bold text-[#142A47]">
                                Our Mission
                            </h3>
                            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-[#475569]">
                                To empower businesses with cutting-edge digital marketing solutions
                                that drive growth, increase visibility, and deliver measurable
                                results. We&rsquo;re committed to being the strategic partner that
                                helps our clients navigate the ever-evolving digital landscape.
                            </p>
                        </Reveal>

                        <Reveal delay={80} className="slg-card h-full p-8">
                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                                <Lightbulb size={22} aria-hidden="true" strokeWidth={1.75} />
                            </span>
                            <h3 className="font-display text-[1.25rem] font-bold text-[#142A47]">
                                Our Vision
                            </h3>
                            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-[#475569]">
                                To be the leading global digital marketing agency recognized for
                                innovation, excellence, and transformative results. We envision a
                                future where every business, regardless of size, has access to
                                world-class digital marketing expertise.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="slg-light slg-section-tight">
                <div className="slg-container">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <p className="slg-eyebrow mb-4">What we stand for</p>
                        <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem]">
                            Our Core <span className="accent text-[#26A6AD]">Values</span>
                        </h2>
                        <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
                            The principles that guide everything we do
                        </p>
                    </Reveal>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {VALUES.map((item, i) => (
                            <Reveal key={item.title} delay={i * 60} className="slg-card h-full p-6">
                                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white text-[#26A6AD]">
                                    <item.icon size={20} aria-hidden="true" strokeWidth={1.75} />
                                </span>
                                <h3 className="font-display text-[1.0625rem] font-bold text-[#142A47]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#475569]">
                                    {item.text}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="slg-section-tight bg-white">
                <div className="slg-container">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <p className="slg-eyebrow mb-4">Why us</p>
                        <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem]">
                            Why Choose <span className="accent text-[#26A6AD]">Us</span>
                        </h2>
                        <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
                            Trusted by businesses looking for real growth
                        </p>
                    </Reveal>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {WHY_US.map((item, i) => (
                            <Reveal key={item.title} delay={i * 60} className="slg-card h-full p-8">
                                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                                    <item.icon size={22} aria-hidden="true" strokeWidth={1.75} />
                                </span>
                                <h3 className="font-display text-[1.125rem] font-bold text-[#142A47]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-[1rem] leading-[1.75] text-[#475569]">
                                    {item.text}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCta />
        </div>
    );
}
