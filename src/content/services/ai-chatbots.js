export default {
  route: "/services/ai-chatbots",
  directAnswer:
    "An AI chatbot for a home service business is a chat widget on your website that answers visitor questions, works out what the job is, captures contact details and offers to book — around the clock, without anyone on your team watching it. Unlike the scripted bots of a few years ago, it is trained on your services, your pricing structure and your service area, so it can handle real questions rather than pushing everyone into a contact form. For HVAC, plumbing and roofing companies, its main job is converting after-hours website visitors who would otherwise leave and never come back.",
  sections: [
    {
      h2: "The problem with a contact form",
      body: [
        "Most contractor websites ask a visitor to fill in a form and wait. That works if the visitor is patient and their problem is not urgent. Neither is usually true.",
        "A homeowner comparing three roofers at 9pm wants to know whether you cover their town, roughly what a job like theirs runs, and how soon someone could look at it. A form answers none of that. It asks them to hand over their details and hope.",
        "So most of them leave. Not because your prices are wrong or your reviews are bad — because nobody was there to answer a question that would have taken thirty seconds.",
      ],
    },
    {
      h2: "How we build and train a chatbot for your business",
      steps: [
        { title: "We train it on your actual business", body: "Services you offer and services you decline, your service area, how you structure pricing, your booking process, your warranty terms. A bot that gives wrong answers is worse than no bot, so scope comes first." },
        { title: "We define what it should never do", body: "It does not guess at pricing for complex jobs, diagnose problems it cannot see, or promise appointment times it cannot verify. Those become handoffs to a person instead of confident-sounding errors." },
        { title: "We write the qualifying questions", body: "What is the problem, where is the property, is this urgent, is it a rental or owner-occupied. Enough to tell an emergency call from a tire-kicker before it reaches your office." },
        { title: "We connect it to your booking and CRM", body: "Captured leads land where your team already works, not in a separate dashboard nobody opens." },
        { title: "We set up the escalation path", body: "When the conversation is past what it should handle, it takes contact details and routes to a person, rather than looping the visitor through the same three answers." },
      ],
    },
    {
      h2: "What it does for the business",
      benefits: [
        { title: "It covers the hours you cannot", body: "Evenings and weekends are when homeowners research contractors. That is exactly when no one is at the office to answer." },
        { title: "It qualifies before your team spends time", body: "Out-of-area requests and jobs you do not take get filtered out. Your office spends its day on bookable work." },
        { title: "It answers the questions that stop people booking", body: "Do you cover my area, do you handle this kind of job, how does pricing work. Ordinary questions that go unanswered turn into a closed tab." },
        { title: "It captures details before the visitor leaves", body: "Even when it cannot answer fully, it gets a name and number, which turns an anonymous visit into a lead you can follow up." },
        { title: "It handles many conversations at once", body: "A call spike after a storm does not queue. Every visitor gets an immediate response." },
        { title: "It shows you what people actually ask", body: "The transcripts are a running record of customer confusion, which is useful for your website copy and your pricing pages." },
      ],
    },
    {
      h2: "Where a chatbot is the wrong tool",
      body: [
        "It will not close complex jobs on its own. A full system replacement or a re-roof involves a site visit and a conversation with a person, and a bot that pretends otherwise irritates people who are ready to spend money.",
        "It is also not a substitute for answering your phone. Plenty of homeowners, especially for emergencies, want to talk to someone. The chatbot handles the web visitor; missed call text back and an AI voice agent handle the caller. They cover different people.",
        "And it needs maintenance. Services change, service areas change, prices change. A bot trained once and left alone starts giving wrong answers, which costs more trust than it ever earned.",
      ],
    },
    {
      h2: "Industries we deploy chatbots for",
      industries: [
        { name: "HVAC", body: "Seasonal question volume, high-value systems, and a long list of qualifying questions before anyone should be dispatched." },
        { name: "Plumbing", body: "Sorting genuine emergencies from jobs that can wait until Monday, before the call reaches your on-call tech." },
        { name: "Roofing", body: "Long consideration cycles where visitors research late and want service-area and insurance questions answered first." },
        { name: "Spray foam insulation", body: "Technical questions about R-value, application and existing insulation that homeowners want answered before committing to a quote." },
        { name: "Junk removal", body: "Quick scoping — what is it, how much of it, where is it — that leads straight to a price range and a slot." },
        { name: "General contracting", body: "Wide service mix where the first job is working out which trade the visitor actually needs." },
      ],
    },
  ],
  related: [
    { to: "/services/lead-follow-up", label: "AI Lead Capture & Follow-Up", note: "What happens after the chatbot captures a lead." },
    { to: "/services/ai-voice-agents", label: "AI Voice Agents", note: "The same coverage for people who call instead of chat." },
    { to: "/services/missed-call-text-back", label: "Missed Call Text Back", note: "Catching the calls nobody could answer." },
    { to: "/services/web-design", label: "Website Design", note: "The site the chatbot sits on." },
  ],
};
