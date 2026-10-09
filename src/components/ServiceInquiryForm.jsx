import { useEffect, useRef, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

// Sky Lift Group's current LeadConnector inquiry form -- the same one /contact
// uses, supplied by the owner on 2026-10-09. It replaces J6Gtz1pzBFNFDvoMGV05,
// which had been recovered from commit 471ef69 and whose live status was never
// confirmed. Where it delivers submissions is configured inside LeadConnector.
const FORM_ID = "wF3454LwddFo7Lmjp5V2";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

// The height is fixed in both states. The placeholder that ships in the
// prerendered HTML and the iframe that replaces it occupy exactly the same
// box, so mounting the embed moves nothing on the page and CLS stays at 0.
//
// 923 is the form's own declared height, from data-height on the embed snippet
// the owner supplied. This was 700 -- chosen to keep the section compact -- but
// it is the same form as /contact, so form_embed.js would have grown the frame
// by 223px on first size and shifted everything below it. Reserving the real
// height costs vertical space and makes the resize a no-op.
const FRAME_HEIGHT = 923;

// How long to wait for the embed before offering a route that does not depend
// on it. Generous enough not to trip on a slow connection.
const FRAME_TIMEOUT_MS = 6000;

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
  // "pending" until the embed reports a load. If it never does -- the commonest
  // cause is an ad blocker, since leadconnectorhq.com sits on the usual block
  // lists -- we stop waiting and show a contact route that always works. Before
  // this, a blocked embed left a silent blank box as the page's main call to
  // action.
  const [frameState, setFrameState] = useState("pending");

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

// Detecting a blocked cross-origin embed is harder than it looks. An iframe's
// onLoad fires even when the navigation failed -- Chromium treats its own error
// page as a load -- so onLoad cannot tell success from failure. The reliable
// signal is a separate no-cors request to the same origin: an ad blocker, which
// is the usual cause, blocks that too and the promise rejects. A real response
// resolves opaquely, and we do not care about its status, only that it arrived.
  useEffect(() => {
    if (!mountFrame || frameState !== "pending") return;
    let cancelled = false;
    const settle = (next) =>
      !cancelled && setFrameState((cur) => (cur === "pending" ? next : cur));

    fetch(FORM_SRC, { mode: "no-cors", cache: "no-store" })
      .then(() => settle("loaded"))
      .catch(() => settle("failed"));

    // Backstop for a request that neither resolves nor rejects.
    const t = setTimeout(() => settle("failed"), FRAME_TIMEOUT_MS);
    return () => { cancelled = true; clearTimeout(t); };
  }, [mountFrame, frameState]);

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
          {frameState === "failed" ? (
            <div
              role="status"
              className="flex w-full flex-col items-center justify-center gap-4 px-6 text-center"
              style={{ height: `${FRAME_HEIGHT}px` }}
            >
              <p className="text-white font-semibold">
                The inquiry form could not load.
              </p>
              <p className="max-w-md text-sm text-gray-400 leading-relaxed">
                Usually a browser extension blocking it. Nothing is wrong on your
                end — these two reach us just as well.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
          ) : mountFrame ? (
            <iframe
              src={FORM_SRC}
              title="Send Sky Lift Group an inquiry"
              loading="lazy"
              id={`inline-${FORM_ID}`}
              data-layout="{'id':'INLINE'}"
              data-form-name="Sky Lift Group"
              data-layout-iframe-id={`inline-${FORM_ID}`}
              data-form-id={FORM_ID}
              data-height={FRAME_HEIGHT}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              className="w-full border-none bg-white"
              style={{ height: `${FRAME_HEIGHT}px`, display: "block" }}
            />
          ) : (
            <div
              className="w-full flex items-center justify-center text-gray-500 text-sm"
              style={{ height: `${FRAME_HEIGHT}px` }}
            >
              Loading the inquiry form&hellip;
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
