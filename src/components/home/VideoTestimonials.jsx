import { Play, Video } from "lucide-react";
import Reveal from "../Reveal";
import { videoTestimonials, SHOW_PLACEHOLDERS } from "../../lib/video-testimonials";

/**
 * Video testimonials.
 *
 * There are no client videos yet, so this renders three neutral placeholder
 * cards: a frame, a play affordance and the words "client video coming soon".
 * No name, no business, no quote, no number — nothing a reader could take for
 * a review that does not exist. As soon as videoTestimonials has entries the
 * real cards replace them, and setting SHOW_PLACEHOLDERS to false hides the
 * section outright.
 */
export default function VideoTestimonials() {
  const hasVideos = videoTestimonials.length > 0;
  if (!hasVideos && !SHOW_PLACEHOLDERS) return null;

  const cards = hasVideos ? videoTestimonials : [null, null, null];

  return (
    <section className="slg-light slg-section">
      <div className="slg-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="slg-eyebrow mb-4">In their own words</p>
          <h2 className="text-[1.75rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem]">
            Hear it from the{" "}
            <span className="accent text-[#26A6AD]">owners</span> who run these
            businesses
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-[#475569]">
            Short videos from the contractors we work with — what was breaking,
            what we built, and what changed.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((item, i) => (
            <Reveal key={item?.videoUrl || i} delay={i * 70}>
              {item ? (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slg-card slg-card-link group block overflow-hidden"
                >
                  <span className="relative block aspect-video bg-[#142A47]">
                    <img
                      src={item.poster}
                      alt={`${item.name} of ${item.business} in ${item.location}`}
                      width={640}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Play
                          className="ml-0.5 h-6 w-6 text-[#142A47]"
                          aria-hidden="true"
                          fill="currentColor"
                        />
                      </span>
                    </span>
                  </span>
                  <span className="block p-6">
                    <span className="block font-display text-base font-bold text-[#142A47]">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-[#475569]">
                      {item.business} — {item.location}
                    </span>
                    <span className="mt-3 block text-[0.9375rem] leading-[1.65] text-[#475569]">
                      {item.result}
                    </span>
                  </span>
                </a>
              ) : (
                <div className="slg-card overflow-hidden">
                  <div className="flex aspect-video items-center justify-center border-b border-[#E2E8F0] bg-[#EEF1F5]">
                    <div className="text-center">
                      <Video
                        className="mx-auto h-8 w-8 text-[#94A3B8]"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                      <p className="mt-3 text-sm font-medium text-[#94A3B8]">
                        Client video coming soon
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div
                      className="h-3 w-2/5 rounded bg-[#E2E8F0]"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-3 h-3 w-3/5 rounded bg-[#EEF1F5]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
