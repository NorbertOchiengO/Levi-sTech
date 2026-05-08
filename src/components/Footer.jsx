import { motion } from "framer-motion";
import { fadeLeft, fadeRight, stagger, viewport } from "../hooks/useAnimations";

const footerCols = [
  { title: "Services",  links: ["Software Dev","Branding","SEO Strategy","Tech Training","Cyber & Admin"] },
  { title: "Company",   links: ["About Us","Our Process","Portfolio","Careers","Academy"] },
  { title: "Resources", links: ["Blog","Case Studies","Documentation","Press Kit","Privacy Policy"] },
];

const socials = ["language","alternate_email","hub","share","rss_feed"];
const legal   = ["Privacy Policy","Terms of Service","Cookie Settings","Accessibility"];

export default function Footer() {
  return (
    <footer style={{ background: "#111827", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <motion.div
        variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
        className="max-w-[1280px] mx-auto px-6 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeLeft}>
          <div className="font-syne font-extrabold text-[22px] tracking-tight mb-4">
            <span className="grad-text">Levis</span>
            <span className="text-[#F0F4FF]"> Tech Solutions</span>
          </div>
          <p className="text-[#94A3B8] text-[14.5px] leading-[1.75] max-w-[260px] mb-7">
            Engineering digital excellence through precision code, creative design, and community-driven education.
          </p>
          <div className="flex gap-2 mb-7">
            {socials.map(icon => (
              <motion.div
                key={icon}
                whileHover={{ scale: 1.15, background: "rgba(59,130,246,0.15)" }}
                className="w-9 h-9 rounded-[9px] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
              >
                <span className="icon text-[#64748B]" style={{ fontSize: 16 }}>{icon}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-[12px] text-[#64748B]">
            © 2025 Levis Tech Solutions.<br />Engineering the Future.
          </div>
        </motion.div>

        {/* Link cols */}
        {footerCols.map((col, i) => (
          <motion.div key={col.title} variants={i % 2 === 0 ? fadeLeft : fadeRight}>
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#3B82F6] mb-5">{col.title}</div>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {col.links.map(l => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[14px] text-[#94A3B8] no-underline"
                    style={{ transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#F0F4FF"}
                    onMouseLeave={e => e.target.style.color = "#94A3B8"}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex flex-wrap gap-6">
          {legal.map(l => (
            <a key={l} href="#" className="text-[12px] text-[#64748B] no-underline" style={{ transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#94A3B8"}
              onMouseLeave={e => e.target.style.color = "#64748B"}>{l}</a>
          ))}
        </div>
        <div className="text-[12px] text-[#64748B]">Built with precision in Nairobi, Kenya 🇰🇪</div>
      </div>
    </footer>
  );
}
