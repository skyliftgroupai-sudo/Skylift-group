
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import AboutUs from "./pages/Aboutus";
import Seo from "./pages/Seo";
import Localmap from "./pages/LocalMaps";
import SocialMediaMarketing from "./pages/SocialMedia";
import PPCManagement from "./pages/Ppc";
import ContentWritingServices from "./pages/Writing";
import Designweb from "./pages/Designdevelopment";
import ScrollToTop from "./components/Scrolltotop";
import NotFound from "./components/Notfound";
import MetaAds from "./pages/MetaAds";
import TikTokdas from "./pages/TikTok-ads";
import Googleads from "./pages/GoogleAds";
import FivestarReviews from "./pages/FivestarReviews";
import Schedule from "./pages/Schedule";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsCondition";
import Faq from "./pages/Faqs";
import MissedCall from "./pages/MissedCall";
import AutomatedLeadFollowUp from "./pages/Automatedleadfollowup";
import OneClickMarketing from "./pages/Oneclickmarketing";
import AIWorkflowAutomation from "./pages/Aiworkflowautomation";
import AIVoiceAgents from "./pages/Aivoiceagents";
import AIChatbot from "./pages/Aichatbot";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();


/// FOR Service Unavailable ///
const MAINTENANCE_MODE = false;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {MAINTENANCE_MODE ? (
          // Catch ALL routes and show maintenance page
          <Route path="*" element={<Maintenance />} />
        ) : (
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
            <Route path="/services/missed-call-text-back" element={<MissedCall />} />
            <Route path="/services/lead-follow-up" element={<AutomatedLeadFollowUp />} />
            <Route path="/book" element={<Schedule />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>

);

export default App;