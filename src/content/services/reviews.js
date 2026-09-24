export default {
  route: "/services/reviews",
  directAnswer:
    "Review generation is the work of making sure a satisfied customer actually leaves the review, instead of meaning to and forgetting. For a home service business it is one of the more reliable things to automate, because reviews do two jobs at once: they influence where you rank in the Google map pack, and they decide whether the person looking at that result calls you or the company below you. The mechanism that works is simple and boring — an automatic text to the customer shortly after the job is finished, with a direct link to the review form, sent every time without anyone having to remember.",
  sections: [
    {
      h2: "Why asking manually does not work",
      body: [
        "Every contractor intends to ask for reviews. The technician finishes at five, the next call is waiting, and asking is the thing that falls off. The customers who were happiest are frequently the ones who never get asked.",
        "When people do ask, it usually happens verbally on site. The customer agrees sincerely, then goes back to their day and never opens the app. Without a link arriving on their phone while the job is fresh, the intention does not survive the afternoon.",
        "The result is a business with hundreds of satisfied customers and twenty reviews, most of them from two years ago, competing against a business that automated the request and has a steady flow of recent ones.",
      ],
    },
    {
      h2: "How the automation works",
      steps: [
        { title: "Trigger from job completion", body: "The request fires on job completion — from your field service software where it can be connected, or from a simple manual trigger where it cannot. Either way nobody has to remember to ask." },
        { title: "Text first, email as backup", body: "Text messages get read. The message is short, personal, from your business name, and contains one direct link to your Google review form." },
        { title: "Time it correctly", body: "Shortly after completion, while the relief is fresh, but not while the technician is still in the driveway. We tune the delay for your type of work." },
        { title: "One polite reminder", body: "A single follow-up to people who did not respond. One reminder recovers a meaningful share. More than one annoys customers, so we stop there." },
        { title: "Route problems privately first", body: "Where you prefer it, the message asks how the job went and sends unhappy responses to you directly so you can fix the problem before it becomes a public review. This is about service recovery, not about hiding feedback." },
        { title: "Monitor and respond", body: "New reviews surfaced to you, with response drafts. Responding to reviews, including critical ones, is visible to every future reader." },
      ],
    },
    {
      h2: "Why reviews move local rankings",
      benefits: [
        { title: "Recency counts, not just volume", body: "A steady trickle of new reviews signals an active business. A large count that stopped two years ago signals the opposite." },
        { title: "Reviews affect the click, not only the rank", body: "Two results side by side with different star ratings do not get the same number of calls. Rank is only half the outcome." },
        { title: "Review content carries meaning", body: "Reviews that mention the specific service and the area, in the customer's own words, tell Google and the next reader what you actually do." },
        { title: "Responses are a visible signal", body: "Answering reviews shows the business is attended to. A calm reply to a critical review often reassures readers more than the positive ones do." },
        { title: "Volume across platforms helps", body: "Google matters most, but Facebook, Yelp and trade-specific directories all get read during the comparison." },
        { title: "It compounds", body: "The system runs continuously in the background, so the gap between you and a competitor who asks manually widens every month." },
      ],
    },
    {
      h2: "What we will not do to get reviews",
      body: [
        "We will not write, buy or fabricate reviews. It violates Google's policies, it is detectable, and the penalties include losing the listing outright. No short-term gain justifies that risk to your business.",
        "We will not offer incentives in exchange for reviews. Paying for a review, including with a discount or a gift card, breaks the rules of every major platform and can get reviews removed in bulk.",
        "We will not filter out negative feedback from the public. Asking privately how a job went so you can fix a problem is good service. Blocking unhappy customers from reviewing you is review gating, and it is against Google's policy.",
        "We will not keyword-stuff your business name to boost map rankings. It is a guideline violation, it is the most commonly reported one, and suspensions from it are painful to reverse.",
      ],
    }
  ],
  related: [
    { to: "/services/local-maps", label: "Google Maps Optimization", note: "What the reviews feed into." },
    { to: "/services/sms-marketing", label: "SMS Marketing", note: "The channel the requests are sent on." },
    { to: "/blog/how-many-google-reviews-does-a-contractor-need", label: "How Many Reviews Do You Need?", note: "An honest answer for your market." },
    { to: "/blog/automated-review-generation-home-service-business", label: "Automated Review Generation Guide", note: "The setup in full." },
  ],
};
