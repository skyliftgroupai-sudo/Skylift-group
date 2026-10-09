import { useEffect, useState } from "react";

// Sky Lift Group's LeadConnector inquiry form, supplied by the owner on
// 2026-10-09. It replaces J6Gtz1pzBFNFDvoMGV05, which had been recovered from an
// old commit when this page had no working contact method at all.
//
// FORM_HEIGHT comes from data-height on the owner's embed snippet: the form's
// own declared height. Reserving exactly that means form_embed.js sizes the
// frame to a box that is already the right size, so nothing moves. The previous
// 760px was a guess and would have shifted by 163px once the form loaded.
const CONTACT_FORM_ID = "wF3454LwddFo7Lmjp5V2";
const CONTACT_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${CONTACT_FORM_ID}`;
const FORM_HEIGHT = 923;
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, PhoneCall } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

const Contact = () => {
  // Detecting a blocked cross-origin embed is harder than it looks. An iframe's
  // onLoad fires even when the navigation failed -- Chromium treats its own
  // error page as a load -- so onLoad cannot tell success from failure. A test
  // with the embed blocked proved the onLoad version never showed the fallback.
  // The reliable signal is a separate no-cors request to the same origin: an ad
  // blocker, which is the usual cause, blocks that too and the promise rejects.
  // A real response resolves opaquely; its status does not matter, only that it
  // arrived.
  const [formFailed, setFormFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const fail = () => !cancelled && setFormFailed(true);
    fetch(CONTACT_FORM_SRC, { mode: "no-cors", cache: "no-store" }).catch(fail);
    // Backstop for a request that neither resolves nor rejects.
    const t = setTimeout(fail, 6000);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);



  useSeo(seoFor("/contact"));


  return (
    <div className="flex flex-col">
      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Real <img> rather than a CSS background: the preload scanner can see
            this in the initial HTML, which is what makes it the LCP it should be. */}
        <img
          src="/assets/contact.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Let's Start a Conversation

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          Have a project in mind? Send us a message and our team will get back to you shortly.
        </motion.p>
      </section>
      {/* FORM + INFO SECTION */}
      <section className="py-20 bg-[#0a0a0a] text-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* INFO CARDS */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: "Email Us",
                  lines: [
                    <a href="mailto:hello@skyliftgroup.com" className="hover:text-[#00A693] transition-colors">
                      hello@skyliftgroup.com
                    </a>,
                  ],
                },
                {
                  icon: <PhoneCall className="h-6 w-6 text-white" />,
                  title: "Call Us",
                  lines: [
                    <a href="tel:+17252631475" className="hover:text-[#00A693] transition-colors">
                      +1 (725) 263-1475
                    </a>,
                  ],
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: "Location",
                  lines: [
                    "United States Of America",
                    "Canada",
                    "Australia",
                  ],
                },
                {
                  icon: <Clock className="h-6 w-6 text-white" />,
                  title: "Business Hours",
                  lines: ["Mon - Fri: 9AM - 5PM (est)", "Sat - Sun: Closed"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-[#111111] shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#00A693] shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">{item.title}</h3>
                      {item.lines.map((l, idx) => (
                        <p key={idx} className="text-sm text-gray-300">{l}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
<motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="lg:col-span-2"
  ><div
    style={{ minHeight: `${FORM_HEIGHT}px` }}
    className="relative w-full h-full rounded-lg overflow-hidden bg-[#111111] shadow-md"
  >
    {/* Sky Lift Group's own LeadConnector intake form, form J6Gtz1pzBFNFDvoMGV05.
        Where it delivers submissions is configured inside LeadConnector, not here.

        formFailed covers the case where the embed never loads -- most often an
        ad blocker, since leadconnectorhq.com is on the common block lists.
        Without this, the main call to action on this page is a silent blank
        box and the visitor has no idea anything is wrong. */}
    {formFailed ? (
      <div
        role="status"
        style={{ minHeight: `${FORM_HEIGHT}px` }}
        className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <p className="font-semibold text-white">The form could not load.</p>
        <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
          Usually a browser extension blocking it. Nothing is wrong on your end —
          these reach us just as well.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:hello@skyliftgroup.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A693] px-6 py-3 font-semibold text-white transition hover:bg-[#00947F]"
          >
            <Mail className="h-4 w-4" /> hello@skyliftgroup.com
          </a>
          <a
            href="tel:+17252631475"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00A693] px-6 py-3 font-semibold text-[#00A693] transition hover:bg-[#00A693] hover:text-white"
          >
            <PhoneCall className="h-4 w-4" /> +1 (725) 263-1475
          </a>
        </div>
      </div>
    ) : (
      <iframe
        src={CONTACT_FORM_SRC}
        /* form_embed.js finds and resizes the frame by this id, so it keeps
           LeadConnector's own inline-<formId> shape. */
        id={`inline-${CONTACT_FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Sky Lift Group"
        data-height={FORM_HEIGHT}
        data-layout-iframe-id={`inline-${CONTACT_FORM_ID}`}
        data-form-id={CONTACT_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        /* The snippet's title was "Sky Lift Group". An iframe title is read out
           to describe what the frame is for, so it says that instead. The
           LeadConnector-facing name is data-form-name, which is unchanged. */
        title="Contact form for Sky Lift Group"
        /* height, not h-full. h-full stretched the frame to the column's full
           height (1115px measured), and form_embed.js would then have resized it
           down to its declared 923 -- a shrink, and a layout shift. Starting at
           the declared height means the resize is a no-op. form_embed.js sets
           its own inline height afterwards and can still grow it. */
        style={{ height: `${FORM_HEIGHT}px` }}
        className="w-full border-none bg-white"
      />
    )}
  </div>

  <div className="mt-6 rounded-lg border border-white/10 bg-[#111111] p-6 text-center">
    <p className="text-gray-400 text-sm mb-4">Prefer not to use the form? Reach us directly.</p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="mailto:hello@skyliftgroup.com"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A693] px-6 py-3 font-semibold text-white transition hover:bg-[#00947F]"
      >
        <Mail className="h-4 w-4" /> Email us
      </a>
      <a
        href="tel:+17252631475"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00A693] px-6 py-3 font-semibold text-[#00A693] transition hover:bg-[#00A693] hover:text-white"
      >
        <PhoneCall className="h-4 w-4" /> +1 (725) 263-1475
      </a>
    </div>
    <p className="text-gray-500 text-xs mt-4">
      The chat assistant in the bottom-right corner is also available.
    </p>
  </div>
  </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
