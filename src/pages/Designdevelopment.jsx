// /services/web-design
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

import { Code2, Search, Settings, ShoppingCart, Smartphone, Wrench } from "lucide-react";
import BespokeServicePage from "../components/service/BespokeServicePage";

const intro = {
  eyebrow: "PROUDLY AWARDED 20+ WEB DESIGN AWARDS",
  heading: "Web Maintenance & Support",
  headingAccent: "Support",
  lead: "We’re Also Specialists In...",
  tags: [
    "SEO Services",
    "Content Marketing",
    "Local Maps Optimization",
  ],
  paragraphs: [
    [
      "In today’s digital world, your website is often the first interaction potential customers have with your brand. At ",
      { b: "Sky Lift Group" },
      ", we create modern, user-friendly websites that look great and perform even better.",
    ],
    "Whether you’re starting new or redesigning an existing site, we bring your vision to life.",
    "Let’s build a website that reflects your brand and supports your business goals. Get in touch to start your project.",
  ],
};

const items = [
  {
    icon: <Code2 />,
    title: "Custom Website Design",
    desc: "Unique layouts that match your brand with clean visuals and a smooth user experience.",
    highlight: true,
  },
  {
    icon: <Wrench />,
    title: "WordPress Website Development",
    desc: "Custom themes, plugins and performance-optimized sites built for stability.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile Responsive Design",
    desc: "Fully responsive interfaces tested on all major screen sizes.",
  },
  {
    icon: <ShoppingCart />,
    title: "E-Commerce Development",
    desc: "Secure stores with payment integration, product management and order automation.",
  },
  {
    icon: <Search />,
    title: "SEO-Friendly Web Development",
    desc: "Fast, structured, and optimized for better visibility on search engines.",
  },
  {
    icon: <Settings />,
    title: "Website Maintenance & Support",
    desc: "Updates, security monitoring, backups and speed improvements.",
  },
];

export default function Designweb() {
  return (
    <BespokeServicePage
      route="/services/web-design"
      h1="Website Design & Development"
      heroSub="Helping brands rise with creativity, strategy and measurable growth."
      intro={intro}
      features={{ items }}
    />
  );
}
