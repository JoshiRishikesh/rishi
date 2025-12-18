"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function ChapterThreeSection() {
  return (
    <section id="chapter-3" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker - Violet/Purple theme for Ch 3 */}
          <div className="flex items-center gap-3 text-violet-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 fill-violet-400/20 animate-pulse" /> Chapter III
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The Accidental <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-200 via-purple-400 to-indigo-500">Stage</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER (Violet/Indigo Gradient) */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-violet-500/20 via-indigo-200/40 to-purple-500/20 group-hover:bg-linear-to-r group-hover:from-violet-500 group-hover:via-purple-300 group-hover:to-indigo-500 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                The year was closing, late 2016. Rishikesh found himself under the <span className="text-white">unforgiving December sun</span>, promoting Shopongo. The crowds were indifferent, the task temporary, but the education, as always, was permanent. He observed the relentless battle for attention and humanity’s innate resistance to change.
              </p>
              
              <br />

              <p>
                Then, <span className="text-violet-300 font-medium">Avadhoot Academy</span> entered his life. It was a familiar trajectory—sales, then marketing—until the owner noticed how Rishikesh didn't just explain concepts; he <span className="italic text-white">unlocked</span> them.
              </p>

              {/* Pivotal Dialogue */}
              <div className="my-8 pl-6 border-l-2 border-violet-500/50 italic text-violet-100/90 bg-violet-500/5 py-4 rounded-r-lg">
                "Tu maths padha ke dekh," came the casual suggestion.
              </div>

              <p>
                Rishikesh hesitated. Teach? Him? But the challenge was irresistible. When the first batch of 8th graders responded, when their <span className="text-amber-200">eyes lit up with understanding</span>, a new kind of confidence took root. He wasn't just earning money; he was wielding authority over knowledge.
              </p>
              
              <br />
              
              <p>
                Each equation solved was a step deeper into a truth he was only beginning to grasp: <span className="relative inline-block text-white group-hover:text-violet-300 transition-colors">his true power lay in mastering and transferring understanding<span className="absolute bottom-0 left-0 w-full h-1px bg-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></span>.
              </p>
              
              <br />
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 italic border-t border-white/5 pt-6">
                This wasn't just a job; it was his first taste of true influence. The stakes were slowly, almost imperceptibly, rising.
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