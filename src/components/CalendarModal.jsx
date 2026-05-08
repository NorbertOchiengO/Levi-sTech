import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const TIME_SLOTS = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
  "11:00 AM","11:30 AM","02:00 PM","02:30 PM",
  "03:00 PM","03:30 PM","04:00 PM","04:30 PM",
];

// Slots booked for demo purposes
const DEMO_BOOKED = [2, 5, 8];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarModal({ onClose }) {
  const today = new Date();
  const [year,  setYear]  = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay,  setSelectedDay]  = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay    = getFirstDay(year, month);

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelectedDay(null); setSelectedTime(null);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelectedDay(null); setSelectedTime(null);
  };

  const isPast = (day) => {
    const d = new Date(year, month, day);
    d.setHours(23,59,59);
    return d < today;
  };
  const isWeekend = (day) => {
    const dow = new Date(year, month, day).getDay();
    return dow === 0 || dow === 6;
  };
  const isDisabled = (day) => isPast(day) || isWeekend(day);

  const handleBook = () => {
    if (!selectedDay || !selectedTime || !name.trim() || !email.trim()) return;
    setBooked(true);
  };

  const canBook = selectedDay && selectedTime && name.trim() && email.trim();

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-[780px] rounded-[24px] overflow-hidden"
          style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.1)", maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* ── Booked state ── */}
          <AnimatePresence>
            {booked && (
              <motion.div
                key="booked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[24px]"
                style={{ background: "#111827" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 20 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(16,185,129,0.15)", border: "2px solid #10B981" }}
                >
                  <span className="icon icon-fill text-[#10B981]" style={{ fontSize: 38 }}>check_circle</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <h3 className="font-syne font-extrabold text-[28px] text-center text-[#F0F4FF] mb-3">Call Booked! 🎉</h3>
                  <p className="text-[#94A3B8] text-center text-[16px] mb-1">
                    <strong className="text-[#F0F4FF]">{MONTHS[month]} {selectedDay}, {year}</strong> at <strong className="text-[#F0F4FF]">{selectedTime}</strong>
                  </p>
                  <p className="text-[#94A3B8] text-center text-[14px] mb-8">
                    A confirmation has been sent to <span className="text-[#3B82F6]">{email}</span>
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={onClose}
                      className="px-8 py-3 rounded-[10px] font-semibold text-white text-[15px]"
                      style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)", cursor: "pointer" }}
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Header ── */}
          <div className="flex items-center justify-between px-8 pt-7 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)" }}>
                  <span className="icon text-white" style={{ fontSize: 16 }}>calendar_month</span>
                </div>
                <h2 className="font-syne font-extrabold text-[20px] tracking-tight">Schedule a Discovery Call</h2>
              </div>
              <p className="text-[#64748B] text-[13px]">30 minutes · Free consultation · Mon–Fri</p>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}>
              <span className="icon text-[#94A3B8]" style={{ fontSize: 20 }}>close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ── Calendar ── */}
            <div className="px-7 py-6" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              {/* Month nav */}
              <div className="flex items-center justify-between mb-5">
                <button onClick={prevMonth} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="icon text-[#94A3B8]" style={{ fontSize: 18 }}>chevron_left</span>
                </button>
                <span className="font-syne font-bold text-[15px]">{MONTHS[month]} {year}</span>
                <button onClick={nextMonth} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="icon text-[#94A3B8]" style={{ fontSize: 18 }}>chevron_right</span>
                </button>
              </div>

              {/* Day labels */}
              <div className="grid grid-cols-7 mb-2">
                {DAYS.map(d => (
                  <div key={d} className="text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-[#64748B] py-1">{d}</div>
                ))}
              </div>

              {/* Day grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for first week */}
                {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}

                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                  const disabled = isDisabled(day);
                  const selected = selectedDay === day;
                  const isToday  = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

                  return (
                    <motion.button
                      key={day}
                      whileHover={!disabled ? { scale: 1.1 } : {}}
                      whileTap={!disabled ? { scale: 0.95 } : {}}
                      onClick={() => { if (!disabled) { setSelectedDay(day); setSelectedTime(null); } }}
                      className={`cal-day ${selected ? "cal-selected" : ""} ${isToday && !selected ? "cal-today" : ""} ${disabled ? "cal-disabled" : ""}`}
                      style={{
                        color: selected ? "#fff" : disabled ? "#64748B" : isToday ? "#3B82F6" : "#94A3B8",
                        cursor: disabled ? "not-allowed" : "pointer",
                        background: selected ? "linear-gradient(135deg,#3B82F6,#7C3AED)" : "transparent",
                        border: `1px solid ${isToday && !selected ? "rgba(59,130,246,0.4)" : "transparent"}`,
                      }}
                    >
                      {day}
                    </motion.button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                  <div className="w-3 h-3 rounded-full" style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)" }} /> Selected
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                  <div className="w-3 h-3 rounded-full border" style={{ borderColor: "rgba(59,130,246,0.4)" }} /> Today
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                  <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} /> Unavailable
                </div>
              </div>
            </div>

            {/* ── Right panel: time + form ── */}
            <div className="px-7 py-6 flex flex-col gap-5">
              {/* Time slots */}
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-3">
                  {selectedDay
                    ? `Available times · ${MONTHS[month]} ${selectedDay}`
                    : "Select a date to see available times"
                  }
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot, idx) => {
                    const isBooked   = DEMO_BOOKED.includes(idx);
                    const isSelected = selectedTime === slot;
                    return (
                      <motion.button
                        key={slot}
                        whileHover={selectedDay && !isBooked ? { scale: 1.04 } : {}}
                        whileTap={selectedDay && !isBooked ? { scale: 0.96 } : {}}
                        disabled={!selectedDay || isBooked}
                        onClick={() => setSelectedTime(slot)}
                        className="py-[9px] px-2 rounded-[8px] text-[12px] font-semibold text-center"
                        style={{
                          cursor: (!selectedDay || isBooked) ? "not-allowed" : "pointer",
                          background: isSelected
                            ? "linear-gradient(135deg,#3B82F6,#7C3AED)"
                            : isBooked
                            ? "rgba(255,255,255,0.02)"
                            : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isSelected ? "transparent" : isBooked ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)"}`,
                          color: isSelected ? "#fff" : isBooked ? "#3a4a5a" : (!selectedDay ? "#3a4a5a" : "#94A3B8"),
                          transition: "all 0.2s",
                        }}
                      >
                        {isBooked ? "Booked" : slot}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

              {/* Contact fields */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="jane@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Selected summary */}
              <AnimatePresence>
                {selectedDay && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="rounded-[10px] px-4 py-3 flex items-center gap-3"
                    style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <span className="icon text-[#3B82F6]" style={{ fontSize: 18 }}>event_available</span>
                    <div>
                      <div className="text-[13px] font-semibold text-[#F0F4FF]">{MONTHS[month]} {selectedDay}, {year}</div>
                      <div className="text-[12px] text-[#64748B]">{selectedTime} · 30 min Discovery Call</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Book button */}
              <motion.button
                whileHover={canBook ? { scale: 1.02 } : {}}
                whileTap={canBook ? { scale: 0.97 } : {}}
                onClick={handleBook}
                disabled={!canBook}
                className="w-full py-4 rounded-[10px] font-semibold text-[15px] flex items-center justify-center gap-2"
                style={{
                  cursor: canBook ? "pointer" : "not-allowed",
                  background: canBook
                    ? "linear-gradient(135deg,#3B82F6,#7C3AED)"
                    : "rgba(255,255,255,0.05)",
                  color: canBook ? "#fff" : "#64748B",
                  border: canBook ? "none" : "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.25s",
                  boxShadow: canBook ? "0 4px 24px rgba(59,130,246,0.3)" : "none",
                }}
              >
                <span className="icon" style={{ fontSize: 19 }}>event</span>
                {canBook ? "Confirm Booking" : "Select date, time & fill details"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
