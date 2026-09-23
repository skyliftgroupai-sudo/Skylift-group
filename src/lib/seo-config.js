// SINGLE SOURCE OF TRUTH for per-route title / description / share image.
//
// Both sides of the pipeline read this one map:
//   1. scripts/prerender.mjs  -> bakes the tags into the static HTML Googlebot
//                                fetches before it runs any JavaScript.
//   2. src/hooks/useSeo.jsx   -> re-applies the same tags after React hydrates.
//
// Keeping them in one file is the point. When the static HTML said one thing and
// the hydrated page said another, Google indexed the rendered version and the
// prerendered tags were wasted — every page effectively had two competing titles.
//
// Plain ESM with no Vite-only syntax so the Node build scripts can import it too.

export const SITE_URL = "https://www.skyliftllc.com";
export const DEFAULT_OG_IMAGE = "/og-image-sky-lift-llc.png";

export const routeSeo = {
  "/": {
    title: "AI Marketing for Home Services | Sky Lift LLC",
    description:
      "Sky Lift LLC helps home service businesses get more leads with AI chatbots, missed-call text back, SMS marketing, ads, and local SEO. Book a free call.",
  },
  "/about-us": {
    title: "About Our AI Marketing Agency | Sky Lift LLC",
    description:
      "Sky Lift LLC is an AI automation and marketing agency for home service businesses. Meet the team and see how we turn missed leads into booked jobs.",
  },
  "/services": {
    title: "AI Marketing Services for Contractors | Sky Lift LLC",
    description:
      "AI chatbots, missed-call text back, SMS marketing, lead capture, Google Ads, and local SEO built for HVAC, plumbing, and roofing companies.",
  },
  "/work": {
    title: "Industries We Serve | Sky Lift LLC",
    description:
      "AI marketing and automation for roofing, plumbing, HVAC, electrical, junk removal, spray foam, and general contracting businesses across the US.",
  },
  "/blog": {
    title: "AI Marketing & Local SEO Blog | Sky Lift LLC",
    description:
      "Practical guides on SMS marketing, local SEO, Google Business Profile, AI lead capture, and automation for home service business owners.",
  },
  "/contact": {
    title: "Contact Us for a Free Strategy Call | Sky Lift LLC",
    description:
      "Talk to Sky Lift LLC about growing your home service business with AI automation and marketing. Free strategy consultation, no pressure.",
  },
  "/book": {
    title: "Book a Free Strategy Call | Sky Lift LLC",
    description:
      "Book a free strategy call with Sky Lift LLC and get a plan for turning more of your calls, forms, and leads into booked jobs.",
  },
  "/services/web-design": {
    title: "Website Design for Home Service Businesses | Sky Lift LLC",
    description:
      "Fast, mobile-first websites for HVAC, roofing, and plumbing companies. Built to load quickly and turn visitors into booked jobs. Get a free quote.",
  },
  "/services/seo": {
    title: "Local SEO for Home Service Businesses | Sky Lift LLC",
    description:
      "Rank higher and get more calls with local SEO built for contractors: Google Business Profile, service-area pages, reviews, and technical SEO.",
  },
  "/services/local-maps": {
    title: "Google Maps Ranking & Map Pack SEO | Sky Lift LLC",
    description:
      "Get your business into the Google Map Pack. Local Maps optimization for HVAC, roofing, plumbing, and home service companies. Book a free audit.",
  },
  "/services/social-media": {
    title: "Social Media Management for Contractors | Sky Lift LLC",
    description:
      "Done-for-you social media that builds trust with local homeowners and keeps your home service business top of mind. See how it works.",
  },
  "/services/ppc-management": {
    title: "PPC Management for Contractors | Sky Lift LLC",
    description:
      "Pay-per-click management for home service businesses. Google and Meta ads managed for booked jobs, not vanity metrics. Get a free ad account review.",
  },
  "/services/content-writing": {
    title: "SEO Content Writing for Contractors | Sky Lift LLC",
    description:
      "Original, SEO-optimized content that ranks and converts for home service businesses. Service pages, blogs, and location pages written for you.",
  },
  "/services/meta-ads": {
    title: "Facebook Ads for Contractors | Sky Lift LLC",
    description:
      "Meta ads management for home service businesses. Reach local homeowners on Facebook and Instagram and turn scrollers into booked estimates.",
  },
  "/services/one-click-campaigns": {
    title: "One-Click Marketing Campaigns | Sky Lift LLC",
    description:
      "Launch email, SMS, and social campaigns for your home service business in one click. Ready-to-send offers built and automated by Sky Lift LLC.",
  },
  "/services/tiktok-ads": {
    title: "TikTok Ads for Home Service Businesses | Sky Lift LLC",
    description:
      "Reach new local customers with TikTok ads managed for contractors and home service companies. Creative, targeting, and tracking handled for you.",
  },
  "/services/google-ads": {
    title: "Google Ads Management for Contractors | Sky Lift LLC",
    description:
      "Google Ads management that turns high-intent searches into booked jobs for HVAC, plumbing, and roofing companies. Free ad account review.",
  },
  "/services/reviews": {
    title: "Review Generation for Contractors | Sky Lift LLC",
    description:
      "Automated review requests that get more 5-star Google reviews for your home service business, without awkwardly asking. See how it works.",
  },
  "/services/ai-workflows": {
    title: "AI Workflow Automation for Contractors | Sky Lift LLC",
    description:
      "Automate lead capture, follow-up, review requests, and reporting with AI workflows built for home service businesses. Book a free walkthrough.",
  },
  "/services/ai-voice-agents": {
    title: "AI Voice Agents for Home Service Businesses | Sky Lift LLC",
    description:
      "AI voice agents answer calls, book appointments, and capture leads 24/7 so your home service business never misses another call.",
  },
  "/services/ai-chatbots": {
    title: "AI Chatbots for Home Service Businesses | Sky Lift LLC",
    description:
      "AI chatbots that capture and qualify website leads 24/7 for HVAC, plumbing, and roofing companies. See a live demo on a free strategy call.",
  },
  "/services/database-reactivation": {
    title: "Database Reactivation Campaigns | Sky Lift LLC",
    description:
      "Turn past customers into booked jobs. Reactivation campaigns for HVAC and plumbing companies using the list you already own. Book a free call.",
  },
  "/services/sms-marketing": {
    title: "SMS Marketing for Home Services | Sky Lift LLC",
    description:
      "Text message marketing built for contractors: missed-call replies, appointment reminders, and review requests. A2P 10DLC handled. Book a free call.",
  },
  "/services/missed-call-text-back": {
    title: "Missed Call Text Back for Home Services | Sky Lift LLC",
    description:
      "Never lose another lead to a missed call. Automatic text-back replies in seconds and turns missed calls into booked jobs. See how it works.",
  },
  "/services/lead-follow-up": {
    title: "AI Lead Capture for Contractors | Sky Lift LLC",
    description:
      "Automated lead follow-up that responds in seconds and nurtures every inquiry into a booked job for home service businesses.",
  },
  "/tools/sms-compliance-checklist": {
    title: "Text Message Compliance Checklist | Sky Lift LLC",
    description:
      "21 things to have in place before texting customers: A2P 10DLC, consent, opt-outs and records. Free checklist for contractors, no email required.",
  },
  "/tools/missed-call-calculator": {
    title: "Missed Call Revenue Calculator | Sky Lift LLC",
    description:
      "Work out what unanswered calls cost your home service business, using your own numbers. Free calculator, no email required, arithmetic shown.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Sky Lift LLC",
    description:
      "How Sky Lift LLC collects, uses, and protects the information you share with us.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Sky Lift LLC",
    description:
      "The terms that apply when you use the Sky Lift LLC website and services.",
  },
  "/faq": {
    title: "AI Marketing FAQ for Home Services | Sky Lift LLC",
    description:
      "Answers to common questions about AI chatbots, missed-call text back, SMS marketing, ads, and pricing for home service businesses.",
  },
};

/**
 * Look up the canonical SEO block for a route.
 * Returns title, description, a self-referencing canonical, and the share image,
 * ready to spread straight into useSeo(). Extra keys (jsonLd, type, image) can be
 * passed in `overrides` and win over the defaults.
 */
export function pageSeo(path, overrides = {}) {
  const meta = routeSeo[path];
  if (!meta && typeof console !== "undefined") {
    // Loud in dev, harmless in prod: a route with no entry would otherwise
    // silently inherit whatever tags the previous page left in the <head>.
    console.warn(`[seo] No routeSeo entry for "${path}" — add one to src/lib/seo-config.js`);
  }
  return {
    title: meta?.title,
    description: meta?.description,
    canonical: `${SITE_URL}${path}`,
    image: meta?.image || DEFAULT_OG_IMAGE,
    ...overrides,
  };
}
