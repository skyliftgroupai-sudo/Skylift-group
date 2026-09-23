import { Mail, MessageCircle, MapPin, Clock, PhoneCall } from "lucide-react";
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

            {/* AI ASSISTANT PANEL — the chat widget itself is the third-party
                script in index.html, so this card points at it rather than
                duplicating a form that would go nowhere. */}
            <Reveal delay={100}>
              <div className="slg-dark flex h-full min-h-[24rem] flex-col items-center justify-center rounded-[16px] p-10 text-center lg:p-16">
                <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#26A6AD]/40 bg-[#26A6AD]/10 text-[#26A6AD]">
                  <MessageCircle className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h2 className="text-[1.375rem] font-extrabold text-white sm:text-[1.75rem]">
                  Talk With Our AI Business{" "}
                  <span className="accent text-[#26A6AD]">Assistant</span>
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-slate-300">
                  Get instant answers about our services, pricing, websites, AI automation,
                  Google Business Profile optimization, SEO, and marketing solutions.
                </p>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.7] text-slate-300">
                  Our AI Assistant is available 24/7 to answer your questions, qualify your
                  needs, and help you get started.
                </p>
                <p className="mt-6 font-semibold text-[#26A6AD]">
                  Click the chat icon in the bottom-right corner to begin.
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
