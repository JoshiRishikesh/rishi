"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Code, TrendingUp, Activity, Globe, Layout, type LucideIcon } from "lucide-react";

const GOLD = "#facc15";
const BG_PRIMARY = "#020617";
const BG_ACCENT = "#0b1220";

const container: Variants = {
  hidden: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const SkillPill: React.FC<{ icon: LucideIcon; name: string; color: string }> = ({ icon: Icon, name, color }) => (
  <motion.div
    className="flex items-center gap-2 py-1 px-3 rounded-full bg-gradient-to-br from-[#1e273a] to-[#101725] border border-gray-700 shadow-inner hover:scale-105 transition-transform duration-300 cursor-pointer"
    whileHover={{ boxShadow: `0 0 12px ${color}40, 0 0 25px ${color}20` }}
  >
    <Icon className="w-4 h-4" style={{ color }} strokeWidth={2.5} />
    <span className="text-gray-300 text-sm font-semibold">{name}</span>
  </motion.div>
);


export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: `radial-gradient(circle at top right, ${BG_ACCENT} 0%, ${BG_PRIMARY} 60%)` }}
    >
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          className="flex flex-col items-start text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={container}
        >
          <motion.span
            variants={item}
            className="text-sm tracking-[0.35em] uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3"
          >
            Logic Driven. Growth Focused.
          </motion.span>

          <motion.h1
            variants={item}
            className="text-[44px] sm:text-[60px] md:text-[84px] lg:text-[92px] font-extrabold leading-[0.9] tracking-[-0.04em] text-white"
          >
            Rishikesh
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-100">
              Joshi
            </span>
          </motion.h1>

            <motion.p
            variants={item}
            className="mt-7 max-w-xl text-gray-300 text-[16px] sm:text-[18px] leading-[1.8]"
            >
            I build web applications and websites that drive real results for businesses and users alike. I manage <span className="text-yellow-400 font-semibold">Meta Ads</span> campaigns, optimize messaging costs, and leverage <span className="text-yellow-400 font-semibold">Google My Business</span> to boost online visibility. Every project is enhanced with <span className="text-yellow-400 font-semibold">Google Analytics</span>, meta tags, and SEO best practices to ensure it’s measurable, efficient, and growth-focused.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
            <SkillPill icon={Code} name="Web Development" color={GOLD} />
            <SkillPill icon={TrendingUp} name="Meta Ads Management" color="#5865f2" />
            <SkillPill icon={Activity} name="SEO & Analytics" color="#3ccf4e" />
            <SkillPill icon={Globe} name="Google My Business" color="#f87171" />
            <SkillPill icon={Layout} name="UI/UX Design" color="#a855f7" />
            </motion.div>


          <motion.div variants={item} className="mt-10">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="group relative px-9 py-3 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem]">
            <div className="absolute inset-0 bg-yellow-400/15 blur-3xl rounded-[2.5rem]" />
            <div className="absolute inset-0 bg-white/5 border border-white/15 backdrop-blur-xl rounded-[2.5rem]" />
            <Image src="/rishi.avif" alt="Rishikesh Joshi" fill priority className="relative z-10 object-cover rounded-[2.5rem] shadow-2xl shadow-black/50" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
