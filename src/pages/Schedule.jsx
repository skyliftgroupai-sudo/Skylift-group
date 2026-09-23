import { MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

// This page was the last one still written in inline style objects on a pure
// black background, which is why it looked like a different site. Same copy,
// same booking widget, now on the design system.
const Schedule = () => {
  useSeo(seoFor("/book"));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Book a call"
        title="Book a Free Strategy Call with Sky Lift LLC"
        titleAccent="Free"
        subtitle="Ready to book your appointment? Our AI Assistant makes it quick and easy."
      />

      <section className="slg-light slg-section-tight">
        <div className="slg-container">
          <Reveal className="mx-auto max-w-3xl">
            <div className="slg-card flex flex-col items-center px-8 py-14 text-center sm:px-14">
              <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#26A6AD]/35 bg-[#E6F5F6] text-[#26A6AD]">
                <MessageCircle className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h2 className="font-display text-[1.375rem] font-extrabold text-[#142A47] sm:text-[1.75rem]">
                Book Your Appointment with Our AI Assistant
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-[#475569]">
                Our AI Assistant will help you find the perfect time and schedule
                your appointment in just a few messages.
              </p>
              <p className="mt-5 font-semibold text-[#1C8A90]">
                Click the chat icon in the bottom-right corner to get started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
