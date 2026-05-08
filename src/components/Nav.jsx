import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services",   href: "#services"   },
  { label: "About",      href: "#about"       },
  { label: "Process",    href: "#process"     },
  { label: "Work",       href: "#portfolio"   },
  { label: "Community",  href: "#community"   },
  { label: "Contact",    href: "#contact"     },
];

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        padding: "0 48px",
        background: scrolled ? "rgba(11,15,25,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.35s, backdrop-filter 0.35s, border-color 0.35s",
      }}
    >
      <div className="max-w-[1280px] mx-auto h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-syne text-[19px] font-extrabold tracking-tight no-underline">
          <span className="grad-text">Levis</span>
          <span className="text-[#F0F4FF]"> Tech</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-[14px] font-medium text-[#94A3B8] no-underline relative pb-[3px]"
              style={{
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#F0F4FF")}
              onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-[10px] rounded-[10px] text-[14px] font-semibold text-white no-underline"
            style={{ background: "linear-gradient(135deg,#3B82F6 0%,#7C3AED 100%)", boxShadow: "0 4px 20px rgba(59,130,246,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(59,130,246,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)"; }}
          >
            Start a Project <span className="icon" style={{ fontSize: 17 }}>arrow_forward</span>
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden bg-transparent border-0 p-2 text-[#F0F4FF]"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ cursor: "pointer" }}
        >
          <span className="icon" style={{ fontSize: 28 }}>{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden", background: "#111827", borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[16px] font-medium text-[#F0F4FF] no-underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[15px] font-semibold text-white no-underline mt-2"
                style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)" }}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
