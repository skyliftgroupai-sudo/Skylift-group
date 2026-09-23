import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { ORG_DESCRIPTION } from "../lib/schema";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/199LNKDqTT/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/sky-lift-group/" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const serviceLinks = [
  { label: "AI Chatbots", to: "/services/ai-chatbots" },
  { label: "Missed Call Text Back", to: "/services/missed-call-text-back" },
  { label: "SMS & Text Marketing", to: "/services/sms-marketing" },
  { label: "Database Reactivation", to: "/services/database-reactivation" },
  { label: "Web Design & Development", to: "/services/web-design" },
  { label: "SEO", to: "/services/seo" },
  { label: "Local Maps Optimization", to: "/services/local-maps" },
  { label: "Google Ads", to: "/services/google-ads" },
];

const toolLinks = [
  { label: "Missed Call Calculator", to: "/tools/missed-call-calculator" },
  { label: "Texting Compliance Checklist", to: "/tools/sms-compliance-checklist" },
];

const legalLinks = [
  { label: "Privacy policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
];

const linkClass =
  "text-[0.9375rem] text-slate-400 transition-colors hover:text-[#26A6AD]";

export const Footer = () => (
  <footer className="slg-dark border-t border-white/10">
    <div className="slg-container py-16 lg:py-20">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-10">
        <div className="col-span-2 lg:col-span-4">
          <Link to="/" aria-label="Sky Lift LLC home">
            <img
              src="/assets/skyliftlogo.webp"
              alt="Sky Lift LLC"
              className="w-[160px] object-contain"
              width={612}
              height={408}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.7] text-slate-400">
            {ORG_DESCRIPTION}
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-[#26A6AD]/60 hover:text-[#26A6AD]"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
            Company
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
            Free Tools
          </h3>
          <ul className="space-y-2.5">
            {toolLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-3">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
            Contact
          </h3>
          <ul className="space-y-4 text-[0.9375rem] text-slate-400">
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-[18px] w-[18px] shrink-0 text-[#26A6AD]" aria-hidden="true" />
              <a href="mailto:info@skyliftllc.com" className="transition-colors hover:text-[#26A6AD]">
                info@skyliftllc.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-[18px] w-[18px] shrink-0 text-[#26A6AD]" aria-hidden="true" />
              <a href="tel:+19049069019" className="transition-colors hover:text-[#26A6AD]">
                +1 (904) 906-9019
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-[18px] w-[18px] shrink-0 text-[#26A6AD]" aria-hidden="true" />
              <a
                href="https://maps.google.com/?q=1001+S+Main+St+STE+500,+Kalispell,+MT+59901"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#26A6AD]"
              >
                1001 S Main St STE 500,
                <br />
                Kalispell, MT 59901
              </a>
            </li>
          </ul>
          <Link to="/book" className="btn btn-primary mt-7 w-full px-6 py-3 text-[0.9375rem]">
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="slg-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Sky Lift LLC. All rights reserved.
        </p>
        <ul className="flex gap-6">
          {legalLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm text-slate-500 transition-colors hover:text-[#26A6AD]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
