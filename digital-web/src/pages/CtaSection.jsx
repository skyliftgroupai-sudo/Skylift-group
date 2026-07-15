import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-10 bg-[#0a0a0a] overflow-hidden">
      
      {/* Soft brand glow background */}
      {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00A693]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00A693]/10 rounded-full blur-3xl"></div> */}

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6">

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Elevate Your Brand to the Next Level
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <strong className="text-white">Sky Lift Group</strong>, we craft smart,
          data-driven strategies that grow your audience, boost conversions,
          and help your brand stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              px-7 sm:px-9 py-3.5 sm:py-4
              rounded-full font-semibold text-base sm:text-lg
              bg-transparent text-[#00A693]
              border border-[#00A693]/60
              shadow-lg
              transition-all duration-300
              hover:bg-[#00A693]
              hover:text-white
              hover:shadow-[0_0_35px_rgba(0,166,147,0.7)]
              hover:scale-105
            "
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


//// Different Style ////

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function FuturisticCTA() {
//   return (
//     <section className="relative py-28 overflow-hidden bg-gradient-to-tr from-[#00A693] via-[#00D1B0] to-[#00796B]">
      
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
//       <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//       <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-1000"></div>
      
//       <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        
//         <motion.h2
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Transform Your Digital Presence <br />
//           <span className="bg-gradient-to-r from-[#FFD700] via-[#00FFB0] to-[#FF6EC7] bg-clip-text text-transparent">
//             Into Real Results
//           </span>
//         </motion.h2>

//         <motion.p
//           className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           At <strong>Sky Lift Group</strong>, we combine data, creativity, and AI-driven insights to grow your brand smarter and faster. Your audience, conversions, and revenue — elevated.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <Link
//             to="/contact"
//             className="relative inline-flex items-center bg-white text-[#00A693] font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 overflow-hidden"
//           >
//             <span className="relative z-10">Get Free Strategy Call</span>
//             <ArrowRight className="ml-3 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            
//             <span className="absolute inset-0 bg-gradient-to-r from-[#00A693]/40 to-[#00FFC0]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
