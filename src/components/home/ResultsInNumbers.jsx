import Reveal from "../Reveal";
import { STATS } from "../../lib/home-content";

/**
 * Results in numbers.
 *
 * Every figure comes from src/lib/home-content.js, which only holds numbers
 * already published on the site. Nothing is rounded up, extrapolated or
 * invented here — if a number is not confirmed it does not appear at all,
 * which is why there are six and not a tidy eight.
 *
 * The heading and paragraph are the copy from the old "Digital success isn't
 * accidental" section, kept word for word.
 */
export default function ResultsInNumbers() {
  return (
    <section className="slg-light slg-section">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="slg-eyebrow mb-4">Results in numbers</p>
          <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem]">
            Digital success isn’t{" "}
            <span className="accent text-[#26A6AD]">accidental</span> — it’s
            engineered with data, AI, and strategy.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#475569]">
            Sky Lift LLC helps modern brands grow through AI-powered digital
            marketing, intelligent automation, and performance-driven
            strategies. We turn complex data into clear actions, build
            meaningful digital experiences, and deliver measurable results that
            scale with your business. Every campaign is designed to convert,
            optimize, and grow long term.
          </p>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 60}
              className="slg-card px-6 py-8 text-center"
            >
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
  );
}
