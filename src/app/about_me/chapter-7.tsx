"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ChapterSevenSection() {
  return (
    <section id="chapter-7" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker - Platinum theme for the Epilogue */}
          <div className="flex items-center gap-3 text-slate-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-slate-300/20 animate-pulse" /> Epilogue
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-100 via-slate-300 to-slate-500">Kinetic Man</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-white/2 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-700 hover:bg-white/5 overflow-hidden">
            
            {/* THE ANIMATED BORDER (Silver/Platinum Gradient) */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-slate-500/20 via-white/40 to-slate-500/20 group-hover:bg-linear-to-r group-hover:from-slate-400 group-hover:via-white group-hover:to-slate-400 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-white">
              <p>
                Rishikesh, the man from Pune, is not a story of linear progression, but of <span className="text-white font-semibold">profound, kinetic evolution.</span> From the raw grit of walking streets with QR codes to the deployment of production-grade applications, his journey is a testament to the fact that success is about <span className="italic">relentless, intelligent movement.</span>
              </p>
              
              <br />

              {/* Reflection Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="space-y-2">
                  <div className="h-1px w-full bg-linear-to-r from-slate-500 to-transparent" />
                  <p className="text-sm font-medium text-white uppercase tracking-tighter">The Lesson</p>
                  <p className="text-slate-400 text-base">Every fall redirected him.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1px w-full bg-linear-to-r from-slate-500 to-transparent" />
                  <p className="text-sm font-medium text-white uppercase tracking-tighter">The Compass</p>
                  <p className="text-slate-400 text-base">Every pause sharpened him.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1px w-full bg-linear-to-r from-slate-500 to-transparent" />
                  <p className="text-sm font-medium text-white uppercase tracking-tighter">The Identity</p>
                  <p className="text-slate-400 text-base">Full-stack survivalist.</p>
                </div>
              </div>

              <p>
                The quiet restlessness he felt as a teenager was not an anomaly; it was his <span className="text-white">inner compass</span>, guiding him through an intricate maze of opportunities. He is the living embodiment of a polymath architect.
              </p>
              
              <br />
              
              <div className="relative p-8 rounded-2xl bg-linear-to-br from-white/3 to-transparent border border-white/10 group-hover:border-white/20 transition-all duration-700">
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed italic">
                  "A testament to the power of the human spirit to not just adapt, but to <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">thrive and create</span> in the face of constant change."
                </p>
              </div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-12 flex items-center justify-center gap-2 text-slate-500 text-sm tracking-[0.3em] uppercase">
                <div className="h-1px w-12 bg-slate-800" />
                End of Transmission
                <div className="h-1px w-12 bg-slate-800" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
    </section>
  );
}