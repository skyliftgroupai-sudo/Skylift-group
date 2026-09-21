import React, { useEffect } from "react";
import Slider from "react-slick";
import { Star, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../lib/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };



  // Fix slick slider re-render issue on resize
  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 300);
  }, []);

  // No real testimonials yet — show nothing rather than invented ones.
  if (testimonials.length === 0) return null;

  return (
    <section className="relative py-15 sm:py-18 overflow-hidden bg-[#0a0a0a]">
      {/* Radial background highlights */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00A69330,transparent_70%)] blur-2xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#00C1A040,transparent_60%)] blur-3xl"></div> */}

      {/* Heading */}
      <motion.div
        className="text-center mb-16 sm:mb-20 px-4 z-10 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 backdrop-blur-md border border-[#00A693]/40">
          Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          What Our <span className="text-[#00A693]">Clients Say</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Real stories from people who trusted us with their brand. Their experience speaks for itself.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <Slider {...sliderSettings}>
          {testimonials.map((r, i) => (
            <div key={i} className="px-3 sm:px-4 cursor-grab">
              <motion.div
                className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 
                           hover:border-[#00A693]/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_#00A69340] min-h-[310px] flex flex-col"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-[#00A693]/40 group-hover:border-white/30 overflow-hidden flex items-center justify-center bg-white/5">
                    <User className="h-10 w-10 text-[#00A693]" />
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg font-semibold">{r.name}</h3>
                    {r.business && (
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {r.business}
                        {r.location ? ` — ${r.location}` : ""}
                      </p>
                    )}
                    <div className="flex text-[#00A693] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{r.quote}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
