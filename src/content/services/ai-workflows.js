export default {
  route: "/services/ai-workflows",
  directAnswer:
    "An AI workflow is an automation that handles one repetitive step in your business without a person doing it. For a home service company the useful ones are all in the same place: the gap between a lead arriving and someone responding, and the gap between a job finishing and the follow-up happening. A new inquiry gets answered in seconds, a missed call gets texted back, an estimate that went quiet gets chased, a finished job triggers a review request, and the whole thing lands in your CRM without anyone retyping it. None of it replaces your people. It removes the work that was falling through the cracks when they were busy.",
  sections: [
    {
      h2: "Where the work actually goes missing",
      body: [
        "Almost every home service business loses money in the same four places, and none of them are dramatic. Calls that come in while everyone is on a job. Web form submissions that sit in an inbox until the evening. Estimates that were sent and never followed up. Past customers who were never contacted again.",
        "Each of those is a task that a person would do if they had time, and nobody has time during a busy week. They are also the four things software handles reliably, because none of them require judgment — they require somebody doing the same thing every time.",
        "The reason it is worth automating rather than hiring for is response speed. A lead answered in two minutes and the same lead answered in two hours are not the same lead. By the evening they have called someone else.",
      ],
    },
    {
      h2: "How we build automations",
      steps: [
        { title: "Map what happens now", body: "We walk through a real lead from arrival to booked job, and a real job from completion to invoice, and write down every place a person has to remember something. That list is the build plan." },
        { title: "Start with the biggest leak", body: "Usually response time or missed calls. We build one automation, prove it works, and only then add the next. Systems that get built all at once tend to get abandoned all at once." },
        { title: "Connect the tools you already use", body: "Your phone system, your CRM or field service software, your calendar, your website forms. We integrate what you have rather than asking you to change platforms." },
        { title: "Write the messages carefully", body: "Automated does not mean robotic. Every message sounds like it came from your business, and every one has an obvious way to reach a human." },
        { title: "Test with real scenarios", body: "Including the awkward ones: duplicate leads, customers who reply immediately, people who opt out, calls that come in at two in the morning." },
        { title: "Hand over the controls", body: "You can see every automation and read every message it sends, and anything can be switched off. A setup nobody but us can follow is not a good outcome for either side." },
      ],
    },
    {
      h2: "Automations worth building first",
      benefits: [
        { title: "Instant lead response", body: "Every form submission and ad lead gets a text and an email within seconds, before the prospect has moved on to the next company." },
        { title: "Missed call text back", body: "An unanswered call turns into a text conversation instead of a lost job. For most contractors this is the first one worth building." },
        { title: "Estimate follow-up", body: "A quote that has gone quiet gets a sequence of polite check-ins on a schedule, instead of being remembered occasionally." },
        { title: "Appointment reminders", body: "Confirmations and reminders by text, which reduces the no-shows that waste a truck roll." },
        { title: "Review requests on completion", body: "Triggered by the job being marked done, so it happens every time without being asked for." },
        { title: "Reporting that assembles itself", body: "Lead sources, response times and booking rates collected automatically, so the monthly numbers exist without anyone building a spreadsheet." },
      ],
    },
    {
      h2: "What we will not automate",
      body: [
        "We will not automate anything that should involve judgment. Pricing a complicated job, handling an upset customer, deciding whether to take work outside your area — those stay with people.",
        "We will not hide that a message is automated when someone asks. Every automated conversation has a clear route to a real person, and the handoff happens fast.",
        "We will not send marketing texts to people who did not consent to receive them. Consent, opt-outs and A2P 10DLC registration are handled properly, because the penalties for getting it wrong are real and they land on your business.",
        "We will not build something so complicated that only we can maintain it. If you cannot understand your own system, you cannot run it without us, and that is not a service — it is a dependency.",
      ],
    }
  ],
  related: [
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "Usually the first automation to build." },
    { to: "/services/lead-follow-up", label: "Automated Lead Follow-Up", note: "The estimate-chasing side." },
    { to: "/services/ai-chatbots", label: "AI Chatbots", note: "Capturing leads on the website itself." },
    { to: "/tools/sms-compliance-checklist", label: "Text Compliance Checklist", note: "What has to be in place before you text customers." },
  ],
};
