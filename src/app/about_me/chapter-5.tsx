"use client";

import { motion } from "framer-motion";
import { Code2, Music } from "lucide-react";

export default function ChapterFiveSection() {
  return (
    <section id="chapter-5" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker - Sapphire/Blue theme for Ch 5 */}
          <div className="flex items-center gap-3 text-blue-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 fill-blue-400/20 animate-pulse" /> Chapter V
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            Echoes <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-blue-400 to-indigo-500">in the Code</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER (Blue/Indigo Gradient) */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-blue-500/20 via-cyan-200/40 to-indigo-500/20 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:via-cyan-300 group-hover:to-indigo-500 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                The world outside was a cacophony of fear, but inside, Rishikesh found a new silence—the <span className="text-blue-300 font-mono">elegant, precise silence of code.</span> He joined KodSoft as an intern, immersing himself in HTML, CSS, and PHP. 
              </p>
              
              <br />

              <p>
                Lines of code replaced crowded classrooms. He was building, not physical structures this time, but digital ones, forging new pathways in the <span className="text-white">invisible architecture of the internet.</span>
              </p>

              {/* Musical Refuge Block */}
              <div className="my-10 p-8 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                  <Music size={28} className="animate-bounce" />
                </div>
                <div>
                  <p className="text-white font-medium text-xl mb-2">The Inner Sanctuary</p>
                  <p className="text-slate-400 text-base lg:text-lg italic leading-relaxed">
                    He learned to play the flute. Music became his refuge, the only realm untouched by gnawing uncertainty. The disciplined logic of code found its counterpoint in the fluid, emotional landscape of melody.
                  </p>
                </div>
              </div>

              <p>
                This seemingly disparate pursuit of music, amidst the collapse of his business, felt like a <span className="text-white font-semibold">deliberate act of self-preservation.</span> He was learning to build the future, but also, critically, to protect his inner sanctuary.
              </p>
              
              <br />
              
              <p>
                It was a secret weapon in the arsenal of a man who <span className="relative inline-block text-white group-hover:text-blue-300 transition-colors">refused to be broken<span className="absolute bottom-0 left-0 w-full h-1px bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></span>. 
              </p>
              
              <br />
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 italic border-t border-white/5 pt-6">
                The multi-faceted self was beginning to integrate. The engineer, the salesman, the teacher, and now—the architect of both code and soul.
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