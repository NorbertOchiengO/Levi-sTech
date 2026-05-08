import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "../hooks/useAnimations";
import { services } from "../data/tokens";

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="blob" style={{ width: 600, height: 600, background: "rgba(124,58,237,0.07)", top: "50%", right: -200, transform: "translateY(-50%)" }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="tag mb-4 inline-block">What We Do</motion.div>
          <motion.h2 variants={fadeUp} className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
            Core <span className="grad-text">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#94A3B8] text-[17px] max-w-[500px] mx-auto">
            Specialized engineering and creative services for the future of digital business.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => {
            // Alternate: even from left, odd from right
            const variant = i % 2 === 0 ? fadeLeft : fadeRight;
            return (
              <motion.div
                key={s.title}
                variants={variant}
                className="glass rounded-2xl p-8 relative overflow-hidden group"
                style={{ transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s" }}
                whileHover={{ y: -6 }}
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg,${s.accent}10 0%,${s.accent}05 100%)` }} />

                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6"
                  style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}>
                  <span className="icon" style={{ color: s.accent, fontSize: 24 }}>{s.icon}</span>
                </div>

                <h3 className="font-syne font-bold text-[18px] tracking-tight mb-3">{s.title}</h3>
                <p className="text-[#94A3B8] text-[14.5px] leading-[1.7] mb-5">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map(t => (
                    <span key={t} className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold uppercase tracking-[0.05em]"
                      style={{ background: `${s.accent}12`, color: s.accent, border: `1px solid ${s.accent}25` }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: s.accent }}>
                  Learn more <span className="icon" style={{ fontSize: 16 }}>arrow_forward</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
