import { Smile, TrendingUp, Clock, Briefcase } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function StatsSection() {
    return (
        <section className="relative py-10 bg-[#0a0a0a] overflow-hidden">

            {/* Soft background glow */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00A69320,transparent_60%)]"></div> */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    {/* Happy Clients */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg
                          transition-all duration-500 hover:-translate-y-2
                          hover:border-[#00A693]/50 hover:shadow-[0_0_30px_#00A69340]">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                            border border-[#00A693]/40 text-white
                            transition-all duration-300">
                            <Smile className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-bold text-white">
                            <AnimatedCounter end={350} suffix="+" />
                        </div>
                        <div className="text-sm text-gray-400 mt-2">Happy Clients</div>
                    </div>

                    {/* Average Growth */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg
                          transition-all duration-500 hover:-translate-y-2
                          hover:border-[#00A693]/50 hover:shadow-[0_0_30px_#00A69340]">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                            border border-[#00A693]/40 text-white
                            transition-all duration-300">
                            <TrendingUp className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-bold text-white">
                            <AnimatedCounter end={85} suffix="%" />
                        </div>
                        <div className="text-sm text-gray-400 mt-2">Average Growth</div>
                    </div>

                    {/* Support */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg
                          transition-all duration-500 hover:-translate-y-2
                          hover:border-[#00A693]/50 hover:shadow-[0_0_30px_#00A69340]">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                            border border-[#00A693]/40 text-white
                            transition-all duration-300">
                            <Clock className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-bold text-white">24/7</div>
                        <div className="text-sm text-gray-400 mt-2">Support Available</div>
                    </div>

                    {/* Experience */}
                    <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg
                          transition-all duration-500 hover:-translate-y-2
                          hover:border-[#00A693]/50 hover:shadow-[0_0_30px_#00A69340]">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                            border border-[#00A693]/40 text-white
                            transition-all duration-300">
                            <Briefcase className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-bold text-white">
                            <AnimatedCounter end={10} suffix="+" />
                        </div>
                        <div className="text-sm text-gray-400 mt-2">Years Experience</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
