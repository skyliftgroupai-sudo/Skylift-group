// Missed call revenue calculator — a linkable asset.
//
// The design constraint that matters: it must not invent a booking rate. Every
// "contractors miss X% of calls" figure in circulation is marketing material,
// and putting one in here would make the output confidently wrong. The user
// supplies their own numbers, the default is labelled as an arbitrary starting
// point rather than a benchmark, and the arithmetic is shown rather than hidden
// behind a result — a number you can check is one you can act on.

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { routeFaqs } from "../lib/service-faqs";
import FinalCta from "../components/home/FinalCta";

const WEEKS_PER_YEAR = 52;

const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);

// Clamp to a sane range and coerce blank/garbage input to a number so the
// output never renders NaN or a negative loss.
function clean(value, { min = 0, max = Infinity }) {
  const n = parseFloat(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(Math.max(n, min), max);
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function Field({ label, hint, prefix, suffix, value, onChange, min, max, step }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-[#142A47] mb-1.5">{label}</span>
      <div className="flex items-center rounded-[12px] border border-[#E2E8F0] bg-white focus-within:border-[#26A6AD]">
        {prefix && <span className="pl-4 text-[#64748B]">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-3 text-[#142A47] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && <span className="pr-4 text-[#64748B]">{suffix}</span>}
      </div>
      {hint && <span className="mt-1.5 block text-xs leading-relaxed text-[#64748B]">{hint}</span>}
    </label>
  );
}

export default function MissedCallCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState("10");
  const [jobValue, setJobValue] = useState("450");
  const [bookingRate, setBookingRate] = useState("30");
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = routeFaqs["/tools/missed-call-calculator"] || [];
  useSeo(seoFor("/tools/missed-call-calculator"));

  const calls = clean(missedPerWeek, { min: 0, max: 10000 });
  const value = clean(jobValue, { min: 0, max: 1000000 });
  const rate = clean(bookingRate, { min: 0, max: 100 });

  const lostPerWeek = calls * (rate / 100) * value;
  const lostPerMonth = (lostPerWeek * WEEKS_PER_YEAR) / 12;
  const lostPerYear = lostPerWeek * WEEKS_PER_YEAR;
  const jobsPerYear = calls * (rate / 100) * WEEKS_PER_YEAR;

  return (
    <div className="w-full slg-light">
      <section className="slg-dark px-6 pt-16 pb-14 lg:pt-20 lg:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[1.875rem] font-extrabold text-white sm:text-[2.25rem] lg:text-[2.75rem]">
            Missed Call Revenue Calculator
          </h1>
          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-slate-300">
            Work out what unanswered calls are costing your home service business,
            using your numbers rather than an industry average nobody can verify.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="rounded-[16px] border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-6">
            <Field
              label="Calls you miss in a typical week"
              hint="Most phone systems report this. If yours does not, count for two weeks and halve it."
              value={missedPerWeek}
              onChange={setMissedPerWeek}
              min={0}
              max={10000}
              step={1}
            />
            <Field
              label="Your average job value"
              prefix="$"
              hint="What a typical job invoices — not your biggest, not your best month."
              value={jobValue}
              onChange={setJobValue}
              min={0}
              max={1000000}
              step={50}
            />
            <Field
              label="Share of callers who would have booked"
              suffix="%"
              hint="Your office manager usually knows roughly. The 30% here is an arbitrary starting point, not an industry benchmark — replace it with your own figure."
              value={bookingRate}
              onChange={setBookingRate}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <div className="rounded-[16px] border border-[#26A6AD]/35 bg-[#E6F5F6] p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wider text-[#1C8A90] font-semibold">
              Revenue attached to missed calls
            </p>
            <p className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#142A47] tabular-nums">
              {money(lostPerYear)}
            </p>
            <p className="text-[#475569]">per year</p>

            <dl className="mt-6 space-y-2 border-t border-[#E2E8F0] pt-5 text-[0.97rem]">
              <div className="flex justify-between gap-4">
                <dt className="text-[#475569]">Per month</dt>
                <dd className="text-[#142A47] font-semibold tabular-nums">{money(lostPerMonth)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#475569]">Per week</dt>
                <dd className="text-[#142A47] font-semibold tabular-nums">{money(lostPerWeek)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#475569]">Jobs per year</dt>
                <dd className="text-[#142A47] font-semibold tabular-nums">
                  {Math.round(jobsPerYear).toLocaleString("en-US")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* THE ARITHMETIC — shown, not hidden. A number you can check is a number
          you can argue with, which is the point of the tool. */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-[16px] border border-[#E2E8F0] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-[#142A47] mb-4">How that number is worked out</h2>
          <p className="font-mono text-sm sm:text-[0.95rem] text-[#334155] leading-relaxed break-words">
            {calls.toLocaleString("en-US")} missed calls/week × {rate}% who would have
            booked × {money(value)} per job × {WEEKS_PER_YEAR} weeks ={" "}
            <span className="text-[#1C8A90] font-semibold">{money(lostPerYear)}</span>
          </p>
          <p className="mt-4 text-[#64748B] text-[0.95rem] leading-relaxed">
            No hidden multipliers and no assumptions of our own beyond the three numbers
            you entered. If the result looks wrong, one of those three inputs is wrong —
            usually the booking rate, which is the one most people guess at.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-4">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142A47] mb-6">
            Why a missed call costs a full job rather than a fraction of one
          </h2>
          <p className="text-[#475569] leading-relaxed text-[1.05rem] mb-5">
            A missed call is not a missed message. Most people do not leave voicemails for
            businesses any more — they hang up and call the next result. Your missed call
            is not sitting in a queue waiting for you; it is already being answered by a
            competitor.
          </p>
          <p className="text-[#475569] leading-relaxed text-[1.05rem] mb-5">
            That is what makes the arithmetic above harsher than it first looks. You paid
            for that call — through ads, through SEO, through years of building a name.
            All of that cost is sunk the moment the phone rings. Missing it wastes the
            entire acquisition cost, not a share of it.
          </p>
          <p className="text-[#475569] leading-relaxed text-[1.05rem]">
            It is also concentrated. Most contractors find the bulk of their missed calls
            sit in a few predictable windows: the middle of a working day when everyone is
            on a job, and evenings and weekends when the calls are often most urgent and
            most valuable.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-12">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142A47] mb-6">
            How to get a booking rate you can trust
          </h2>
          <p className="text-[#475569] leading-relaxed text-[1.05rem] mb-5">
            The booking rate is the input that decides everything, and it is the one
            people guess at. Three ways to replace the guess, in ascending order of effort
            and accuracy:
          </p>
          <ol className="space-y-5">
            {[
              {
                t: "Ask whoever answers the phone",
                d: "Your office manager has a rough sense of what proportion of inbound calls become work. It is not precise, but it beats a number from an article.",
              },
              {
                t: "Count for two weeks",
                d: "Tally answered calls and how many became booked jobs. Two weeks is enough to see a pattern without waiting a month to act on it.",
              },
              {
                t: "Set up missed call text back and read the replies",
                d: "Once missed callers get an automatic reply, you stop estimating and start seeing. The people who reply are, almost by definition, the people who wanted to hire you — and the sales calls and wrong numbers filter themselves out for free.",
              },
            ].map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#26A6AD]/45 text-sm font-semibold text-[#1C8A90]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#142A47] mb-1">{s.t}</h3>
                  <p className="text-[#475569] leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      <section className="px-6 py-12">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142A47] mb-6">
            What to do about the number
          </h2>
          <p className="text-[#475569] leading-relaxed text-[1.05rem] mb-5">
            The instinct is to hire someone to answer the phone. That works and it is
            expensive, and it still does not cover evenings, weekends, or three calls
            arriving at once.
          </p>
          <p className="text-[#475569] leading-relaxed text-[1.05rem] mb-5">
            The cheaper fix is to respond automatically inside the window that decides the
            job — which is a few minutes, not an hour.{" "}
            <Link to="/services/missed-call-text-back" className="text-[#1C8A90] underline underline-offset-2">
              Missed call text back
            </Link>{" "}
            sends the caller a text within about a minute, before they dial the next
            company. For higher call volumes, an{" "}
            <Link to="/services/ai-voice-agents" className="text-[#1C8A90] underline underline-offset-2">
              AI voice agent
            </Link>{" "}
            answers, qualifies the job and books it during the call.
          </p>
          <p className="text-[#475569] leading-relaxed text-[1.05rem]">
            One ordering note that costs contractors more than anything else on this page:
            if you are running{" "}
            <Link to="/services/google-ads" className="text-[#1C8A90] underline underline-offset-2">
              Google Ads
            </Link>{" "}
            and missing the calls they generate, fix the calls before increasing the
            budget. Paying for a click and then not answering the phone is the most
            expensive mistake available.
          </p>
        </motion.div>
      </section>

      {faqs.length > 0 && (
        <section className="px-6 py-12">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142A47] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-[12px] border border-[#E2E8F0] bg-white overflow-hidden transition hover:border-[#26A6AD]/45"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                    aria-controls={`calc-faq-${i}`}
                  >
                    <h3 className="font-bold text-[#142A47] text-[1.05rem]">{faq.q}</h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#1C8A90] transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    id={`calc-faq-${i}`}
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-4 text-[#475569] leading-relaxed border-t border-[#E2E8F0]">
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
            className="btn btn-primary"
          >
            Get a plan for closing the gap <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-[#64748B] text-sm">
            Or read{" "}
            <Link
              to="/blog/what-missed-calls-cost-contractors"
              className="text-[#1C8A90] underline underline-offset-2"
            >
              what a missed call actually costs a contractor
            </Link>
            .
          </p>
        </motion.div>
      </section>

      <FinalCta />
    </div>
  );
}
