import { PhoneCall, Mail, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

/**
 * /book — the destination for every "Book a Free Strategy Call" button on the
 * site, which is seven links on every page.
 *
 * Until now the only way to actually book from here was the LeadConnector chat
 * widget, and this page was a paragraph telling people to click it. With the
 * widget removed at the owner's request, that paragraph would have left the
 * site's main call to action pointing at a page with no way to act — so the
 * page now carries the two channels that genuinely work today.
 *
 * If a real scheduler is added later (a GoHighLevel or Calendly booking link),
 * it belongs here, and these two stay underneath it as the fallback.
 */
const Schedule = () => {
  useSeo(seoFor("/book"));

  return (
    <div className="w-full">
      <PageHero
        eyebrow="Book a call"
        title="Book a Free Strategy Call with Sky Lift LLC"
        titleAccent="Free"
        subtitle="Twenty minutes, no pitch deck. We look at where your leads are going and tell you straight whether we can help."
      />

      <section className="slg-light slg-section-tight">
        <div className="slg-container">
          <Reveal className="mx-auto max-w-3xl">
            <div className="slg-card px-8 py-14 text-center sm:px-14">
              <span className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#26A6AD]/35 bg-[#E6F5F6] text-[#26A6AD]">
                <PhoneCall className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
              </span>

              <h2 className="font-display text-[1.375rem] font-extrabold text-[#142A47] sm:text-[1.75rem]">
                Two ways to get it in the diary
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-[#475569]">
                Call and we will find a time on the spot, or send a couple of
                times that suit you and we will confirm by return.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="tel:+19049069019" className="btn btn-primary w-full sm:w-auto">
                  <PhoneCall className="h-[18px] w-[18px]" aria-hidden="true" />
                  Call +1 (904) 906-9019
                </a>
                <a
                  href="mailto:info@skyliftllc.com?subject=Free%20strategy%20call"
                  className="btn btn-ghost-light w-full sm:w-auto"
                >
                  <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                  Email info@skyliftllc.com
                </a>
              </div>

              <p className="mt-9 inline-flex items-center gap-2 text-sm text-[#64748B]">
                <Clock className="h-4 w-4 text-[#26A6AD]" aria-hidden="true" />
                Mon&nbsp;&ndash;&nbsp;Fri, 9AM&nbsp;&ndash;&nbsp;5PM&nbsp;(EST)
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
