"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

export default function ChapterFourSection() {
  return (
    <section id="chapter-4" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker - Rose/Crimson theme for Ch 4 */}
          <div className="flex items-center gap-3 text-rose-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <Hammer className="w-3 h-3 sm:w-4 sm:h-4 fill-rose-400/20 animate-pulse" /> Chapter IV
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The Unseen <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-red-400 to-orange-500">Architect's Plan</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER (Rose/Red Gradient) */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-rose-500/20 via-red-200/40 to-orange-500/20 group-hover:bg-linear-to-r group-hover:from-rose-500 group-hover:via-red-300 group-hover:to-orange-500 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                2018 arrived with a quiet blow: <span className="text-rose-400 font-bold border-b border-rose-500/30">49.85% in his 12th Science exams.</span> Society might have seen a setback, but Rishikesh saw a pivot point. He didn't knock harder on the same door; he simply found another building.
              </p>
              
              <br />

              <p>
                He enrolled in Mechanical Engineering, becoming a <span className="text-white">BGV agent</span> by day and a student by night. At nineteen, he went bolder—launching his own small venture, hiring two people, and juggling operations. He wasn’t dreaming; he was <span className="italic text-rose-200">executing</span>.
              </p>

              {/* The Turning Point Block */}
              <div className="my-10 p-8 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500" />
                <p className="text-white font-semibold text-2xl lg:text-3xl tracking-tight mb-2">Then, the world changed.</p>
                <p className="text-slate-400 text-base lg:text-lg">The year was 2020. A shadow fell across the globe—the COVID-19 pandemic.</p>
              </div>

              <p>
                His nascent startup crumbled. Movement stopped. Income froze. The very foundation he had painstakingly built seemed to dissolve. But this <span className="text-white">forced isolation</span>, this sudden void, didn't break him.
              </p>
              
              <br />
              
              <p>
                It was as if an <span className="relative inline-block text-white group-hover:text-rose-300 transition-colors">unseen hand was guiding him<span className="absolute bottom-0 left-0 w-full h-1px bg-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></span>, ensuring he collected a diverse array of skills, weaving into a larger, coherent design.
              </p>
              
              <br />
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 italic pt-6">
                Instead of a collapse, the pandemic pushed him into a different kind of laboratory. A laboratory of the mind.
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