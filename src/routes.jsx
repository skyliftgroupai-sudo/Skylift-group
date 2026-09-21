// Route table shared by the browser app (src/App.jsx) and the static renderer
// (scripts/render-ssr.mjs). Keeping one copy is what guarantees the HTML that
// Googlebot and the AI crawlers receive is the same tree React hydrates.
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";

// Home stays in the main bundle — it is the most-hit route and the LCP target.
// Every other route is split out, so a visitor landing on one service page no
// longer downloads the JavaScript for all twenty-odd of them first.
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const AboutUs = lazy(() => import("./pages/Aboutus"));
const Seo = lazy(() => import("./pages/Seo"));
const Localmap = lazy(() => import("./pages/LocalMaps"));
const SocialMediaMarketing = lazy(() => import("./pages/SocialMedia"));
const PPCManagement = lazy(() => import("./pages/Ppc"));
const ContentWritingServices = lazy(() => import("./pages/Writing"));
const Designweb = lazy(() => import("./pages/Designdevelopment"));
const NotFound = lazy(() => import("./components/Notfound"));
const MetaAds = lazy(() => import("./pages/MetaAds"));
const TikTokdas = lazy(() => import("./pages/TikTok-ads"));
const Googleads = lazy(() => import("./pages/GoogleAds"));
const FivestarReviews = lazy(() => import("./pages/FivestarReviews"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsCondition"));
const Faq = lazy(() => import("./pages/Faqs"));
const MissedCall = lazy(() => import("./pages/MissedCall"));
const SmsMarketing = lazy(() => import("./pages/SmsMarketing"));
const DatabaseReactivation = lazy(() => import("./pages/DatabaseReactivation"));
const AutomatedLeadFollowUp = lazy(() => import("./pages/Automatedleadfollowup"));
const OneClickMarketing = lazy(() => import("./pages/Oneclickmarketing"));
const AIWorkflowAutomation = lazy(() => import("./pages/Aiworkflowautomation"));
const AIVoiceAgents = lazy(() => import("./pages/Aivoiceagents"));
const AIChatbot = lazy(() => import("./pages/Aichatbot"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services/web-design" element={<Designweb />} />
      <Route path="/services/seo" element={<Seo />} />
      <Route path="/services/local-maps" element={<Localmap />} />
      <Route path="/services/social-media" element={<SocialMediaMarketing />} />
      <Route path="/services/ppc-management" element={<PPCManagement />} />
      <Route path="/services/content-writing" element={<ContentWritingServices />} />
      <Route path="/services/meta-ads" element={<MetaAds />} />
      <Route path="/services/one-click-campaigns" element={<OneClickMarketing />} />
      <Route path="/services/tiktok-ads" element={<TikTokdas />} />
      <Route path="/services/google-ads" element={<Googleads />} />
      <Route path="/services/reviews" element={<FivestarReviews />} />
      <Route path="/services/ai-workflows" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
      <Route path="/services/ai-chatbots" element={<AIChatbot />} />
      <Route path="/services/sms-marketing" element={<SmsMarketing />} />
      <Route path="/services/database-reactivation" element={<DatabaseReactivation />} />
      <Route path="/services/missed-call-text-back" element={<MissedCall />} />
      <Route path="/services/lead-follow-up" element={<AutomatedLeadFollowUp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/book" element={<Schedule />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
