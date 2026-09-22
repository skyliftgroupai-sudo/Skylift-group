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
      {/* No hero photograph.
          bg-hero.webp was 95KB, it sat at 18% opacity behind the headline where
          it read as texture rather than as a picture, and because its preload
          lived in the shared index.html template every one of the other fifty
          pages downloaded it too without ever using it. It was also the largest
          contentful paint on this page, so the headline could not paint until
          it arrived. Two CSS gradients give the same depth for nothing, and the
          LCP element is now the h1 itself. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(38,166,173,0.20) 0%, rgba(20,42,71,0.55) 40%, #0B1220 80%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(70% 50% at 85% 15%, rgba(244,188,63,0.10) 0%, rgba(11,18,32,0) 70%)",
        }}
        aria-hidden="true"
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
