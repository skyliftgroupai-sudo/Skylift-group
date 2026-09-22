// /services/ai-voice-agents
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

import { Bot, Globe, Headphones, Mic, PhoneCall, Sparkles } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/ai-voice-agents";

const intro = {
  eyebrow: "HUMAN-LIKE AI CALLING SOLUTION",
  heading: "Voice Agents That Sound Human",
  headingAccent: "Human",
  lead: "Never miss a call again with AI voice agents that engage, qualify, and convert callers like your best human rep.",
  tags: [
    "24/7 Call Handling",
    "Natural Voice AI",
    "Lead Qualification",
    "Appointment Booking",
    "Multi-Language",
    "Custom Brand Voice",
    "CRM Integration",
  ],
  paragraphs: [
    "Our AI voice agents are revolutionizing how businesses handle phone communication, delivering human-like conversations that engage callers and convert them into customers.",
    "From answering inbound inquiries to running outbound campaigns, our voice agents handle thousands of calls simultaneously without ever getting tired, sick, or distracted.",
    "Powered by advanced natural language processing and seamless integrations, our solution helps you scale customer engagement while dramatically reducing operational costs.",
  ],
};

const items = [
  {
    icon: <PhoneCall />,
    title: "24/7 Inbound & Outbound Calling",
    desc: "AI voice agents handle inbound inquiries and outbound calls around the clock, ensuring every customer is greeted instantly without missing a single opportunity.",
    highlight: true,
  },
  {
    icon: <Mic />,
    title: "Natural Voice Conversations",
    desc: "Our AI agents speak with human-like clarity and emotion, holding natural conversations that build trust and provide a premium customer experience.",
  },
  {
    icon: <Bot />,
    title: "Smart Lead Qualification",
    desc: "AI agents ask the right questions, qualify leads in real-time, and book appointments directly into your calendar without any manual intervention.",
  },
  {
    icon: <Globe />,
    title: "Multi-Language Support",
    desc: "Reach a global audience with AI voice agents fluent in multiple languages, delivering localized, culturally aware conversations to every caller.",
  },
  {
    icon: <Headphones />,
    title: "Customer Support Automation",
    desc: "Resolve common questions, route complex issues, and provide instant support 24/7, dramatically reducing wait times and operational costs.",
  },
  {
    icon: <Sparkles />,
    title: "Custom Voice & Personality",
    desc: "Tailor your AI agent's voice, tone, and personality to match your brand, creating a consistent and memorable experience for every caller.",
  },
];

export default function AIVoiceAgents() {
  return (
    <BespokeServicePage
      route="/services/ai-voice-agents"
      h1="AI Voice Agents Always On, Always Human"
      heroSub="Deploy intelligent AI voice agents that handle calls 24/7 with human-like conversations, qualifying leads and booking appointments effortlessly."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
