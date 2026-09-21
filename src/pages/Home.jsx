import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroSlider } from "../components/HeroSliderbar";
import Info from "../pages/Info"
import SliderBar from "./Sliderbar";
import Plan from "./Plan";
import FocusPoints from "./Focus";
import WhatWeOffer from "./WhatWeOffer";
import CTASection from "./CtaSection";
import FAQSection from "./Faq";
import Counter from "./Counter";
import Testimonials from "./Testionmial";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";


const Home = () => {

  useSeo(seoFor("/"));

  return (
    <div className="flex flex-col">

      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/assets/bg-hero.webp"
          alt="Team meeting"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/80 -z-10"></div>

        {/* <div className="container mx-auto px-6 py-20 flex justify-center items-center z-10">
          <div className="w-full">
            <HeroSlider />
          </div>
        </div> */}

        <div className="container mx-auto px-6 py-20 z-10">
          {/* The page's single H1. The rotating carousel headlines below it are H2s:
              react-slick clones slides for the infinite loop, so an H1 in there
              shipped six H1s to Googlebot and left the page with no clear topic.
              This line also states the entity plainly, which is what separates
              "Sky Lift Group" from the unrelated "skylift" lift-equipment results. */}
          <h1 className="text-center text-base md:text-lg font-semibold tracking-wide text-[#00A693] mb-8">
            Sky Lift Group — AI Automation and Marketing Agency for Home Service Businesses
          </h1>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSlider />
          </motion.div>
        </div>
      </section>

      {/* <SliderBar /> */}
      <Info />
      <Plan />
      <FocusPoints />
      <WhatWeOffer />
      <CTASection />
      {/* <FAQSection /> */}
      <Counter />
      <Testimonials />
    </div>
  );
};

export default Home;