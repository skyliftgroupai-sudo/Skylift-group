import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, PhoneCall } from "lucide-react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

const Schedule = () => {
  useSeo(seoFor("/book"));

  return (
    <section
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#00A693",
            fontSize: "36px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Book a Free Strategy Call with Sky Lift Group
        </h1>

        <p
          style={{
            color: "#ccc",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Pick a time that works for you. If you would rather talk first, the options below reach us directly.
        </p>

        {/* Sky Lift Group's LeadConnector booking calendar, supplied by the
            owner on 2026-10-07. It replaces calendar Mi5gk5QCFKULntPciL7d, which
            had been recovered from an old commit.

            link.msgsndr.com/js/form_embed.js is already loaded in index.html and
            is what resizes this iframe. It targets the element by id, so the id
            keeps LeadConnector's own {widgetId}_{timestamp} form.

            minHeight rather than a fixed height: the box is reserved at 900px
            from first paint so nothing moves while the calendar loads, and
            form_embed.js can still grow it if the calendar needs more room.
            A fixed height would have clipped a taller calendar, since
            scrolling is off. */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "2px solid #00A693",
            backgroundColor: "#fff",
            marginBottom: "40px",
            minHeight: "900px",
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/go3vHktAyk0Z9QABNphm"
            title="Book an appointment with Sky Lift Group"
            id="go3vHktAyk0Z9QABNphm_1791404836301"
            allow="payment"
            scrolling="no"
            style={{ width: "100%", minHeight: "900px", border: "none", display: "block" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0, 166, 147, 0.3)",
              border: "2px solid #00A693",
              backgroundColor: "#111",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 40px",
            }}
          >
            <div
              style={{
                height: "64px",
                width: "64px",
                borderRadius: "50%",
                backgroundColor: "#00A693",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <MessageCircle size={32} color="#fff" />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "26px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Rather not use the calendar?
            </h3>
            <p
              style={{
                color: "#ccc",
                fontSize: "16px",
                maxWidth: "560px",
                marginBottom: "8px",
              }}
            >
              The chat assistant in the bottom-right corner can also take you through booking, or reach us directly below.
            </p>
            <p
              style={{
                color: "#00A693",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Click the chat icon in the bottom-right corner to get started.
            </p>

            {/* The chat widget is a third-party script. When it fails to load the
                page previously offered no way to book or make contact at all. */}
            <div className="mt-8 w-full max-w-xl border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm mb-4">Prefer not to chat? Reach us directly.</p>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
