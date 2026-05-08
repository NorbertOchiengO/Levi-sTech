import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "../hooks/useAnimations";

const contactItems = [
  { icon: "mail",          label: "Email Us",       value: "hello@levistech.io",          color: "#3B82F6" },
  { icon: "phone_in_talk", label: "WhatsApp / Call", value: "+254 700 000 000",            color: "#A78BFA" },
  { icon: "location_on",   label: "Visit Our Hub",   value: "Tech Plaza, Nairobi, Kenya",  color: "#14B8A6" },
  { icon: "schedule",      label: "Response Time",   value: "Within 24 hours",             color: "#F59E0B" },
];

const services = ["Web Development","Branding & Design","Digital Strategy","Tech Training","Cyber & Admin"];
const budgets  = ["< $5k","$5k – $15k","$15k – $50k","$50k+","Let's discuss"];

export default function Contact() {
  const [form,  setForm]  = useState({ name:"", email:"", service: services[0], budget: budgets[0], message:"" });
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="blob" style={{ width: 500, height: 500, background: "rgba(59,130,246,0.08)", top: 0, right: -100 }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="tag mb-4 inline-block">Get in Touch</motion.div>
          <motion.h2 variants={fadeUp} className="font-syne font-extrabold tracking-tight" style={{ fontSize: "clamp(30px,4vw,52px)" }}>
            Start Your <span className="grad-text">Project</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left info – flows from left ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactItems.map((c) => (
              <motion.div
                key={c.label}
                className="glass rounded-[14px] px-5 py-4 flex items-center gap-4"
                whileHover={{ x: 6, borderColor: `${c.color}40` }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15` }}>
                  <span className="icon" style={{ color: c.color, fontSize: 20 }}>{c.icon}</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.08em] text-[#64748B]">{c.label}</div>
                  <div className="text-[14.5px] font-semibold mt-0.5">{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social row */}
            <div className="glass rounded-[14px] px-5 py-4">
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#64748B] mb-3">Follow Us</div>
              <div className="flex gap-2">
                {["language","alternate_email","hub","share"].map(icon => (
                  <motion.div
                    key={icon}
                    whileHover={{ scale: 1.15, background: "rgba(59,130,246,0.12)" }}
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
                  >
                    <span className="icon text-[#94A3B8]" style={{ fontSize: 17 }}>{icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form – flows from right ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-[20px] p-8 md:p-10 relative overflow-hidden">
              {/* Success overlay */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-[20px] z-10 flex flex-col items-center justify-center gap-4"
                    style={{ background: "#111827" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.15)", border: "2px solid #10B981" }}
                    >
                      <span className="icon icon-fill text-[#10B981]" style={{ fontSize: 32 }}>check_circle</span>
                    </motion.div>
                    <div className="font-syne font-extrabold text-[22px]">Message Sent!</div>
                    <div className="text-[#94A3B8] text-[14px]">We'll get back to you within 24 hours.</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[["Full Name","name","text","John Doe"],["Email","email","email","john@company.com"]].map(([label,field,type,ph]) => (
                    <div key={field}>
                      <label className="form-label">{label}</label>
                      <input className="form-input" type={type} placeholder={ph}
                        value={form[field]} onChange={e => setForm({...form,[field]:e.target.value})} required />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Service</label>
                    <select className="form-input" value={form.service} onChange={e => setForm({...form,service:e.target.value})}>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Budget</label>
                    <select className="form-input" value={form.budget} onChange={e => setForm({...form,budget:e.target.value})}>
                      {budgets.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Project Details</label>
                  <textarea className="form-input" rows={5} placeholder="Tell us about your vision, goals, and timeline..."
                    value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                    style={{ resize: "vertical" }} />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 32px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-[10px] font-semibold text-[16px] flex items-center justify-center gap-2 text-white"
                  style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(59,130,246,0.25)" }}
                >
                  Send Proposal <span className="icon" style={{ fontSize: 20 }}>send</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
