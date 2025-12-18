"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function ChapterTwoSection() {
  return (
    <section id="chapter-2" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker */}
          <div className="flex items-center gap-3 text-cyan-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <ShieldAlert className="w-3 h-3 sm:w-4 sm:h-4 fill-cyan-400/20 animate-pulse" /> Chapter II
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The Whispers <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-teal-400 to-emerald-500">of Resistance</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-cyan-500/20 via-emerald-200/40 to-cyan-500/20 group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:via-emerald-300 group-hover:to-teal-500 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                Armed with little more than a nascent confidence and a handful of <span className="text-white font-medium italic">Amazon Pay QR codes</span>, Rishikesh stepped into the bustling, indifferent marketplace of Pune. He was a pioneer, a foot soldier in a digital revolution that shopkeepers hadn't yet embraced.
              </p>
              
              <div className="my-8 pl-6 border-l-2 border-cyan-500/50 italic text-cyan-100/90">
                "Sir, Amazon Pay ka QR lagwa lo," he'd intone, the words feeling heavier than his young shoulders.
              </div>

              <p>
                The reactions varied. Some scoffed. Some ignored him, their eyes glazing over. Others met his earnest gaze with a challenge, a thinly veiled hostility. <span className="text-rose-300/80">"Amazon Indian nahi hai. Kyun rakhein?"</span>
              </p>
              
              <br />
              
              <p>
                This wasn't a sales lesson; it was an <span className="text-white font-semibold">initiation</span>. He learned quickly that "no" wasn't a conclusion, but a starting point. He saw how fear disguised itself as patriotism, how ingrained comfort fought against innovation, and how persuasion wasn’t about the loudest voice, but the most patient ear.
              </p>
              
              <br />
              
              <p>
                He wasn't selling a payment solution; he was <span className="relative inline-block text-white group-hover:text-cyan-300 transition-colors">deciphering human nature<span className="absolute bottom-0 left-0 w-full h-1px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></span>, learning the subtle art of navigating resistance. Each rejection wasn't a failure, but a data point. 
              </p>
              
              <br />
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 italic">
                For two intense months, he walked, talked, and absorbed. He was unknowingly gathering intelligence, honing a skill set that would prove far more valuable than any sales commission. In the background, a silent, unseen architect was laying the foundation for something much larger than QR codes.
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