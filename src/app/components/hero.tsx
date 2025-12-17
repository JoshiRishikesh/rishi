"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#020617] overflow-hidden font-sans">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center z-10">

        {/* TEXT — ALWAYS FIRST */}
        <div className="flex flex-col items-start order-1">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-yellow-400"></span>
            <span className="text-yellow-400 font-semibold tracking-[0.25em] uppercase text-[11px]">Engineering Logic. Digital Innovation.</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
            <h1 className="text-[42px] sm:text-[56px] md:text-[88px] lg:text-[104px] font-black leading-[0.9] md:leading-[0.82] tracking-[-0.04em] text-white">
              Rishikesh <br />
              <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-gray-100 bg-clip-text text-transparent">Joshi</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-7 text-gray-400 text-[15.5px] sm:text-[17px] md:text-[18.5px] leading-[1.8] max-w-xl font-normal">
            B.Tech Mechanical Engineer focused on <span className="text-white font-semibold italic">Full-Stack Development</span>, crafting scalable web platforms and driving growth through performance-driven <span className="text-yellow-400 font-medium">Meta advertising strategies</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-10 flex flex-wrap gap-6 items-center">
            <button className="group relative px-8 py-3 bg-yellow-400 text-black font-semibold tracking-wide rounded-full overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">Explore My Work</span>
              <ChevronRight size={18} className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          </motion.div>
        </div>

        {/* IMAGE — BELOW TEXT ON MOBILE */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative flex justify-center order-2">
          <div className="relative w-65 h-85 sm:w-75 sm:h-100 lg:w-95 lg:h-120">
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-[2.5rem]" />
            <div className="absolute inset-0 bg-white/5 border border-white/15 backdrop-blur-xl rounded-[2.5rem]" />
            <Image src="/rishi.avif" alt="Rishikesh Joshi" fill priority className="relative object-cover rounded-[2.5rem] z-10 shadow-2xl shadow-black/40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
