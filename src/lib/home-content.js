// Content for the redesigned homepage sections.
//
// Everything here is copy that already existed on the site before the visual
// redesign, moved into one file so the section components stay layout-only:
//   - services[]  comes verbatim from the old WhatWeOffer section
//   - pillars[]   comes verbatim from the old Focus section
//   - industries[] comes verbatim from /work
//   - stats[]     are the figures from the old hero slider
//
// No number in here is invented. If a figure is not on this list it does not
// go on the page.

export const HERO = {
  // The old hero carousel's first slide. Kept word for word.
  headline: "Power Your Growth with",
  headlineAccent: "AI-Driven Marketing",
  subline:
    "Smarter digital strategies powered by AI, data insights, and automation to help brands scale faster, convert better, and stay ahead of the competition.",
};

// TODO (needs the owner's confirmation before it can go on the page):
//   - Google review count and star rating for the trust row
//   - number of home service businesses served
// Until those are confirmed the trust row shows only facts already published
// elsewhere on the site: the industries served and the Kalispell, MT address.

export const STATS = [
  { value: "500+", label: "AI-Optimized Campaigns" },
  { value: "350+", label: "Brands Scaled" },
  { value: "95%", label: "Client Success Rate" },
  { value: "3×", label: "Average ROI Growth" },
  { value: "10M+", label: "Data Points Analyzed" },
  { value: "4.9", label: "Client Rating" },
];

// AI services first, then marketing services — the order the business sells in.
export const SERVICES = [
  {
    group: "ai",
    icon: "Bot",
    title: "AI Chatbots",
    link: "/services/ai-chatbots",
    desc: "Smart chatbots that engage visitors, answer questions, and capture leads automatically.",
  },
  {
    group: "ai",
    icon: "PhoneMissed",
    title: "Missed Call Text Back",
    link: "/services/missed-call-text-back",
    desc: "Never lose a lead again. Automatically follow up missed calls with instant SMS responses.",
  },
  {
    group: "ai",
    icon: "Bot",
    title: "AI Voice Agents",
    link: "/services/ai-voice-agents",
    desc: "AI-powered voice agents that answer calls, qualify leads, and book appointments 24/7.",
  },
  {
    group: "ai",
    icon: "MessageCircle",
    title: "Automated Lead Follow-Up",
    link: "/services/lead-follow-up",
    desc: "Convert more leads automatically with instant SMS, email, and WhatsApp follow-ups.",
  },
  {
    group: "ai",
    icon: "Workflow",
    title: "AI Workflow Automations",
    link: "/services/ai-workflows",
    desc: "Smart automations that eliminate manual work and streamline your business operations.",
  },
  {
    group: "ai",
    icon: "MessageSquare",
    title: "SMS & Text Marketing",
    link: "/services/sms-marketing",
    desc: "Compliant text campaigns that reach customers where they actually read — their phone.",
  },
  {
    group: "ai",
    icon: "Database",
    title: "Database Reactivation",
    link: "/services/database-reactivation",
    desc: "Turn your old customer list back into booked jobs with targeted reactivation campaigns.",
  },
  {
    group: "ai",
    icon: "Zap",
    title: "One-Click Marketing Campaigns",
    link: "/services/one-click-campaigns",
    desc: "Launch complete marketing campaigns instantly with pre-built, proven systems.",
  },
  {
    group: "marketing",
    icon: "Chrome",
    title: "Google Ads",
    link: "/services/google-ads",
    desc: "Intent-driven Google Ads campaigns that capture demand and convert fast.",
  },
  {
    group: "marketing",
    icon: "Facebook",
    title: "Meta Ads",
    link: "/services/meta-ads",
    desc: "High-converting Facebook and Instagram ads optimized for engagement and sales.",
  },
  {
    group: "marketing",
    icon: "Music2",
    title: "TikTok Ads",
    link: "/services/tiktok-ads",
    desc: "Scroll-stopping TikTok ad campaigns built to drive awareness and conversions.",
  },
  {
    group: "marketing",
    icon: "Search",
    title: "Search Engine Optimization",
    link: "/services/seo",
    desc: "Data-driven SEO strategies that improve rankings, increase organic traffic, and deliver long-term growth.",
  },
  {
    group: "marketing",
    icon: "Target",
    title: "PPC Management",
    link: "/services/ppc-management",
    desc: "ROI-focused ad campaigns designed to generate consistent leads and measurable results.",
  },
  {
    group: "marketing",
    icon: "MapPin",
    title: "Local Maps Optimization",
    link: "/services/local-maps",
    desc: "Dominate local searches and Google Maps with fully optimized business listings.",
  },
  {
    group: "marketing",
    icon: "Code2",
    title: "Web Design & Development",
    link: "/services/web-design",
    desc: "High-performance, mobile-first websites designed to reflect your brand and turn visitors into leads.",
  },
  {
    group: "marketing",
    icon: "Star",
    title: "5-Star Reviews",
    link: "/services/reviews",
    desc: "Increase positive online reviews and build instant trust with automated review strategies.",
  },
  {
    group: "marketing",
    icon: "Share2",
    title: "Social Media Marketing",
    link: "/services/social-media",
    desc: "Strategic social campaigns that build brand awareness, engagement, and loyal communities.",
  },
  {
    group: "marketing",
    icon: "PenTool",
    title: "Content Writing",
    link: "/services/content-writing",
    desc: "Persuasive, SEO-friendly content that educates, builds trust, and converts readers.",
  },
];

