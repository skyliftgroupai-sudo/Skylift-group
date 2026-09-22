import Hero from "../components/home/Hero";
import IndustryStrip from "../components/home/IndustryStrip";
import ResultsInNumbers from "../components/home/ResultsInNumbers";
import ServicesBento from "../components/home/ServicesBento";
import HowItWorks from "../components/home/HowItWorks";
import VideoTestimonials from "../components/home/VideoTestimonials";
import IndustriesGrid from "../components/home/IndustriesGrid";
import HomeFaq from "../components/home/HomeFaq";
import FinalCta from "../components/home/FinalCta";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";

/**
 * Homepage.
 *
 * Nine sections, alternating dark and light for rhythm. The title, meta
 * description, canonical and JSON-LD all still come from seoFor("/") — this
 * file has never owned any of them and does not start now.
 *
 * The h1 lives in <Hero> and its text is unchanged from before the redesign.
 */
const Home = () => {
  useSeo(seoFor("/"));

  return (
    <div className="flex flex-col">
      <Hero />
      <IndustryStrip />
      <ResultsInNumbers />
      <ServicesBento />
      <HowItWorks />
      <VideoTestimonials />
      <IndustriesGrid />
      <HomeFaq />
      <FinalCta />
    </div>
  );
};

export default Home;
