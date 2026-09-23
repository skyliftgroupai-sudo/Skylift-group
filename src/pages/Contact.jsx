import { Mail, MapPin, Clock, PhoneCall, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

// Copy is unchanged from the previous version of this page. The three country
// lines used Font Awesome flag classes that were never loaded, so they rendered
// as empty boxes; they are plain text now.

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email Us",
    lines: [
      { text: "info@skyliftllc.com", href: "mailto:info@skyliftllc.com" },
    ],
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    lines: [{ text: "+1 (904) 906-9019", href: "tel:+19049069019" }],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [
      { text: "United States Of America" },
      { text: "Canada" },
      { text: "Australia" },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [{ text: "Mon - Fri: 9AM - 5PM (est)" }, { text: "Sat - Sun: Closed" }],
  },
];

const Contact = () => {
  useSeo(seoFor("/contact"));

  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        titleAccent="Conversation"
        subtitle="Have a project in mind? Send us a message and our team will get back to you shortly."
        primaryCta={{ to: "/book", label: "Book a Free Strategy Call" }}
      />

      <section className="slg-light slg-section-tight">
        <div className="slg-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-8">
            {/* INFO CARDS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACT_CARDS.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="slg-card h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] text-[#26A6AD]">
                      <item.icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h2 className="font-display text-[1rem] font-bold text-[#142A47]">
                        {item.title}
                      </h2>
                      <ul className="mt-1.5 space-y-1">
                        {item.lines.map((line) => (
                          <li key={line.text} className="text-[0.9375rem] text-[#475569]">
                            {line.href ? (
                              <a
                                href={line.href}
                                className="transition-colors hover:text-[#1C8A90]"
                              >
                                {line.text}
                              </a>
                            ) : (
                              line.text
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* The chat widget that used to sit here is gone, so this panel
                has to be a way to reach someone rather than a pointer at one.
                Both buttons are real: a tel: link a phone will dial and a
                mailto: with the subject prefilled. No form, because there is no
                endpoint behind one on this site — a form that silently drops
                what someone typed is worse than no form. */}
            <Reveal delay={100}>
              <div className="slg-dark flex h-full min-h-[24rem] flex-col items-center justify-center rounded-[16px] p-10 text-center lg:p-16">
                <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#26A6AD]/40 bg-[#26A6AD]/10 text-[#26A6AD]">
                  <PhoneCall className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h2 className="text-[1.375rem] font-extrabold text-white sm:text-[1.75rem]">
                  Talk to a{" "}
                  <span className="accent text-[#26A6AD]">real</span> person
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-slate-300">
                  Tell us what is happening with your leads and we will tell you
                  straight whether we can help. No script, no pitch deck.
                </p>
                <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                  <a href="tel:+19049069019" className="btn btn-primary w-full sm:w-auto">
                    <PhoneCall className="h-[18px] w-[18px]" aria-hidden="true" />
                    Call +1 (904) 906-9019
                  </a>
                  <a
                    href="mailto:info@skyliftllc.com?subject=Website%20enquiry"
                    className="btn btn-ghost w-full sm:w-auto"
                  >
                    Email us
                    <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-7 text-sm text-slate-400">
                  Mon&nbsp;&ndash;&nbsp;Fri, 9AM&nbsp;&ndash;&nbsp;5PM&nbsp;(EST)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
