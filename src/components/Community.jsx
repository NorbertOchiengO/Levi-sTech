import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "../hooks/useAnimations";

const programs = [
  { icon: "code",           label: "Full-Stack Dev",    weeks: "12 weeks" },
  { icon: "design_services",label: "UI/UX Design",      weeks: "8 weeks"  },
  { icon: "cloud",          label: "Cloud Architecture",weeks: "10 weeks" },
  { icon: "psychology",     label: "AI & ML",           weeks: "14 weeks" },
];

const perks = [
  { icon: "people",   text: "Hands-on mentorship from senior engineers"  },
  { icon: "verified", text: "Industry-aligned curriculum"                },
  { icon: "work",     text: "Job placement in our global network"         },
  { icon: "wifi",     text: "Cyber café & co-working spaces"             },
];

const hubStats = [["12","Active Hubs"],["4,200+","Graduates"],["87%","Hired in 6mo"],["32","Countries"]];

export default function Community() {
  return (
    <section id="community" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="blob" style={{ width: 600, height: 600, background: "rgba(124,58,237,0.1)", top: "50%", right: -200, transform: "translateY(-50%)" }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="tag tag-v mb-4 inline-block">LTS Academy</motion.div>
          <motion.h2 variants={fadeUp} className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
            Building Tomorrow's<br />
            <span className="grad-text-v">Tech Talent</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#94A3B8] text-[17px] max-w-[540px] mx-auto">
            More than an agency — we're a community. Physical tech hubs, intensive training, and real mentorship that changes careers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left – programs – flows in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-syne font-bold text-[22px] tracking-tight mb-2">Training Programs</h3>
              <p className="text-[#94A3B8] text-[14.5px] mb-7 leading-[1.7]">
                Intensive cohorts led by active industry professionals. Learn by building real products.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-7">
                {programs.map((p) => (
                  <motion.div
                    key={p.label}
                    className="rounded-[12px] p-5"
                    style={{ background: "#1A2235", border: "1px solid rgba(255,255,255,0.08)", transition: "border-color 0.3s, transform 0.3s" }}
                    whileHover={{ y: -4, borderColor: "rgba(167,139,250,0.4)" }}
                  >
                    <span className="icon mb-2.5 block" style={{ fontSize: 28, color: "#A78BFA" }}>{p.icon}</span>
                    <div className="text-[13.5px] font-semibold mb-1">{p.label}</div>
                    <div className="text-[11px] text-[#64748B]">{p.weeks}</div>
                  </motion.div>
                ))}
              </div>
              <button
                className="mt-auto w-full py-3 rounded-[10px] text-[15px] font-semibold flex items-center justify-center gap-2"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(167,139,250,0.3)", color: "#A78BFA", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(167,139,250,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                Apply for Next Cohort <span className="icon" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Right – stats + perks – flows in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Hub stats */}
            <div className="glass rounded-2xl p-7 grid grid-cols-2 gap-5">
              {hubStats.map(([n, l]) => (
                <div key={l} className="text-center py-4 px-3 rounded-[12px]" style={{ background: "#1A2235", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-syne font-extrabold text-[28px] grad-text-v">{n}</div>
                  <div className="text-[11.5px] text-[#64748B] mt-1">{l}</div>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className="glass rounded-2xl p-7 flex-1">
              <h4 className="font-syne font-bold text-[16px] tracking-tight mb-5">What You Get</h4>
              <div className="flex flex-col gap-4">
                {perks.map((p) => (
                  <div key={p.text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(167,139,250,0.12)" }}>
                      <span className="icon text-[#A78BFA]" style={{ fontSize: 18 }}>{p.icon}</span>
                    </div>
                    <span className="text-[14.5px] text-[#94A3B8]">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
