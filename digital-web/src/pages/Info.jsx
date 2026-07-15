import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#0a0a0a] text-white"
    >
      <motion.div
        className="max-w-6xl w-full space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span>Digital success isn’t accidental — </span>
          <span className="text-[#00A693]">
            it’s engineered with data, AI, and strategy.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed text-gray-300"
        >
          Sky Lift Group helps modern brands grow through AI-powered digital marketing,
          intelligent automation, and performance-driven strategies. We turn complex data
          into clear actions, build meaningful digital experiences, and deliver measurable
          results that scale with your business. Every campaign is designed to convert,
          optimize, and grow long term.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Info;
