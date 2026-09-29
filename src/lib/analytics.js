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

// Accepting the banner grants analytics only.
//
// The three advertising signals stay denied in every state, including after a
// visitor accepts. This site runs no advertising tags, Google Signals is off at
// the tag (allow_google_signals: false) and off in the GA4 property, and ads
// personalisation is off. There is nothing for those three to switch on, so
// asking for them would be collecting a permission we have no use for.
const GRANTED = {
  analytics_storage: "granted",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
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
 * Reopen the consent bar so a visitor can change a choice they already made.
 * Clears the stored choice and asks the banner to show itself again. The
 * previously applied consent state stays in effect until they choose again.
 */
export function openConsentPreferences() {
  try { window.localStorage.removeItem(CONSENT_KEY); } catch { /* storage blocked */ }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("slg:consent-reopen"));
  }
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
 * Confirmed inquiry submission. NOT wired yet -- see installEmbedProbe below.
 * When it is wired it must be called from the embed's confirmed-success signal,
 * never from a click or an iframe load, so it counts submissions and not
 * attempts.
 */
export function trackFormSubmit(formLocation) {
  track("form_submit", { form_location: formLocation });
}

/**
 * Completed booking. NOT wired yet -- see installEmbedProbe below. Must be
 * called only from a confirmed booking-complete signal.
 */
export function trackBooking(source) {
  track("booking_complete", { booking_source: source });
}

const EMBED_ORIGINS = [
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
  "https://widgets.leadconnectorhq.com",
];

/**
 * Diagnostic only. Sends nothing, tracks nothing, and is silent unless someone
 * deliberately turns it on.
 *
 * The LeadConnector form and booking embeds are cross-origin iframes. They
 * signal completion by posting a message to the parent window, but the shape of
 * that message is not documented publicly and the endpoints are unreachable from
 * the environment this was built in, so the contract could not be observed. It
 * would be easy to guess a property name here and ship something that either
 * never fires or fires on every message -- inventing leads. Neither is
 * acceptable, so no lead event is wired.
 *
 * To capture the real contract on the live site: set localStorage
 * 'slg-embed-debug' to '1', complete a submission or booking, and read the
 * logged payloads from the console. Wire trackFormSubmit / trackBooking to
 * whichever message genuinely indicates success, then remove this.
 */
export function installEmbedProbe() {
  if (typeof window === "undefined" || window.__slgEmbedProbe) return;
  window.__slgEmbedProbe = true;

  let on = false;
  try { on = window.localStorage.getItem("slg-embed-debug") === "1"; } catch { /* storage blocked */ }
  if (!on) return;

  window.addEventListener("message", (e) => {
    if (!EMBED_ORIGINS.includes(e.origin)) return;
    // eslint-disable-next-line no-console
    console.log("[slg embed message]", e.origin, e.data);
  });
}