// The six pillars from the old Focus section, unchanged.
export const PILLARS = [
  {
    title: "Data-Driven Strategies",
    description:
      "Every campaign starts with insight. We analyze audience behavior, trends, and performance data to build marketing strategies that maximize ROI and reduce wasted spend.",
  },
  {
    title: "SEO & Organic Growth",
    description:
      "We enhance your brand visibility through powerful SEO frameworks — blending technical optimization, content strategy, and user intent for long-term organic success.",
  },
  {
    title: "Paid Media That Converts",
    description:
      "From Google Ads to social campaigns, our paid media approach focuses on targeting, creative design, and continuous optimization to generate quality leads that matter.",
  },
  {
    title: "Content That Builds Trust",
    description:
      "We craft compelling stories that educate, engage, and inspire action. Great content isn’t just words — it’s the foundation of lasting customer relationships.",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "We turn complex data into clear insights. With real-time dashboards and transparent reporting, you’ll always know how your campaigns are performing — and where to grow next.",
  },
  {
    title: "Social Media Engagement & Brand Building",
    description:
      "Your social presence should feel alive. We build authentic, consistent engagement strategies across platforms that strengthen brand loyalty and foster meaningful communities.",
  },
];

export const INDUSTRIES = [
  { name: "Roofing", icon: "Home" },
  { name: "Plumbing", icon: "Droplets" },
  { name: "HVAC", icon: "Wind" },
  { name: "Electrical", icon: "Zap" },
  { name: "Handyman", icon: "Hammer" },
  { name: "Junk Removal", icon: "Trash2" },
  { name: "General Contractors", icon: "HardHat" },
  { name: "Moving Services", icon: "Truck" },
  { name: "Roadside Assistance", icon: "Car" },
  { name: "Auto Detailing", icon: "Sparkles" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Assisted Living", icon: "HeartPulse" },
];

// The three-step process. Describes how the engagement actually runs — no
// timeframes or results are claimed because none have been verified.
export const STEPS = [
  {
    title: "Book a free strategy call",
    description:
      "We look at where your leads are coming from, what happens after someone calls or fills in a form, and where jobs are being lost. No pitch deck, no pressure.",
  },
  {
    title: "We build your system",
    description:
      "We set up the pieces that fit your business — chatbot, missed-call text back, follow-up sequences, ads, or local SEO — and connect them to the calendar and CRM you already use.",
  },
  {
    title: "You stay booked",
    description:
      "Every lead gets answered and followed up automatically. You get clear reporting on what came in, what it cost, and what turned into work.",
  },
];

// The homepage FAQ, unchanged from the existing FAQ section.
export const FAQS = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide strategy, SEO, social media management, content creation, paid advertising, and analytics tailored to your brand.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Initial results are typically visible within 2–3 months, depending on the campaign and strategy.",
  },
  {
    question: "Do you provide custom packages?",
    answer:
      "Yes. Each business is unique, so we create a package that fits your goals and audience.",
  },
  {
    question: "Can you manage multiple platforms for my brand?",
    answer:
      "Absolutely. We handle Google, Facebook, Instagram, LinkedIn, and more with consistent messaging.",
  },
  {
    question: "How do you track and report performance?",
    answer:
      "We provide dashboards, clear reports, and actionable insights so you always know your ROI.",
  },
  {
    question: "Can I request ongoing support?",
    answer:
      "Yes, we offer ongoing optimization and support for long-term growth.",
  },
];
