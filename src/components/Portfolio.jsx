import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "../hooks/useAnimations";
import { projects } from "../data/tokens";

const filters = ["All", "Web", "Branding", "E-Commerce"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Web")       return p.cat.toLowerCase().includes("web") || p.cat.toLowerCase().includes("fintech");
    if (active === "Branding")  return p.cat.toLowerCase().includes("brand");
    if (active === "E-Commerce")return p.cat.toLowerCase().includes("commerce");
    return true;
  });

  return (
    <section id="portfolio" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ background: "#141B2D" }}>
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
        >
          <div>
            <motion.div variants={fadeLeft} className="tag mb-4 inline-block">Selected Work</motion.div>
            <motion.h2 variants={fadeLeft} className="font-syne font-extrabold tracking-tight" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
              Work That <span className="grad-text">Ships</span>
            </motion.h2>
          </div>

          {/* Filter pills */}
          <motion.div variants={fadeRight} className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-[0.06em]"
                style={{
                  cursor: "pointer",
                  border: `1px solid ${active === f ? "#3B82F6" : "rgba(255,255,255,0.08)"}`,
                  background: active === f ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.03)",
                  color: active === f ? "#3B82F6" : "#94A3B8",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="port-card col-span-12 md:col-span-6 lg:col-span-auto"
                style={{
                  gridColumn: `span ${p.col}`,
                  aspectRatio: p.col === 8 ? "16/8" : "1",
                  background: p.bg,
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                }}
                whileHover={{ scale: 1.025 }}
              >
                {/* BG art */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="icon absolute" style={{ fontSize: 100, color: `${p.accent}15` }}>{p.icon}</span>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  <div className="absolute w-[200px] h-[200px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: `${p.accent}15`, filter: "blur(60px)" }} />
                </div>

                {/* Hover overlay */}
                <div className="port-overlay">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="px-[10px] py-[3px] rounded-full text-[10px] font-semibold uppercase tracking-[0.06em]"
                        style={{ background: `${p.accent}25`, color: p.accent, border: `1px solid ${p.accent}35` }}>{t}</span>
                    ))}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[#64748B] mb-1.5">{p.cat}</div>
                  <div className="font-syne font-bold text-[22px] tracking-tight">{p.title}</div>
                  <div className="flex items-center gap-1.5 mt-3 text-[13px] font-semibold" style={{ color: p.accent }}>
                    View Case Study <span className="icon" style={{ fontSize: 16 }}>arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
