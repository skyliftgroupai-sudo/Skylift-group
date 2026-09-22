// /services/meta-ads
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

import { BarChart2, MessageCircle, Settings, Target, TrendingUp, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "PERFORMANCE-DRIVEN META ADVERTISING",
  heading: "Smart Paid Ads for Scalable Growth",
  headingAccent: "Growth",
  lead: "Turn ad spend into predictable revenue with Meta Ads that convert.",
  tags: [
    "Audience Targeting",
    "Ad Creative & Copy",
    "Facebook & Instagram Ads",
    "Conversion Tracking",
    "A/B Testing",
    "Scaling & Optimization",
  ],
  paragraphs: [
    [
      "Meta Ads are one of the most powerful ways to reach your ideal customers at the right moment. At ",
      { b: "Sky Lift Group" },
      ", we create conversion-focused campaigns that deliver measurable business results.",
    ],
    "From audience research and creative development to advanced optimization and scaling, we manage the full lifecycle of your Facebook and Instagram ad campaigns.",
    "Every decision is backed by data, testing, and performance insights to maximize ROI and long-term growth.",
  ],
};

const items = [
  {
    icon: <Target />,
    title: "Audience Research & Targeting",
    desc: "We identify high-intent audiences using demographics, behaviors, interests, and lookalike data to reach buyers, not just traffic.",
    highlight: true,
  },
  {
    icon: <TrendingUp />,
    title: "Facebook & Instagram Ads",
    desc: "High-converting ad campaigns optimized for feeds, stories, reels, and placements across Meta platforms.",
  },
  {
    icon: <MessageCircle />,
    title: "Ad Creative & Copywriting",
    desc: "Scroll-stopping visuals and persuasive ad copy designed to drive clicks, leads, and sales.",
  },
  {
    icon: <Zap />,
    title: "Conversion Tracking & Funnels",
    desc: "Pixel setup, event tracking, and conversion funnels to measure real performance and ROI.",
  },
  {
    icon: <BarChart2 />,
    title: "A/B Testing & Optimization",
    desc: "Continuous testing of creatives, audiences, and budgets to lower costs and improve results.",
  },
  {
    icon: <Settings />,
    title: "Scaling & Budget Management",
    desc: "We scale winning campaigns intelligently while protecting performance and ad spend efficiency.",
  },
];

export default function MetaAds() {
  return (
    <BespokeServicePage
      route="/services/meta-ads"
      h1="Meta Ads That Drive Real Conversions"
      heroSub="Data-driven Facebook & Instagram advertising built to generate leads, sales, and measurable growth for your business."
      intro={intro}
      features={{ items }}
    />
  );
}
