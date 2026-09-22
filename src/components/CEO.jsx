import React from "react";
import { Quote, Linkedin, Twitter, Mail, Target, TrendingUp, Heart, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CeoMessage() {


    return (
        <div className="slg-dark w-full overflow-hidden">
            {/* CEO Profile Section */}
            <section className="slg-container py-16 lg:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* CEO Image */}
                    <Reveal as="div"
                        className="relative"
                    >
                                                <div className="relative overflow-hidden rounded-[16px] shadow-2xl border border-white/10">
                            <img
                                src="/assets/CEO.webp"
                                alt="CEO of Sky Lift Group"
                                className="w-full h-[500px] object-cover"
          width={810}
          height={1195}
          loading="lazy"
          decoding="async"
        />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/85 to-transparent px-6 pb-6 pt-20">
                                <h3 className="text-white text-2xl font-bold">Eric Williams</h3>
                                <p className="text-[#26A6AD] font-medium">Founder & Chief Executive Officer</p>
                                <div className="flex gap-3 mt-3">
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Linkedin size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Twitter size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Mail size={16} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* CEO Intro Text */}
                    <Reveal as="div"
                    >
                        <Reveal as="h2"
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            Leadership With <span className="text-[#26A6AD]">Purpose</span>
                        </Reveal>
                        <p className="text-gray-300 leading-8 text-lg mb-4">
                            At <span className="text-[#26A6AD] font-semibold">Sky Lift Group</span>, we believe every brand has a story worth telling and a future worth building. As CEO, my mission is to ensure our team brings that vision to life for every client we serve.
                        </p>
                        <p className="text-gray-300 leading-8 text-lg">
                            We don't just chase trends, we set them. Our work is driven by curiosity, shaped by strategy and measured by the real impact we create for the businesses who trust us.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* The Message Section */}
            <section className="bg-[#0B1220] pb-16 px-6 lg:pb-20">
                <div className="mx-auto max-w-4xl">
                    <Reveal as="div"
                        className="relative p-8 md:p-12 bg-[#142A47] rounded-[16px] shadow-md border border-white/10"
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#26A6AD] to-[#1C8A90] flex items-center justify-center shadow-lg">
                            <Quote size={30} className="text-white" />
                        </div>

                        <Reveal as="h2"
                            className="text-2xl md:text-3xl font-bold text-white mb-6 mt-4"
                        >
                            A Personal Note To Our Clients & Partners
                        </Reveal>

                        <div className="space-y-5 text-gray-300 leading-8 text-base md:text-lg">
                            <p>
                                When we started <span className="text-[#26A6AD] font-semibold">Sky Lift Group</span>, the goal was simple, build an agency that treats every client like a partner and every project like a promise. Years later, that principle still guides every decision we make.
                            </p>
                            <p>
                                The digital world moves fast. Algorithms change, platforms evolve and audience behavior shifts almost overnight. In this environment, businesses need more than a service provider, they need a team that listens closely, thinks strategically and executes with care.
                            </p>
                            <p>
                                That is the team we have built. A group of thinkers, creators and strategists who genuinely love what they do and take pride in the results they deliver. Whether we are building a brand from scratch or scaling one to new heights, we bring the same energy, honesty and craftsmanship to the table.
                            </p>
                            <p>
                                To our clients, thank you for trusting us with your vision. To our team, thank you for showing up every day with purpose. And to those considering working with us, we look forward to writing the next chapter together.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-6 border-t border-white/10">
                            <p className="text-[#26A6AD] text-2xl font-bold italic mb-1">Eric Williams</p>
                            <p className="text-gray-400 text-sm">Founder & CEO, Sky Lift Group</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Co-Founder Profile Section */}
            <section className="slg-container py-16 lg:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Co-Founder Intro Text (left on desktop, below image on mobile) */}
                    <Reveal as="div"
                        className="order-2 md:order-1"
                    >
                        <Reveal as="h2"
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            Driven By <span className="text-[#26A6AD]">Craft</span>
                        </Reveal>
                        <p className="text-gray-300 leading-8 text-lg mb-4">
                            Behind every successful campaign is a team obsessed with the details. As <span className="text-[#26A6AD] font-semibold">Co-Founder</span>, I focus on the people, systems and processes that turn bold ideas into real, measurable outcomes.
                        </p>
                        <p className="text-gray-300 leading-8 text-lg">
                            Strategy means little without execution. My role is to make sure the brilliant thinking that happens at Sky Lift Group reaches the world, on time, on brand and beyond expectations.
                        </p>
                    </Reveal>

                    {/* Co-Founder Image (right on desktop, top on mobile) */}
                    <Reveal as="div"
                        className="relative order-1 md:order-2"
                    >
                                                <div className="relative overflow-hidden rounded-[16px] shadow-2xl border border-white/10">
                            <img
                                src="/assets/co-founder.webp"
                                alt="Co-Founder of Sky Lift Group"
                                className="w-full h-[500px] object-cover"
          width={842}
          height={865}
          loading="lazy"
          decoding="async"
        />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/85 to-transparent px-6 pb-6 pt-20">
                                <h3 className="text-white text-2xl font-bold">Jason Roy</h3>
                                <p className="text-[#26A6AD] font-medium">Co-Founder & Chief Operating Officer</p>
                                <div className="flex gap-3 mt-3">
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Linkedin size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Twitter size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26A6AD] flex items-center justify-center transition">
                                        <Mail size={16} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Co-Founder Message Section */}
            <section className="bg-[#0B1220] pb-16 px-6 lg:pb-20">
                <div className="mx-auto max-w-4xl">
                    <Reveal as="div"
                        className="relative p-8 md:p-12 bg-[#142A47] rounded-[16px] shadow-md border border-white/10"
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#26A6AD] to-[#1C8A90] flex items-center justify-center shadow-lg">
                            <Quote size={30} className="text-white" />
                        </div>

                        <Reveal as="h2"
                            className="text-2xl md:text-3xl font-bold text-white mb-6 mt-4"
                        >
                            Where Vision Meets Execution
                        </Reveal>

                        <div className="space-y-5 text-gray-300 leading-8 text-base md:text-lg">
                            <p>
                                Eric and I built <span className="text-[#26A6AD] font-semibold">Sky Lift Group</span> around a shared belief, that great work comes from great people who care deeply about the outcome. Vision sets our direction, but disciplined execution is what gets us there.
                            </p>
                            <p>
                                Every project that comes through our doors is treated with the same rigor, whether it is a startup finding its voice or an established brand reaching for its next level. We sweat the details so our clients never have to.
                            </p>
                            <p>
                                What I am most proud of is the culture we have built, one where creativity and accountability live side by side. Our team does not just deliver work, they take ownership of results.
                            </p>
                            <p>
                                If you are looking for a partner who will treat your business like their own, you have found one. I am excited about what we will build together.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-6 border-t border-white/10">
                            <p className="text-[#26A6AD] text-2xl font-bold italic mb-1">Jason Roy</p>
                            <p className="text-gray-400 text-sm">Co-Founder & COO, Sky Lift Group</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}