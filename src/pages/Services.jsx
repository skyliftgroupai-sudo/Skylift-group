import { Link } from "react-router-dom";
import {
  ArrowRight, Bot, Chrome, Code2, Database, Facebook, MapPin, MessageCircle,
  MessageSquare, Music2, PenTool, PhoneMissed, Search, Share2, Star, Target,
  Workflow, Zap,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FinalCta from "../components/home/FinalCta";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { SERVICES } from "../lib/home-content";

// One icon set, looked up by name so src/lib/home-content.js stays plain data.
const ICONS = {
  Bot, Chrome, Code2, Database, Facebook, MapPin, MessageCircle, MessageSquare,
  Music2, PenTool, PhoneMissed, Search, Share2, Star, Target, Workflow, Zap,
};

// The same list the homepage renders. It used to live in a second copy inside
// src/pages/OurServices.jsx, which had already drifted — the copy here was
// missing SMS marketing and database reactivation even though both pages
// existed and were linked from the menu.
const GROUPS = [
  { key: "ai", label: "AI & automation", items: SERVICES.filter((s) => s.group === "ai") },
  { key: "marketing", label: "Marketing", items: SERVICES.filter((s) => s.group === "marketing") },
];

export default function ServicesPage() {
  useSeo(seoFor("/services"));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        titleAccent="Services"
        subtitle="We help you build a real presence online with content that connects, campaigns that perform, and strategies that move your brand forward."
        primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
        secondaryCta={{ to: "/work", label: "Industries We Serve" }}
      />

      {GROUPS.map((group, gi) => (
        <section
          key={group.key}
          className={`slg-section-tight ${gi % 2 === 0 ? "slg-light" : "bg-white"}`}
        >
          <div className="slg-container">
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#26A6AD]">
                {group.label}
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((service, i) => {
                const Icon = ICONS[service.icon] || Zap;
                return (
                  <Reveal key={service.link} delay={(i % 3) * 60} className="h-full">
                    <Link
                      to={service.link}
                      className="slg-card slg-card-link group flex h-full flex-col p-6 sm:p-7"
                    >
                      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                        <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-[1.0625rem] font-bold text-[#142A47]">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-[0.9375rem] leading-[1.7] text-[#475569]">
                        {service.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#26A6AD]">
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <FinalCta />
    </div>
  );
}
