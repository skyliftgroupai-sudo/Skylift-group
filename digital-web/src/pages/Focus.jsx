import { motion } from "framer-motion";

export default function FocusPoints() {
  const points = [
    {
      title: "Data-Driven Strategies",
      description:
        "Every campaign starts with insight. We analyze audience behavior, trends, and performance data to build marketing strategies that maximize ROI and reduce wasted spend.",
    },
    {
      title: "SEO & Organic Growth",
      description:
        "We enhance your brand visibility through powerful SEO frameworks — blending technical optimization, content strategy, and user intent for long-term organic success.",
    },
    {
      title: "Paid Media That Converts",
      description:
        "From Google Ads to social campaigns, our paid media approach focuses on targeting, creative design, and continuous optimization to generate quality leads that matter.",
    },
    {
      title: "Content That Builds Trust",
      description:
        "We craft compelling stories that educate, engage, and inspire action. Great content isn’t just words — it’s the foundation of lasting customer relationships.",
    },
    {
      title: "Performance Analytics & Reporting",
      description:
        "We turn complex data into clear insights. With real-time dashboards and transparent reporting, you’ll always know how your campaigns are performing — and where to grow next.",
    },
    {
      title: "Social Media Engagement & Brand Building",
      description:
        "Your social presence should feel alive. We build authentic, consistent engagement strategies across platforms that strengthen brand loyalty and foster meaningful communities.",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-5 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          6 Core Pillars of
          <span className="text-[#00A693] block mt-1">
            Digital Marketing Excellence
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <strong className="text-white">Sky Lift Group</strong>, we build
          scalable digital systems that help brands grow with clarity, precision,
          and long-term impact.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              className="
              relative
              bg-white/5
              p-8
              rounded-2xl
              border-t-4 border-[#00A693]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_45px_rgba(0,166,147,0.35)]
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              {/* Number badge */}
              <div className="absolute -top-4 right-6 bg-[#0a0a0a] px-3 py-1 rounded-full border border-[#00A693] text-[#00A693] text-sm font-semibold shadow-md">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-[#00A693] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
