export default {
  route: "/services/missed-call-text-back",
  directAnswer:
    "Missed call text back automatically sends a text message to anyone whose call you did not answer, usually within a minute, asking what they need and offering to book them in. It exists because a homeowner with an urgent problem calls three companies and hires whoever responds first — so an unanswered call is not a lost message, it is a job that went to a competitor. For contractors whose crews are on ladders, under houses or driving between jobs, it is the single highest-return automation available.",
  sections: [
    {
      h2: "What a missed call actually costs a home service business",
      body: [
        "Think about what happens on the other end. A homeowner finds water spreading across the kitchen floor, searches, and starts calling. Your phone rings while your tech is halfway through a job. It goes to voicemail. Most people do not leave one — they hang up and call the next result.",
        "That caller was not a lukewarm lead. They had an urgent problem, their wallet was open, and they chose you first. The revenue did not disappear because your marketing failed; it disappeared because nobody could pick up a phone at 2:15 on a Tuesday.",
        "Every trades business knows this happens and most accept it as the cost of doing the work. It is not. It is a routing problem, and routing problems have solutions.",
      ],
    },
    {
      h2: "How missed call text back works",
      steps: [
        { title: "The call comes in and goes unanswered", body: "Busy, after hours, everyone on a job — the reason does not matter. The system sees a call that was not picked up." },
        { title: "A text goes out within about a minute", body: "Written in your voice, naming your company, acknowledging the missed call and asking what they need. Speed is the whole mechanism: it has to arrive before they dial the next company." },
        { title: "The customer replies by text", body: "Most people find this easier than calling back. They can answer from a meeting, a job site, or standing in the flooded kitchen without having to explain everything on a call." },
        { title: "The conversation continues in a shared inbox", body: "Your office sees the thread and can answer, quote or book. Nothing sits unread on a personal phone while someone is under a house." },
        { title: "Qualified callers get booked", body: "Either your team books them or an automated flow offers available times, depending on how you want it set up." },
      ],
    },
    {
      h2: "Why a text beats a callback",
      benefits: [
        { title: "It arrives before the competitor does", body: "The window that decides who gets the job is the few minutes after the call. A callback an hour later lands after they have already booked someone else." },
        { title: "People answer texts they would not answer as calls", body: "An unknown number calling back gets ignored. A text naming the company they just called gets read." },
        { title: "It works after hours without paying anyone", body: "Evening and weekend calls are often the most urgent and the most profitable. A text back captures them without an answering service." },
        { title: "It leaves a written record", body: "The address, the problem and the agreed time are in writing, which removes the misheard-detail problem that plagues phone bookings." },
        { title: "It filters out the calls you do not want", body: "Sales calls and wrong numbers do not reply. Your team spends its time on the ones that do." },
        { title: "It costs the same whether you get one call or fifty", body: "Unlike an answering service billed per call, the automation does not become more expensive in your busy season, which is exactly when you miss the most calls." },
      ],
    },
    {
      h2: "What we set up",
      body: [
        "Your existing business number gets text-enabled, so the customer texts the number they already called. We write the message so it sounds like your company rather than a system, because a message that reads as automated gets ignored.",
        "We register you for A2P 10DLC first. US carriers filter or block unregistered business texting, and that includes the messages you most need delivered. Registration runs on the carriers' timeline, so we start it before anything else.",
        "Replies route to a shared inbox with the full history, opt-outs are handled automatically, and we set the hours and rules — whether after-hours calls get a different message, how quickly follow-ups go out, when a conversation escalates to a person.",
      ],
    },
    {
      h2: "Industries this works best for",
      industries: [
        { name: "HVAC", body: "No-heat and no-cool calls are urgent and price-insensitive. Missing one in January is the most expensive missed call of your year." },
        { name: "Plumbing", body: "The clearest case of all. Burst pipes and backed-up drains go to whoever answers first, full stop." },
        { name: "Roofing", body: "Storm damage produces call spikes your office cannot staff for. A text back holds the queue until someone can work through it." },
        { name: "Junk removal", body: "High call volume, fast decisions, low switching cost. Response speed is most of the sale." },
        { name: "Electrical", body: "Outages and hazards drive urgent calls, often outside business hours." },
        { name: "General contracting and handyman services", body: "Calls arrive while you are on the tools, which is nearly all day." },
      ],
    },
  ],
  related: [
    { to: "/tools/missed-call-calculator", label: "Missed Call Revenue Calculator", note: "Work out what unanswered calls cost you, using your own numbers." },
    { to: "/services/sms-marketing", label: "SMS & Text Message Marketing", note: "The full set of messages beyond the missed-call reply." },
    { to: "/services/lead-follow-up", label: "AI Lead Capture & Follow-Up", note: "What happens to the lead after the first reply." },
    { to: "/services/ai-voice-agents", label: "AI Voice Agents", note: "For callers who would rather talk than text." },
    { to: "/services/database-reactivation", label: "Database Reactivation", note: "Bringing past customers back without new ads." },
  ],
};
