// /services/one-click-campaigns
//
// Content only. The page's shape — hero, intro, card grid, FAQ, CTA —
// lives in src/components/service/BespokeServicePage.jsx, which every service
// page now shares. Before the redesign this file carried its own copy of that
// skeleton, which is how one accordion bug managed to ship on sixteen pages at
// once.
//
// Every string below is the copy that was already on this page. The h1 and the
// FAQs are untouched: the FAQs still come from src/lib/service-faqs.js, the
// same source the FAQPage schema reads.

import { Layers, LineChart, Megaphone, MousePointerClick, Send, Sparkles } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "INSTANT MARKETING DEPLOYMENT SOLUTION",
  heading: "Powerful Campaigns One Click Away",
  headingAccent: "Away",
  lead: "Skip the setup, the design, and the stress. Launch high-converting campaigns instantly with proven templates that work.",
  tags: [
    "Instant Campaign Launch",
    "Pre-Built Templates",
    "Email & SMS Marketing",
    "Social Media Integration",
    "AI Personalization",
    "Smart Targeting",
    "Real-Time Analytics",
  ],
  paragraphs: [
    "Our one click marketing system removes all the complexity of campaign creation, letting you launch professional, high-converting campaigns in seconds instead of days.",
    "From holiday promotions to flash sales and product launches, every campaign is pre-designed, pre-tested, and ready to deliver instant results across multiple channels.",
    "Powered by smart automation and AI personalization, our solution helps you stay ahead of the competition with marketing that's fast, effective, and effortlessly scalable.",
  ],
};

const items = [
  {
    icon: <MousePointerClick />,
    title: "One Click Campaign Launch",
    desc: "Launch fully built marketing campaigns across email, SMS, and social channels with a single click, saving hours of manual setup and execution time.",
    highlight: true,
  },
  {
    icon: <Layers />,
    title: "Pre-Built Campaign Templates",
    desc: "Choose from a library of high-converting templates designed for promotions, holidays, product launches, and re-engagement, ready to deploy instantly.",
  },
  {
    icon: <Send />,
    title: "Multi-Channel Distribution",
    desc: "Reach your audience everywhere they are with synchronized campaigns across email, SMS, WhatsApp, and social media, all from one unified dashboard.",
  },
  {
    icon: <Sparkles />,
    title: "AI-Powered Personalization",
    desc: "Smart AI tailors every message to each recipient based on behavior, preferences, and past interactions, boosting engagement and conversion rates.",
  },
  {
    icon: <Megaphone />,
    title: "Smart Audience Targeting",
    desc: "Reach the right people with precision audience segmentation, ensuring your campaigns hit the inbox of customers most likely to convert.",
  },
  {
    icon: <LineChart />,
    title: "Real-Time Analytics & Reports",
    desc: "Track campaign performance live with detailed analytics on opens, clicks, and conversions to refine your strategy and maximize ROI.",
  },
];

export default function OneClickMarketing() {
  return (
    <BespokeServicePage
      route="/services/one-click-campaigns"
      h1="One Click Marketing Campaigns Launch. Engage. Convert."
      heroSub="Deploy powerful, multi-channel marketing campaigns with a single click. Save time, reach more customers, and drive measurable growth on autopilot."
      intro={intro}
      features={{ items }}
    />
  );
}
