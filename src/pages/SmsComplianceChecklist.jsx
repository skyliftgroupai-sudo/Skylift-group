// Texting compliance checklist — the second Phase 6 linkable asset.
//
// Two things keep this honest. It never states a legal conclusion: it describes
// the operational steps and points at counsel for the rest, because an agency
// writing legal advice would be both unqualified and unhelpful. And progress is
// stored per-browser rather than collected — there is no email gate, which is
// also why it is the kind of page other people link to.

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, Info } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import { SECTIONS, TOTAL_ITEMS } from "../lib/sms-compliance-items";
import CTASection from "./CtaSection";

const STORAGE_KEY = "slg-sms-compliance-v1";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function SmsComplianceChecklist() {
  // Starts empty so the server render and the first client render match. What
  // was ticked is read in an effect afterwards.
  const [checked, setChecked] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = routeFaqs["/tools/sms-compliance-checklist"] || [];
  useSeo(seoFor("/tools/sms-compliance-checklist"));

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved) || {});
    } catch {
      // Private browsing, blocked storage, or corrupt JSON. The checklist works
      // fine without persistence, so there is nothing to recover from.
    }
  }, []);

  const toggle = (id) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ticking still works for this session even if it cannot be saved.
      }
      return next;
    });
  };

  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / TOTAL_ITEMS) * 100);

  return (
    <div className="w-full bg-[#0a0a0a] text-gray-100">
      <section className="px-6 pt-20 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Text Message Compliance Checklist for Home Service Businesses
          </h1>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed">
            The 21 things that need to be in place before a US contractor texts
            customers — carrier registration, consent, opt-outs and records — in plain
            language, with no email required.
          </p>
        </div>
      </section>

      {/* Disclaimer sits above the checklist, not in the footer. A page about
          compliance that buries its own limitation is not being straight. */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#F4BC3F]/40 bg-[#F4BC3F]/[0.07] p-6">
          <div className="flex gap-3">
            <Info className="h-5 w-5 shrink-0 text-[#F4BC3F] mt-0.5" />
            <div>
              <h2 className="font-semibold text-white mb-2">This is not legal advice</h2>
              <p className="text-gray-300 leading-relaxed text-[0.97rem]">
                Sky Lift Group is a marketing agency, not a law firm. This checklist
                describes the operational steps we put in place when we set up business
                texting, and it covers the parts that are commonly missed. It does not
                interpret statutes, quantify penalties, or account for your specific
                situation. Texting rules carry real consequences — confirm your
                obligations with your own counsel before running a campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="px-6 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-sm font-semibold text-white">
              {done} of {TOTAL_ITEMS} complete
            </span>
            <span className="text-sm text-gray-400">{pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#00A693] transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Ticks are saved in this browser only. Nothing is sent to us and nothing is
            stored on our side.
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {SECTIONS.map((section) => {
            const sectionDone = section.items.filter((i) => checked[i.id]).length;
            return (
              <motion.div
                {...fadeUp}
                key={section.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <span className="shrink-0 text-sm text-gray-400 tabular-nums">
                    {sectionDone}/{section.items.length}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{section.summary}</p>

                <ul className="space-y-4">
                  {section.items.map((item) => {
                    const isOn = !!checked[item.id];
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => toggle(item.id)}
                          aria-pressed={isOn}
                          className="flex w-full gap-3 text-left group"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition ${
                              isOn
                                ? "border-[#00A693] bg-[#00A693]"
                                : "border-white/25 group-hover:border-[#00A693]/60"
                            }`}
                          >
                            {isOn && <Check className="h-3.5 w-3.5 text-[#0a0a0a]" />}
                          </span>
                          <span>
                            <span
                              className={`block font-semibold transition ${
                                isOn ? "text-gray-400 line-through" : "text-white"
                              }`}
                            >
                              {item.label}
                            </span>
                            <span className="mt-1 block text-[0.95rem] leading-relaxed text-gray-400">
                              {item.detail}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-10">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            What happens when this is not in place
          </h2>
          <p className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
            Three separate consequences, and most contractors only think about the first.
          </p>
          <p className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
            <strong className="text-white">Legal exposure.</strong> US texting rules carry
            statutory damages per message, and class actions exist in this area. For a
            business with a few thousand contacts, the arithmetic gets alarming quickly.
            This is the one to discuss with your counsel.
          </p>
          <p className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
            <strong className="text-white">Carrier filtering.</strong> This is the sleeper.
            Complaints and unregistered traffic damage your sending reputation, and once
            carriers start filtering your number, the first thing to break is the
            transactional messaging you depend on — appointment confirmations, reminders,
            missed-call replies. Businesses expect the legal risk and are blindsided by
            the day the reminders silently stop arriving.
          </p>
          <p className="text-gray-300 leading-relaxed text-[1.05rem]">
            <strong className="text-white">Customer relationships.</strong> A homeowner who
            feels spammed by a contractor they used once does not just opt out. They
            remember, and they mention it.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-10">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Where to start if none of this is in place
          </h2>
          <p className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
            Start the{" "}
            <Link
              to="/blog/a2p-10dlc-registration-contractors"
              className="text-[#00A693] underline underline-offset-2"
            >
              A2P 10DLC registration
            </Link>{" "}
            first. It is the only step whose timeline you do not control — carriers
            process it on their own schedule — so everything else can be built while it
            runs. Treating it as a final step is the most common sequencing mistake.
          </p>
          <p className="text-gray-300 leading-relaxed text-[1.05rem] mb-5">
            Then add consent capture at every point you collect a phone number, and switch
            opt-out handling from manual to automatic. Those two cover most of the risk.
          </p>
          <p className="text-gray-300 leading-relaxed text-[1.05rem]">
            For the customer list you already have, the honest position is that{" "}
            <Link
              to="/blog/text-customers-who-never-opted-in"
              className="text-[#00A693] underline underline-offset-2"
            >
              possessing a phone number is not consent to market to it
            </Link>
            . Keep sending transactional messages, use email for the portion of the list
            where text consent is not documented, and build the consented list
            deliberately rather than assuming you already have one.
          </p>
        </motion.div>
      </section>

      {faqs.length > 0 && (
        <section className="px-6 py-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition hover:border-[#00A693]/40"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                    aria-controls={`sms-faq-${i}`}
                  >
                    <h3 className="font-semibold text-white text-[1.05rem]">{faq.q}</h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#00A693] transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    id={`sms-faq-${i}`}
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-4 text-gray-300 leading-relaxed border-t border-white/10">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <section className="px-6 pb-12">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-[#00A693] px-8 py-4 font-semibold text-white transition hover:bg-[#00947F]"
          >
            Have us set this up properly <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Registration, consent capture and opt-out handling are part of every{" "}
            <Link
              to="/services/sms-marketing"
              className="text-[#00A693] underline underline-offset-2"
            >
              SMS marketing
            </Link>{" "}
            build.
          </p>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}
