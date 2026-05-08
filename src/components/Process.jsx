import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../hooks/useAnimations";
import { steps } from "../data/tokens";

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="blob" style={{ width: 600, height: 600, background: "rgba(6,182,212,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="tag tag-c mb-4 inline-block">How We Work</motion.div>
          <motion.h2 variants={fadeUp} className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
            Our <span className="grad-text-2">Process</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#94A3B8] text-[17px] max-w-[480px] mx-auto">
            A battle-tested 4-step framework that reduces risk and maximizes the value of every engagement.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            // Alternate left/right
            const xDir = i % 2 === 0 ? -50 : 50;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: xDir }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Connector line (desktop only) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-9 left-[calc(50%+36px)] h-[1px] z-0"
                    style={{ width: "calc(100% - 36px)", background: `linear-gradient(90deg,${s.color}60 0%,rgba(59,130,246,0.1) 100%)` }}
                  />
                )}

                <motion.div
                  className="glass rounded-2xl p-7 text-center relative z-10"
                  whileHover={{ y: -6, borderColor: `${s.color}60` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: s.color }}>{s.num}</div>

                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}35` }}>
                    <span className="icon" style={{ color: s.color, fontSize: 26 }}>{s.icon}</span>
                  </div>

                  <h3 className="font-syne font-bold text-[18px] tracking-tight mb-3">{s.title}</h3>
                  <p className="text-[13.5px] text-[#94A3B8] leading-[1.7]">{s.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
