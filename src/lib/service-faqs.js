// FAQ content for the service pages, in one place.
//
// Both the page component and the FAQPage schema emitted into that page's HTML
// read from here. That is the point: Google's structured-data policy requires
// FAQ schema to describe text a visitor can actually see on the page, so the
// answers must come from a single source rather than being duplicated into a
// schema block that can quietly drift.
//
// Keyed by route so scripts/prerender.mjs can look up a page's FAQs without
// importing the React component.

export const routeFaqs = {
  "/services/ai-chatbots": [
      {
          q: "Will the chatbot give customers wrong information?",
          a: "It is scoped so it cannot. We define what it should never attempt — pricing complex jobs, diagnosing problems it cannot see, promising appointment times it cannot verify — and those become handoffs to a person rather than confident-sounding guesses.",
      },
      {
          q: "Can it book appointments directly?",
          a: "Yes, when connected to your calendar. For simpler, well-defined jobs that works well. For complex work that needs a site visit, it captures the details and hands off to your team instead.",
      },
      {
          q: "How long does it take to set up?",
          a: "The build is fast. The part that takes time is gathering accurate information about your services, service area, pricing structure and the jobs you decline, because a bot trained on vague inputs gives vague answers.",
      },
      {
          q: "Does it replace answering the phone?",
          a: "No. Plenty of homeowners, especially in emergencies, want to call. The chatbot covers website visitors; missed call text back and an AI voice agent cover callers. They reach different people and work best together.",
      },
      {
          q: "What is an AI chatbot?",
          a: "An AI chatbot is an intelligent virtual assistant that uses artificial intelligence to chat with website visitors and customers, answer questions, capture leads, and provide support automatically.",
      },
      {
          q: "Where can I deploy an AI chatbot?",
          a: "Our AI chatbots can be deployed on your website, WhatsApp, Facebook Messenger, Instagram, Telegram, and most other messaging platforms, providing consistent support across every channel.",
      },
      {
          q: "Will the chatbot understand my business?",
          a: "Yes. We train your chatbot on your specific business information, FAQs, products, and brand voice, ensuring it provides accurate and on-brand responses to every customer.",
      },
      {
          q: "How much does an AI chatbot save me?",
          a: "Most businesses cut customer support costs by 40 to 60 percent while handling 3 to 5 times more conversations, improving customer satisfaction and freeing up staff for higher-value tasks.",
      },
  ],
  "/services/ai-voice-agents": [
      {
          q: "Will callers know they are talking to an AI?",
          a: "Many will, and the agent does not pretend otherwise if asked. What matters to a caller is getting an answer and a booked time rather than voicemail. Anyone who asks for a person is transferred immediately.",
      },
      {
          q: "What happens in a real emergency?",
          a: "It escalates. A caller describing gas, water near electrical, or anything urgent gets routed to a person with the conversation summary attached, rather than being walked through a booking flow.",
      },
      {
          q: "Can it check my real availability?",
          a: "Yes. It connects to your calendar, so the times it offers are times you can actually service. That is the difference between a booked appointment and a promise that someone will call back.",
      },
      {
          q: "How is this different from an answering service?",
          a: "An answering service takes a message; the customer still waits for a callback. A voice agent completes the booking during the call. It also handles simultaneous calls, so a storm spike does not produce a queue, and the cost does not scale per call.",
      },
      {
          q: "What are AI voice agents?",
          a: "AI voice agents are intelligent virtual assistants that can make and receive phone calls, hold natural conversations, qualify leads, book appointments, and provide customer support automatically.",
      },
      {
          q: "How human do AI voice agents sound?",
          a: "Modern AI voice agents sound remarkably human, with natural intonation, pauses, and emotional cues. Most callers cannot distinguish them from a real human representative.",
      },
      {
          q: "Can AI voice agents handle complex conversations?",
          a: "Yes. Our AI agents are trained to handle complex multi-step conversations, answer specific questions about your business, and intelligently transfer calls to human staff when needed.",
      },
      {
          q: "How much can I save with AI voice agents?",
          a: "Most clients reduce call center costs by 50 to 70 percent while increasing call answer rates to nearly 100 percent, ensuring no lead or customer inquiry goes unanswered.",
      },
  ],
  "/services/ai-workflows": [
      {
          q: "What counts as an AI workflow?",
          a: "An automation that handles one repetitive step without a person doing it: answering a new lead within seconds, texting back a missed call, chasing an estimate that went quiet, requesting a review when a job is marked done, and putting the record into your CRM without anyone retyping it.",
      },
      {
          q: "Which automation should I build first?",
          a: "Usually missed call text back or instant lead response, because that is where most home service businesses lose the most money. We build one, prove it works, then add the next. Systems built all at once tend to get abandoned all at once.",
      },
      {
          q: "Will customers know they are talking to an automation?",
          a: "We do not hide it when someone asks, and every automated conversation has a clear route to a real person. The messages are written to sound like your business rather than like software, but the handoff is always available.",
      },
      {
          q: "Does this work with the software I already use?",
          a: "It depends what you use. Most mainstream phone systems, CRMs and field service platforms can be connected, but the only honest answer is to check yours specifically before anyone commits to anything. If a piece of it genuinely cannot connect, you should hear that before you sign, not after.",
      },
      {
          q: "Will this replace my office staff?",
          a: "That is not what it is for. It handles the tasks that were falling through the cracks when your people were busy — the calls at seven in the evening, the follow-up nobody had time for. Judgment work stays with people.",
      },
      {
          q: "What does it take to keep this running once it is built?",
          a: "Less than building it, but not nothing. Messages get stale, offers change, and a follow-up sequence written for last spring will not fit this one. Automations need reviewing periodically rather than being set up once and forgotten.",
      },
  ],
  "/services/lead-follow-up": [
      {
          q: "Will automated follow-up annoy my leads?",
          a: "Not if it is paced properly. A planned sequence spread over several days is normal business follow-up and most people expect it. What generates complaints is a barrage, which is exactly what we avoid.",
      },
      {
          q: "Does this replace my CRM?",
          a: "No. It feeds your CRM. We work with the system you already use rather than asking you to migrate, and the conversation history and source attribution land where your team already works.",
      },
      {
          q: "What counts as a lead source?",
          a: "Website forms, website chat, phone calls, Google and Facebook lead forms, and any other channel where inquiries arrive. The point is that they all land in one place so nothing is missed because it came through a channel nobody checks.",
      },
      {
          q: "How do I know which marketing is actually working?",
          a: "Because leads are tracked from source through to booked job rather than to form submission. That usually changes where the ad budget goes, since the channel producing the most leads is often not the one producing the most work.",
      },
      {
          q: "What is automated lead follow-up?",
          a: "It's a system that automatically nurtures and engages leads through email, SMS, and other channels based on their behavior, ensuring no prospect is forgotten and every lead gets timely attention.",
      },
      {
          q: "How quickly will leads start receiving follow-ups?",
          a: "Follow-ups can be triggered instantly the moment a lead comes in, with sequences continuing over days or weeks based on the strategy we design for your business.",
      },
      {
          q: "Can the system integrate with my existing CRM?",
          a: "Yes. Our automation seamlessly integrates with most major CRMs and marketing platforms, ensuring smooth data flow and a unified view of every lead.",
      },
      {
          q: "What kind of results can I expect?",
          a: "Most clients see a significant lift in lead-to-customer conversion rates within the first 30 to 60 days, along with reduced manual workload and faster sales cycles.",
      },
  ],
  "/services/web-design": [
      {
          q: "How long does a new website take?",
          a: "It depends on how many service pages the site needs and how quickly content, photos and feedback come back. The build is rarely the slow part. We agree a schedule at the start of the project rather than quoting a standard number here.",
      },
      {
          q: "Will I lose my Google rankings when the site is rebuilt?",
          a: "Not if the migration is handled properly. Existing URLs are kept wherever they are worth keeping, anything that has to move gets a permanent redirect, and we compare the page inventory before and after. Sites lose rankings in a rebuild almost entirely because nobody did that step.",
      },
      {
          q: "What usually slows a website project down?",
          a: "Content and photos, almost every time. The design and build move quickly; waiting three weeks for someone to find the job photos does not. Agreeing early on who is supplying what is the single biggest thing that keeps a site on schedule.",
      },
      {
          q: "Can I update the site myself?",
          a: "Yes. You should be able to change hours, add a service or post photos without filing a request. We set that up and walk your team through it before launch.",
      },
      {
          q: "Do I need a full rebuild, or can my current site be fixed?",
          a: "Often it can be fixed. If the structure is sound and the content is reasonable, improving speed, adding the missing service pages and cleaning up the conversion path is cheaper and lower risk than starting over. We will tell you which one your site needs before quoting a rebuild.",
      },
      {
          q: "How will I know whether the new site is actually working?",
          a: "By watching calls and form submissions rather than compliments about the design. Tracking is set up as part of the build so the before-and-after is measurable, and so you can see which pages are producing work and which are just sitting there.",
      },
  ],
  "/services/reviews": [
      {
          q: "How does the review request actually get sent?",
          a: "A short text with a direct link to your Google review form, triggered by job completion — from your field service software where it can be connected, or from a simple manual trigger where it cannot. Either way it stops depending on someone remembering.",
      },
      {
          q: "When is the request sent, and how many times?",
          a: "Shortly after completion, while the job is fresh but after the technician has left, with one polite reminder to anyone who did not respond. We stop there. A second reminder annoys customers for very little gain.",
      },
      {
          q: "Can you write reviews for me?",
          a: "No. Writing, buying or incentivizing reviews violates Google's policies, it is detectable, and the penalty can be losing the listing entirely. No short-term gain is worth that risk to your business.",
      },
      {
          q: "Is it okay to offer a discount in exchange for a review?",
          a: "No. Paying for a review, including with a discount or a gift card, breaks the rules of every major platform and can get reviews removed in bulk. Consistent asking works better than incentives anyway.",
      },
      {
          q: "Can you stop bad reviews from going public?",
          a: "No, and we would not try. Asking privately how a job went so you can fix a problem before the customer posts is good service and we set that up. Blocking unhappy customers from reviewing you is review gating, and it is against Google's policy.",
      },
      {
          q: "How many reviews do I need?",
          a: "Enough to be credible against the companies you actually compete with in your area, which usually means looking at the current map pack rather than at a general number. Recency matters as much as total count — fifty reviews from two years ago signal a business that has gone quiet.",
      },
  ],
  "/services/google-ads": [
      {
          q: "How much should a contractor budget for Google Ads?",
          a: "It depends on your market, your trade and how competitive your area is — clicks in HVAC and plumbing are expensive because the jobs are valuable. Rather than quote a number that would be a guess, we look at your service area and the current cost of the keywords that matter before recommending a budget.",
      },
      {
          q: "How soon do calls start coming in?",
          a: "Usually within days of launch, which is the main advantage over SEO. Getting the account efficient takes longer, because negative keywords and bid adjustments improve with real data from your own traffic.",
      },
      {
          q: "Why are negative keywords so important?",
          a: "Because home service searches attract a lot of irrelevant traffic — people looking for DIY instructions, replacement parts, job vacancies and training courses. Each of those clicks costs the same as a real customer. Excluding them is where most of the savings come from.",
      },
      {
          q: "Should I run ads or do SEO?",
          a: "Both, in that order of urgency. Ads produce calls now but stop the moment you stop paying. Local SEO and your Google Business Profile keep producing, but take months. Ads buy you time while the organic side builds.",
      },
      {
          q: "Where do your Google Ads run?",
          a: "Our campaigns appear on Google Search, Display Network, YouTube, Gmail, and Discovery placements, reaching users when they’re most engaged.",
      },
      {
          q: "Do you create ad copy and visuals?",
          a: "Absolutely. We craft attention-grabbing copy, responsive ads, and visual creatives tailored to your audience to drive action.",
      },
      {
          q: "How do you measure performance?",
          a: "We implement Google Ads conversion tracking, Analytics, and event tracking to monitor clicks, leads, and revenue precisely.",
      },
      {
          q: "When can I expect results?",
          a: "Insights usually appear within 2–3 weeks, and continuous optimization ensures improved performance over time.",
      },
  ],
  "/services/local-maps": [
      {
          q: "How long does it take to rank in the map pack?",
          a: "It varies by how competitive your area is and what state your profile is in. Category and information fixes can show effects within weeks. Review velocity and citation consistency work over months. Anyone promising a specific timeframe is guessing.",
      },
      {
          q: "Do I need a physical address to rank locally?",
          a: "No. A service-area business can rank without displaying an address, as long as the profile is configured correctly for how you actually operate. Getting that configuration wrong is a common and quiet cap on visibility.",
      },
      {
          q: "How many reviews do I need?",
          a: "There is no threshold number. What matters more is recency and consistency — a steady flow of recent reviews signals an active business, while a large number from years ago signals the opposite. That is why we automate the request rather than relying on anyone remembering to ask.",
      },
      {
          q: "A competitor has keywords stuffed in their business name. Should I?",
          a: "No. Keyword-stuffing the name field violates Google's guidelines and is one of the most commonly reported violations, with suspension as the penalty. The better response is reporting it, since removing their advantage costs you nothing and risks nothing.",
      },
      {
          q: "How long does Local SEO take to show results?",
          a: "Local SEO typically shows measurable improvements within 2-4 months, depending on competition and location.",
      },
      {
          q: "Do you optimize for both Google and Apple Maps?",
          a: "Yes, we ensure your business is accurately listed and visible on both Google Maps and Apple Maps.",
      },
      {
          q: "Can you help with local reviews and reputation management?",
          a: "Absolutely. We monitor reviews, respond professionally, and implement strategies to improve your ratings.",
      },
      {
          q: "Do you provide local SEO performance reports?",
          a: "Yes, detailed monthly reports track visibility, traffic, keyword rankings, and map impressions.",
      },
  ],
  "/services/meta-ads": [
      {
          q: "Do Facebook ads work for home service businesses?",
          a: "For the right services, yes. They work when demand has to be prompted — maintenance plans before winter, roof inspections after a storm, replacement offers, financing. They work poorly for emergencies, because someone with a burst pipe is searching, not scrolling.",
      },
      {
          q: "Which platforms do these ads run on?",
          a: "Facebook and Instagram, including feeds, Stories and Reels. We place them where your audience actually is rather than spreading spend across every available surface.",
      },
      {
          q: "What is the best audience to start with?",
          a: "Almost always the data you already own: your customer list, your website visitors, and lookalikes built from them. An audience built from people who have already dealt with you starts from a warmer position than one assembled out of interest categories.",
      },
      {
          q: "How fast do leads need to be followed up?",
          a: "Within minutes. Social leads go cold faster than any other source because the person was not trying to buy anything when they filled in the form. We route them straight into automated text and email follow-up so response time is measured in seconds.",
      },
      {
          q: "Where does the ad creative come from?",
          a: "Photos and short video from your own jobs, with enough variations to learn what works. Stock creative underperforms consistently and it makes the ad look like every other ad in the feed.",
      },
      {
          q: "How do you measure whether it worked?",
          a: "Cost per qualified lead and cost per booked job. Reach and impressions are not outcomes — if the campaign did not produce inquiries, it did not work however many people saw it.",
      },
  ],
  "/services/missed-call-text-back": [
      {
          q: "How fast does the text actually go out?",
          a: "Within about a minute of the missed call. That speed is the entire mechanism — the text has to reach the caller before they dial the next company on their search results, which is usually within a few minutes.",
      },
      {
          q: "Do I need a new phone number?",
          a: "No. Your existing business line gets text-enabled, so customers text the number already on your trucks, your website and your business cards. Nothing about how you advertise has to change.",
      },
      {
          q: "What happens when the customer texts back?",
          a: "The reply goes to a shared inbox your office can see and answer, with the full conversation history attached. It does not land on one person's personal phone where it can sit unread while they are on a job.",
      },
      {
          q: "Does this work outside business hours?",
          a: "Yes, and that is often where it earns the most. Evening and weekend calls tend to be the urgent, higher-value jobs, and they are the ones most likely to go unanswered without it.",
      },
    {
      q: "How does the missed call text-back service work?",
      a: "When a customer calls and you can't answer, our system instantly sends them a personalized SMS, keeping them engaged and giving you a chance to convert that missed call into a customer.",
    },
    {
      q: "How quickly are text messages sent?",
      a: "Messages are sent within seconds of a missed call, ensuring your customer receives an immediate response while your business is still fresh in their mind.",
    },
    {
      q: "Can the messages be customized for my business?",
      a: "Absolutely. We tailor every text-back message to match your brand voice, services, and customer needs to maximize engagement and conversions.",
    },
    {
      q: "Will I lose leads if I'm unavailable?",
      a: "No. Our automated system ensures every missed call is followed up instantly, so you never lose a potential customer due to being busy or after hours.",
    },
  ],
  "/services/one-click-campaigns": [
      {
          q: "What is a one-click campaign?",
          a: "A pre-built offer — the message, the audience segment, the landing page and the follow-up — prepared in advance so you can send it in about two minutes when the schedule looks thin. The point is that building a campaign from scratch takes a week nobody has.",
      },
      {
          q: "Can I text past customers who never opted in to marketing?",
          a: "Not for marketing messages. Before anything sends we check how each contact entered your list and separate the ones who consented from the ones who did not. Telling you that is more useful than a larger send that puts your business at risk.",
      },
      {
          q: "How often should I send?",
          a: "Less often than you would think. A list contacted too frequently stops responding, and rebuilding it costs far more than the extra sends were worth. For most trades a handful of well-timed campaigns a year outperforms monthly blasts.",
      },
      {
          q: "What if a campaign books more work than I can handle?",
          a: "We size the send to your capacity and can release it in batches. It is better to send to a quarter of the list and book it out than to burn the whole list on a week you cannot service.",
      },
      {
          q: "Which channels do the campaigns use?",
          a: "Text and email, with the same offer reflected on a landing page. Text gets read, email carries detail, and replies route into your normal follow-up so an interested customer gets a real conversation.",
      },
      {
          q: "How is this different from database reactivation?",
          a: "Database reactivation is a focused project to win back customers who have gone quiet, usually run once with careful segmentation. One-click campaigns are the ongoing library you send from afterwards, including reactivation sends as one of the options.",
      },
  ],
  "/services/ppc-management": [
      {
          q: "What should I budget for paid search?",
          a: "It depends on your trade and how competitive your area is — clicks in HVAC and plumbing are expensive because the jobs are valuable. Rather than quote a figure that would be a guess, we look at your service area and current keyword costs before recommending anything.",
      },
      {
          q: "Should I let Google use broad match?",
          a: "Only with a negative keyword list that is actually maintained, and only once conversion tracking is reliable enough to steer it. Broad match with neither is the fastest way to spend a month's budget on searches from people who will never hire you.",
      },
      {
          q: "How is this different from Local Services Ads?",
          a: "Local Services Ads are the Google Guaranteed listings above the regular ads, charged per lead rather than per click. Where they are available for your trade they often produce cheaper leads, so we help you get set up and compare the two honestly instead of defaulting to whichever we manage.",
      },
      {
          q: "How do you know which calls came from ads?",
          a: "Call tracking numbers tied to each campaign, with the conversion data fed back into the account so bidding optimizes toward booked work rather than clicks. Without that you cannot tell which half of the budget is working.",
      },
      {
          q: "Why do negative keywords matter so much?",
          a: "Because without them you pay for searches that will never hire you — people looking for DIY instructions, job listings or training courses. Reading the actual search terms report regularly, and adding to the negative list from it, is the unglamorous work that keeps an account improving.",
      },
      {
          q: "Should I run ads or invest in SEO?",
          a: "Ads if you need calls this month. SEO so that a year from now you are not renting all of your traffic. Most home service businesses should be doing both, weighted toward whichever gap is more urgent.",
      },
  ],
  "/services/seo": [
      {
          q: "How long does local SEO take to show results?",
          a: "Longer than anyone wants, and the honest answer is months rather than weeks. How long depends on how competitive your area is, how much of the groundwork is missing, and whether the site has any service pages at all to begin with. What we will not do is quote you a date, because nobody outside Google is in a position to promise one.",
      },
      {
          q: "Should I do SEO or run ads first?",
          a: "If you need calls this month, ads. SEO does not produce leads on a schedule you control, and starving a business while you wait for it is bad advice. The usual answer is both: ads for the volume now, SEO so that in a year you are not renting all of your traffic.",
      },
      {
          q: "How many service pages do I actually need?",
          a: "One for each job you genuinely want more of. Not one per keyword variation. If you do drain cleaning, water heater replacement and repiping, that is three pages, each written properly, rather than one services page mentioning all three in a list.",
      },
      {
          q: "Do you build a page for every town I serve?",
          a: "Only where you genuinely work and there is something specific to say about working there. Spinning out fifty near-identical pages with the town name swapped is a well-known pattern that tends not to earn rankings and can drag on the rest of the site.",
      },
      {
          q: "Will you guarantee a number one ranking?",
          a: "No, and we would be careful with anyone who does. Nobody outside Google controls the ranking. What we can commit to is the work, the reporting, and telling you honestly when something is not working.",
      },
      {
          q: "Do you do SEO for e-commerce or national brands?",
          a: "Our work is built around local home service businesses, and that is what we are good at. If you sell nationally online, another agency will serve you better and we will say so on the first call.",
      },
  ],
  "/services/social-media": [
      {
          q: "Will social media actually bring me leads?",
          a: "Rarely on its own. It is not where demand for home services is created, because nobody decides they need a plumber from a post. What it does is close the gap between a homeowner finding you and calling you, and keep you in front of past customers so the next job comes back to you.",
      },
      {
          q: "Which platforms do you manage?",
          a: "Facebook and Instagram for most home service businesses, because that is where homeowners check on local companies. We will tell you if a platform is not worth your time rather than managing it for the sake of the report.",
      },
      {
          q: "Where do the photos come from?",
          a: "Your jobs. The hardest part of contractor social media is getting pictures off your crews' phones, so we set up a way for them to send photos in seconds. Stock imagery is obvious to anyone looking and it does not build trust.",
      },
      {
          q: "How often do you post?",
          a: "Enough to look active, which for most trades is a few times a week. Consistency matters more than volume. An account posting twice a week for a year beats one that posted daily for a month and stopped.",
      },
      {
          q: "Do you respond to comments and messages?",
          a: "Yes, and we route message inquiries into the same follow-up system as your calls and forms. An unanswered message on a Saturday is a lost job.",
      },
      {
          q: "Do you buy followers or engagement?",
          a: "No. It is visible to anyone who looks closely, it produces no customers, and it undermines the credibility the account exists to build.",
      },
  ],
  "/services/tiktok-ads": [
      {
          q: "Do TikTok ads work for home service businesses?",
          a: "For some. The platform suits visual, transformational work — junk removal, pressure washing, restoration, remodeling — and it is strong for recruiting. It suits emergency HVAC or plumbing repair sold to older homeowners much less well.",
      },
      {
          q: "Should I be spending here at all?",
          a: "Often not yet. If your Google Ads account still has no negative keyword list, or your site has no service pages, that is where the next dollar belongs. We would rather tell you the channel is wrong for you now than take the budget.",
      },
      {
          q: "What do we have to film?",
          a: "Vertical video shot on a phone, showing real work. Polished commercial-style ads are ignored on this platform — the format punishes anything that looks bought. We direct what to capture on site so it does not become a production project.",
      },
      {
          q: "How much should I test with before deciding?",
          a: "Enough to test several creative angles rather than one video, at modest spend. Creative is the variable that decides results here, so it is the variable that gets tested. One video failing tells you nothing.",
      },
      {
          q: "Can TikTok help with hiring?",
          a: "Often more reliably than with customers. Reaching working tradespeople is a genuine strength of the platform, and for many contractors finding techs is harder than finding jobs.",
      },
      {
          q: "How do you report results?",
          a: "Cost per qualified lead compared against your other channels. Views are not calls. If it loses against paid search, we say so and move the budget.",
      },
  ],
  "/services/content-writing": [
      {
          q: "Do you use AI to write the content?",
          a: "We use AI tools for research and outlines. We do not publish generated text under your name. Tools do not know what your techs find when they open up a twenty-year-old system, and pages that read like they were generated do not earn trust from a homeowner about to spend real money.",
      },
      {
          q: "How long should a service page be?",
          a: "As long as it takes to answer the question completely and no longer. Some pages need six hundred words, some need two thousand. Padding a page to hit a number makes readers leave in the middle of it, which is worse than being short.",
      },
      {
          q: "How much of my time does this take?",
          a: "Less than writing it yourself, but not nothing. The details that make a page worth reading come from the people doing the work, so there is an interview stage before writing and a review stage after it.",
      },
      {
          q: "How often should we publish?",
          a: "Less often than most agencies suggest. One genuinely useful page a month beats four written to fill a schedule. The right answer depends on how many service pages you are still missing, because those come first.",
      },
      {
          q: "Will the content be original?",
          a: "Yes, written for your business specifically. We do not duplicate the same paragraph across pages with the service or the town swapped out, and we do not reuse copy between clients.",
      },
      {
          q: "Do you write location pages?",
          a: "Only for areas you actually serve, and only where there is something specific to say. A page that exists purely to hold a place name does not help you.",
      },
  ],
  "/faq": [
          {
              q: "What services does Sky Lift Group provide?",
              a:
                  "We provide AI chatbots, AI voice agents, workflow automation, SEO, PPC advertising, social media management, and high-converting web design solutions."
          },
          {
              q: "How do AI chatbots help my business?",
              a:
                  "AI chatbots automate customer support, capture leads 24/7, answer queries instantly, and improve user engagement without increasing staffing costs."
          },
          {
              q: "What is an AI Work Agent?",
              a:
                  "An AI Work Agent automates repetitive business processes like follow-ups, scheduling, CRM updates, and workflow management to improve efficiency."
          },
          {
              q: "Do you offer custom automation solutions?",
              a:
                  "Yes. We build tailored AI automation systems based on your business goals, tools, and operational structure."
          },
          {
              q: "How long does it take to see marketing results?",
              a:
                  "SEO results typically take 2–4 months, while PPC and paid campaigns can generate results immediately depending on budget and targeting."
          },
          {
              q: "Is my business data secure?",
              a:
                  "Absolutely. We implement secure hosting, encryption, and privacy-first AI architecture to protect your business and customer data."
          }
      ],
  "/tools/sms-compliance-checklist": [
      {
          q: "Is this legal advice?",
          a: "No. Sky Lift Group is a marketing agency, not a law firm. This checklist describes the operational steps we put in place when setting up business texting and covers the parts commonly missed. It does not interpret statutes or account for your situation — confirm your obligations with your own counsel.",
      },
      {
          q: "Do I need A2P 10DLC registration and consent, or just one?",
          a: "Both. They are separate requirements and satisfying one does nothing for the other. Registration is a carrier requirement about whether your messages get delivered. Consent is a legal requirement about whether you may send to a particular person. You can be fully registered and still be in breach.",
      },
      {
          q: "Does this apply if I only send appointment reminders?",
          a: "Registration does, because the requirement is about how the message is sent rather than what it says. Consent rules are lighter for transactional messages tied to a job the customer booked than for marketing, but the carrier registration applies either way.",
      },
      {
          q: "What is the most commonly missed item on this list?",
          a: "Automatic opt-out handling, followed by consent records. Both tend to be done manually until the day they are needed at scale. A missed opt-out is both a compliance problem and a complaint, and complaints damage the carrier standing your transactional messages depend on.",
      },
      {
          q: "Can I text customers whose numbers are already in my CRM?",
          a: "For messages about a job they booked, generally yes. For marketing, a phone number given for service is not consent to promotional texts. Where consent is not documented, email is on safer footing and is the natural channel for inviting people to opt in to texts.",
      },
      {
          q: "Is my progress on this checklist saved?",
          a: "In your own browser only. Nothing is sent to us and nothing is stored on our side. If you clear your browser data or open the page elsewhere, the ticks will not follow.",
      },
  ],
  "/tools/missed-call-calculator": [
      {
          q: "How many calls does a typical contractor miss?",
          a: "There is no reliable industry figure, and any specific percentage you see quoted is usually marketing material rather than research. That is why this calculator asks for your own number instead of supplying one. Most phone systems report missed calls; if yours does not, count for two weeks and halve it.",
      },
      {
          q: "What booking rate should I use?",
          a: "Your own. The 30% the calculator starts with is an arbitrary placeholder, not a benchmark. Whoever answers your phone usually has a rough sense of what share of inbound calls become work, and that estimate beats any published figure.",
      },
      {
          q: "Does this account for calls that were never going to be jobs?",
          a: "Yes, through the booking rate. Sales calls, wrong numbers and suppliers are part of why that percentage is well below 100. If a third of your inbound calls are not customers, your booking rate reflects that and the result comes down accordingly.",
      },
      {
          q: "Why does it assume 52 weeks rather than adjusting for my season?",
          a: "To keep the arithmetic checkable. Seasonal trades miss more calls during peaks, so an annual figure built from a typical week is conservative for them. If your business is heavily seasonal, run it twice — once with a peak week and once with a quiet one — and treat the truth as sitting between them.",
      },
      {
          q: "Is a missed call really a lost job?",
          a: "Often, yes. Most people no longer leave voicemails for businesses; they hang up and call the next result. That is why the calculation treats a missed call as a whole job at risk rather than a fraction of one — the acquisition cost was already spent when the phone rang.",
      },
      {
          q: "What is the fastest way to reduce this number?",
          a: "Responding automatically inside the few minutes that decide the job. Missed call text back sends the caller a text within about a minute, before they dial the next company. It shifts the problem from needing someone available the second the phone rings to working through replies within the hour.",
      },
  ],
  "/services/database-reactivation": [
      {
          q: "What is a database reactivation campaign?",
          a: "It is a structured outreach sequence — usually text and email — sent to past customers who have not booked in a year or more, offering a specific, timely reason to come back such as a seasonal tune-up. Because these people already know and trust you, it is normally the fastest source of booked jobs available to a contractor with an existing customer list.",
      },
      {
          q: "How big does my customer list need to be?",
          a: "A few hundred past customers is enough to be worth running. Smaller lists still work but produce fewer jobs in absolute terms. What matters more than size is how recent and how complete the records are — a list with phone numbers and service history outperforms a larger list of names and emails alone.",
      },
      {
          q: "Can I text past customers who never opted in to marketing?",
          a: "Not automatically. Past customers gave you their number for service, which is not the same as consent to marketing messages. We check what consent exists, suppress anyone who opted out, and structure the campaign to stay within US texting rules. This is not legal advice and you should confirm your obligations with counsel.",
      },
      {
          q: "How soon will I see booked jobs?",
          a: "Reactivation is the fastest channel we run because the audience already knows you. Most campaigns produce replies within hours of the first batch going out. Whether those replies become booked jobs depends on how quickly someone answers them, which is why we set up the reply inbox and booking handoff before sending.",
      },
      {
          q: "What data do you need from my CRM?",
          a: "Name, phone, email where you have it, the service performed and the date. Most field service platforms export this in a few clicks. If your records live in spreadsheets or somewhere less structured, we can work with that too.",
      },
      {
          q: "What if the campaign books more work than I can handle?",
          a: "That is a real risk and we plan around it. We size each batch to your actual crew capacity rather than sending to the whole list at once. Booking a customer and then making them wait three weeks damages the relationship you just rebuilt.",
      },
      {
          q: "How often should reactivation campaigns run?",
          a: "Ahead of each season rather than once. There is always a cohort of customers who have drifted past the point where they would have called on their own, so a list that is worked on a schedule keeps producing instead of being exhausted in a single send.",
      },
  ],
  "/services/sms-marketing": [
      {
          q: "Is text message marketing legal for home service businesses?",
          a: "Yes, with conditions. US rules require express written consent before you send marketing texts, a clear opt-out in your messages, prompt handling of opt-outs, and registration of your business with the carriers through A2P 10DLC. We set consent capture and opt-out handling up as part of the build. This is not legal advice, and you should confirm your own obligations with counsel.",
      },
      {
          q: "What is A2P 10DLC and do I need it?",
          a: "A2P 10DLC is the registration US carriers require for businesses sending texts from a standard 10-digit number. Without it your messages get filtered or blocked outright, including the appointment confirmations you depend on. We handle the brand registration, campaign setup and use-case approval before any message goes out.",
      },
      {
          q: "Can customers text back my existing business number?",
          a: "Yes. We text-enable the number you already use, so customers text the number on your truck and your website. Replies land in a shared inbox your office can see and answer, with the full conversation history, rather than on one person's personal cell phone.",
      },
      {
          q: "Which text messages should a contractor send first?",
          a: "Missed-call text back, before anything else. A call that comes in while your crew is on a job gets an automatic reply within about a minute, which stops that caller from dialing the next company on their list. After that, appointment confirmations and day-before reminders, then review requests after completed jobs.",
      },
      {
          q: "Will texting customers annoy them?",
          a: "Not if the messages are tied to something that actually happened. A confirmation for an appointment they booked, a reply to a call they made, or a reminder before a visit are all expected. Promotional blasts to people who never opted in are what generate complaints, and those also get your number filtered by carriers.",
      },
      {
          q: "How is this different from missed call text back?",
          a: "Missed-call text back is one message in a larger system. SMS marketing covers the full set: missed-call replies, appointment confirmations and reminders, technician en-route notifications, review requests, seasonal maintenance reminders, and reactivation campaigns to past customers. Most businesses start with missed-call text back and add the rest.",
      },
      {
          q: "Do I need a separate phone line or app for this?",
          a: "No. Your existing business line gets text-enabled and everything runs through one shared inbox. Nothing on your trucks, business cards or website needs to change.",
      },
      {
          q: "How quickly can text message marketing be set up?",
          a: "The build itself is quick. The gating item is A2P 10DLC registration, which carriers process on their own timeline and can take several business days. We start that first so the rest of the setup finishes alongside it.",
      },
  ],
};
