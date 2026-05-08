import { motion } from "framer-motion";
import { fadeLeft, fadeRight, stagger, fadeUp, viewport } from "../hooks/useAnimations";

const pillars = [
  { icon: "developer_mode", title: "Integrated Design-Code",  desc: "Every project starts as code architecture and visual design simultaneously." },
  { icon: "groups",         title: "Human-Centered Teams",    desc: "Senior engineers who write clean APIs alongside designers who care about pixels." },
  { icon: "public",         title: "Local + Global Impact",   desc: "We serve Fortune 500 teams and first-time founders with the same energy." },
];

const stack = ["React","Next.js","Node","TypeScript","AWS","Figma","Kubernetes","PostgreSQL","Rust","Python"];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ background: "#141B2D" }}>
      <div className="blob" style={{ width: 500, height: 500, background: "rgba(59,130,246,0.08)", bottom: -100, left: -100 }} />

      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ── Left ── flows in from left */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <motion.div variants={fadeLeft} className="tag tag-v mb-5 inline-block">Who We Are</motion.div>
          <motion.h2 variants={fadeLeft} className="font-syne font-extrabold leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(30px,3.5vw,46px)" }}>
            Bridging Technical<br />
            <span className="grad-text">Complexity</span> &amp;<br />
            User-Friendly Design
          </motion.h2>
          <motion.p variants={fadeLeft} className="text-[#94A3B8] text-[16.5px] leading-[1.8] mb-5">
            At Levis Tech Solutions, we believe the best software emerges from a synergy between clean engineering and thoughtful design. We don't just build products — we cultivate digital ecosystems that empower communities.
          </motion.p>
          <motion.p variants={fadeLeft} className="text-[#94A3B8] text-[16.5px] leading-[1.8] mb-10">
            Our integrated approach ensures every line of code and every pixel serves a dual purpose: achieving your business objectives and fostering a more tech-literate future.
          </motion.p>
          <motion.div variants={fadeLeft} className="grid grid-cols-3 gap-6">
            {[["150+","Projects"],["12k+","Trained"],["12","Hubs"]].map(([n,l]) => (
              <div key={l} className="pl-4" style={{ borderLeft: "2px solid #3B82F6" }}>
                <div className="font-syne grad-text font-extrabold text-[28px]">{n}</div>
                <div className="text-[12px] text-[#64748B] uppercase tracking-[0.08em] mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right ── flows in from right */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex flex-col gap-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeRight}
              className="glass rounded-2xl px-7 py-6 flex items-start gap-5"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(59,130,246,0.12)" }}>
                <span className="icon text-[#3B82F6]">{p.icon}</span>
              </div>
              <div>
                <div className="font-syne font-bold text-[16px] mb-1.5">{p.title}</div>
                <div className="text-[14px] text-[#94A3B8] leading-[1.65]">{p.desc}</div>
              </div>
            </motion.div>
          ))}

          {/* Stack chips */}
          <motion.div variants={fadeRight} className="glass rounded-2xl px-6 py-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#64748B] mb-4">Our Stack</div>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="px-3 py-[5px] rounded-[8px] text-[12px] font-medium text-[#94A3B8]"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
