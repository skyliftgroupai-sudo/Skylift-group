import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";
import OurService from "./OurServices";
import CTASection from "./CtaSection";
import { useEffect } from "react";



export default function ServicesAttractive() {

  useSeo({
    title: "AI Automation Services | Sky Lift Group – Chatbots, Voice Agents & Smart Marketing",
    description:
      "Sky Lift Group provides AI chatbots, AI voice agents, workflow automation, SEO, PPC, and smart digital marketing solutions that help businesses generate leads, automate operations, and scale revenue.",
    canonical: "https://www.skyliftgroup.com/services"
  });


  useEffect(() => {
    const img = new Image()
    img.src = "/assets/services.webp"
  }, [])


  return (
    <div className="w-full">

      <section className="services-hero relative w-full h-[88vh] flex flex-col items-center justify-center">

        <div className="absolute inset-0 bg-black/80" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          We help you build a real presence online with content that connects, campaigns that perform, and strategies that move your brand forward.
        </motion.p>
      </section>

      <OurService />
      <CTASection />
    </div>

  );
}

