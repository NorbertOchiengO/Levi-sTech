import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp, stagger, viewport } from "../hooks/useAnimations";

// ── EmailJS credentials ────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_lre6y4t";
const EMAILJS_TEMPLATE_ID = "template_7ucahzb";
const EMAILJS_PUBLIC_KEY  = "0z5Cn13scQPr30EEv";
// ──────────────────────────────────────────────────────────────────────────

const contactItems = [
  { icon: "mail",          label: "Email Us",       value: "levistechsolutions@gmail.com",         color: "#3B82F6" },
  { icon: "phone_in_talk", label: "WhatsApp / Call", value: "+254 743 999 130",           color: "#A78BFA" },
  { icon: "location_on",   label: "Visit Our Hub",   value: "Rupa House, Utawala, Nairobi, Kenya", color: "#14B8A6" },
  { icon: "schedule",      label: "Response Time",   value: "Within 24 hours",            color: "#F59E0B" },
];

const services = [
  "Web Development",
  "Branding & Design",
  "Digital Strategy",
  "Tech Training",
  "Cyber & Admin",
];

const budgets = ["< 50,000ksh", "50,000 – 150,000ksh", "150,000 – 500,000ksh", "500,000ksh+", "Let's discuss"];

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name:    "",
    email:   "",
    service: services[0],
    budget:  budgets[0],
    message: "",
  });

  const [status,    setStatus]    = useState(STATUS.IDLE);
  const [sentEmail, setSentEmail] = useState("");

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSentEmail(form.email);
    setStatus(STATUS.SENDING);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", service: services[0], budget: budgets[0], message: "" });
      setTimeout(() => setStatus(STATUS.IDLE), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  const isSending = status === STATUS.SENDING;
  const isSuccess = status === STATUS.SUCCESS;
  const isError   = status === STATUS.ERROR;

  return (
    <section id="contact" className="relative py-24 px-6 md:px-16 overflow-hidden">
      {/* Background blob */}
      <div
        className="blob"
        style={{ width: 500, height: 500, background: "rgba(59,130,246,0.08)", top: 0, right: -100 }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="tag mb-4 inline-block">
            Get in Touch
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            Start Your <span className="grad-text">Project</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#94A3B8] mt-4 text-[17px] max-w-[460px] mx-auto">
            Send us a message and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left — contact info — slides in from left ── */}
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
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div
                  className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15` }}
                >
                  <span className="icon" style={{ color: c.color, fontSize: 20 }}>{c.icon}</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.08em] text-[#64748B]">{c.label}</div>
                  <div className="text-[14.5px] font-semibold mt-0.5">{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social icons */}
            <div className="glass rounded-[14px] px-5 py-4">
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#64748B] mb-3">Follow Us</div>
              <div className="flex gap-2">
                {["language", "alternate_email", "hub", "share"].map((icon) => (
                  <motion.div
                    key={icon}
                    whileHover={{ scale: 1.15 }}
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                    }}
                  >
                    <span className="icon text-[#94A3B8]" style={{ fontSize: 17 }}>{icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right — form — slides in from right ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-[20px] p-8 md:p-10 relative overflow-hidden">

              {/* ── Success overlay ── */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-[20px] z-10 flex flex-col items-center justify-center gap-4 px-8 text-center"
                    style={{ background: "#111827" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.15)", border: "2px solid #10B981" }}
                    >
                      <span className="icon icon-fill" style={{ color: "#10B981", fontSize: 32 }}>
                        check_circle
                      </span>
                    </motion.div>

                    <div className="font-syne font-extrabold text-[22px]">
                      Message Sent! 🎉
                    </div>

                    <div className="text-[#94A3B8] text-[15px] max-w-[300px] leading-[1.7]">
                      Thanks for reaching out. We'll reply to{" "}
                      <span className="text-[#3B82F6] font-semibold">{sentEmail}</span>{" "}
                      within 24 hours.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Error banner ── */}
              <AnimatePresence>
                {isError && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 px-4 py-3 rounded-[10px] flex items-center gap-3 text-[14px]"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      color: "#FCA5A5",
                    }}
                  >
                    <span className="icon" style={{ color: "#EF4444", fontSize: 20 }}>error</span>
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </AnimatePresence>

              {/*
                IMPORTANT — name attributes must match your EmailJS template variables exactly:
                  name="from_name"   → {{from_name}}
                  name="from_email"  → {{from_email}}
                  name="service"     → {{service}}
                  name="budget"      → {{budget}}
                  name="message"     → {{message}}
                Verify these in emailjs.com → Email Templates → template_7ucahzb
              */}
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={update("name")}
                      required
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="from_email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                      disabled={isSending}
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Service</label>
                    <select
                      className="form-input"
                      name="service"
                      value={form.service}
                      onChange={update("service")}
                      disabled={isSending}
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Budget</label>
                    <select
                      className="form-input"
                      name="budget"
                      value={form.budget}
                      onChange={update("budget")}
                      disabled={isSending}
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Project Details</label>
                  <textarea
                    className="form-input"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your vision, goals, and timeline..."
                    value={form.message}
                    onChange={update("message")}
                    style={{ resize: "vertical" }}
                    disabled={isSending}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.01, boxShadow: "0 8px 32px rgba(59,130,246,0.4)" } : {}}
                  whileTap={!isSending ? { scale: 0.97 } : {}}
                  className="w-full py-4 rounded-[10px] font-semibold text-[16px] flex items-center justify-center gap-2 text-white"
                  style={{
                    background: isSending
                      ? "rgba(59,130,246,0.35)"
                      : "linear-gradient(135deg,#3B82F6,#7C3AED)",
                    border: "none",
                    cursor: isSending ? "not-allowed" : "pointer",
                    boxShadow: isSending ? "none" : "0 4px 20px rgba(59,130,246,0.25)",
                    transition: "background 0.3s, box-shadow 0.3s",
                  }}
                >
                  {isSending ? (
                    <>
                      <motion.span
                        className="icon"
                        style={{ fontSize: 20, display: "inline-block" }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                      >
                        progress_activity
                      </motion.span>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Proposal
                      <span className="icon" style={{ fontSize: 20 }}>send</span>
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}