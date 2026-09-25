// GA4 wiring for the site.
//
// The gtag stub, the Consent Mode v2 defaults and the config call all live in
// index.html, because the defaults have to be queued before gtag.js executes.
// This module is everything that happens after that: reading and updating the
// stored choice, sending page views on client-side navigation, and the custom
// events.
//
// Consent Mode v2 note: events are still sent while consent is denied. Google
// receives them without storage access -- no cookies are read or written, no
// identifiers persist. That is the designed behaviour and it is why the banner
// does not need to block tracking calls itself.

export const GA_ID = "G-L6KM3R8YGF";
export const CONSENT_KEY = "slg-consent-v1";

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};

function gtag() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // Pushing `arguments` rather than an array is what gtag.js expects.
  window.dataLayer.push(arguments);
}

/** "granted" | "denied" | null (no choice made yet). */
export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Private mode, blocked storage, or a browser that throws on access.
    // Treat as "no choice recorded" and leave the defaults in place.
    return null;
  }
}

export function setConsent(choice) {
  const granted = choice === "granted";
  try {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {
    // If we cannot persist the choice we still honour it for this page view.
  }
  gtag("consent", "update", granted ? GRANTED : DENIED);
}

/**
 * Strip the query string and fragment from a path before it is sent anywhere.
 *
 * No page on this site is driven by a query parameter -- blog pagination uses
 * /blog/page/2 as a path -- so nothing is lost. What it prevents is a URL that
 * has picked up an email address, a phone number, a token or a chat-widget
 * parameter carrying that into Analytics, which is not something to rely on
 * never happening.
 */
export function cleanPath(path) {
  return String(path || "/").split("?")[0].split("#")[0] || "/";
}

/**
 * One page_view per route.
 * index.html configures GA4 with send_page_view: false so that this is the only
 * thing sending them -- otherwise the initial load would be counted twice, once
 * by the config call and once here on hydration.
 *
 * page_location is rebuilt from the origin and the cleaned path rather than
 * taken from window.location.href, for the reason above.
 */
export function pageView(path, title) {
  const p = cleanPath(path);
  gtag("event", "page_view", {
    page_path: p,
    page_location: typeof window !== "undefined" ? window.location.origin + p : undefined,
    page_title: title || (typeof document !== "undefined" ? document.title : undefined),
  });
}

/** Custom event. Never pass names, emails, phone numbers or message contents. */
export function track(name, params = {}) {
  gtag("event", name, params);
}

// --- delegated link tracking -------------------------------------------------
// A single document-level listener rather than an onClick on every link. The
// phone number and email address appear in the footer on all 51 pages plus
// /contact and /book, and a delegated listener cannot miss one that gets added
// later.
let delegated = false;

export function installLinkTracking() {
  if (delegated || typeof document === "undefined") return;
  delegated = true;

  document.addEventListener(
    "click",
    (e) => {
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a) return;
      const href = a.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        // Intent, not a lead: a tap does not mean a call was placed or answered.
        track("phone_click", { link_location: locationOf(a) });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_location: locationOf(a) });
      } else if (href === "/book" || href.endsWith("/book")) {
        track("book_call_click", { button_location: locationOf(a) });
      }
    },
    { capture: true }
  );
}

/** A coarse, non-identifying label for where on the page the link sits. */
function locationOf(el) {
  if (el.closest("footer")) return "footer";
  if (el.closest("header")) return "header";
  if (el.closest("section")?.querySelector("h1")) return "hero";
  return cleanPath(typeof window !== "undefined" ? window.location.pathname : "") || "body";
}

// --- scroll depth ------------------------------------------------------------
// Blog posts only, once per page view.
let scrollBound = null;

export function installScrollDepth(path, enabled) {
  if (typeof window === "undefined") return;
  if (scrollBound) {
    window.removeEventListener("scroll", scrollBound);
    scrollBound = null;
  }
  if (!enabled) return;

  let fired = false;
  scrollBound = () => {
    if (fired) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    if ((window.scrollY / scrollable) * 100 >= 90) {
      fired = true;
      track("scroll_90", { page_path: cleanPath(path) });
      window.removeEventListener("scroll", scrollBound);
      scrollBound = null;
    }
  };
  window.addEventListener("scroll", scrollBound, { passive: true });
}

/**
 * Contact form submission. Exported and ready, but nothing calls it yet: there
 * is no <form> element anywhere on this site. Wire this to the success handler
 * -- not the click -- when a real form is added, so it counts submissions
 * rather than attempts.
 */
export function trackFormSubmit(formLocation) {
  track("form_submit", { form_location: formLocation });
}

/**
 * Completed booking. Not wired: /book currently has no booking embed, only an
 * instruction to open the chat widget. When an embed is added, call this from
 * its completion callback or postMessage event, never on page load.
 */
export function trackBooking(source) {
  track("calendly_booking", { booking_source: source });
}
