// /services/social-media
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

import { BarChart2, MessageCircle, Settings, TrendingUp, Users, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "HELPING BRANDS GROW AND ENGAGE ON SOCIAL MEDIA",
  heading: "Effective Strategies for Social Growth",
  headingAccent: "Growth",
  lead: "Build your online presence, increase engagement, and drive conversions.",
  tags: [
    "Strategy & Planning",
    "Content Creation",
    "Paid Campaigns",
    "Community Management",
    "Influencer Collaboration",
    "Analytics & Reporting",
  ],
  paragraphs: [
    [
      "Social media marketing helps your brand reach the right audience, engage followers, and convert them into loyal customers. At ",
      { b: "Sky Lift Group" },
      ", we create strategies tailored to your business goals.",
    ],
    "From content creation and paid campaigns to influencer collaborations and performance reporting, we cover all aspects of social media marketing.",
    "Start building your online presence today and maximize your social media impact.",
  ],
};

const items = [
  {
    icon: <Users />,
    title: "Social Media Strategy",
    desc: "Craft tailored social media strategies to grow your audience and increase engagement.",
    highlight: true,
  },
  {
    icon: <TrendingUp />,
    title: "Paid Advertising Campaigns",
    desc: "Maximize reach and ROI with Facebook, Instagram, LinkedIn, and TikTok ads.",
  },
  {
    icon: <MessageCircle />,
    title: "Content Creation & Scheduling",
    desc: "Design engaging posts, videos, and stories to attract and retain followers.",
  },
  {
    icon: <Zap />,
    title: "Community Management",
    desc: "Interact with your audience, respond to messages, and build brand loyalty.",
  },
  {
    icon: <BarChart2 />,
    title: "Analytics & Performance Reporting",
    desc: "Track growth, engagement, and campaign performance to optimize results.",
  },
  {
    icon: <Settings />,
    title: "Influencer & Collaboration Management",
    desc: "Partner with influencers to expand your brand reach and credibility.",
  },
];

export default function SocialMediaMarketing() {
  return (
    <BespokeServicePage
      route="/services/social-media"
      h1="Social Media Marketing"
      heroSub="Grow your brand, engage your audience, and boost conversions with our full-service social media marketing solutions."
      intro={intro}
      features={{ items }}
    />
  );
}
