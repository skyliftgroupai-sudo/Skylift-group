// /services/reviews
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

import { Activity, BarChart, Cpu, Feather, Globe2, Users } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "RESULTS-DRIVEN GOOGLE ADVERTISING",
  heading: "Smart Campaigns for Measurable Growth",
  headingAccent: "Growth",
  lead: "Maximize your ROI with Google Ads that attract clicks, generate leads, and drive sales.",
  tags: [
    "Premium Keyword Targeting",
    "High-Impact Ad Creatives",
    "Search & Display Campaigns",
    "YouTube & Gmail Ads",
    "Conversion Tracking",
    "Testing & Optimization",
    "Scaling & Budget Management",
  ],
  paragraphs: [
    "Our 5-star Google Ads services help businesses reach customers at the perfect moment with precision targeting, persuasive ads, and measurable results.",
    "From strategy and ad creation to tracking and optimization, we manage every aspect of your campaigns to deliver the highest quality outcomes.",
    "Every campaign is powered by data, tested continuously, and refined to ensure top-tier performance and client satisfaction.",
  ],
};

const items = [
  {
    icon: <Users />,
    title: "Premium Audience & Keyword Strategy",
    desc: "We research high-intent audiences and top-performing keywords to target customers who are most likely to convert, ensuring outstanding results.",
    highlight: true,
  },
  {
    icon: <Globe2 />,
    title: "Google Search & Display Campaigns",
    desc: "Expertly managed campaigns across Search, Display, YouTube, and Gmail that deliver measurable clicks, leads, and revenue for our 5-star clients.",
  },
  {
    icon: <Feather />,
    title: "High-Impact Ad Copy & Creatives",
    desc: "We craft compelling ad copy and eye-catching visuals that engage your audience and drive conversions that clients rave about.",
  },
  {
    icon: <Activity />,
    title: "Conversion Tracking & Analytics",
    desc: "Advanced tracking setup ensures every click, lead, and sale is monitored for maximum ROI and 5-star service transparency.",
  },
  {
    icon: <BarChart />,
    title: "Continuous Testing & Optimization",
    desc: "We test ad variations, audience segments, and bidding strategies to improve performance and maintain exceptional client results.",
  },
  {
    icon: <Cpu />,
    title: "Scaling & Budget Management",
    desc: "We scale winning campaigns efficiently while optimizing budgets, delivering premium results for businesses that demand excellence.",
  },
];

export default function FivestarReviews() {
  return (
    <BespokeServicePage
      route="/services/reviews"
      h1="5-Star Google Ads That Deliver Results"
      heroSub="Our premium Google Ads services are designed to generate high-quality leads, sales, and measurable growth that clients consistently rate 5 stars."
      intro={intro}
      features={{ items }}
    />
  );
}
