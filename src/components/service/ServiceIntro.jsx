import Reveal from "../Reveal";

/**
 * A paragraph is either a plain string or an array of runs, where a run is
 * either a string or {b: "..."} for the bold spans the original pages used
 * around the company name. Keeping the shape means the converted pages read
 * word for word, emphasis included, like the ones they replace.
 */
function Paragraph({ value, className }) {
  if (typeof value === "string") return <p className={className}>{value}</p>;
  return (
    <p className={className}>
      {value.map((run, i) =>
        typeof run === "string" ? (
          run
        ) : (
          <strong key={i} className="font-semibold text-[#1C8A90]">
            {run.b}
          </strong>
        )
      )}
    </p>
  );
}

/**
 * The two-column intro band every hand-built service page opens with:
 * a small eyebrow line, the section heading, an italic lead, optional tag
 * pills, and a column of body paragraphs.
 *
 * Every string is passed in from the page. This component owns the layout and
 * nothing else, so converting sixteen pages to it changes how they look
 * without touching a word of what any of them says.
 */
export default function ServiceIntro({
  eyebrow,
  heading,
  headingAccent,
  lead,
  tags,
  paragraphs,
  dark = false,
}) {
  const headingText = headingAccent && heading.includes(headingAccent);

  return (
    <section className={`slg-section-tight ${dark ? "slg-dark" : "slg-light"}`}>
      <div className="slg-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {eyebrow && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                  dark ? "text-slate-400" : "text-[#94A3B8]"
                }`}
              >
                {eyebrow}
              </p>
            )}

            <h2
              className={`mt-4 text-[1.75rem] font-extrabold sm:text-[2.25rem] lg:text-[2.5rem] ${
                dark ? "text-white" : "text-[#142A47]"
              }`}
            >
              {headingText ? (
                <>
                  {heading.slice(0, heading.indexOf(headingAccent))}
                  <span className="accent text-[#26A6AD]">{headingAccent}</span>
                  {heading.slice(heading.indexOf(headingAccent) + headingAccent.length)}
                </>
              ) : (
                heading
              )}
            </h2>

            {lead && (
              <p
                className={`mt-5 text-[1.125rem] leading-[1.65] ${
                  dark ? "text-slate-300" : "text-[#475569]"
                }`}
              >
                {lead}
              </p>
            )}

            {tags && tags.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${
                      dark
                        ? "border-white/10 text-slate-300"
                        : "border-[#E2E8F0] bg-white text-[#475569]"
                    }`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <Paragraph
                  key={i}
                  value={p}
                  className={`text-[1.0625rem] leading-[1.75] ${
                    dark ? "text-slate-300" : "text-[#475569]"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
