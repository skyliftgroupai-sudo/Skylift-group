// /services/tiktok-ads
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

import { BarChart2, PenTool, Settings, TrendingUp, Video, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "PERFORMANCE-DRIVEN TIKTOK ADVERTISING",
  heading: "Smart Paid Ads for Scalable Growth",
  headingAccent: "Growth",
  lead: "Turn ad spend into predictable revenue with TikTok Ads that convert.",
  tags: [
    "Audience Targeting",
    "Creative & Copy",
    "TikTok Ads",
    "Conversion Tracking",
    "A/B Testing",
    "Scaling & Optimization",
  ],
  paragraphs: [
    [
      "TikTok Ads are one of the fastest-growing ways to reach your ideal customers with short-form video content. At ",
      { b: "Sky Lift LLC" },
      ", we create campaigns optimized for engagement, conversions, and measurable growth.",
    ],
    "From audience research and creative development to advanced optimization and scaling, we handle the full lifecycle of your TikTok ad campaigns.",
    "Every strategy is backed by data, testing, and performance insights to maximize ROI and long-term business growth.",
  ],
};

const items = [
  {
    icon: <Video />,
    title: "Audience Research & Targeting",
    desc: "We identify TikTok audiences using demographics, behaviors, interests, and trending content engagement to reach real buyers, not just views.",
    highlight: true,
  },
  {
    icon: <TrendingUp />,
    title: "TikTok Ads Campaigns",
    desc: "High-performing campaigns optimized for TikTok feeds, stories, and in-feed video placements to maximize ROI.",
  },
  {
    icon: <PenTool />,
    title: "Creative & Copywriting",
    desc: "Eye-catching video content and compelling captions designed to drive engagement, leads, and sales.",
  },
  {
    icon: <Zap />,
    title: "Conversion Tracking & Analytics",
    desc: "Pixel setup, event tracking, and conversion funnels to measure performance accurately across TikTok Ads.",
  },
  {
    icon: <BarChart2 />,
    title: "A/B Testing & Optimization",
    desc: "Continuous testing of creatives, audiences, and bidding strategies to reduce costs and boost results.",
  },
  {
    icon: <Settings />,
    title: "Scaling & Budget Management",
    desc: "We scale winning campaigns efficiently while protecting ad spend and maintaining performance.",
  },
];

export default function TikTokAds() {
  return (
    <BespokeServicePage
      route="/services/tiktok-ads"
      h1="TikTok Ads That Drive Real Conversions"
      heroSub="Data-driven TikTok advertising built to generate leads, sales, and measurable growth for your business."
      intro={intro}
      features={{ items }}
    />
  );
}
