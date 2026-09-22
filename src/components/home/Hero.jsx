import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { HERO } from "../../lib/home-content";

/**
 * Dark hero.
 *
 * The h1 text is byte-for-byte what it was before the redesign — it is the
 * line that separates "Sky Lift Group" the agency from the unrelated
 * lift-equipment results, so it does not change. What did change is that it is
 * now the visual headline rather than a small line above a rotating carousel.
 *
 * The carousel is gone on purpose: react-slick cloned its slides for the
 * infinite loop, which shipped duplicate headings, and an auto-advancing hero
 * is the opposite of the calm, static look the rest of this redesign is going
 * for. Slide one's copy is kept as the subline.
 */
export default function Hero() {
  return (
    <section className="slg-dark relative overflow-hidden">
      {/* Background photograph, unchanged, dimmed much further than before so
          the type carries the section instead of competing with it. Explicit
          width/height and the preload in index.html keep this the LCP element
          with no layout shift. */}
      <img
        src="/assets/bg-hero.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        width={1920}
        height={1080}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(38,166,173,0.18) 0%, rgba(11,18,32,0.75) 45%, #0B1220 85%)",
        }}
      />

      <div className="slg-container relative slg-section">
        <div className="mx-auto max-w-4xl text-center">
          <p className="slg-chip slg-chip-dark mb-8">
            AI Automation &amp; Marketing
          </p>

          <h1 className="text-[2rem] leading-[1.12] font-extrabold text-white sm:text-[2.75rem] lg:text-[3.5rem]">
            Sky Lift Group — AI{" "}
            <span className="accent text-[#26A6AD]">Automation</span> and
            Marketing Agency for Home Service Businesses
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[1.0625rem] leading-[1.7] text-slate-300 sm:text-lg">
            {HERO.subline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/book" className="btn btn-primary w-full sm:w-auto">
              Book a Free Strategy Call
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn btn-ghost w-full sm:w-auto">
              See What We Do
            </Link>
          </div>

          {/* Trust row. Only facts already published elsewhere on the site go
              here — the Kalispell address from the footer and the industries
              from /work. A Google review count and rating belong here too but
              are not on the page until the owner confirms the real numbers. */}
          <div className="mt-12 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-[#26A6AD]"
                aria-hidden="true"
              />
              HVAC, plumbing, roofing, junk removal &amp; more
            </span>
            <span
              className="hidden h-4 w-px bg-white/15 sm:block"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#26A6AD]" aria-hidden="true" />
              US-based team in Kalispell, MT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
