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
};
