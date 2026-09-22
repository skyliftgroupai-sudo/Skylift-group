// /services/content-writing
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

import { BarChart2, FileText, PenTool, Settings, Users, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "DELIVERING HIGH-QUALITY CONTENT FOR BUSINESSES",
  heading: "Targeted Content Writing",
  headingAccent: "Writing",
  lead: "Attract readers, engage your audience, and convert them with well-crafted content.",
  tags: [
    "Blog & Articles",
    "Website Content",
    "Social Media Posts",
    "Email Campaigns",
    "SEO Optimization",
    "Content Strategy",
  ],
  paragraphs: [
    [
      "Our content writing services help businesses connect with their audience. At ",
      { b: "Sky Lift Group" },
      ", we create blogs, articles, web pages, and social media content that engages and converts.",
    ],
    "We focus on SEO-friendly content, compelling storytelling, and consistent messaging to ensure your brand stands out.",
    "Let us help you communicate effectively and grow your business with high-quality content.",
  ],
};

const items = [
  {
    icon: <PenTool />,
    title: "Blog & Article Writing",
    desc: "Create engaging and SEO-friendly blogs and articles to attract and retain your audience.",
    highlight: true,
  },
  {
    icon: <FileText />,
    title: "Website Content",
    desc: "Craft compelling web pages that communicate your brand message and convert visitors.",
  },
  {
    icon: <Users />,
    title: "Social Media Content",
    desc: "Develop captivating posts, captions, and graphics to boost engagement on social platforms.",
  },
  {
    icon: <Zap />,
    title: "Email & Newsletter Writing",
    desc: "Write persuasive email campaigns that drive opens, clicks, and conversions.",
  },
  {
    icon: <BarChart2 />,
    title: "SEO Content Optimization",
    desc: "Optimize existing content with keywords, meta tags, and structure for better search rankings.",
  },
  {
    icon: <Settings />,
    title: "Content Strategy & Planning",
    desc: "Develop a content roadmap that aligns with your business goals and audience needs.",
  },
];

export default function ContentWritingServices() {
  return (
    <BespokeServicePage
      route="/services/content-writing"
      h1="Professional Content Writing"
      heroSub="Engage your audience, boost SEO rankings, and communicate your brand effectively with high-quality content."
      intro={intro}
      features={{ items }}
    />
  );
}
