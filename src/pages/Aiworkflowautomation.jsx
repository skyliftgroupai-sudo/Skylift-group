// /services/ai-workflows
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

import { Cpu, GitBranch, Settings, TrendingUp, Workflow, Zap } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "INTELLIGENT BUSINESS AUTOMATION",
  heading: "Automate Tasks Scale Your Business",
  headingAccent: "Business",
  lead: "Eliminate repetitive work and free your team to focus on what truly matters with AI-powered automation.",
  tags: [
    "Custom Workflow Design",
    "Process Automation",
    "System Integration",
    "Smart Triggers",
    "AI Decision Making",
    "Data Sync & Flow",
    "Performance Tracking",
  ],
  paragraphs: [
    "Our AI workflow automation transforms how your business operates by intelligently handling tasks that used to consume hours of your team's time every single day.",
    "From lead processing to customer onboarding and internal reporting, we design custom AI workflows that connect your systems and execute flawlessly without manual intervention.",
    "Powered by cutting-edge AI and seamless integrations, our solution helps you scale faster, reduce costs, and unlock new levels of operational efficiency.",
  ],
};

const items = [
  {
    icon: <Workflow />,
    title: "Custom Workflow Design",
    desc: "We map out and design AI-powered workflows tailored to your business processes, eliminating manual tasks and accelerating productivity across every department.",
    highlight: true,
  },
  {
    icon: <Cpu />,
    title: "AI-Powered Process Automation",
    desc: "Deploy intelligent AI agents that handle repetitive tasks, data entry, and decision-making, freeing your team to focus on high-value strategic work.",
  },
  {
    icon: <GitBranch />,
    title: "Multi-System Integration",
    desc: "Seamlessly connect your CRM, email, calendar, and business tools through smart AI workflows that ensure data flows where it's needed automatically.",
  },
  {
    icon: <Zap />,
    title: "Trigger-Based Automations",
    desc: "Set up smart triggers that initiate actions instantly, from sending follow-ups to updating records, ensuring nothing falls through the cracks.",
  },
  {
    icon: <Settings />,
    title: "Continuous Optimization",
    desc: "Our AI continuously learns from your workflows and refines processes for maximum efficiency, reducing bottlenecks and improving performance over time.",
  },
  {
    icon: <TrendingUp />,
    title: "Performance Insights & Reports",
    desc: "Track time saved, tasks completed, and ROI with detailed dashboards that show exactly how AI is transforming your business operations.",
  },
];

export default function AIWorkflowAutomation() {
  return (
    <BespokeServicePage
      route="/services/ai-workflows"
      h1="AI Workflow Automation Smarter, Faster, Effortless"
      heroSub="Streamline your business with intelligent AI automation that handles repetitive tasks, connects your tools, and accelerates growth on autopilot."
      intro={intro}
      features={{ items }}
    />
  );
}
