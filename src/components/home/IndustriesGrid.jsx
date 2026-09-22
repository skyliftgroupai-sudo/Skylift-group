import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, Car, Droplets, Hammer, HardHat, HeartPulse, Home,
  MapPin, Sparkles, Trash2, Truck, Wind, Zap,
} from "lucide-react";
import Reveal from "../Reveal";
import { INDUSTRIES } from "../../lib/home-content";

const ICONS = {
  Building2, Car, Droplets, Hammer, HardHat, HeartPulse, Home, MapPin,
  Sparkles, Trash2, Truck, Wind, Zap,
};

/** The industries served, same list as /work, every tile linking there. */
export default function IndustriesGrid() {
  return (
    <section className="slg-section bg-white">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="slg-eyebrow mb-4">Industries we serve</p>
          <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem]">
            Built for the trades that run on{" "}
            <span className="accent text-[#26A6AD]">phone</span> calls
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#475569]">
            If your business books work over the phone or from a form, the same
            systems apply — whatever the truck says on the side.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.icon] || Home;
            return (
              <Reveal key={industry.name} as="li" delay={(i % 4) * 50}>
                <Link
                  to="/work"
                  className="slg-card slg-card-link flex h-full items-center gap-3 px-5 py-4"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-[#26A6AD]"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <span className="font-display text-[0.9375rem] font-bold text-[#142A47]">
                    {industry.name}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-12 text-center">
          <Link to="/work" className="btn btn-ghost-light">
            See the industries we work with
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
