// /services/ppc-management
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

import { BarChart2, Search, Settings, TrendingUp, Users, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "BOOST YOUR BUSINESS WITH TARGETED PPC CAMPAIGNS",
  heading: "Results-Driven PPC Management",
  headingAccent: "Management",
  lead: "Attract high-intent customers, increase conversions, and grow revenue with data-driven PPC campaigns.",
  tags: [
    "Campaign Strategy",
    "Keyword Research",
    "Ad Creation",
    "Bid Optimization",
    "Analytics & Reporting",
    "Landing Page CRO",
  ],
  paragraphs: [
    [
      "Our PPC management services help businesses target the right audience at the right time. At ",
      { b: "Sky Lift LLC" },
      ", we design campaigns to maximize clicks, conversions, and ROI.",
    ],
    "From keyword research and ad creation to bid management and analytics, we optimize every aspect of your PPC campaigns for success.",
    "Let’s scale your business with precise, performance-driven paid advertising.",
  ],
};

const items = [
  {
    icon: <TrendingUp />,
    title: "Campaign Strategy & Planning",
    desc: "Develop targeted PPC campaigns that align with your business goals and maximize ROI.",
    highlight: true,
  },
  {
    icon: <Search />,
    title: "Keyword Research & Selection",
    desc: "Identify high-performing keywords to drive qualified traffic and conversions.",
  },
  {
    icon: <Users />,
    title: "Ad Creation & Copywriting",
    desc: "Craft compelling ad copies and creatives that attract clicks and engagement.",
  },
  {
    icon: <Zap />,
    title: "Bid Management & Optimization",
    desc: "Continuously optimize bids, budgets, and targeting for maximum campaign efficiency.",
  },
  {
    icon: <BarChart2 />,
    title: "Conversion Tracking & Analytics",
    desc: "Monitor and analyze campaign performance to refine strategies and improve results.",
  },
  {
    icon: <Settings />,
    title: "Landing Page & CRO Optimization",
    desc: "Enhance landing pages for higher conversion rates and better user experience.",
  },
];

export default function PPCManagement() {
  return (
    <BespokeServicePage
      route="/services/ppc-management"
      h1="PPC Management Services"
      heroSub="Drive targeted traffic, generate leads, and maximize ROI with expertly managed PPC campaigns across multiple platforms."
      intro={intro}
      features={{ items }}
    />
  );
}
