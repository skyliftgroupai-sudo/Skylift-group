// HVAC marketing — trade-vertical page, targeting "hvac marketing" and
// "hvac marketing company" (DataForSEO: 480/mo each, KD 8 and 11).
//
// The site's 18 service pages are organised by what we sell. Contractors search
// by trade plus marketing. This page exists to meet that query and route the
// visitor into the service pages that already do the work.

export default {
  route: "/industries/hvac-marketing",
  h1: "HVAC Marketing That Fills the Schedule",
  heroSub:
    "Marketing for HVAC contractors who are busy in July and January and quiet in between. We build the systems that catch the calls you are already missing, then the demand to fill the shoulder months.",
  heroImage: "/assets/our-work-v2.webp",

  directAnswer:
    "HVAC marketing is the work of generating and capturing service calls for a heating and cooling business: local search visibility, paid ads timed to the season, and the response systems that turn an inbound call into a booked job. It differs from general marketing because HVAC demand is violently seasonal and the job values in a single call log range from a diagnostic fee to a full system replacement.",

  sections: [
    {
      h2: "Why does HVAC marketing work differently from other trades?",
      body: [
        "Because the demand arrives all at once. The first genuine cold snap and the first serious heat wave produce more inbound calls in a few days than the preceding month, and every HVAC company in the market gets them at the same moment. Nobody is short of leads in that window. What they are short of is capacity to answer the phone.",
        "That reverses the usual priority. For most businesses the marketing question is how to create more demand. For an HVAC company in peak season the question is how much of the existing demand is being lost — calls that ring out while every tech is on a roof, voicemails nobody returns until the next day, quotes given over the phone that never get followed up.",
        "Then the season turns and the problem inverts completely. In the shoulder months the phone is quiet, the crews are underused, and the same company that could not answer its calls in January is now looking for work. A marketing plan that only does one of these two jobs will fail half the year.",
        "The third complication is job value. A call log that contains an eighty-dollar diagnostic visit and a twelve-thousand-dollar system replacement is not one business, it is two. Optimizing for total call volume treats those identically, which is how contractors end up paying for clicks that book the cheapest possible work.",
      ],
    },
    {
      h2: "What do we actually do for an HVAC company?",
      steps: [
        {
          title: "Stop losing peak-season calls first",
          body: "Before anything else gets spent, every unanswered call gets an automatic text within about a minute asking what the caller needs. In a heat wave that is the difference between the job and the competitor who picked up. This is usually the single highest-return change available to a heating and cooling business, and it costs nothing per additional call.",
        },
        {
          title: "Put an answering layer behind the phone",
          body: "For after-hours and for the moments when three calls land at once, an AI voice agent answers, establishes whether it is an emergency, and either books or escalates. It does not replace your dispatcher; it covers the hours and the overflow your dispatcher cannot.",
        },
        {
          title: "Work the install base in the shoulder months",
          body: "Every system you have ever installed is a maintenance schedule nobody is being reminded about. A furnace tune-up campaign sent before the first cold snap, and an AC check before summer, books work from customers you already paid to acquire. This is the most reliable answer to a quiet April we know of.",
        },
        {
          title: "Fix the local search basics",
          body: "Service areas set correctly, the right primary category, emergency hours that reflect reality, and a steady flow of reviews. Map results decide a large share of emergency HVAC calls, and most of the gap between contractors there is unglamorous admin rather than anything clever.",
        },
        {
          title: "Run paid search only where it pays",
          body: "HVAC click costs peak at exactly the moment every competitor is bidding. We would rather spend on the terms tied to replacement and installation work than on the generic ones that fill the schedule with diagnostics, and we would rather not spend at all until the call handling above is in place.",
        },
      ],
    },
    {
      h2: "What usually turns out to be the real problem",
      benefits: [
        {
          title: "The phone, not the funnel",
          body: "Most HVAC companies that ask us for more leads are losing a meaningful share of the ones they already generate. Until that is measured, spending more on ads scales the leak rather than the revenue.",
        },
        {
          title: "A maintenance list nobody contacts",
          body: "Maintenance agreements are the most profitable thing an HVAC business sells and the easiest to let lapse quietly. Renewals and tune-up reminders are a scheduling problem, not a marketing one, and they respond to automation better than to advertising.",
        },
        {
          title: "Replacement quotes that go cold",
          body: "A twelve-thousand-dollar system replacement is not decided on the day it is quoted. Homeowners get two or three estimates and think about it. The contractor who follows up on a schedule rather than on memory wins a disproportionate share of that work.",
        },
        {
          title: "Reviews that stopped two years ago",
          body: "In an emergency a homeowner scans star ratings and recency. A profile whose newest review is from two winters ago reads as a business that may no longer be trading. The fix is asking automatically after every completed job rather than relying on a technician to remember.",
        },
      ],
    },
    {
      h2: "Who this suits, and who it does not",
      body: [
        "This works best for established HVAC companies doing residential service and replacement, with a customer list already in a CRM and at least one person handling inbound calls. The gains come from plugging leaks in a business that already has demand, which means there has to be demand to plug.",
        "It suits you less well if you are brand new with no install base, or if you are purely a new-construction subcontractor working from builder relationships rather than inbound calls. In the first case you need demand generation before response systems; in the second, most of this does not apply and we would say so rather than sell it to you.",
        "We work with HVAC contractors across the United States and remotely. We are a marketing and automation company, not a lead reseller: we do not sell shared leads, and we do not sign you up to buy back your own customers.",
      ],
    },
  ],

  related: [
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "The first thing we would set up in a peak-season week." },
    { to: "/services/ai-voice-agents", label: "AI Voice Agents", note: "Answering after hours and when calls land three at a time." },
    { to: "/services/database-reactivation", label: "Database Reactivation", note: "Turning the install base into tune-ups in a quiet month." },
    { to: "/services/local-maps", label: "Google Maps & Map Pack", note: "Where a large share of emergency HVAC calls are decided." },
    { to: "/services/sms-marketing", label: "Text Message Marketing", note: "Seasonal reminders, confirmations and review requests." },
    { to: "/services/google-ads", label: "Google Ads Management", note: "Paid search aimed at replacement work, not diagnostics." },
  ],
};
