import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, Car, Droplets, Hammer, HardHat, HeartPulse, Home,
  Landmark, Sparkles, Trash2, Truck, Zap,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FinalCta from "../components/home/FinalCta";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

const iconClass = "h-7 w-7";
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

// These four figures are the ones this page already published. They are not
// on the confirmed list, so they are flagged for the owner rather than quietly
// restated with more confidence than they have earned.
// TODO (owner to confirm or replace): Projects Delivered, Happy Clients,
// Average Growth, Client Retention.
const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "350+", label: "Happy Clients" },
  { value: "85%", label: "Average Growth" },
  { value: "95%", label: "Client Retention" },
];

const Work = () => {
  useSeo(seoFor("/work"));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Industries"
        title="Trusted Across Every Industry"
        titleAccent="Every"
        subtitle="From the trades to real estate and senior care, our AI marketing and automation solutions help local service businesses grow."
        primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
        secondaryCta={{ to: "/services", label: "See What We Do" }}
      />

      {/* The numbers used to count up from zero on scroll. A number that is
          wrong for the first second of every visit is not worth the JavaScript,
          and the animation ran on every one of these four at once. */}
      <section className="slg-light slg-section-tight">
        <div className="slg-container">
          <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60} className="slg-card px-6 py-8 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[2rem] font-extrabold tracking-tight text-[#142A47] sm:text-[2.5rem]">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-[#475569]">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="slg-section-tight bg-white">
        <div className="slg-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="slg-eyebrow mb-4">Who We Serve</p>
            <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.5rem]">
              AI Marketing for Every{" "}
              <span className="accent text-[#26A6AD]">Local</span> Industry
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
              From the trades to real estate and senior care, we help local
              service businesses across a wide range of industries generate more
              leads and automate their growth.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map(({ name, icon }, i) => (
              <Reveal key={name} as="li" delay={(i % 4) * 50} className="h-full">
                <div className="slg-card flex h-full flex-col items-center justify-center gap-4 p-7 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                    {icon}
                  </span>
                  <h3 className="font-display text-[0.9375rem] font-bold text-[#142A47] sm:text-base">
                    {name}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 text-center">
            <p className="text-[0.9375rem] text-[#475569]">
              Don't see your industry? We work with local service businesses of
              every kind.
            </p>
            <Link to="/services" className="btn btn-ghost-light mt-6">
              Explore Our Services
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </div>
  );
};

export default Work;
