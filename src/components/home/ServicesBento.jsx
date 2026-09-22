import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Building2,
  Chrome,
  Code2,
  Database,
  Facebook,
  MapPin,
  MessageCircle,
  MessageSquare,
  Music2,
  PenTool,
  PhoneMissed,
  Search,
  Share2,
  Star,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import Reveal from "../Reveal";
import { SERVICES, PILLARS } from "../../lib/home-content";

// One icon set, looked up by name so the content file stays plain data.
const ICONS = {
  Bot, Building2, Chrome, Code2, Database, Facebook, MapPin, MessageCircle,
  MessageSquare, Music2, PenTool, PhoneMissed, Search, Share2, Star, Target,
  Workflow, Zap,
};

function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || Zap;
  return (
    <Link
      to={service.link}
      className="slg-card slg-card-link group flex h-full flex-col p-6 sm:p-7"
    >
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
        <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <h3 className="text-lg font-bold text-[#142A47]">{service.title}</h3>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-[1.65] text-[#475569]">
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
  );
}

/**
 * Services, as a bento grid: the AI systems the business leads with take the
 * wider cells, the marketing services sit below in an even grid. Every link
 * and every description is what was on the page before the redesign; SMS
 * marketing and database reactivation were added because both pages exist and
 * were reachable only from the mega menu.
 */
export default function ServicesBento() {
  const ai = SERVICES.filter((s) => s.group === "ai");
  const marketing = SERVICES.filter((s) => s.group === "marketing");

  return (
    <section className="slg-section bg-white">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="slg-eyebrow mb-4">What we offer</p>
          <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem]">
            Shaping the Future of{" "}
            <span className="accent text-[#26A6AD]">Digital</span> Marketing
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#475569]">
            Innovative strategies. Impactful execution. Every service is
            designed to elevate your brand in the digital era.
          </p>
        </Reveal>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-[#26A6AD]">
          AI &amp; automation
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4">
          {ai.map((service, i) => (
            <Reveal
              key={service.link}
              delay={i * 50}
              // What makes this a bento rather than a plain grid. The first two
              // cells are double width — the two services the business leads
              // with — and so are the last two, which is also what makes eight
              // items tile a four-column grid with no gaps: 2+2 / 1+1+1+1 / 2+2.
              className={
                i < 2 || i >= ai.length - 2
                  ? "h-full md:col-span-2"
                  : "h-full md:col-span-1"
              }
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-[#26A6AD]">
          Marketing
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {marketing.map((service, i) => (
            <Reveal
              key={service.link}
              delay={i * 40}
              // Two double-width cells turn ten cards into twelve units, which
              // is exactly four full rows of three — no orphan card on the last
              // row. They sit at 0 and 3 so each lands at the start of a row.
              className={
                i === 0 || i === 3 ? "h-full lg:col-span-2" : "h-full"
              }
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* The six pillars from the old Focus section, kept as a plain list so
            they add substance without turning into a third wall of cards. */}
        <Reveal className="mt-20 border-t border-[#E2E8F0] pt-14">
          <h3 className="max-w-2xl text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem]">
            6 Core Pillars of Digital Marketing Excellence
          </h3>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.7] text-[#475569]">
            At Sky Lift Group, we build scalable digital systems that help
            brands grow with clarity, precision, and long-term impact.
          </p>
          <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <li key={pillar.title}>
                <span className="font-display text-sm font-bold text-[#26A6AD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 text-base font-bold text-[#142A47]">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[#475569]">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <Link to="/services" className="btn btn-ghost-light">
            View all services
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
