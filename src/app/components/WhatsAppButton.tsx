"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = +"918208108473"; // ← replace with your WhatsApp number
  const message =
    "Hi Rishikesh, I found your portfolio and would like to connect.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-[0_20px_40px_-12px_rgba(34,197,94,0.6)] transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
    </motion.a>
  );
}
