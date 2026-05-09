import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeLeft, fadeRight, stagger, viewport } from "../hooks/useAnimations";

// ── Real asset imports ──────────────────────────────────────────────────────
import resumoImg   from "../assets/resumo.png";
import novaImg     from "../assets/novacare.png";
import joblyImg    from "../assets/jobly.png";
import codepalImg  from "../assets/codepal.png";
import cocktailImg from "../assets/coctails.png";
import kickasImg   from "../assets/kickas.png";
import posterImg   from "../assets/poster.png";

// ── Project data ────────────────────────────────────────────────────────────
const projects = [
  // ── Web ──────────────────────────────────────────────────────────────────
  {
    id: "resumo",
    title: "Resumo",
    cat: "Web",
    subtitle: "CV Template Platform",
    desc: "A web app for building and customising professional CVs from polished templates. Users pick a layout, fill their details, and export a print-ready document.",
    tags: ["Web App", "Next.js", "Templates"],
    accent: "#3B82F6",
    img: resumoImg,
    wide: true,          // spans more columns
  },
  {
    id: "novacare",
    title: "NovaCare",
    cat: "Web",
    subtitle: "Hospital Management System",
    desc: "End-to-end hospital management covering patient records, appointment scheduling, staff management, and billing in a single unified dashboard.",
    tags: ["Web App", "Healthcare", "Dashboard"],
    accent: "#10B981",
    img: novaImg,
    wide: false,
  },
  {
    id: "jobly",
    title: "Jobly",
    cat: "Web",
    subtitle: "Job Board & Talent Platform",
    desc: "A two-sided marketplace where employers post vacancies and job-seekers apply, build profiles, and track applications — all in one streamlined interface.",
    tags: ["Web App", "Marketplace", "React"],
    accent: "#F59E0B",
    img: joblyImg,
    wide: false,
  },
  {
    id: "codepal",
    title: "CodePal",
    cat: "Web",
    subtitle: "AI Coding Assistant",
    desc: "An AI-powered coding companion that suggests completions, explains errors, generates boilerplate, and reviews pull requests directly inside the browser.",
    tags: ["Web App", "AI", "Developer Tool"],
    accent: "#A78BFA",
    img: codepalImg,
    wide: true,
  },

  // ── Graphic Design ────────────────────────────────────────────────────────
  {
    id: "cocktails",
    title: "Cocktails",
    cat: "Design",
    subtitle: "Menu & Brand Visuals",
    desc: "A vibrant visual identity and menu design for a cocktail bar, featuring custom illustration, bold typography, and a rich dark-mode colour palette.",
    tags: ["Graphic Design", "Brand", "Print"],
    accent: "#EC4899",
    img: cocktailImg,
    wide: false,
  },
  {
    id: "kickas",
    title: "Kickas",
    cat: "Design",
    subtitle: "Logo & Brand Identity",
    desc: "A bold, modern logo and brand mark for Kickas — built around dynamic typography and a high-energy colour system suited for sports and streetwear.",
    tags: ["Logo", "Branding", "Identity"],
    accent: "#F97316",
    img: kickasImg,
    wide: false,
  },
  {
    id: "poster",
    title: "Poster Series",
    cat: "Design",
    subtitle: "Creative Print Design",
    desc: "A collection of high-impact promotional posters using layered photography, expressive type hierarchy, and bold gradient treatments for event and digital use.",
    tags: ["Poster", "Print", "Editorial"],
    accent: "#06B6D4",
    img: posterImg,
    wide: true,
  },
];

const FILTERS = ["All", "Web", "Design"];

// ── Helpers ─────────────────────────────────────────────────────────────────
const catLabel = { Web: "Web Development", Design: "Graphic Design" };
const catAccent = { Web: "#3B82F6", Design: "#EC4899" };

export default function Portfolio() {
  const [active,   setActive]   = useState("All");
  const [hovered,  setHovered]  = useState(null);

  const visible = active === "All"
    ? projects
    : projects.filter((p) => p.cat === active);

  // Group by category for the "All" view
  const groups =
    active === "All"
      ? [
          { key: "Web",    items: projects.filter(p => p.cat === "Web")    },
          { key: "Design", items: projects.filter(p => p.cat === "Design") },
        ]
      : [{ key: active, items: visible }];

  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: "#141B2D" }}
    >
      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
        >
          <div>
            <motion.div variants={fadeLeft} className="tag mb-4 inline-block">
              Selected Work
            </motion.div>
            <motion.h2
              variants={fadeLeft}
              className="font-syne font-extrabold tracking-tight"
              style={{ fontSize: "clamp(30px,4vw,52px)" }}
            >
              Work That <span className="grad-text">Ships</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-[#94A3B8] mt-3 text-[16px] max-w-[420px]">
              Real projects across web development and graphic design.
            </motion.p>
          </div>

          {/* Filter pills */}
          <motion.div variants={fadeRight} className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
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
                {f === "Design" ? "Graphic Design" : f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Category groups ── */}
        <AnimatePresence mode="wait">
          {groups.map((group) => (
            <motion.div
              key={group.key + active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 last:mb-0"
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: catAccent[group.key] }}
                />
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: catAccent[group.key] }}
                >
                  {catLabel[group.key]}
                </span>
                <div
                  className="flex-1 h-[1px]"
                  style={{ background: `${catAccent[group.key]}20` }}
                />
              </div>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]">
                {group.items.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative rounded-2xl overflow-hidden group ${p.wide ? "lg:col-span-2" : ""}`}
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ scale: 1.018 }}
                  >
                    {/* ── Screenshot ── */}
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* ── Always-visible bottom strip ── */}
                    <div
                      className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between"
                      style={{
                        background: "linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.6) 60%, transparent 100%)",
                      }}
                    >
                      <div>
                        <div
                          className="text-[10px] font-semibold uppercase tracking-[0.1em] mb-1"
                          style={{ color: p.accent }}
                        >
                          {p.subtitle}
                        </div>
                        <div className="font-syne font-bold text-[18px] text-[#F0F4FF] tracking-tight">
                          {p.title}
                        </div>
                      </div>
                      <div className="flex gap-1.5 flex-wrap justify-end max-w-[140px]">
                        {p.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-[3px] rounded-full text-[9px] font-semibold uppercase tracking-[0.05em]"
                            style={{
                              background: `${p.accent}22`,
                              color: p.accent,
                              border: `1px solid ${p.accent}35`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── Hover overlay with description ── */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered === p.id ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex flex-col justify-center px-7 py-8"
                      style={{
                        background: `linear-gradient(135deg, rgba(11,15,25,0.96) 0%, ${p.accent}18 100%)`,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {/* Accent line */}
                      <div
                        className="w-10 h-[3px] rounded-full mb-5"
                        style={{ background: p.accent }}
                      />

                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
                        style={{ color: p.accent }}
                      >
                        {p.subtitle}
                      </div>

                      <div className="font-syne font-extrabold text-[24px] text-[#F0F4FF] tracking-tight mb-3">
                        {p.title}
                      </div>

                      <p className="text-[14px] text-[#94A3B8] leading-[1.7] mb-6 max-w-[360px]">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-[4px] rounded-full text-[11px] font-semibold"
                            style={{
                              background: `${p.accent}18`,
                              color: p.accent,
                              border: `1px solid ${p.accent}30`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                        style={{ color: p.accent }}
                      >
                        View Case Study
                        <span className="icon" style={{ fontSize: 16 }}>
                          arrow_forward
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}