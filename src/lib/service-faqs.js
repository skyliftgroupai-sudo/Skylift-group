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
          q: "What is AI workflow automation?",
          a: "AI workflow automation uses artificial intelligence to handle repetitive tasks, connect systems, and execute business processes automatically, saving time and reducing human error.",
      },
      {
          q: "Which tasks can be automated with AI?",
          a: "Almost any repetitive task including data entry, email responses, lead routing, scheduling, document processing, customer onboarding, and reporting can be fully automated using AI.",
      },
      {
          q: "How long does setup take?",
          a: "Most AI workflows are designed and deployed within 2 to 4 weeks, depending on complexity. We work closely with you to ensure smooth integration with your existing tools.",
      },
      {
          q: "Will AI replace my employees?",
          a: "No. AI workflow automation handles repetitive, time-consuming tasks so your team can focus on creative, strategic, and customer-facing work that drives real business value.",
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
          q: "What is the typical development timeline?",
          a: "The timeline varies based on complexity, but most projects are completed within 1–4 weeks.",
      },
      {
          q: "Do you offer post-launch support?",
          a: "Yes. We provide maintenance plans that include updates, monitoring, and security enhancements.",
      },
      {
          q: "Will my website be optimized for SEO?",
          a: "Yes. Every site is developed with modern SEO structure, clean markup, and fast performance.",
      },
      {
          q: "Can you develop advanced or custom features?",
          a: "Yes. We build custom modules, integrations, and tailored functionality based on your goals.",
      },
  ],
  "/services/reviews": [
      {
          q: "How do your services deliver 5-star results?",
          a: "We combine data-driven strategies, premium ad creative, and continuous optimization to ensure measurable results and high client satisfaction.",
      },
      {
          q: "Do you handle ad creatives and copy?",
          a: "Yes. Every ad we create is designed to convert, backed by best practices and client feedback to maintain our 5-star reputation.",
      },
      {
          q: "How is performance tracked?",
          a: "With Google Ads conversion tracking, Analytics, and event monitoring, every click, lead, and sale is accurately measured for transparent reporting.",
      },
      {
          q: "How soon can I expect results?",
          a: "Most campaigns deliver insights within 2–3 weeks, with ongoing optimization to ensure top-tier results and client satisfaction.",
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
          q: "Which platforms do your Meta Ads run on?",
          a: "Our Meta Ads run across Facebook, Instagram, Messenger, and Meta Audience Network to maximize reach and performance.",
      },
      {
          q: "Do you handle ad creatives and copy?",
          a: "Yes. We design visuals, write ad copy, and create multiple variations to test and improve performance.",
      },
      {
          q: "How do you track conversions and results?",
          a: "We set up Meta Pixel, event tracking, and conversion funnels to measure leads, purchases, and ROI accurately.",
      },
      {
          q: "How long does it take to see results?",
          a: "Most campaigns start generating insights within the first 2–3 weeks, with consistent optimization improving results over time.",
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
          q: "What are one click marketing campaigns?",
          a: "They are pre-built, fully automated marketing campaigns you can launch instantly with a single click. We design the strategy, content, and targeting so you can deploy professional campaigns in seconds.",
      },
      {
          q: "Which channels do these campaigns cover?",
          a: "Our one click campaigns can be deployed across email, SMS, WhatsApp, social media, and other channels simultaneously, ensuring maximum reach with minimal effort.",
      },
      {
          q: "Can I customize the campaigns for my brand?",
          a: "Absolutely. Every template is fully customizable with your branding, voice, and specific offers, so each campaign feels uniquely yours while still launching in just one click.",
      },
      {
          q: "How quickly can I see results?",
          a: "Most clients see engagement within hours of launching a campaign, with measurable conversions and ROI typically visible within the first week of deployment.",
      },
  ],
  "/services/ppc-management": [
      {
          q: "Which platforms do you manage PPC campaigns on?",
          a: "We run campaigns on Google Ads, Microsoft Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more depending on your audience.",
      },
      {
          q: "Do you handle ad creation and creatives?",
          a: "Yes, we create ad copies, banners, videos, and other creatives to boost engagement and conversions.",
      },
      {
          q: "Can you optimize campaigns for better ROI?",
          a: "Absolutely. We continuously monitor, adjust bids, and optimize targeting to maximize results.",
      },
      {
          q: "Do you provide reports for PPC campaigns?",
          a: "Yes, detailed performance reports track clicks, conversions, costs, and ROI to help you make informed decisions.",
      },
  ],
  "/services/seo": [
      {
          q: "How long does SEO take to show results?",
          a: "SEO is a long-term strategy. You can typically see improvements within 3-6 months depending on competition.",
      },
      {
          q: "Do you provide monthly reports?",
          a: "Yes, we deliver detailed monthly reports covering rankings, traffic, and progress.",
      },
      {
          q: "Can you help with local SEO?",
          a: "Absolutely. We optimize Google Business Profile, local keywords, and maps visibility for your business.",
      },
      {
          q: "Do you offer SEO for e-commerce websites?",
          a: "Yes. We optimize product pages, category pages, and integrate structured data to improve search visibility.",
      },
  ],
  "/services/social-media": [
      {
          q: "Which platforms do you manage?",
          a: "We manage Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube depending on your target audience.",
      },
      {
          q: "Do you create content for our social accounts?",
          a: "Yes, we provide graphics, videos, stories, and captions tailored to your brand voice.",
      },
      {
          q: "Do you run paid ad campaigns?",
          a: "Absolutely. We create, monitor, and optimize ad campaigns to maximize ROI and conversions.",
      },
      {
          q: "Will I get performance reports?",
          a: "Yes, detailed monthly reports show audience growth, engagement, reach, and ad performance.",
      },
  ],
  "/services/tiktok-ads": [
      {
          q: "Which platforms do your TikTok Ads run on?",
          a: "Our TikTok Ads run on TikTok feeds, stories, and in-feed video placements to maximize reach and engagement.",
      },
      {
          q: "Do you handle ad creatives and copy?",
          a: "Yes. We create engaging TikTok videos, captions, and multiple variations to test and improve campaign performance.",
      },
      {
          q: "How do you track conversions and results?",
          a: "We set up TikTok Pixel, conversion events, and detailed analytics to track leads, purchases, and ROI accurately.",
      },
      {
          q: "How long does it take to see results?",
          a: "Most campaigns generate insights within 2–3 weeks, with optimization improving engagement and conversions over time.",
      },
  ],
  "/services/content-writing": [
      {
          q: "Do you provide SEO-optimized content?",
          a: "Yes, all content is written with SEO best practices in mind to improve search engine visibility.",
      },
      {
          q: "Can you handle social media content?",
          a: "Absolutely, we create posts, captions, and graphics tailored to your social media platforms.",
      },
      {
          q: "Do you offer content strategy services?",
          a: "Yes, we help plan and structure content to align with your marketing goals and audience needs.",
      },
      {
          q: "How do you ensure content quality?",
          a: "Our team of professional writers researches thoroughly and edits rigorously to maintain high-quality standards.",
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
