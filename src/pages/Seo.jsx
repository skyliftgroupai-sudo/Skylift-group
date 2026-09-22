// /services/seo
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
  eyebrow: "PROUDLY OPTIMIZING 100+ BUSINESSES FOR GOOGLE",
  heading: "Proven Strategies for SEO & Digital Growth",
  headingAccent: "Growth",
  lead: "Boost visibility, drive traffic, and increase conversions.",
  tags: [
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "Local SEO & Maps",
    "Analytics & Reporting",
  ],
  paragraphs: [
    [
      "In the competitive online world, ranking high on search engines is crucial. At ",
      { b: "Sky Lift Group" },
      ", we use proven SEO strategies to increase your visibility and attract the right audience.",
    ],
    "From optimizing your website’s structure to creating targeted content, our team ensures your business stays ahead in search results.",
    "Let’s grow your traffic, improve rankings, and convert visitors into loyal customers. Contact us today to start your SEO journey!",
  ],
};

const items = [
  {
    icon: <Search />,
    title: "Keyword Research",
    desc: "Discover high-value keywords to drive qualified traffic to your website.",
    highlight: true,
  },
  {
    icon: <TrendingUp />,
    title: "On-Page SEO",
    desc: "Optimize your content, meta tags, and site structure for better rankings.",
  },
  {
    icon: <BarChart2 />,
    title: "SEO Analytics & Reporting",
    desc: "Track your website’s performance and monitor improvements with advanced analytics.",
  },
  {
    icon: <Users />,
    title: "Off-Page SEO",
    desc: "Get your business found locally with Google Maps and local search strategies.",
  },
  {
    icon: <Settings />,
    title: "Technical SEO",
    desc: "Enhance site speed, crawlability, and structured data for search engines.",
  },
  {
    icon: <Zap />,
    title: "Content & Link Building",
    desc: "Drive organic growth with optimized content and authoritative backlinks.",
  },
];

export default function Seo() {
  return (
    <BespokeServicePage
      route="/services/seo"
      h1="SEO & Digital Marketing"
      heroSub="Boost your online visibility and attract qualified leads with proven SEO strategies."
      intro={intro}
      features={{ items }}
    />
  );
}
