import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * The dark hero every inner page shares.
 *
 * Before the redesign each template carried its own: a full-bleed stock
 * photograph at 70–88vh behind a black overlay, a different one per page, each
 * one a 60–100KB download that mostly rendered as a dark smudge. They are
 * replaced by the same two CSS gradients the homepage hero uses, so an inner
 * page now paints its headline immediately instead of waiting on a photograph.
 *
 * `title` is passed through verbatim and rendered as the page's only h1 — no
 * template here rewrites, truncates or appends to it.
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCta,
  secondaryCta,
  meta,
  size = "default",
}) {
  return (
    <section className="slg-dark relative overflow-hidden">
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

      <div
        className={`slg-container relative ${
          size === "compact" ? "py-16 lg:py-20" : "py-20 lg:py-28"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="slg-chip slg-chip-dark mb-7">{eyebrow}</p>}

          <h1
            className={`font-extrabold text-white ${
              size === "compact"
                ? "text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]"
                : "text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]"
            }`}
          >
            {/* titleAccent is a substring of the title, italicised in place.
                Splitting on it keeps the rendered text identical to `title`. */}
            {titleAccent && title.includes(titleAccent) ? (
              <>
                {title.slice(0, title.indexOf(titleAccent))}
                <span className="accent text-[#26A6AD]">{titleAccent}</span>
                {title.slice(title.indexOf(titleAccent) + titleAccent.length)}
              </>
            ) : (
              title
            )}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-slate-300">
              {subtitle}
            </p>
          )}

          {meta}

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Link to={primaryCta.to} className="btn btn-primary w-full sm:w-auto">
                  {primaryCta.label}
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to} className="btn btn-ghost w-full sm:w-auto">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
