// The texting compliance checklist content.
//
// Separated from the component so the checklist can be read by the page, the
// FAQ schema and anything later that needs it, without duplicating the text.
//
// Scope note: this describes the operational steps a US home service business
// needs in place before texting customers. It deliberately does not quote
// statutes, damages figures or case law — that is legal advice, and a marketing
// agency writing it would be both unqualified and unhelpful. Every section
// points the reader at their own counsel for the parts that need one.

export const SECTIONS = [
  {
    id: "registration",
    title: "Carrier registration",
    summary:
      "US carriers require business texting from a standard 10-digit number to be registered. This is not a legal requirement — it is a delivery requirement, and unregistered messages get filtered or blocked without telling you.",
    items: [
      {
        id: "reg-brand",
        label: "Brand registered with A2P 10DLC",
        detail:
          "Your legal business name, EIN, address and website. The EIN and legal name must match IRS records exactly — a mismatch is the most common rejection, and it is usually something small like an abbreviated company name.",
      },
      {
        id: "reg-campaign",
        label: "Campaign registered and approved",
        detail:
          "Describes what you send, roughly how much, and how customers opt in and out. You submit sample messages, and they need to resemble what you will actually send.",
      },
      {
        id: "reg-usecase",
        label: "Use case matches what you actually send",
        detail:
          "Carriers assign a use case — customer care, notifications, marketing, mixed. A contractor sending reminders plus occasional seasonal offers is usually mixed. Registering as one thing and sending another is what gets campaigns queried.",
      },
      {
        id: "reg-number",
        label: "The number you advertise is the number that is registered",
        detail:
          "Customers should text the number on your trucks. A separate marketing number fragments the conversation and looks like a different company.",
      },
    ],
  },
  {
    id: "consent",
    title: "Consent",
    summary:
      "Separate from registration, and satisfying one does nothing for the other. You can be fully registered and still be in breach for texting someone who never agreed to hear from you.",
    items: [
      {
        id: "con-written",
        label: "Express written consent captured before any marketing text",
        detail:
          "Written, not verbal. A customer saying 'sure, text me' on a call does not meet the standard and cannot be evidenced later.",
      },
      {
        id: "con-unchecked",
        label: "Consent checkbox is unchecked by default",
        detail:
          "A pre-ticked box is not consent. The customer has to take an affirmative action.",
      },
      {
        id: "con-wording",
        label: "The wording says what they are agreeing to",
        detail:
          "Something like 'I agree to receive text messages from [business] about services and offers', next to the field where they give their number — not buried in a terms document.",
      },
      {
        id: "con-notrequired",
        label: "Consent is not a condition of booking a job",
        detail:
          "You cannot require agreement to marketing texts in order to provide service.",
      },
      {
        id: "con-everywhere",
        label: "Capture exists everywhere you collect a phone number",
        detail:
          "Booking form, service agreement, website chat, contact form. If your office takes numbers over the phone, you need a follow-up that captures consent in writing.",
      },
      {
        id: "con-separate",
        label: "You can tell transactional messages from marketing ones",
        detail:
          "A confirmation for a job they booked is a different category from a seasonal offer. The grey area — a tune-up reminder for a system you installed — is safest treated as marketing.",
      },
    ],
  },
  {
    id: "optout",
    title: "Opt-outs",
    summary:
      "The part most often handled manually, and the part that most needs to be automatic. A missed opt-out is both a compliance problem and a complaint, and complaints damage your carrier standing.",
    items: [
      {
        id: "opt-auto",
        label: "STOP and its variants are processed automatically",
        detail:
          "STOP, UNSUBSCRIBE, CANCEL, END, QUIT. Not dependent on anyone noticing a reply.",
      },
      {
        id: "opt-prompt",
        label: "Opt-outs take effect immediately",
        detail:
          "Not at the end of a campaign, not on the next list refresh. A message sent after someone opted out is the one that generates a complaint.",
      },
      {
        id: "opt-instructions",
        label: "Marketing messages tell people how to opt out",
        detail:
          "Clear instructions in the message itself.",
      },
      {
        id: "opt-suppression",
        label: "A suppression list exists and every send respects it",
        detail:
          "Including reactivation campaigns built from a CRM export, which is where suppressed contacts most often creep back in.",
      },
    ],
  },
  {
    id: "content",
    title: "Message content and timing",
    summary:
      "Mostly about not generating complaints. Carriers filter aggressively, and a number that draws complaints gets throttled — at which point your appointment reminders stop arriving too.",
    items: [
      {
        id: "cnt-identify",
        label: "Every message identifies your business",
        detail:
          "Early in the message, not at the end. A text from an unrecognized number that does not say who it is reads as spam.",
      },
      {
        id: "cnt-hours",
        label: "Marketing messages respect quiet hours",
        detail:
          "Late-night promotional messages are both a compliance risk and a fast route to complaints. Transactional replies to a call someone just made are a different matter.",
      },
      {
        id: "cnt-frequency",
        label: "Promotional frequency is low and tied to a real reason",
        detail:
          "Seasonal reminders a few times a year work. Weekly offers train people to opt out.",
      },
      {
        id: "cnt-reply",
        label: "Someone actually answers replies",
        detail:
          "Not a compliance rule, but texting generates conversations. An unanswered one is worse than not texting at all — the customer now knows you saw them and did not respond.",
      },
    ],
  },
  {
    id: "records",
    title: "Records",
    summary:
      "The part nobody does until they need it, at which point it is too late. If you cannot evidence consent, you effectively do not have it.",
    items: [
      {
        id: "rec-consent",
        label: "Consent records store when, how and what wording",
        detail:
          "A spreadsheet of phone numbers with no provenance will not help you demonstrate anything.",
      },
      {
        id: "rec-optout",
        label: "Opt-out records are kept too",
        detail:
          "Proof that a request was honored, and when.",
      },
      {
        id: "rec-retention",
        label: "Records survive a platform change",
        detail:
          "Switching messaging providers usually means re-registering. Make sure your consent history comes with you rather than staying in an account you cancelled.",
      },
    ],
  },
];

export const TOTAL_ITEMS = SECTIONS.reduce((n, s) => n + s.items.length, 0);
