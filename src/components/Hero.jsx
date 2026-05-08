import { motion } from "framer-motion";
import { fadeUp, stagger } from "../hooks/useAnimations";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="blob" style={{ width: 700, height: 700, background: "rgba(59,130,246,0.12)", top: -200, left: -200 }} />
      <div className="blob" style={{ width: 500, height: 500, background: "rgba(124,58,237,0.10)", top: 100, right: -150 }} />
      <div className="blob" style={{ width: 400, height: 400, background: "rgba(6,182,212,0.07)", bottom: 0, left: "30%" }} />

      {/* Grid lines */}
      <div className="grid-bg absolute inset-0 z-0" />

      <div className="max-w-[1280px] mx-auto relative z-10 px-6 md:px-16 pt-[160px] pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full mb-7"
            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)" }}>
            <span className="pulse w-[7px] h-[7px] rounded-full bg-[#3B82F6] inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#3B82F6]">
              Digital Agency · Est. 2020
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-syne font-extrabold leading-[1.05] tracking-[-0.035em] mb-7"
            style={{ fontSize: "clamp(38px,5.2vw,68px)" }}
          >
            Building Digital<br />
            <span className="grad-text">Systems That</span><br />
            Work and Scale.
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} className="text-[#94A3B8] mb-10 leading-[1.75] max-w-[480px]" style={{ fontSize: 18 }}>
            We blend developer-grade precision with creative branding to deliver software, identity, and education that drives measurable growth.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-[10px] text-[15px] font-semibold text-white no-underline"
              style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)", boxShadow: "0 4px 24px rgba(59,130,246,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,130,246,0.3)"; }}
            >
              Start a Project <span className="icon" style={{ fontSize: 18 }}>arrow_forward</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-[10px] text-[15px] font-semibold text-[#F0F4FF] no-underline"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span className="icon" style={{ fontSize: 18 }}>play_circle</span> View Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex gap-10 mt-14 pt-10 flex-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[["150+","Projects Delivered"],["12k+","Students Trained"],["99.9%","Client Uptime"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-syne grad-text font-extrabold tracking-tight" style={{ fontSize: 30 }}>{n}</div>
                <div className="text-[#64748B] text-[13px] mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — Dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="hidden lg:block float relative"
        >
          <div style={{ position: "absolute", inset: -24, background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
          <div className="glass rounded-[20px] overflow-hidden p-[3px]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3 rounded-t-[18px]" style={{ background: "#111827" }}>
              {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
              <div className="flex-1 rounded-[6px] h-[22px] mx-2 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                <span className="text-[11px] text-[#64748B]">levistech.io/dashboard</span>
              </div>
            </div>
            {/* Dashboard body */}
            <div className="p-5 rounded-b-[18px]" style={{ background: "#141B2D" }}>
              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[["Revenue","↑ 34%","#3B82F6"],["Active Users","12.4k","#A78BFA"],["Deploy Rate","99.9%","#14B8A6"]].map(([l,v,c]) => (
                  <div key={l} className="rounded-[10px] p-3" style={{ background: "#1A2235", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-[10px] uppercase tracking-[0.08em] text-[#64748B]">{l}</div>
                    <div className="font-syne font-bold mt-1.5 text-[20px]" style={{ color: c }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* Chart */}
              <div className="rounded-[12px] p-4 mb-3" style={{ background: "#1A2235", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[11px] text-[#64748B] mb-2">Revenue Growth · Last 6 months</div>
                <svg viewBox="0 0 340 100" className="w-full block">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity=".4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity=".3" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[20,40,60,80].map(y => <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
                  <path d="M0,80 C50,65 90,72 130,48 C170,24 210,38 255,18 C285,8 315,22 340,12" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M0,80 C50,65 90,72 130,48 C170,24 210,38 255,18 C285,8 315,22 340,12 L340,100 L0,100Z" fill="url(#g1)" />
                  <path d="M0,90 C50,78 90,82 130,65 C170,48 210,55 255,38 C285,28 315,42 340,30" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M0,90 C50,78 90,82 130,65 C170,48 210,55 255,38 C285,28 315,42 340,30 L340,100 L0,100Z" fill="url(#g2)" />
                </svg>
              </div>
              {/* Activity */}
              {[["Nova Banking","Deployed v3.2","2m","#3B82F6"],["Flux Identity","Brand kit done","1h","#A78BFA"],["Atlas CRM","Perf +42%","3h","#14B8A6"]].map(([p,d,t,c]) => (
                <div key={p} className="flex items-center gap-3 py-[9px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c }} />
                  <span className="text-[12px] font-semibold flex-1">{p}</span>
                  <span className="text-[11px] text-[#94A3B8]">{d}</span>
                  <span className="text-[10px] text-[#64748B]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B] text-[11px] tracking-[0.1em] uppercase">
        <span>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(#3B82F6, transparent)" }} />
      </div>
    </section>
  );
}
