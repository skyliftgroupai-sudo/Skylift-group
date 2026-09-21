export default {
  route: "/services/ai-voice-agents",
  directAnswer:
    "An AI voice agent — sometimes called an AI employee — answers your phone in a natural voice, works out what the caller needs, and books them into your calendar without a person on the line. For a home service business it covers the calls nobody can pick up: after hours, during a storm spike, or while every tech is on a job. It is not a phone tree. The caller talks normally, and the agent asks the questions your office would ask before dispatching anyone.",
  sections: [
    {
      h2: "Why contractors still lose calls with an answering service",
      body: [
        "The usual answers to a ringing phone are voicemail, an answering service, or an office manager who is already doing three other things. Voicemail loses most callers outright. An answering service takes a message but cannot see your calendar, so the customer still waits for a callback. An office manager is excellent until the phone rings four times at once.",
        "What every one of those has in common is that the caller does not leave the conversation with a booked appointment. They leave with a promise that someone will get back to them, which is the same position they were in before they called — except now they are also calling your competitor.",
        "A voice agent closes that gap by doing the booking during the call.",
      ],
    },
    {
      h2: "How an AI voice agent handles a call",
      steps: [
        { title: "It answers on the first or second ring", body: "No hold music, no queue, no 'press 1 for service'. It picks up and asks how it can help." },
        { title: "It establishes what the job is", body: "Type of problem, property address, whether it is urgent, whether they are the owner. The same qualifying your office does, asked conversationally." },
        { title: "It checks real availability", body: "Connected to your calendar, so the times it offers are times you can actually service — not a message promising a callback." },
        { title: "It books and confirms by text", body: "The appointment goes into your schedule and the caller gets a written confirmation with the time and address." },
        { title: "It escalates when it should", body: "Genuine emergencies, jobs outside its scope, or a caller who wants a person get transferred or flagged immediately, with the conversation summary attached." },
        { title: "Every call is logged and transcribed", body: "You can review what was said, which also shows you the questions callers ask most." },
      ],
    },
    {
      h2: "What it changes",
      benefits: [
        { title: "After-hours calls become booked jobs", body: "Evening and weekend calls are often the most urgent work you get. Without coverage they are almost entirely lost." },
        { title: "Call spikes stop overflowing", body: "A cold snap or a storm produces more simultaneous calls than any office can take. The agent handles them in parallel." },
        { title: "Your office stops fielding routine calls", body: "Hours, service area, appointment confirmations and rescheduling do not need a person, which frees your team for the calls that do." },
        { title: "Callers get an answer, not a promise", body: "Leaving the call with a confirmed time is the difference between a booking and a lead." },
        { title: "Cost does not scale with call volume", body: "Unlike an answering service billed per call, busy season does not become proportionally more expensive." },
        { title: "You get a record of every conversation", body: "Transcripts surface recurring questions, common objections and the jobs you turn away most often." },
      ],
    },
    {
      h2: "Being straight about the limits",
      body: [
        "Some callers want a human and will say so. The agent should hand those over immediately rather than trying to persuade them, and we set it up that way.",
        "It also should not attempt diagnosis. A caller describing a smell of gas or water near an electrical panel needs a person and an urgent dispatch, not a booking flow. Those become escalations.",
        "And it needs your real constraints: which jobs you decline, where your service area actually ends, how far out you will book. An agent that books work you cannot do creates a worse problem than the missed call it prevented.",
      ],
    },
    {
      h2: "Industries we set voice agents up for",
      industries: [
        { name: "HVAC", body: "No-heat calls at 10pm in January are the most valuable calls of the year and the least likely to be answered." },
        { name: "Plumbing", body: "Emergency-heavy call mix where booking during the call is what wins the job." },
        { name: "Roofing", body: "Storm events produce call volume far beyond normal staffing, in a compressed window." },
        { name: "Electrical", body: "Mix of urgent faults and scheduled work, needing triage before dispatch." },
        { name: "General contracting", body: "High volume of general inquiries that need routing to the right trade before anyone is scheduled." },
        { name: "Junk removal", body: "Simple scoping questions that lead straight to a quote range and a slot." },
      ],
    },
  ],
  related: [
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "The text-based version, for callers who hang up." },
    { to: "/services/ai-chatbots", label: "AI Chatbots", note: "The same coverage for website visitors." },
    { to: "/services/lead-follow-up", label: "AI Lead Capture & Follow-Up", note: "Following up the calls that did not book." },
    { to: "/services/sms-marketing", label: "SMS & Text Message Marketing", note: "Confirmations and reminders after the booking." },
  ],
};
