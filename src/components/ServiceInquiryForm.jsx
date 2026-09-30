import { useEffect, useRef, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

// Sky Lift Group's own LeadConnector intake form -- the same form ID that is
// embedded on /contact, recovered from commit 471ef69. Where it delivers
// submissions is configured inside LeadConnector, not here.
const FORM_SRC = "https://api.leadconnectorhq.com/widget/form/J6Gtz1pzBFNFDvoMGV05";

// The height is fixed in both states. The placeholder that ships in the
// prerendered HTML and the iframe that replaces it occupy exactly the same
// box, so mounting the embed moves nothing on the page and CLS stays at 0.
const FRAME_HEIGHT = 700;

/**
 * Compact version of the /contact form for the foot of a service page.
 *
 * The iframe is not in the initial markup: it mounts only once the section is
 * near the viewport, so a visitor who never scrolls that far pays nothing for
 * it. The heading, the supporting line and the email/phone fallbacks are
 * ordinary markup, so they are in the static HTML that crawlers receive
 * whether the embed ever loads or not.
 */
export default function ServiceInquiryForm({
  heading = "Tell us what you need",
  intro = "Send a few details about your business and what you want fixed, and we will come back to you with what we would do first.",
}) {
  const sectionRef = useRef(null);
  const [mountFrame, setMountFrame] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || mountFrame) return;

    // No IntersectionObserver (or an old browser) means no lazy gate -- load it
    // rather than leave the visitor without a form.
    if (typeof IntersectionObserver === "undefined") {
      setMountFrame(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMountFrame(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mountFrame]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="service-inquiry-heading"
      className="relative px-6 py-16 md:py-20 bg-[#0a0a0a]"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="service-inquiry-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center"
        >
          {heading}
        </h2>
        <p className="mt-4 text-gray-400 text-center leading-relaxed">{intro}</p>

        <div
          className="mt-8 rounded-lg overflow-hidden bg-[#111111] shadow-md"
          style={{ height: `${FRAME_HEIGHT}px` }}
        >
          {mountFrame ? (
            <iframe
              src={FORM_SRC}
              title="Send Sky Lift Group an enquiry"
              loading="lazy"
              className="w-full border-none bg-white"
              style={{ height: `${FRAME_HEIGHT}px`, display: "block" }}
            />
          ) : (
            <div
              className="w-full flex items-center justify-center text-gray-500 text-sm"
              style={{ height: `${FRAME_HEIGHT}px` }}
            >
              Loading the enquiry form&hellip;
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Prefer not to use the form? Reach us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@skyliftgroup.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A693] px-6 py-3 font-semibold text-white transition hover:bg-[#00947F]"
            >
              <Mail className="h-4 w-4" /> hello@skyliftgroup.com
            </a>
            <a
              href="tel:+17252631475"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00A693] px-6 py-3 font-semibold text-[#00A693] transition hover:bg-[#00A693] hover:text-white"
            >
              <PhoneCall className="h-4 w-4" /> +1 (725) 263-1475
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
