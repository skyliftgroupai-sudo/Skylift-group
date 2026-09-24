export default {
  route: "/services/one-click-campaigns",
  directAnswer:
    "A one-click campaign is a pre-built offer — the message, the audience segment, the landing page and the follow-up — that you can send to your existing customer list whenever you need work. You pick the campaign, you approve it, it goes out. It exists because the list you already own is the cheapest source of booked jobs available to a home service business, and because the reason most contractors never use it is that building a campaign from scratch takes a week they do not have. When the schedule looks thin on a Tuesday, a campaign that takes two minutes to send is a campaign that actually gets sent.",
  sections: [
    {
      h2: "Why the list you already own is the best one",
      body: [
        "Every customer you have served is someone who already knows your name, already let you into their house, and already paid you. Reaching them costs almost nothing compared to buying a click from someone who has never heard of you.",
        "Most contractors never contact them again. The list sits in the field service software as a record of past invoices rather than as an audience. Meanwhile the same homeowner searches for a plumber next year and hires whoever ranks first.",
        "The other reason it matters is control. Paid channels cost more every year and depend on platforms you do not own. A list of past customers who hear from you a few times a year is an asset that does not get more expensive.",
      ],
    },
    {
      h2: "How campaigns get built and sent",
      steps: [
        { title: "Clean and segment the list", body: "Past customers separated from unconverted leads, by service, by recency, and by whether they consented to be texted. Segmentation is what separates a campaign that books jobs from one that gets ignored." },
        { title: "Build the campaign library", body: "A set of campaigns matched to your services and your seasons — maintenance reminders, pre-season tune-ups, offers for a specific service, reactivation of customers who have gone quiet." },
        { title: "Write everything in advance", body: "Message copy, the landing page, the follow-up sequence and the response handling, all prepared and approved before you need them." },
        { title: "Send in one step", body: "Choose a campaign, confirm the segment, approve, send. That is deliberately the whole process." },
        { title: "Handle the replies", body: "Responses route into your normal follow-up so an interested customer gets a real conversation rather than falling into an unattended inbox." },
        { title: "Review and reuse", body: "What booked work gets kept and refined. What did not gets rewritten or dropped." },
      ],
    },
    {
      h2: "What is in the campaign library",
      benefits: [
        { title: "Seasonal maintenance", body: "Pre-season reminders sent to past customers before the weather makes the phone ring for everyone at once." },
        { title: "Dormant customer reactivation", body: "Reaching people who have not booked in a year or more, with a reason to come back. Covered in depth on our database reactivation page." },
        { title: "Unconverted lead follow-up", body: "Estimates that went quiet months ago, where circumstances have often changed." },
        { title: "Service-specific offers", body: "A campaign per service line so you can fill capacity in the specific area where you are short." },
        { title: "Schedule-gap fillers", body: "Short-notice offers for the weeks that look empty, sent to the segment most likely to book quickly." },
        { title: "Review and referral requests", body: "Campaigns aimed at reputation and word of mouth rather than immediate booking." },
      ],
    },
    {
      h2: "Doing this without breaking the rules",
      body: [
        "Marketing text messages require consent. Before anything sends, we check how each contact entered your list and separate the ones who opted in from the ones who did not. Contacts without consent are not texted, and telling you that is more useful than a larger send.",
        "A2P 10DLC registration is handled properly, with your brand and campaign registered so messages are delivered rather than silently filtered.",
        "Every message carries a working opt-out, opt-outs are honored immediately and permanently, and the records are kept.",
        "We will not send at a frequency that burns the list. A list contacted too often stops responding, and rebuilding it costs far more than the extra sends were worth.",
      ],
    },
    {
      h2: "Industries we build campaign libraries for",
      industries: [
        { name: "HVAC", body: "The clearest fit, with two natural pre-season windows a year and a maintenance plan worth promoting." },
        { name: "Plumbing", body: "Water heater age, drain maintenance and fixture upgrades give plenty of reasons to reach out." },
        { name: "Roofing", body: "Inspection campaigns after weather events, and follow-up on estimates that stalled." },
        { name: "Electrical", body: "Panel upgrades, EV chargers and safety inspections promoted to a customer base that already trusts you." },
        { name: "Junk removal", body: "Seasonal cleanout campaigns to past customers, which convert quickly and cost nothing to send." },
        { name: "General contracting", body: "Reaching past clients about the next phase of work they talked about and never scheduled." },
      ],
    },
  ],
  related: [
    { to: "/services/database-reactivation", label: "Database Reactivation", note: "The deeper version of the same idea." },
    { to: "/services/sms-marketing", label: "SMS Marketing", note: "The channel campaigns are sent on." },
    { to: "/tools/sms-compliance-checklist", label: "Text Compliance Checklist", note: "Consent and A2P 10DLC, in plain terms." },
    { to: "/blog/get-past-customers-to-book-again", label: "Getting Past Customers to Book Again", note: "How the campaigns are written." },
  ],
};
