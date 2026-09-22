// /services/google-ads
//
// Content only. The page's shape — hero, intro, card grid, long-form body, FAQ, CTA —
// lives in src/components/service/BespokeServicePage.jsx, which every service
// page now shares. Before the redesign this file carried its own copy of that
// skeleton, which is how one accordion bug managed to ship on sixteen pages at
// once.
//
// Every string below is the copy that was already on this page. The h1 and the
// FAQs are untouched: the FAQs still come from src/lib/service-faqs.js, the
// same source the FAQPage schema reads.

import { Activity, Cpu, Edit3, Globe, PieChart, Users } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/google-ads";

const intro = {
  eyebrow: "RESULTS-DRIVEN GOOGLE ADVERTISING",
  heading: "Smart Campaigns for Measurable Growth",
  headingAccent: "Growth",
  lead: "Maximize your ROI with Google Ads that attract clicks, generate leads, and drive sales.",
  tags: [
    "Keyword & Audience Targeting",
    "Ad Copy & Creatives",
    "Search & Display Ads",
    "YouTube & Gmail Ads",
    "Conversion Tracking",
    "A/B Testing & Optimization",
    "Budget Management & Scaling",
  ],
  paragraphs: [
    [
      "Google Ads allow you to reach customers at the precise moment they are searching for products and services you offer. At ",
      { b: "Sky Lift Group" },
      ", we design campaigns to attract high-quality traffic and drive measurable results.",
    ],
    "We handle everything from keyword research and ad creation to testing and scaling, ensuring your campaigns run efficiently and profitably.",
    "Every decision is guided by data, performance insights, and continuous optimization to maximize ROI and accelerate business growth.",
  ],
};

const items = [
  {
    icon: <Users />,
    title: "Audience & Keyword Strategy",
    desc: "We identify the most valuable audiences and high-performing keywords to connect with users who are ready to take action.",
    highlight: true,
  },
  {
    icon: <Globe />,
    title: "Google Search & Display Campaigns",
    desc: "Crafting campaigns across Search, Display, YouTube, and Gmail that drive measurable traffic, leads, and sales.",
  },
  {
    icon: <Edit3 />,
    title: "Compelling Ad Copy & Creatives",
    desc: "We design persuasive ad copy and engaging visuals that capture attention and encourage clicks and conversions.",
  },
  {
    icon: <Activity />,
    title: "Conversion Tracking & Analytics",
    desc: "Advanced tracking and analytics to measure every click, lead, and sale, giving you a clear view of ROI.",
  },
  {
    icon: <PieChart />,
    title: "Continuous Testing & Optimization",
    desc: "We test ad variations, bidding strategies, and audience segments to lower costs and boost performance over time.",
  },
  {
    icon: <Cpu />,
    title: "Campaign Scaling & Budget Management",
    desc: "Scale campaigns strategically while optimizing budget allocation and maintaining high ROI.",
  },
];

export default function GoogleAds() {
  return (
    <BespokeServicePage
      route="/services/google-ads"
      h1="Google Ads That Convert Clicks Into Customers"
      heroSub="Performance-focused Google advertising designed to drive leads, sales, and tangible business growth."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
