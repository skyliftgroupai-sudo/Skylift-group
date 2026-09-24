export default {
  route: "/services/web-design",
  directAnswer:
    "A website for a home service business has one job: turn the person reading it into a phone call or a booked appointment. That makes it a different build from a brochure site. It has to load fast on a phone over cell data, put the phone number somewhere a thumb can reach it, answer the two or three questions that stop people from calling, and have a real page for each service so search engines have something to rank. Design matters, but it matters in service of those things — a beautiful site that takes six seconds to appear has already lost most of the people who tapped it.",
  sections: [
    {
      h2: "What actually loses you the call",
      body: [
        "Most homeowners find you on a phone, often standing in the room with the problem. They are comparing you against two other tabs. Anything that costs them a second costs you a share of those calls.",
        "The usual culprits are predictable: a full-screen hero video that has to download before anything renders, a phone number that is an image instead of a tap-to-call link, a contact form with eleven fields, and no answer anywhere on the page to whether you even cover their town.",
        "The other quiet loss is structural. If the site has a single services page instead of a page per service, it cannot rank for the searches that bring new customers, so the only people who ever see it are the ones who already knew your name.",
      ],
    },
    {
      h2: "How we build",
      steps: [
        { title: "Start from the jobs you want", body: "Which services are worth the most to you, and which ones do you want more of. The site structure follows that, rather than mirroring whatever the old site happened to have." },
        { title: "Design for the phone first", body: "Layouts are built at phone width and then expanded, not shrunk down afterwards. Tap targets, readable text sizes, a call button that stays reachable." },
        { title: "A page per service", body: "Each service gets its own URL, its own heading, and enough content to be genuinely useful. This is what makes the site rankable rather than just present." },
        { title: "Build for speed on purpose", body: "Images sized and compressed properly, fonts that do not shift the layout when they load, scripts kept to what earns its place. We measure before and after rather than guessing." },
        { title: "Make the conversion path obvious", body: "Tap-to-call, a short form, and online booking where it fits the business. One clear next step per page instead of five competing ones." },
        { title: "Wire up tracking before launch", body: "Analytics and form tracking configured as part of the build rather than bolted on later, so you can tell which pages produce work." },
      ],
    },
    {
      h2: "What you get",
      benefits: [
        { title: "Mobile-first layouts", body: "Designed at phone width first, then expanded — which is the opposite order from most builds, and the reason most sites feel cramped on the screen people actually use." },
        { title: "Fast page loads", body: "Speed treated as a build requirement rather than something checked at the end: images sized properly, fonts that do not shift the layout, and scripts kept to what earns its place." },
        { title: "Service pages that can rank", body: "A separate, properly written page for each job, which is the difference between a site search engines can use and one they cannot." },
        { title: "Tap-to-call everywhere", body: "The phone number as a link, visible without scrolling, on every page." },
        { title: "Forms people finish", body: "Short, clear and working. Every field you add is a percentage of submissions you give up." },
        { title: "Content you can edit", body: "Routine changes — hours, a new service, fresh job photos — should not need a developer." },
      ],
    },
    {
      h2: "Rebuild or repair",
      body: [
        "Not every site needs replacing. If the structure is sound and the content is decent, fixing speed, adding the missing service pages and cleaning up the conversion path is cheaper, faster and less risky than starting over.",
        "A rebuild makes sense when the site cannot be made fast, when the platform blocks the pages you need, or when the existing content is so thin that keeping it would mean rewriting everything anyway.",
        "When we do rebuild, existing URLs are preserved wherever they are worth keeping, and anything that has to move gets a permanent redirect. Sites lose their rankings in a rebuild almost entirely because nobody handled that step.",
      ],
    }
  ],
  related: [
    { to: "/services/seo", label: "Local SEO", note: "Getting the new site found." },
    { to: "/services/content-writing", label: "SEO Content Writing", note: "Filling the service pages properly." },
    { to: "/services/ai-chatbots", label: "AI Chatbots", note: "Catching visitors who will not fill in a form." },
    { to: "/tools/missed-call-calculator", label: "Missed Call Calculator", note: "What unanswered inquiries are costing you." },
  ],
};
