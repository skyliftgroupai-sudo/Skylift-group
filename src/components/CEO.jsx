import React from "react";
import { Quote, Target, TrendingUp, Heart, Sparkles } from "lucide-react";
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
                                alt="CEO of Sky Lift LLC"
                                className="w-full h-[500px] object-cover"
          width={810}
          height={1195}
          loading="lazy"
          decoding="async"
        />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/85 to-transparent px-6 pb-6 pt-20">
                                <h3 className="text-white text-2xl font-bold">Eric Williams</h3>
                                <p className="text-[#26A6AD] font-medium">Founder & Chief Executive Officer</p>
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
                            At <span className="text-[#26A6AD] font-semibold">Sky Lift LLC</span>, we believe every brand has a story worth telling and a future worth building. As CEO, my mission is to ensure our team brings that vision to life for every client we serve.
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
                                When we started <span className="text-[#26A6AD] font-semibold">Sky Lift LLC</span>, the goal was simple, build an agency that treats every client like a partner and every project like a promise. Years later, that principle still guides every decision we make.
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
                            <p className="text-gray-400 text-sm">Founder & CEO, Sky Lift LLC</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}