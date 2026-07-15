import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {

  const socialLinks = [
    { icon: Facebook, label: "Facebook", to: "/" },
    { icon: Twitter, label: "Twitter", to: "/" },
    { icon: Linkedin, label: "LinkedIn", to: "/" },
    { icon: Instagram, label: "Instagram", to: "/" },
  ];

  return (
    <footer className="relative py-5 overflow-hidden bg-[#0a0a0a] text-gray-100">
      {/* Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">

        {/* Logo & Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Link to='/'>
              <img
                src="/assets/skyliftlogo.png"
                alt="Sky Lift Group"
                className="h-auto w-40 object-cover"
              />
            </Link>
          </div>
          <p className="text-gray-300 text-md font-medium leading-relaxed">
            Empowering businesses through AI-driven digital marketing strategies that deliver clear, measurable results.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-md font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Our Work", path: "/work" },
              { label: "Contact", path: "/contact" },
              { label: "Privacy policy", path: "/privacy-policy" },
              { label: "Terms Conditions", path: "/terms-conditions" },
              { label: "FAQ", path: "/faq" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="inline-block hover:text-[#00A693] hover:scale-105 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Services</h3>
          <ul className="space-y-2 text-gray-300 text-md font-medium">
            {[
              { label: "Web Design & Development", to: "/services/web-design" },
              { label: "SEO", to: "/services/seo" },
              { label: "Local Maps Optimization", to: "/services/local-maps" },
              { label: "Social Media Marketing", to: "/services/social-media" },
              { label: "PPC Management", to: "/services/ppc-management" },
              { label: "Content Writing", to: "/services/content-writing" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="inline-block hover:text-[#00A693] hover:scale-105 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-md font-medium">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00A693]" />
              <a
                href="mailto:Hello@skyliftgroup.com"
                className="hover:text-[#00A693] transition-colors duration-300"
              >
                Hello@skyliftgroup.com
              </a>
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#00A693] mt-1" />
              <a
                href="https://maps.google.com/?q=1001+S+Main+St+STE+500,+Kalispell,+MT+59901"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A693] transition-colors duration-300"
              >
                1001 S Main St STE 500, <br />
                Kalispell, MT 59901
              </a>
            </li>

            <li className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-[#00A693]" />
              <a
                href="tel:+17252631475"
                className="hover:text-[#00A693] transition-colors duration-300"
              >
                +1 (725) 263-1475
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            {socialLinks.map(({ icon: Icon, label, to }, idx) => (
              <Link
                key={idx}
                to={to}
                aria-label={label}
                className="
        w-10 h-10 flex items-center justify-center
        rounded-full bg-[#00A693]/20 hover:bg-[#00A693]
        transition-all duration-300 text-white
        focus:outline-none focus:ring-2 focus:ring-[#00A693]
        focus:ring-offset-2 focus:ring-offset-black
      "
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-5 flex flex-col md:flex-row items-center justify-center pt-6 px-6 border-t border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-md font-medium">
          © {new Date().getFullYear()} Sky Lift Group. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
