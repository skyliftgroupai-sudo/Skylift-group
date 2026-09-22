// SMS / text message marketing — the highest-priority page in Phase 3.
//
// Search Console shows this is the only non-brand commercial cluster the site
// earns impressions for ("text message marketing for home services" and three
// near-variants, 19 impressions, all at position 53-65). Those queries currently
// land on a blog post. This is the dedicated page they should land on.

export default {
  route: "/services/sms-marketing",
  h1: "SMS & Text Message Marketing for Home Service Businesses",
  heroSub:
    "Reach customers where they actually reply. Appointment reminders, missed-call follow-up, seasonal offers and review requests — sent automatically, written to sound like you, and compliant with US texting rules.",
  heroImage: "/assets/missed-hero.webp",
  heroImageAlt:
    "Home service business owner reading a customer text message reply on a phone",

  // AEO: a direct answer in the first two or three sentences, before any
  // marketing copy. This is the block an AI assistant or a featured snippet
  // lifts, so it has to answer the question on its own.
  directAnswer:
    "Text message marketing for home service businesses means sending short, timely SMS messages to customers and leads — appointment confirmations, missed-call replies, maintenance reminders, and review requests — instead of relying on email or phone tag. It works because texts get read within minutes, while emails sit unopened and voicemails go ignored. For HVAC, plumbing, roofing and similar trades, the highest-value uses are replying to missed calls within a minute, confirming appointments to cut no-shows, and reactivating past customers before each season.",

  sections: [
    {
      h2: "Why texting works for home service businesses when email does not",
      body: [
        "A homeowner with a leaking water heater is not checking email. They are calling three companies from Google and booking whoever responds first. That is the entire competitive dynamic in the trades, and it is a speed problem, not a marketing problem.",
        "Text messaging fits that dynamic in a way no other channel does. It is read almost immediately, it does not require the customer to stop what they are doing and take a call, and it leaves a written record of the appointment time that neither side has to remember. Email loses on speed. Phone calls lose because the customer is often at work, on a job site, or unwilling to pick up an unknown number.",
        "The catch is that texting is easy to get wrong. A promotional blast to a list that never opted in is a fast route to carrier filtering and complaints. The businesses that get results from SMS are the ones sending messages the customer was already expecting — a confirmation, a reminder, a reply to something the customer initiated.",
      ],
    },
    {
      h2: "How text message marketing works when we set it up",
      steps: [
        {
          title: "We connect texting to the phone number you already use",
          body: "Your existing business line gets text-enabled, so replies land in one place instead of on a personal cell phone. Customers text the number they already have. Nothing on your marketing materials has to change.",
        },
        {
          title: "We register your business for A2P 10DLC",
          body: "US carriers require business texting to be registered — this is the 10-digit long code process. Unregistered messages get filtered or blocked outright. We handle the registration, the brand and campaign setup, and the use-case approval before a single message goes out.",
        },
        {
          title: "We write the message sequences around real moments",
          body: "Missed call, booked appointment, day-before reminder, technician en route, job complete, review request, seasonal maintenance. Each one is tied to something that actually happened, which is what keeps them welcome rather than intrusive.",
        },
        {
          title: "Replies come back to a real inbox",
          body: "When a customer texts back, it goes to a shared inbox your office can see and answer, with the full conversation history. Nothing sits unread on one person's phone while they are under a house.",
        },
        {
          title: "Opt-outs are handled automatically",
          body: "STOP, UNSUBSCRIBE and the rest are processed and suppressed without anyone on your team having to remember. That is both a legal requirement and the thing that keeps your number in good standing with carriers.",
        },
      ],
    },
    {
      h2: "What we actually send, and why each one earns its place",
      benefits: [
        {
          title: "Missed-call text back",
          body: "The single highest-value message. A call comes in while your crew is on a roof, and within about a minute the caller gets a text asking what they need and offering a time. The competitor they were about to call next never gets dialed. This is the one message we would set up first for almost any trades business.",
        },
        {
          title: "Appointment confirmation and reminders",
          body: "A confirmation at booking and a reminder the day before. No-shows in home services are usually forgetfulness, not intent, and a reminder that arrives on the device the customer is holding fixes most of them. It also gives them an easy way to reschedule instead of simply not being home.",
        },
        {
          title: "Technician en route",
          body: "A short message when your tech leaves the previous job. This removes the single most common inbound call your office fields — 'is he still coming?' — and it reads as professional rather than automated.",
        },
        {
          title: "Review requests after a completed job",
          body: "Sent shortly after the work is done, while the customer still feels good about it, with a direct link to your Google Business Profile. Asking by text works better than asking in person because the customer can act on it immediately instead of promising to do it later.",
        },
        {
          title: "Seasonal maintenance reminders",
          body: "Furnace tune-ups before the first cold snap, AC checks before summer, gutter clearing before fall. These go to customers you have already served, which makes them the cheapest work you will book all year.",
        },
        {
          title: "Database reactivation campaigns",
          body: "A focused campaign to past customers who have not booked in a year or more. Most home service businesses are sitting on a list like this and have never used it. See our page on database reactivation for how these are structured.",
        },
      ],
    },
    {
      h2: "Staying on the right side of the rules",
      body: [
        "Business texting in the US is regulated, and the penalties for getting it wrong are real. The short version: you need express written consent before sending marketing texts, every message needs a clear way to opt out, opt-outs have to be honored promptly, and your business has to be registered with the carriers through A2P 10DLC.",
        "There is also a quieter risk. Carriers filter aggressively, and a number that generates complaints or sends to unconsented lists gets throttled or blocked. Once that happens your transactional messages — the appointment confirmations you actually depend on — stop arriving too.",
        "We set consent capture up at the point where customers give you their number, keep records of it, and build the opt-out handling into every sequence. This is not legal advice, and you should confirm your obligations with your own counsel, but it is the setup we use as standard.",
      ],
    },
    {
      h2: "Industries we set this up for",
      industries: [
        { name: "HVAC", body: "Seasonal tune-up reminders and same-day dispatch confirmations during heat waves and cold snaps, when call volume spikes and missed calls are most expensive." },
        { name: "Plumbing", body: "Emergency response is where texting earns its keep — a burst pipe customer books whoever replies first, and a text reply beats a callback." },
        { name: "Roofing", body: "Long sales cycles and weather-driven demand. Text follow-up keeps an estimate alive through the weeks between inspection and decision." },
        { name: "Junk removal", body: "High-volume, quick-turnaround jobs where quote-to-booking speed decides who gets the work." },
        { name: "Spray foam insulation", body: "Considered purchases with a long gap between quote and job. Scheduled text follow-up keeps the conversation going without nagging." },
        { name: "General contracting and handyman services", body: "Scheduling across multiple trades and crews, where reminders and en-route messages cut the coordination calls your office fields." },
        { name: "Electrical", body: "Mix of emergency and scheduled work — missed-call text back for the former, reminders for the latter." },
      ],
    },
  ],

  related: [
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "The message we set up first for most trades businesses." },
    { to: "/tools/sms-compliance-checklist", label: "Texting Compliance Checklist", note: "The 21 steps to have in place before you text customers." },
    { to: "/services/database-reactivation", label: "Database Reactivation Campaigns", note: "Turning a dormant customer list into booked jobs." },
    { to: "/services/lead-follow-up", label: "AI Lead Capture & Follow-Up", note: "What happens to a lead after the first text." },
    { to: "/services/reviews", label: "Review Generation", note: "Automated review requests sent by text." },
    { to: "/blog/text-message-marketing-home-service-business", label: "Is SMS Marketing Worth It for Contractors?", note: "Where texting helps, and where it backfires." },
  ],
};
