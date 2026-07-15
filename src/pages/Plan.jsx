import { motion } from "framer-motion";

export default function Plan() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="col-span-2 rounded-2xl overflow-hidden shadow-lg shadow-black/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/plan-mainimg.avif"
              alt="Charts and graphs"
              className="w-full h-64 md:h-80 object-cover rounded-2xl brightness-75 contrast-110"
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg shadow-black/40"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/plan-rightsmall.avif"
              alt="Creative marketing team brainstorming"
              className="w-full h-48 object-cover rounded-2xl brightness-75 contrast-110"
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg shadow-black/40"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/plan-leftsmall.avif"
              alt="Digital marketing strategy meeting"
              className="w-full h-48 object-cover rounded-2xl brightness-75 contrast-110"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-[#00A693] uppercase tracking-wide mb-3">
            Strategy. Innovation. Measurable Growth.
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            We craft digital strategies that connect, convert, and scale.
          </h2>

          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              At <strong className="text-[#00A693]">Sky Lift Group</strong>, growth begins with
              clarity and execution. We design data-driven strategies tailored to your brand,
              your audience, and your goals — because real results demand precision.
            </p>

            <p>
              By blending creativity with AI insights and analytics, we ensure your message
              doesn’t just reach users — it influences decisions. From awareness to conversion,
              every move is intentional and measurable.
            </p>

            <p>
              Whether it’s SEO, content, paid media, or full digital transformation, our
              strategies evolve with your business and the market. We build digital systems
              that are smart, scalable, and built to last.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
