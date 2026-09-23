// Every JSON-LD block the site emits is built here.
//
// Why one file: Search Console reported "Unparsable structured data", and the
// site previously had schema in two unrelated places — a hardcoded <script> in
// index.html and runtime injection from useSeo — with nothing keeping them
// consistent. Building every block from one module means the Organization node
// has one definition, @id references always resolve, and a page cannot end up
// with two conflicting descriptions of the same entity.
//
// Plain ESM with no Vite-only syntax, so scripts/prerender.mjs can import it
// under plain Node just as the browser bundle does.

import { SITE_URL, routeSeo, pageSeo } from "./seo-config.js";
import { routeFaqs } from "./service-faqs.js";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// The one canonical description of the business. Repeated verbatim in the
// homepage intro, the About page and the footer, because Search Console shows
// "skylift" queries resolving to unrelated lift-equipment companies — matching
// text across the site and the directory profiles is what separates the two.
export const ORG_NAME = "Sky Lift LLC";
// Same string as ORG_NAME since the rebrand: the trading name and the
// registered name are now one and the same, so schema.org gets legalName and
// name identical rather than implying a distinction that no longer exists.
export const ORG_LEGAL_NAME = "Sky Lift LLC";
export const ORG_EMAIL = "info@skyliftllc.com";
// E.164, which is the format schema.org and Google both want.
export const ORG_PHONE = "+1-904-906-9019";
export const ORG_DESCRIPTION =
  "Sky Lift LLC is an AI automation and marketing agency for home service businesses, providing AI chatbots, missed-call text back, SMS marketing, lead capture, ads, and local SEO.";

export const ORG_SAME_AS = [
  "https://www.facebook.com/share/199LNKDqTT/",
  "https://www.linkedin.com/company/sky-lift-group/",
];

// Every service that has a page, in the order they matter to the business.
// Drives the ProfessionalService offer catalog and the Service node on each
// service page, so the catalog can never list a service whose page is gone.
export const SERVICES = [
  { path: "/services/ai-chatbots", name: "AI Chatbots for Home Service Businesses" },
  { path: "/services/lead-follow-up", name: "AI Lead Capture and Automated Follow-Up" },
  { path: "/services/missed-call-text-back", name: "Missed Call Text Back" },
  { path: "/services/sms-marketing", name: "SMS and Text Message Marketing for Home Services" },
  { path: "/services/database-reactivation", name: "Database Reactivation Campaigns for HVAC and Plumbing" },
  { path: "/services/one-click-campaigns", name: "SMS and Email Marketing Campaigns" },
  { path: "/services/ai-voice-agents", name: "AI Voice Agents and Appointment Booking" },
  { path: "/services/ai-workflows", name: "AI Workflow Automation" },
  { path: "/services/google-ads", name: "Google Ads Management" },
  { path: "/services/meta-ads", name: "Facebook and Instagram Ads Management" },
  { path: "/services/tiktok-ads", name: "TikTok Ads Management" },
  { path: "/services/ppc-management", name: "PPC Management" },
  { path: "/services/local-maps", name: "Google Business Profile and Map Pack Optimization" },
  { path: "/services/seo", name: "Local SEO for Home Service Businesses" },
  { path: "/services/reviews", name: "Review Generation" },
  { path: "/services/web-design", name: "Website Design and Development" },
  { path: "/services/social-media", name: "Social Media Management" },
  { path: "/services/content-writing", name: "SEO Content Writing" },
];

function organization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    alternateName: "Sky Lift",
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/sky-lift-logo.webp`,
    },
    image: `${SITE_URL}/og-image.png`,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    areaServed: { "@type": "Country", name: "United States" },
    sameAs: ORG_SAME_AS,
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

// The agency as a bookable service provider, with everything it sells.
// Separate node from Organization: Organization says who the entity is,
// ProfessionalService says what it offers and to whom.
function professionalService() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professionalservice`,
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    parentOrganization: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Digital marketing and AI automation for home service businesses",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sky Lift LLC services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}${s.path}`,
          provider: { "@id": ORG_ID },
        },
      })),
    },
  };
}

function breadcrumb(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function faqPage(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": "#faq",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Breadcrumb trail for a route, derived from the path so it can never disagree
 * with the URL. Returns null for the homepage, where a one-item breadcrumb
 * carries no information.
 */
function trailFor(path, title) {
  if (path === "/") return null;
  const home = { name: "Home", path: "/" };
  if (path.startsWith("/services/")) {
    return [home, { name: "Services", path: "/services" }, { name: title, path }];
  }
  if (path.startsWith("/blog/")) {
    return [home, { name: "Blog", path: "/blog" }, { name: title, path }];
  }
  return [home, { name: title, path }];
}

// Titles carry "| Sky Lift LLC" for search results; a breadcrumb should show
// just the page name.
function crumbName(path) {
  const entry = routeSeo[path];
  const service = SERVICES.find((s) => s.path === path);
  if (service) return service.name;
  if (!entry) return path;
  return entry.title.split("|")[0].trim();
}

/**
 * Build the complete JSON-LD graph for one route.
 * Returns a single @graph object — one script tag per page, every node
 * cross-referenced by @id, which is what keeps Organization from being
 * redefined three times on the same page.
 */
export function schemaForRoute(path, extra = null) {
  const nodes = [organization(), website(), professionalService()];

  const trail = trailFor(path, crumbName(path));
  if (trail) nodes.push(breadcrumb(trail));

  const faqs = faqPage(routeFaqs[path]);
  if (faqs) nodes.push(faqs);

  if (path === "/blog") {
    nodes.push({
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "Sky Lift LLC Blog",
      url: `${SITE_URL}/blog`,
      description: routeSeo["/blog"]?.description,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    });
  }

  const service = SERVICES.find((s) => s.path === path);
  if (service) {
    nodes.push({
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: service.name,
      description: routeSeo[path]?.description,
      url: `${SITE_URL}${path}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: service.name,
    });
  }

  if (extra) nodes.push(...(Array.isArray(extra) ? extra : [extra]));

  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Article graph for a blog post, used by both the prerenderer and the page. */
export function blogPostingSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const nodes = [
    organization(),
    website(),
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
      datePublished: post.date,
      // No separate modified date is tracked yet, so this mirrors publication
      // rather than claiming a freshness that did not happen.
      dateModified: post.dateModified || post.date,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
      ...(post.tags && post.tags.length ? { keywords: post.tags.join(", ") } : {}),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  const faqs = faqPage((post.faqs || []).map((f) => ({ q: f.q, a: f.a })));
  if (faqs) nodes.push(faqs);

  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * What page components call: the route's title/description/canonical/image from
 * seo-config, plus that route's JSON-LD graph. Kept here rather than in
 * seo-config.js because this module already imports that one, and the reverse
 * direction would make the two files import each other.
 */
export function seoFor(path, overrides = {}) {
  return pageSeo(path, { jsonLd: schemaForRoute(path), ...overrides });
}
