"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ChapterOneSection() {
  return (
    <section id="chapter-1" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker */}
          <div className="flex items-center gap-3 text-amber-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-300/20 animate-pulse" /> Chapter I
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The Boy Who <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-100 via-yellow-400 to-amber-500">Refused to Be Still</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-amber-500/20 via-yellow-200/40 to-amber-500/20 group-hover:bg-linear-to-r group-hover:from-yellow-400 group-hover:via-amber-200 group-hover:to-yellow-400 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                The city of Pune breathes a peculiar rhythm—a place of ancient forts and cutting-edge tech. In its midst, a young man named 
                <span className="relative inline-block mx-2 text-white font-bold group-hover:text-amber-300 transition-colors">
                  Rishikesh
                  <span className="absolute bottom-0 left-0 w-full h-1px bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </span> 
                was taking his first conscious breaths of destiny.
              </p>
              
              <br />

              <p>
                In 2016, his path was anything but clear. His 10th-standard results from Kendriya Vidyalaya, CME, Pune were respectable—<span className="text-amber-200/80 font-mono">an 8.0 CGPA</span>, a comfortable ripple in the academic pond.
              </p>

              <div className="my-8 pl-6 border-l-2 border-amber-500/50 italic text-amber-100/90">
                It wasn’t ambition he felt, not yet. It was a primal discomfort with stillness—a premonition that to wait was to slowly fade.
              </div>

              <p>
                That summer, he made a decision so small it barely registered: <span className="text-white">He wouldn’t ask for pocket money. He would earn it.</span> He had no grand plan, just that internal tremor guiding him toward the unfamiliar.
              </p>
              
              <br />
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 italic border-t border-white/5 pt-6">
                He didn't know it then, but this almost forgotten act would be the first thread in a tapestry far more complex than he could imagine. The game had just begun.
              </p>
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