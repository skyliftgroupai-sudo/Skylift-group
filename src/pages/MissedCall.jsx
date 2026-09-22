// /services/missed-call-text-back
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

import { BarChart3, Bot, Clock, MessageSquare, PhoneMissed, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/missed-call-text-back";

const intro = {
  eyebrow: "INSTANT CUSTOMER ENGAGEMENT SOLUTION",
  heading: "Turn Missed Calls Into Booked Customers",
  headingAccent: "Customers",
  lead: "Recover lost leads with instant, automated SMS responses that keep your business connected 24/7.",
  tags: [
    "Instant SMS Response",
    "Automated Lead Capture",
    "Custom Message Templates",
    "AI Conversation Flow",
    "24/7 Availability",
    "Lead Tracking & Analytics",
    "CRM Integration",
  ],
  paragraphs: [
    "Our missed call text-back service ensures that no customer inquiry goes unanswered. Every missed call triggers an instant, personalized SMS that keeps your prospects engaged.",
    "From small businesses to large enterprises, we help you capture leads even when you're unavailable, transforming missed opportunities into real revenue.",
    "Powered by smart automation and tailored messaging, our solution delivers fast, reliable, and measurable results that drive customer loyalty and growth.",
  ],
};

const items = [
  {
    icon: <PhoneMissed />,
    title: "Instant Missed Call Detection",
    desc: "We capture every missed call in real time so no potential lead slips through the cracks, ensuring your business never loses a customer opportunity.",
    highlight: true,
  },
  {
    icon: <MessageSquare />,
    title: "Automated Text-Back Messaging",
    desc: "Send personalized, instant SMS replies to missed callers within seconds, keeping your customers engaged and your business top of mind.",
  },
  {
    icon: <Zap />,
    title: "Lightning-Fast Response System",
    desc: "Our system responds in seconds, dramatically increasing the chances of converting missed calls into booked appointments and paying customers.",
  },
  {
    icon: <Bot />,
    title: "Smart AI Conversation Flow",
    desc: "Intelligent automated conversations qualify leads, answer FAQs, and book appointments without requiring you to lift a finger.",
  },
  {
    icon: <Clock />,
    title: "24/7 Customer Engagement",
    desc: "Never miss another lead, even after hours. Our system works around the clock to engage customers whenever they reach out.",
  },
  {
    icon: <BarChart3 />,
    title: "Lead Tracking & Reporting",
    desc: "Track every missed call, response, and conversion with detailed analytics that help you measure ROI and optimize your customer outreach.",
  },
];

export default function MissedCall() {
  return (
    <BespokeServicePage
      route="/services/missed-call-text-back"
      h1="Missed Call & Text Back Never Lose a Lead Again"
      heroSub="Our automated missed call text-back service instantly responds to every missed call, turning lost opportunities into loyal customers and measurable revenue."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
