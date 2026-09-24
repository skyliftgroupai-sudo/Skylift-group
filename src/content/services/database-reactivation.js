// Database reactivation — the second new URL in Phase 3.
//
// No existing page covers this, and it is the offer with the shortest path to
// revenue for a contractor who already has a customer list sitting unused.

export default {
  route: "/services/database-reactivation",
  h1: "Database Reactivation Campaigns for HVAC & Plumbing Companies",
  heroSub:
    "You already paid to acquire every customer in your CRM. A reactivation campaign goes back to the ones who have not booked in a year or more and turns a dormant list into scheduled work — without buying a single new lead.",
  heroImage: "/assets/lead-hero-v2.webp",
  heroImageAlt:
    "Contractor reviewing a customer database on a laptop in a service van",

  directAnswer:
    "A database reactivation campaign is a structured outreach sequence sent to past customers who have stopped booking — usually by text and email — offering a specific reason to come back, such as a seasonal tune-up or a maintenance check. It works because these people already know you, already trust you, and cost nothing more to reach. For HVAC and plumbing companies with a few hundred or more past customers in a CRM, reactivation is normally the fastest available source of booked jobs, because the acquisition cost was paid years ago.",

  sections: [
    {
      h2: "Why the list you already have is worth more than new leads",
      body: [
        "Most home service businesses spend their entire marketing budget on strangers. Meanwhile the CRM holds every customer they have ever served, most of whom have not been contacted since the invoice was paid.",
        "Those people are not cold. They know your company name, they have had a technician in their home, and if the job went well they have no particular reason to call someone else — they simply have not thought about you since. A furnace does not remind its owner to book a tune-up. You have to do that.",
        "The economics are the point. A new lead costs whatever your ads cost. A past customer costs the price of a text message. When a contractor tells us they need more work this month, reactivation is almost always the first thing we look at, because it is the only channel that can produce booked jobs in days rather than months.",
      ],
    },
    {
      h2: "How a reactivation campaign is built",
      steps: [
        {
          title: "We clean and segment the list",
          body: "Exported CRM data is usually messy — duplicates, bad numbers, people who already booked recently, and contacts who opted out. We clean it first, then segment by how long it has been since their last job, what service they had, and what that implies they need next.",
        },
        {
          title: "We pick an offer that fits the segment",
          body: "A customer who had a furnace installed three years ago needs a different message than one who had a drain cleared last spring. The offer has to make sense for what they already bought, or it reads as a generic blast and gets ignored.",
        },
        {
          title: "We check consent and suppression before sending",
          body: "Past customers are not automatically consented for marketing texts. We verify what consent exists, suppress anyone who opted out, and keep the sequence within US texting rules and A2P 10DLC registration. This is the step most DIY campaigns skip, and it is the one that gets numbers blocked.",
        },
        {
          title: "We send in controlled batches",
          body: "Not the whole list at once. Batching keeps message volume inside carrier limits, protects your sending reputation, and means your office is not buried under three hundred replies on a Tuesday morning.",
        },
        {
          title: "Replies go to a monitored inbox with a booking path",
          body: "A reactivation campaign generates conversations, not clicks. Someone has to answer them and get the caller onto the schedule. We set up the shared inbox, the reply templates and the handoff to your booking process before the first message goes out.",
        },
        {
          title: "We measure by booked jobs, not opens",
          body: "The only number that matters is how many jobs got scheduled and what they were worth. We track replies through to booking so you can see whether the campaign paid for itself, which it usually does or does not within the first week.",
        },
      ],
    },
    {
      h2: "What makes a reactivation offer actually work",
      benefits: [
        {
          title: "Tie it to the season, not to a discount",
          body: "A furnace tune-up before the first freeze is a reason to act now. Ten percent off is not, because there is no deadline attached to it. Seasonal timing does the persuading, which also means you are not training customers to wait for a sale.",
        },
        {
          title: "Reference what they actually bought",
          body: "Mentioning the specific system you installed or the work you did proves this is not a mass blast. It also reminds them why they trusted you, which is the whole asset you are drawing on.",
        },
        {
          title: "Make replying the easiest possible action",
          body: "No forms, no links to a booking page, no app. A text they can answer with one word. Every additional step loses a percentage of the people who were willing.",
        },
        {
          title: "Keep the sequence short",
          body: "An initial message and one or two follow-ups spaced several days apart. Past that, response rates fall and complaint rates climb, and a complaint costs you more than the job was worth.",
        },
        {
          title: "Segment by time since last service",
          body: "Someone eighteen months out needs a different message than someone four years out. The four-year customer may have moved, changed systems, or used a competitor, so that message has to re-earn the relationship rather than assume it.",
        },
        {
          title: "Run it on a schedule, not once",
          body: "Reactivation is not a one-time rescue. Run ahead of each season and the list keeps producing, because there is always a cohort that has drifted past the point where they would have called on their own.",
        },
      ],
    },
    {
      h2: "What we need from you to run one",
      body: [
        "A CRM export is enough to start. Name, phone, email where you have it, the service performed and the date. Most field service platforms export this in a few clicks, and we can work with a spreadsheet if your records live somewhere less structured.",
        "We also need to know your real capacity. A campaign that books more work than your crews can cover is worse than no campaign, because the customers you just re-engaged end up waiting three weeks and remember that instead. We size the batches to what you can actually service.",
        "If your business has never sent marketing texts before, A2P 10DLC registration has to happen first. Carriers process it on their own timeline, so we start it at the beginning rather than waiting until the campaign is otherwise ready.",
      ],
    },
    {
      h2: "Industries we run reactivation campaigns for",
      industries: [
        { name: "HVAC", body: "The strongest fit of any trade. Every system installed is a maintenance schedule, and every fall and spring is a natural reason to get back in touch." },
        { name: "Plumbing", body: "Water heater age, drain service intervals and fixture replacements all give a specific, non-promotional reason to reach out to a past customer." },
        { name: "Roofing", body: "Longer cycles, but storm events and annual inspections give timely reasons to contact everyone in a given neighborhood you have worked in." },
        { name: "Spray foam insulation", body: "Past customers often have a second project they never got to — an attic, a crawlspace, an outbuilding. Reactivation surfaces it." },
        { name: "Electrical", body: "Panel upgrades, EV charger installs and generator maintenance are all natural follow-ons to work already done." },
        { name: "General contracting", body: "Homeowners rarely finish everything at once. A list of past clients is a list of unfinished projects." },
      ],
    },
  ],

  related: [
    { to: "/services/sms-marketing", label: "SMS & Text Message Marketing", note: "The channel reactivation campaigns run on." },
    { to: "/services/lead-follow-up", label: "AI Lead Capture & Follow-Up", note: "Handling the replies a campaign generates." },
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "Catching the customers who call instead of texting." },
    { to: "/services/reviews", label: "Review Generation", note: "Turning reactivated jobs into new reviews." },
  ],
};
