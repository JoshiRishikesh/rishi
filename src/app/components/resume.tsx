"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, CheckCircle, Code2, Globe, ChevronDown, Rocket } from "lucide-react";

const skillCategories = [
  {
    title: "Core Development",
    icon: <Code2 className="text-yellow-400" size={20} />,
    skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    desc: "Building scalable, type-safe web applications with modern architecture."
  },
  {
    title: "Marketing & Growth",
    icon: <Globe className="text-blue-400" size={20} />,
    skills: ["Meta Ads", "Google Analytics (GA4)", "Technical SEO", "Conversion API", "GMB Optimization"],
    desc: "Driving ROI through data-backed performance marketing and search visibility."
  },
  {
    title: "Digital Strategy",
    icon: <Rocket className="text-purple-400" size={20} />,
    skills: ["UI/UX Strategy", "Performance Audits", "Systems Thinking", "Project Management"],
    desc: "Bridging the gap between complex code and business growth objectives."
  },
];

export default function ResumeSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="resume" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-yellow-400/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
          
          <div className="absolute top-0 right-0 p-8 opacity-5 uppercase font-black text-6xl md:text-8xl pointer-events-none select-none hidden sm:block">
            RESUME
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
                  Ready to scale your <br />
                  <span className="text-yellow-400 italic">digital presence?</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-md mx-auto lg:mx-0">
                  I engineer high-performance web ecosystems and SEO strategies that turn visitors into customers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <a
                  href="/Resume_Rishikesh_Joshi.pdf" 
                  download
                  className="group relative inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                >
                  <Download size={22} className="group-hover:animate-bounce" />
                  DOWNLOAD CV
                </a>
                <p className="mt-6 text-slate-500 text-sm flex items-center justify-center lg:justify-start gap-2 font-bold tracking-widest uppercase">
                  <FileText size={14} /> PDF • Updated Dec 2025
                </p>
              </motion.div>
            </div>

            {/* Right Side: Expandable Skills Grid */}
            <div className="flex flex-col gap-4">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className={`cursor-pointer p-6 rounded-4xl border transition-all duration-300 ${
                    expandedIndex === i 
                    ? "bg-white/10 border-yellow-400/40 shadow-xl" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-950 rounded-xl border border-white/10 shadow-inner">
                        {cat.icon}
                      </div>
                      <h3 className="text-white text-xl font-bold tracking-tight">{cat.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      className="text-slate-500"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 text-sm mt-4 mb-6 leading-relaxed">
                          {cat.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, j) => (
                            <span
                              key={j}
                              className="text-[11px] font-black text-slate-200 bg-slate-950 px-4 py-2 rounded-xl border border-white/5 flex items-center gap-2 uppercase tracking-tighter"
                            >
                              <CheckCircle size={12} className="text-yellow-400" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}