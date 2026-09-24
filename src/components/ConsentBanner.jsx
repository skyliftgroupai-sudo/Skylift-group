import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readConsent, setConsent } from "../lib/analytics";

/**
 * Cookie consent bar.
 *
 * Renders nothing during prerendering and nothing on the first client paint --
 * it appears only after mount, and only when no choice has been recorded. Two
 * reasons for that:
 *
 *   1. Layout shift. The bar is position: fixed so it never displaces content,
 *      but rendering it into the static HTML would also put its text into every
 *      prerendered page, where it would be indexed as page content.
 *   2. Returning visitors who have already chosen never see it again.
 *
 * Declining is as easy as accepting, and both buttons are the same size. A
 * "Decline" that is harder to find than "Accept" is not a real choice.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (choice) => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#0f0f0f]/98 backdrop-blur px-4 py-3 sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-gray-300">
          We use Google Analytics to understand how people find and use this site.
          Nothing is stored on your device unless you accept.{" "}
          <Link to="/privacy-policy" className="text-[#00A693] underline underline-offset-2 hover:text-[#00C4AE]">
            Privacy policy
          </Link>
        </p>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-lg border border-white/20 px-4 py-2 text-[13px] font-semibold text-gray-200 transition hover:border-white/40 hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-lg bg-[#00A693] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#00947F]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
