// /services/lead-follow-up
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

import { BarChart3, Mail, Repeat, Target, UserPlus, Workflow } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/lead-follow-up";

const intro = {
  eyebrow: "INTELLIGENT LEAD NURTURING SYSTEM",
  heading: "Nurture Leads Into Lifelong Customers",
  headingAccent: "Customers",
  lead: "Stop losing leads to slow follow-ups. Engage every prospect instantly with smart automation that works 24/7.",
  tags: [
    "Smart Lead Capture",
    "Email Automation",
    "SMS & WhatsApp Sequences",
    "CRM Integration",
    "Behavior-Based Triggers",
    "Drip Campaigns",
    "Conversion Optimization",
  ],
  paragraphs: [
    "Our automated lead follow-up system ensures every prospect gets the attention they deserve, with personalized messages delivered at the perfect moment to maximize conversions.",
    "From first contact to final sale, we design intelligent workflows that nurture leads through every stage of their journey, freeing your team to focus on closing deals.",
    "Powered by advanced automation and data-driven insights, our solution helps you scale your sales process while delivering a personal touch at every interaction.",
  ],
};

const items = [
  {
    icon: <UserPlus />,
    title: "Smart Lead Capture & Segmentation",
    desc: "We capture leads from every channel and segment them based on behavior, interest, and intent so each prospect receives the right message at the right time.",
    highlight: true,
  },
  {
    icon: <Mail />,
    title: "Multi-Channel Follow-Up Sequences",
    desc: "Automated email, SMS, and WhatsApp sequences that nurture leads across every touchpoint, keeping your brand top of mind until they convert.",
  },
  {
    icon: <Workflow />,
    title: "Custom Automation Workflows",
    desc: "Tailored workflows triggered by user actions like form fills, clicks, and replies, ensuring every lead gets a personalized journey toward becoming a customer.",
  },
  {
    icon: <Target />,
    title: "Behavior-Based Lead Nurturing",
    desc: "Smart triggers respond to how leads engage with your content, sending relevant follow-ups that build trust and move prospects closer to a sale.",
  },
  {
    icon: <Repeat />,
    title: "Re-Engagement & Drip Campaigns",
    desc: "Bring cold leads back to life with strategic drip campaigns and re-engagement sequences designed to recover lost opportunities and maximize ROI.",
  },
  {
    icon: <BarChart3 />,
    title: "Performance Tracking & Optimization",
    desc: "Detailed analytics on open rates, click-throughs, and conversions help us continuously refine your follow-up strategy for outstanding results.",
  },
];

export default function AutomatedLeadFollowUp() {
  return (
    <BespokeServicePage
      route="/services/lead-follow-up"
      h1="Automated Lead Follow Up Convert More, Work Less"
      heroSub="Our intelligent lead follow-up automation nurtures every prospect with the right message at the right time, turning leads into loyal customers on autopilot."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
