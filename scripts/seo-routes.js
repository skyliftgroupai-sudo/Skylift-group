// Per-route SEO metadata baked into the raw HTML at build time (see scripts/prerender.mjs).
// This is what fixes indexing: every route ships a unique <title>, description, and
// canonical in the static HTML, instead of all pages sharing the homepage's tags.

export const staticRoutes = {
  "/": {
    title: "Sky Lift Group | AI Marketing & Automation for Local Business",
    description:
      "Sky Lift Group helps local and home service businesses get more leads with AI-powered websites, local SEO, Google Business Profile, ads, and automation.",
  },
  "/about-us": {
    title: "About Sky Lift Group | AI Marketing Agency for Local Business",
    description:
      "Learn how Sky Lift Group helps HVAC, roofing, plumbing, and local service businesses grow with AI-powered marketing and automation.",
  },
  "/services": {
    title: "Our Services | Sky Lift Group AI Marketing Agency",
    description:
      "AI web design, local SEO, Google & Meta ads, chatbots, review management, and marketing automation for local and home service businesses.",
  },
  "/work": {
    title: "Industries We Serve | Sky Lift Group – AI Marketing for Local Business",
    description:
      "Sky Lift Group delivers AI-powered marketing and automation for roofing, plumbing, electrical, moving, real estate, senior care, and more local industries.",
  },
  "/blog": {
    title: "Blog | AI Marketing & Local SEO Tips | Sky Lift Group",
    description:
      "Actionable guides on local SEO, Google Business Profile, AI marketing, lead generation, and automation for home service and local businesses.",
  },
  "/contact": {
    title: "Contact Sky Lift Group | Free Marketing Consultation",
    description:
      "Get in touch with Sky Lift Group for a free strategy consultation on growing your local service business with AI marketing and automation.",
  },
  "/book": {
    title: "Book a Free Strategy Call | Sky Lift Group",
    description:
      "Book a free strategy consultation with Sky Lift Group to grow your local service business with AI-powered marketing and lead automation.",
  },
  "/services/web-design": {
    title: "AI Website Design for Local Business | Sky Lift Group",
    description:
      "Fast, mobile-first, high-converting AI website design for HVAC, roofing, plumbing, and local service businesses. Built to turn visitors into booked jobs.",
  },
  "/services/seo": {
    title: "Local SEO Services for Home Service Businesses | Sky Lift Group",
    description:
      "Rank higher and get more calls with local SEO built for contractors — Google Business Profile, service-area pages, reviews, and technical SEO.",
  },
  "/services/local-maps": {
    title: "Google Maps & Local Map Pack Ranking | Sky Lift Group",
    description:
      "Get your business into the Google Map Pack. Local Maps optimization and ranking for HVAC, roofing, plumbing, and home service businesses.",
  },
  "/services/social-media": {
    title: "Social Media Management for Local Business | Sky Lift Group",
    description:
      "Done-for-you social media management that builds trust and drives leads for local and home service businesses.",
  },
  "/services/ppc-management": {
    title: "PPC Management for Local Service Businesses | Sky Lift Group",
    description:
      "Profitable pay-per-click management for contractors and local businesses — Google and Meta ads managed for booked jobs, not vanity metrics.",
  },
  "/services/content-writing": {
    title: "SEO Content Writing for Local Business | Sky Lift Group",
    description:
      "Original, SEO-optimized content writing that ranks and converts for home service and local businesses.",
  },
  "/services/meta-ads": {
    title: "Meta (Facebook & Instagram) Ads | Sky Lift Group",
    description:
      "Meta ads management for local service businesses — reach homeowners on Facebook and Instagram and turn scrollers into booked consultations.",
  },
  "/services/one-click-campaigns": {
    title: "One-Click Marketing Campaigns | Sky Lift Group",
    description:
      "Launch ready-to-go marketing campaigns for your local business in one click — email, SMS, and social, automated by Sky Lift Group.",
  },
  "/services/tiktok-ads": {
    title: "TikTok Ads for Local Service Businesses | Sky Lift Group",
    description:
      "Reach new local customers with TikTok ads managed for home service and local businesses by Sky Lift Group.",
  },
  "/services/google-ads": {
    title: "Google Ads Management for Contractors | Sky Lift Group",
    description:
      "Google Ads management that turns high-intent searches into booked jobs for HVAC, plumbing, roofing, and local service businesses.",
  },
  "/services/reviews": {
    title: "Review Management & Automation | Sky Lift Group",
    description:
      "Automated review generation and reputation management to get more 5-star Google reviews for your local service business.",
  },
  "/services/ai-workflows": {
    title: "AI Workflow Automation for Local Business | Sky Lift Group",
    description:
      "Automate lead capture, follow-up, reviews, and reporting with AI workflows built for home service and local businesses.",
  },
  "/services/ai-voice-agents": {
    title: "AI Voice Agents for Service Businesses | Sky Lift Group",
    description:
      "AI voice agents that answer calls, book appointments, and capture leads 24/7 so your local business never misses a call.",
  },
  "/services/ai-chatbots": {
    title: "AI Chatbots for Local Service Businesses | Sky Lift Group",
    description:
      "AI chatbots that capture and qualify website leads 24/7 for HVAC, plumbing, roofing, and local service businesses.",
  },
  "/services/missed-call-text-back": {
    title: "Missed-Call Text-Back for Local Business | Sky Lift Group",
    description:
      "Never lose a lead to a missed call. Automatic text-back turns missed calls into booked jobs for local service businesses.",
  },
  "/services/lead-follow-up": {
    title: "Automated Lead Follow-Up | Sky Lift Group",
    description:
      "Automated lead follow-up that responds in seconds and nurtures leads into booked jobs for home service and local businesses.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Sky Lift Group",
    description: "Read the Sky Lift Group privacy policy.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Sky Lift Group",
    description: "Read the Sky Lift Group terms and conditions.",
  },
  "/faq": {
    title: "FAQ | Sky Lift Group",
    description:
      "Frequently asked questions about Sky Lift Group's AI marketing and automation services for local businesses.",
  },
};
