import { useState } from "react";
import { PhoneMissed, MessageSquare, Zap, Clock, Bot, BarChart3, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "./CtaSection";
import Testimonials from "./Testionmial";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

const services = [
  {
    icon: <PhoneMissed size={34} />,  // Instant Missed Call Detection
    title: "Instant Missed Call Detection",
    desc: "We capture every missed call in real time so no potential lead slips through the cracks, ensuring your business never loses a customer opportunity.",
    highlight: true,
  },
  {
    icon: <MessageSquare size={34} />,  // Automated Text-Back Messaging
    title: "Automated Text-Back Messaging",
    desc: "Send personalized, instant SMS replies to missed callers within seconds, keeping your customers engaged and your business top of mind.",
  },
  {
    icon: <Zap size={34} />,  // Lightning-Fast Response System
    title: "Lightning-Fast Response System",
    desc: "Our system responds in seconds, dramatically increasing the chances of converting missed calls into booked appointments and paying customers.",
  },
  {
    icon: <Bot size={34} />,  // Smart AI Conversation Flow
    title: "Smart AI Conversation Flow",
    desc: "Intelligent automated conversations qualify leads, answer FAQs, and book appointments without requiring you to lift a finger.",
  },
  {
    icon: <Clock size={34} />,  // 24/7 Customer Engagement
    title: "24/7 Customer Engagement",
    desc: "Never miss another lead, even after hours. Our system works around the clock to engage customers whenever they reach out.",
  },
  {
    icon: <BarChart3 size={34} />,  // Lead Tracking & Reporting
    title: "Lead Tracking & Reporting",
    desc: "Track every missed call, response, and conversion with detailed analytics that help you measure ROI and optimize your customer outreach.",
  },
];

const faqs = [
  {
    q: "How does the missed call text-back service work?",
    a: "When a customer calls and you can't answer, our system instantly sends them a personalized SMS, keeping them engaged and giving you a chance to convert that missed call into a customer.",
  },
  {
    q: "How quickly are text messages sent?",
    a: "Messages are sent within seconds of a missed call, ensuring your customer receives an immediate response while your business is still fresh in their mind.",
  },
  {
    q: "Can the messages be customized for my business?",
    a: "Absolutely. We tailor every text-back message to match your brand voice, services, and customer needs to maximize engagement and conversions.",
  },
  {
    q: "Will I lose leads if I'm unavailable?",
    a: "No. Our automated system ensures every missed call is followed up instantly, so you never lose a potential customer due to being busy or after hours.",
  },
];


const MissedCall = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  useSeo({
    title: "Missed Call & Text Back Service | Sky Lift Group",
    description:
      "Sky Lift Group delivers automated missed call text-back solutions that instantly engage customers, recover lost leads, and boost conversions.",
    canonical: "https://www.skyliftgroup.com/services/missed-call-text-back"
  });


  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/missed-hero.png")` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Missed Call & Text Back <br />
          <span className="text-[#00A693]"> Never Lose a Lead Again</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          Our automated missed call text-back service instantly responds to every missed call, turning lost opportunities into loyal customers and measurable revenue.
        </motion.p>

      </section>

      {/* <SliderBar /> */}

      {/* STRATEGY SECTION */}
      <motion.section
        className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center px-6 md:px-0">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs sm:text-sm tracking-wide opacity-80">
              INSTANT CUSTOMER ENGAGEMENT SOLUTION
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Turn Missed Calls Into
              <span className="text-[#00A693]"> Booked Customers</span>
            </h2>

            <p className="italic text-lg sm:text-xl mt-4">
              Recover lost leads with instant, automated SMS responses that keep your business connected 24/7.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                Instant SMS Response
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                Automated Lead Capture
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                Custom Message Templates
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                AI Conversation Flow
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                24/7 Availability
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                Lead Tracking & Analytics
              </span>
              <span className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur">
                CRM Integration
              </span>
            </div>

          </motion.div>

          <motion.div
            className="text-white text-base sm:text-lg leading-relaxed space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Our missed call text-back service ensures that no customer inquiry goes unanswered. Every missed call triggers an instant, personalized SMS that keeps your prospects engaged.
            </p>

            <p>
              From small businesses to large enterprises, we help you capture leads even when you're unavailable, transforming missed opportunities into real revenue.
            </p>

            <p>
              Powered by smart automation and tailored messaging, our solution delivers fast, reliable, and measurable results that drive customer loyalty and growth.
            </p>
          </motion.div>
        </div>


      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        className="py-20 px-6 md:px-12 bg-[#0a0a0a]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`relative group rounded-2xl p-8 border transition-all duration-500 shadow-md backdrop-blur-xl bg-white/10 hover:shadow-[0_0_25px_#00A69340] hover:border-[#00A693]/40 ${service.highlight ? "border-[#00A693]/30" : "border-gray-700"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#00A693] mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-3 text-gray-100">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.desc}</p>
              <Link to="/contact">
                <button
                  className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer ${service.highlight
                    ? "bg-[#00A693] text-white hover:bg-[#00927f]"
                    : "text-[#00A693] border border-[#00A693] hover:bg-[#00A693] hover:text-white"
                    }`}
                >
                  Lets Start
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ SECTION */}
      <motion.section
        className="bg-[#0a0a0a] py-20 px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  className="border border-[#00A693] rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_12px_#00A69350] hover:border-[#00A693] hover:scale-[1.01]"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? "text-[#00A693]" : "text-[#00A693] group-hover:text-[#008d7c]"
                        }`}
                    >
                      {item.q}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`text-[#00A693] transition-all duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                        } group-hover:text-[#008d7c]`}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mt-4 border-t border-gray-700 pt-3">
                          <p className="text-gray-300 text-md leading-relaxed">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full h-80 flex items-center justify-center shadow-md">
              <img src="/assets/missed-call.png" alt="Missed Call Text Back Service" className="rounded-2xl shadow-lg w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <CTASection />
      <Testimonials />
    </div>
  );
};

export default MissedCall;