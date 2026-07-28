import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Home,
  Droplets,
  Zap,
  Hammer,
  Truck,
  Landmark,
  Car,
  HardHat,
  HeartPulse,
  Trash2,
  Building2,
  Sparkles,
} from "lucide-react";
import { useCountUp } from "../hooks/counte";
import { useRef } from "react";
import CTASection from "./CtaSection";
import useSeo from "../hooks/useSeo";

const iconClass = "h-8 w-8";
const industries = [
  { name: "Roofing", icon: <Home className={iconClass} strokeWidth={1.75} /> },
  { name: "Plumbing", icon: <Droplets className={iconClass} strokeWidth={1.75} /> },
  { name: "Electrical", icon: <Zap className={iconClass} strokeWidth={1.75} /> },
  { name: "Handyman", icon: <Hammer className={iconClass} strokeWidth={1.75} /> },
  { name: "Moving Services", icon: <Truck className={iconClass} strokeWidth={1.75} /> },
  { name: "Mortgage", icon: <Landmark className={iconClass} strokeWidth={1.75} /> },
  { name: "Roadside Assistance", icon: <Car className={iconClass} strokeWidth={1.75} /> },
  { name: "General Contractors", icon: <HardHat className={iconClass} strokeWidth={1.75} /> },
  { name: "Assisted Living", icon: <HeartPulse className={iconClass} strokeWidth={1.75} /> },
  { name: "Junk Removal", icon: <Trash2 className={iconClass} strokeWidth={1.75} /> },
  { name: "Real Estate", icon: <Building2 className={iconClass} strokeWidth={1.75} /> },
  { name: "Auto Detailing", icon: <Sparkles className={iconClass} strokeWidth={1.75} /> },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 350, suffix: "+", label: "Happy Clients" },
    { value: 85, suffix: "%", label: "Average Growth" },
    { value: 95, suffix: "%", label: "Client Retention" }
  ];

  useSeo({
    title: "Industries We Serve | Sky Lift Group – AI Marketing for Local Business",
    description:
      "Sky Lift Group delivers AI-powered marketing and automation for roofing, plumbing, electrical, moving, real estate, senior care, and more local service industries.",
    canonical: "https://www.skyliftgroup.com/work"
  });

return (
  <div className="flex flex-col bg-[#0a0a0a] text-gray-100"> {/* main background and text color */}

    {/* Hero Section */}
    <section
      className="relative w-full min-h-[70vh] md:min-h-[88vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url("/assets/our-work.jpeg")` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight"
      >
        Trusted Across Every Industry
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-gray-200 text-base sm:text-lg md:text-xl mt-4 text-center max-w-md sm:max-w-xl"
      >
        From the trades to real estate and senior care, our AI marketing and automation solutions help local service businesses grow.
      </motion.p>
    </section>

    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00A69325,transparent_70%)] blur-2xl"></div>

      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => {
            const animatedValue = useCountUp(inView ? stat.value : 0);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#00A693] drop-shadow-[0_0_15px_#00A69370]">
                  {animatedValue}
                  {stat.suffix}
                </div>

                <div className="text-sm md:text-base text-gray-200 opacity-90 mt-2 tracking-wide">
                  {stat.label}
                </div>

                <div className="absolute inset-0 mx-auto w-20 h-20 blur-xl rounded-full bg-[#00A69330] opacity-40 -z-10 group-hover:scale-150 transition-all"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#00A69318,transparent_60%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#00A693] uppercase">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mt-4 leading-tight">
            AI Marketing for Every{" "}
            <span className="text-[#00A693]">Local Industry</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-5">
            From the trades to real estate and senior care, we help local
            service businesses across a wide range of industries generate more
            leads and automate their growth.
          </p>
        </motion.div>

        {/* Industry grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto"
        >
          {industries.map(({ name, icon }) => (
            <motion.div key={name} variants={gridItem} className="group relative">
              <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#00A693]/40 group-hover:shadow-[0_20px_50px_-12px_rgba(0,166,147,0.35)]">
                {/* gradient wash on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#00A693]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* icon badge */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00A693]/20 bg-gradient-to-br from-[#00A693]/20 to-[#00A693]/5 text-[#00A693] transition-transform duration-500 group-hover:scale-110">
                  {icon}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-[#00A693]/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
                </div>

                <h3 className="relative text-sm sm:text-base md:text-lg font-semibold text-center text-gray-100 transition-colors duration-300 group-hover:text-white">
                  {name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Don't see your industry? We work with local service businesses of
            every kind.
          </p>
          <Link
            to="/services"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#00A693] px-6 py-3 font-semibold text-[#00A693] transition-all duration-300 hover:bg-[#00A693] hover:text-white hover:shadow-[0_6px_20px_rgba(0,166,147,0.35)]"
          >
            Explore Our Services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </div>
);

};

export default Work;