"use client";

import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Zap, 
  ShieldAlert, 
  Mic2, 
  Cpu, 
  Binary, 
  Eye, 
  Activity,
  Sparkles
} from "lucide-react";

const chapters = [
  { id: "1", title: "Chapter I", tagline: "The Boy Who Refused to Be Still", icon: Zap, color: "text-amber-400", border: "group-hover:border-amber-500/50"},
  { id: "2", title: "Chapter II", tagline: "The Whispers of Resistance", icon: ShieldAlert, color: "text-rose-400", border: "group-hover:border-rose-500/50"},
  { id: "3", title: "Chapter III", tagline: "The Accidental Stage", icon: Mic2, color: "text-indigo-400", border: "group-hover:border-indigo-500/50"},
  { id: "4", title: "Chapter IV", tagline: "The Unseen Architect’s Plan", icon: Cpu, color: "text-emerald-400", border: "group-hover:border-emerald-500/50"},
  { id: "5", title: "Chapter V", tagline: "Echoes in the Code", icon: Binary, color: "text-cyan-400", border: "group-hover:border-cyan-500/50"},
  { id: "6", title: "Chapter VI", tagline: "The Unveiling", icon: Eye, color: "text-purple-400", border: "group-hover:border-purple-500/50"},
  { id: "7", title: "Epilogue", tagline: "The Kinetic Man", icon: Activity, color: "text-orange-400", border: "group-hover:border-orange-500/50"},
];

export default function VibrantCompactIndex() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 p-4 md:p-8 relative overflow-hidden font-sans">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[10%] w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* HEADER */}
        <header className="mb-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-yellow-400/80">
              Personal Archive // RJ-2025
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3">
            THE <span className="text-yellow-400 underline decoration-yellow-500/30 underline-offset-8">ANOMALY</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium tracking-wide max-w-md">
            Rishikesh Joshi — Memoirs of a digital architect in a physical world.
          </p>
        </header>

        {/* COMPACT MULTI-COLOR GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((chapter, i) => (
            <motion.a
              key={chapter.id}
              href={`#chapter-${chapter.id}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ x: 5 }}
              transition={{ delay: i * 0.04 }}
              className={`group relative flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 ${chapter.border} transition-all duration-300 backdrop-blur-sm`}
            >
              {/* Colored Glow Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-linear-to-r from-white/0 via-white/5 to-white/0" />

              {/* Icon with colored container */}
              <div className="shrink-0 w-11 h-11 rounded-lg bg-slate-950 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <chapter.icon className={`w-5 h-5 ${chapter.color}`} />
              </div>

              {/* Text Area */}
              <div className="grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] font-bold text-yellow-400">
                    {chapter.id}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
                    {chapter.title}
                  </span>
                </div>
                <h2 className="text-[14px] font-bold text-white leading-tight truncate">
                  {chapter.tagline}
                </h2>
              </div>

              {/* Action */}
              <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                <ChevronRight className={`w-4 h-4 ${chapter.color}`} />
              </div>
            </motion.a>
          ))}
        </section>
      </div>
    </main>
  );
}