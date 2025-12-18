"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function EmailButton() {
  const email = "rishikeshjoshi.official@gmail.com";
  const subject = "Job Opportunity / Collaboration";
  const body =
    "Hi Rishikesh,\n\nI went through your portfolio and would like to connect with you regarding an opportunity.\n\nBest regards,";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <motion.a
      href={mailtoLink}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-[0_20px_40px_-12px_rgba(59,130,246,0.6)] transition-all"
      aria-label="Email Rishikesh"
    >
      <FaEnvelope size={24} className="text-white" />
    </motion.a>
  );
}
