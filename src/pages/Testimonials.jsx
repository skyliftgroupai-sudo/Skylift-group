import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";
import { videoTestimonials } from "../lib/video-testimonials";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import CTASection from "./CtaSection";
import ServiceInquiryForm from "../components/ServiceInquiryForm";

// Client video testimonials.
//
// Two things this page does deliberately:
//
//   The transcript is ordinary rendered text, not a caption track. A crawler
//   cannot watch a video, so the transcript is the only part of a testimonial
//   that can ever be read, quoted or ranked.
//
//   The embed sits in a fixed 16:9 box that is in the markup before the iframe
//   loads, so nothing moves when it does.
export default function Testimonials() {
  useSeo(seoFor("/testimonials"));
  const has = videoTestimonials.length > 0;

  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="px-6 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Client Testimonials
          </motion.h1>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            {has
              ? "Home service business owners on what we built for them and what changed. Every video is a real client, and every transcript is what they actually said."
              : "We publish testimonials only once a client has recorded one. There is nothing here yet, and we would rather show you an empty page than words we wrote ourselves."}
          </p>
        </div>
      </section>

      {has && (
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {videoTestimonials.map((t) => (
              <article
                key={t.id}
                id={t.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                {/* Fixed 16:9 box reserved before the iframe loads. */}
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={t.embedUrl}
                    title={`${t.name}, ${t.business} — video testimonial`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-none bg-black"
                  />
                </div>

                <div className="p-6 md:p-8">
                  {t.headline && (
                    <h2 className="text-xl md:text-2xl font-bold leading-snug">
                      {t.headline}
                    </h2>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
                    <span className="font-semibold text-white">{t.name}</span>
                    {t.business && (
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-[#00A693]" />
                        {t.business}
                      </span>
                    )}
                    {t.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#00A693]" />
                        {t.location}
                      </span>
                    )}
                    {t.industry && (
                      <span className="rounded-full border border-[#00A693]/40 px-3 py-0.5 text-[#00A693]">
                        {t.industry}
                      </span>
                    )}
                  </div>

                  {t.transcript && t.transcript.length > 0 && (
                    <div className="mt-7 border-t border-white/10 pt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Transcript
                      </h3>
                      <div className="mt-3 space-y-4">
                        {t.transcript.map((p, i) => (
                          <p key={i} className="text-gray-300 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
          <h2 className="text-xl md:text-2xl font-bold">
            What we ask clients to talk about
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Not how nice we are to work with. The useful version of a
            testimonial answers the questions another contractor is actually
            weighing up:
          </p>
          <ul className="mt-5 space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-[#00A693] font-bold">&bull;</span>
              What was breaking before — missed calls, quotes going cold, a dead
              customer list, ad spend with nothing to show.
            </li>
            <li className="flex gap-3">
              <span className="text-[#00A693] font-bold">&bull;</span>
              What we actually set up, in plain terms.
            </li>
            <li className="flex gap-3">
              <span className="text-[#00A693] font-bold">&bull;</span>
              How long it took before anything changed, including the honest
              answer when that was slower than they expected.
            </li>
            <li className="flex gap-3">
              <span className="text-[#00A693] font-bold">&bull;</span>
              What they would tell a contractor considering the same thing.
            </li>
          </ul>
          <p className="mt-6 text-gray-400 leading-relaxed">
            If you are a client and willing to record one, it takes about five
            minutes on a phone.{" "}
            <Link to="/contact" className="text-[#00A693] hover:underline">
              Get in touch
            </Link>{" "}
            and we will send you the questions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-4">
        <div className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Judging an agency without testimonials
          </h2>
          <p className="mt-4">
            Testimonials are the weakest evidence an agency can offer, because
            they are the easiest to manufacture. If you are comparing agencies,
            the checks that are harder to fake are worth more: ask for a report
            showing booked jobs rather than impressions, ask what they will ship
            in the first month, and ask who owns the ad account and the phone
            numbers when the relationship ends.
          </p>
          <p className="mt-4">
            We wrote those out in full in{" "}
            <Link
              to="/blog/red-flags-hiring-marketing-agency-trade-business"
              className="text-[#00A693] hover:underline"
            >
              the red flags worth watching for when hiring a marketing agency
            </Link>
            , including the cases where the right answer is that you do not need
            one yet.
          </p>
        </div>
      </section>

      <ServiceInquiryForm
        heading="Tell us what you need"
        intro="Send a few details about your business and what you want fixed, and we will come back to you with what we would do first."
      />
      <CTASection />
    </div>
  );
}
