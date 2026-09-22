import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { STEPS } from "../../lib/home-content";

/**
 * Three steps, on a dark band.
 *
 * The intro copy is the old "Strategy. Innovation. Measurable Growth." block,
 * kept word for word; the three stock photographs that used to sit beside it
 * are gone, which is the only thing this section removes.
 *
 * The steps themselves describe how the engagement runs. They deliberately
 * claim no timeframe and no result, because none has been verified.
 */
export default function HowItWorks() {
  return (
    <section className="slg-dark slg-section">
      <div className="slg-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="slg-eyebrow mb-4">
              Strategy. Innovation. Measurable Growth.
            </p>
            <h2 className="text-[1.75rem] font-extrabold text-white sm:text-[2.25rem] lg:text-[2.5rem]">
              We craft digital strategies that connect,{" "}
              <span className="accent text-[#26A6AD]">convert</span>, and scale.
            </h2>

            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.7] text-slate-300">
              <p>
                At <strong className="text-white">Sky Lift Group</strong>,
                growth begins with clarity and execution. We design data-driven
                strategies tailored to your brand, your audience, and your goals
                — because real results demand precision.
              </p>
              <p>
                By blending creativity with AI insights and analytics, we ensure
                your message doesn’t just reach users — it influences decisions.
                From awareness to conversion, every move is intentional and
                measurable.
              </p>
              <p>
                Whether it’s SEO, content, paid media, or full digital
                transformation, our strategies evolve with your business and the
                market. We build digital systems that are smart, scalable, and
                built to last.
              </p>
            </div>

            <Link to="/book" className="btn btn-primary mt-9">
              Book a Free Strategy Call
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>
          </Reveal>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#26A6AD]">
              How it works
            </h3>
            <ol className="mt-8 space-y-4">
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={i * 80}
                  className="slg-card-dark p-6 sm:p-7"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#26A6AD]/40 font-display text-sm font-bold text-[#26A6AD]"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[0.9375rem] leading-[1.65] text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
