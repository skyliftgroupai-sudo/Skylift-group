import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

/**
 * The icon-card grid on each service page.
 *
 * `items` carries a Lucide element, a title and a description — the same three
 * fields the old hand-built grids used, so each page keeps its own cards and
 * its own wording. `highlight` promotes one card the way it did before, now
 * with a teal border rather than a filled button, because a filled button here
 * would compete with the yellow CTA.
 */
export default function ServiceFeatureGrid({
  eyebrow,
  heading,
  headingAccent,
  intro,
  items,
  ctaTo = "/book",
  ctaLabel = "Book a Free Strategy Call",
  dark = false,
}) {
  const accented = headingAccent && heading && heading.includes(headingAccent);

  return (
    <section className={`slg-section-tight ${dark ? "slg-dark" : "bg-white"}`}>
      <div className="slg-container">
        {heading && (
          <Reveal className="mx-auto max-w-3xl text-center">
            {eyebrow && <p className="slg-eyebrow mb-4">{eyebrow}</p>}
            <h2
              className={`text-[1.75rem] font-extrabold sm:text-[2.25rem] ${
                dark ? "text-white" : "text-[#142A47]"
              }`}
            >
              {accented ? (
                <>
                  {heading.slice(0, heading.indexOf(headingAccent))}
                  <span className="accent text-[#26A6AD]">{headingAccent}</span>
                  {heading.slice(heading.indexOf(headingAccent) + headingAccent.length)}
                </>
              ) : (
                heading
              )}
            </h2>
            {intro && (
              <p
                className={`mt-5 text-[1.0625rem] leading-[1.7] ${
                  dark ? "text-slate-300" : "text-[#475569]"
                }`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${heading ? "mt-12" : ""}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60} className="h-full">
              <div
                className={`flex h-full flex-col p-6 sm:p-7 ${
                  dark ? "slg-card-dark" : "slg-card"
                } ${item.highlight ? "border-[#26A6AD]/45" : ""}`}
              >
                <span
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[12px] border text-[#26A6AD] ${
                    dark
                      ? "border-white/10 bg-white/5"
                      : "border-[#E2E8F0] bg-[#F7F8FA]"
                  } [&>svg]:h-5 [&>svg]:w-5`}
                >
                  {item.icon}
                </span>
                <h3
                  className={`font-display text-[1.0625rem] font-bold ${
                    dark ? "text-white" : "text-[#142A47]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-[0.9375rem] leading-[1.7] ${
                    dark ? "text-slate-300" : "text-[#475569]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to={ctaTo} className="btn btn-primary">
            {ctaLabel}
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
