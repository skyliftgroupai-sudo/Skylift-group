// /services/local-maps
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

import { BarChart2, MapPin, Search, Users, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/local-maps";

const intro = {
  eyebrow: "HELPING LOCAL BUSINESSES DOMINATE GOOGLE & APPLE MAPS",
  heading: "Targeted Strategies for Local Growth",
  headingAccent: "Growth",
  lead: "Improve visibility, attract nearby customers, and convert searches into sales.",
  tags: [
    "Google My Business",
    "Apple Maps",
    "Local Keyword Optimization",
    "Local Citations",
    "Reputation Management",
    "Performance Reporting",
  ],
  paragraphs: [
    [
      "Local search and maps optimization ensures your business gets discovered by nearby customers. At ",
      { b: "Sky Lift Group" },
      ", we optimize your listings, keywords, and reputation to maximize local visibility.",
    ],
    "Our team focuses on Google My Business, Apple Maps, local keywords, citations, and reviews to help you stay competitive in your area.",
    "Let’s grow your local presence and turn online searches into loyal customers.",
  ],
};

const items = [
  {
    icon: <MapPin />,
    title: "Google My Business Optimization",
    desc: "Ensure your business appears prominently on Google Maps with accurate and optimized listings.",
    highlight: true,
  },
  {
    icon: <MapPin />,
    title: "Apple Maps Optimization",
    desc: "Get found by iOS users with properly optimized Apple Maps listings.",
  },
  {
    icon: <Search />,
    title: "Local Keyword Research & Optimization",
    desc: "Identify and target keywords specific to your local audience for maximum visibility.",
  },
  {
    icon: <Users />,
    title: "Local Link Building & Citations",
    desc: "Boost local authority with relevant backlinks, citations, and mentions.",
  },
  {
    icon: <Zap />,
    title: "Reputation Management",
    desc: "Manage and improve online reviews to build trust and credibility in your local market.",
  },
  {
    icon: <BarChart2 />,
    title: "Performance Reporting",
    desc: "Track rankings, traffic, and conversions from local search and maps campaigns.",
  },
];

export default function Localmap() {
  return (
    <BespokeServicePage
      route="/services/local-maps"
      h1="Local Maps & SEO Optimization"
      heroSub="Boost your local presence, get found on Google & Apple Maps, and attract more customers with our local optimization strategies."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
