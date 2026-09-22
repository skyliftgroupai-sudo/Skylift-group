// /services/ai-chatbots
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

import { BarChart3, Bot, Brain, Globe2, MessageCircle, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";
import longform from "../content/services/ai-chatbots";

const intro = {
  eyebrow: "INTELLIGENT CONVERSATIONAL AI",
  heading: "Smart Chatbots That Drive Real Results",
  headingAccent: "Results",
  lead: "Engage every visitor instantly with AI chatbots that converse naturally, qualify leads, and never sleep.",
  tags: [
    "24/7 Customer Support",
    "Natural Conversations",
    "Lead Qualification",
    "Website Integration",
    "WhatsApp & Messenger",
    "Custom Training",
    "Analytics & Insights",
  ],
  paragraphs: [
    "Our AI chatbots transform how your business engages with customers, providing instant, intelligent responses that boost satisfaction and drive conversions.",
    "From answering FAQs to qualifying leads and booking appointments, our chatbots handle thousands of conversations simultaneously while maintaining a personal, on-brand touch.",
    "Powered by advanced natural language understanding and continuous learning, our solution helps you deliver world-class customer experiences while reducing support costs significantly.",
  ],
};

const items = [
  {
    icon: <MessageCircle />,
    title: "24/7 Instant Customer Support",
    desc: "AI chatbots respond to customer questions instantly, day or night, providing immediate support that keeps visitors engaged and satisfied around the clock.",
    highlight: true,
  },
  {
    icon: <Brain />,
    title: "Intelligent Conversation Engine",
    desc: "Powered by advanced AI, our chatbots understand context, intent, and nuance to deliver natural, helpful conversations that feel surprisingly human.",
  },
  {
    icon: <Bot />,
    title: "Lead Capture & Qualification",
    desc: "Smart chatbots greet visitors, ask the right questions, and qualify leads automatically, sending only the hottest prospects to your sales team.",
  },
  {
    icon: <Globe2 />,
    title: "Multi-Platform Deployment",
    desc: "Deploy AI chatbots across your website, WhatsApp, Facebook Messenger, Instagram, and more, ensuring you meet customers wherever they are.",
  },
  {
    icon: <Zap />,
    title: "Custom Training & Personality",
    desc: "We train your chatbot on your business knowledge, FAQs, and brand voice, creating a unique AI assistant that truly represents your company.",
  },
  {
    icon: <BarChart3 />,
    title: "Conversation Analytics",
    desc: "Track conversations, common questions, and conversion rates with detailed analytics that help you continuously improve customer interactions.",
  },
];

export default function AIChatbot() {
  return (
    <BespokeServicePage
      route="/services/ai-chatbots"
      h1="AI Chatbot Solutions Engage. Support. Convert."
      heroSub="Deploy intelligent AI chatbots that engage customers 24/7, answer questions instantly, and turn website visitors into qualified leads on autopilot."
      intro={intro}
      features={{ items }}
      longform={longform}
    />
  );
}
