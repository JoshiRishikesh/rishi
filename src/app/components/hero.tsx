"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Code, TrendingUp, Activity, Globe, Layout, type LucideIcon } from "lucide-react";
import Link from "next/link";

const GOLD = "#facc15";
const BG_PRIMARY = "#020617";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { type: "spring", damping: 25, stiffness: 100 } 
  },
};

const SkillPill: React.FC<{ icon: LucideIcon; name: string; color: string }> = ({ icon: Icon, name, color }) => (
  <motion.div
    variants={item}
    className="group flex items-center gap-3 py-2 px-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-default"
    whileHover={{ y: -3, boxShadow: `0 10px 20px -10px ${color}60` }}
  >
    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color }} strokeWidth={2} />
    <span className="text-gray-200 text-sm font-medium tracking-wide">{name}</span>
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617] py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="space-y-4">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-500">Creative Technologist</span>
              </motion.div>

              <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Rishikesh <br />
                <span className="text-transparent bg-clip-text bg-linear-to-br from-yellow-300 via-yellow-500 to-orange-400">
                  Joshi
                </span>
              </motion.h1>

              <motion.p variants={item} className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed">
                Architecting <span className="text-white font-medium">high-performance</span> digital experiences. I bridge the gap between clean code and aggressive market growth through SEO, Ads, and intuitive UI.
              </motion.p>
            </div>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <SkillPill icon={Code} name="Web Dev" color={GOLD} />
              <SkillPill icon={TrendingUp} name="Meta Ads" color="#60a5fa" />
              <SkillPill icon={Activity} name="SEO" color="#4ade80" />
              <SkillPill icon={Layout} name="UI/UX" color="#c084fc" />
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-xl font-bold text-black bg-yellow-400 hover:bg-yellow-300 shadow-[0_20px_40px_-12px_rgba(250,204,21,0.3)] transition-all flex items-center justify-center gap-2"
              >
                View Portfolio
                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              </Link>
              <Link href="#contact">
              <button className="px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                Get in Touch
              </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-4/5 w-full max-w-100 mx-auto group">
              {/* Animated Glow Behind Image */}
              <div className="absolute -inset-4 bg-linear-to-tr from-yellow-500/20 to-blue-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/rishi.avif"
                  alt="Rishikesh Joshi"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-bold">Rishikesh Joshi</p>
                  <p className="text-yellow-400 text-xs uppercase tracking-wider font-semibold">Fullstack Developer & Marketer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}