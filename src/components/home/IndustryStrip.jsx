import { Link } from "react-router-dom";
import { INDUSTRIES } from "../../lib/home-content";

/**
 * Thin band under the hero.
 *
 * A logo wall would be the obvious thing here, but there are no client logos we
 * have permission to publish, and inventing them is not on the table. The
 * industries served do the same job honestly, and every chip links to /work.
 */
export default function IndustryStrip() {
  return (
    <section className="slg-dark border-t border-white/10">
      <div className="slg-container py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Built for home service businesses across the US
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {INDUSTRIES.slice(0, 8).map((industry) => (
            <li key={industry.name}>
              <Link
                to="/work"
                className="inline-block rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-[#26A6AD]/50 hover:text-[#26A6AD]"
              >
                {industry.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
