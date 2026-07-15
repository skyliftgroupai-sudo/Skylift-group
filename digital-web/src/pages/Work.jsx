import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useCountUp } from "../hooks/counte";
import { useRef } from "react";
import CTASection from "./CtaSection";
import useSeo from "../hooks/useSeo";


const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 350, suffix: "+", label: "Happy Clients" },
    { value: 85, suffix: "%", label: "Average Growth" },
    { value: 95, suffix: "%", label: "Client Retention" }
  ];

  const projects = [
    {
      title: "TechStart Solutions",
      category: "B2B SaaS",
      description: "Complete digital transformation including website redesign, SEO strategy, and lead generation campaigns.",
      results: ["150% increase in organic traffic", "85% growth in qualified leads", "2.5x ROI on ad spend"],
      image: "/assets/analytics.jpg",
      tags: ["SEO", "Web Design", "PPC"],
    },
    {
      title: "EcoLife Marketplace",
      category: "E-commerce",
      description: "End-to-end e-commerce marketing strategy with focus on social media and influencer partnerships.",
      results: ["300% social media growth", "65% increase in conversion rate", "4x revenue in 6 months"],
      image: "/assets/team-work.jpg",
      tags: ["Social Media", "Content", "Email"],
    },
    {
      title: "HealthWell Clinic",
      category: "Healthcare",
      description: "Local SEO optimization and reputation management for a growing healthcare provider.",
      results: ["Top 3 Google rankings", "200+ positive reviews", "120% patient growth"],
      image: "/assets/work-desk.jpg",
      tags: ["Local SEO", "Reputation", "Content"],
    },
  ];

  useSeo({
    title: "Success Stories | Sky Lift Group – Inspiring Client Results",
    description:
      "Discover the success stories of our clients. Sky Lift Group helps businesses grow through digital marketing, SEO, social media, PPC, and web solutions, delivering measurable results.",
    canonical: "https://www.skyliftgroup.com/work"
  });

return (
  <div className="flex flex-col bg-[#0a0a0a] text-gray-100"> {/* main background and text color */}

    {/* Hero Section */}
    <section
      className="relative w-full min-h-[70vh] md:min-h-[88vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url("/assets/our-work.jpeg")` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight"
      >
        Success Stories That Inspire
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-gray-200 text-base sm:text-lg md:text-xl mt-4 text-center max-w-md sm:max-w-xl"
      >
        Explore how we've helped businesses like yours achieve remarkable growth through innovative digital marketing strategies.
      </motion.p>
    </section>

    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00A69325,transparent_70%)] blur-2xl"></div>

      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => {
            const animatedValue = useCountUp(inView ? stat.value : 0);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#00A693] drop-shadow-[0_0_15px_#00A69370]">
                  {animatedValue}
                  {stat.suffix}
                </div>

                <div className="text-sm md:text-base text-gray-200 opacity-90 mt-2 tracking-wide">
                  {stat.label}
                </div>

                <div className="absolute inset-0 mx-auto w-20 h-20 blur-xl rounded-full bg-[#00A69330] opacity-40 -z-10 group-hover:scale-150 transition-all"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-100"
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_35px_rgba(0,166,147,0.35)] transition-all duration-300 border border-gray-700 hover:border-[#00A693]/40 hover:-translate-y-2">
                <div className="h-56 w-full overflow-hidden cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-[#00A693] font-semibold mb-2 tracking-wide">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-100 mb-2">
                      Key Results:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {project.results.slice(0, 2).map((res, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-[#00A693]" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <div
                        key={idx}
                        className="px-3 font-semibold py-1 rounded-full text-xs border border-[#00A693] text-[#00A693] bg-[#00A693]/10"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <button className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-600 text-gray-200 font-bold hover:bg-[#00A693] hover:text-white hover:border-[#00A693] transition-all duration-300 shadow-sm hover:shadow-[0_6px_20px_rgba(0,166,147,0.35)]">
                    View Case Study
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </div>
);

};

export default Work;