import { motion } from "framer-motion";

export default function FAB() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center no-underline"
      style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)", boxShadow: "0 8px 32px rgba(59,130,246,0.4)" }}
      aria-label="Contact us"
    >
      <span className="icon icon-fill text-white" style={{ fontSize: 24 }}>chat_bubble</span>
    </motion.a>
  );
}
