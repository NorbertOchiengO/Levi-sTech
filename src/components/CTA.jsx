import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../hooks/useAnimations";
import CalendarModal from "./CalendarModal";

export default function CTA() {
  const [showCal, setShowCal] = useState(false);

  return (
    <>
      <section className="relative py-20 px-6 md:px-16 overflow-hidden" style={{ background: "#141B2D" }}>
        <div className="blob" style={{ width: 800, height: 400, background: "rgba(59,130,246,0.1)", top: 0, left: "50%", transform: "translateX(-50%)" }} />
        <div className="blob" style={{ width: 400, height: 400, background: "rgba(124,58,237,0.12)", bottom: -100, left: "30%" }} />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
            className="rounded-[28px] px-8 py-20 md:px-24 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,rgba(59,130,246,0.12) 0%,rgba(124,58,237,0.12) 50%,rgba(6,182,212,0.08) 100%)",
              border: "1px solid rgba(59,130,246,0.25)",
            }}
          >
            {/* Inner grid bg */}
            <div className="absolute inset-0 rounded-[28px]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

            <motion.div variants={fadeUp} className="tag mb-6 inline-block relative">Ready to Build?</motion.div>

            <motion.h2 variants={fadeUp} className="font-syne font-extrabold leading-[1.05] tracking-tight mb-5 relative" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
              Let's Build Something<br />
              <span className="grad-text">That Works.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#94A3B8] text-[18px] max-w-[500px] mx-auto mb-12 leading-[1.7] relative">
              Whether you're launching something new or scaling what exists — we're the team that ships.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 relative">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] text-[16px] font-semibold text-white no-underline"
                style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)", boxShadow: "0 4px 24px rgba(59,130,246,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,130,246,0.3)"; }}
              >
                Get Started <span className="icon" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>

              {/* Schedule a call → opens calendar */}
              <button
                onClick={() => setShowCal(true)}
                className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] text-[16px] font-semibold text-[#F0F4FF]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span className="icon" style={{ fontSize: 20 }}>calendar_month</span>
                Schedule a Call
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex justify-center gap-12 flex-wrap mt-14 pt-8 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[["★★★★★","5.0 avg rating"],["150+","Projects delivered"],["48h","Avg response time"]].map(([n,l]) => (
                <div key={l} className="text-center">
                  <div className="font-syne font-bold text-[22px] text-[#F0F4FF]">{n}</div>
                  <div className="text-[12px] text-[#64748B] mt-1">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calendar modal */}
      {showCal && <CalendarModal onClose={() => setShowCal(false)} />}
    </>
  );
}
