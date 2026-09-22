import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

/** Closing call to action. Copy unchanged from the old CTA section. */
export default function FinalCta() {
  return (
    <section className="slg-dark slg-section relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 50% 100%, rgba(38,166,173,0.16) 0%, rgba(11,18,32,0) 60%)",
        }}
        aria-hidden="true"
      />
      <div className="slg-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-extrabold text-white sm:text-[2.25rem] lg:text-[2.75rem]">
            Elevate Your Brand to the{" "}
            <span className="accent text-[#26A6AD]">Next</span> Level
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-slate-300">
            At <strong className="text-white">Sky Lift Group</strong>, we craft
            smart, data-driven strategies that grow your audience, boost
            conversions, and help your brand stand out.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/book" className="btn btn-primary w-full sm:w-auto">
              Book a Free Strategy Call
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-ghost w-full sm:w-auto">
              Get Your Free Consultation
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Or email us at{" "}
            <a
              href="mailto:hello@skyliftgroup.com"
              className="text-[#26A6AD] hover:underline"
            >
              hello@skyliftgroup.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
