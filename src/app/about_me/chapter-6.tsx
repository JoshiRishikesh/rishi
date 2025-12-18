"use client";

import { motion } from "framer-motion";
import { Crown, Rocket } from "lucide-react";

export default function ChapterSixSection() {
  return (
    <section id="chapter-6" className="relative w-full max-w-6xl mx-auto px-5 py-16 lg:py-32 overflow-hidden font-sans">
      
      {/* ===== HEADER GROUP ===== */}
      <header className="mb-12 lg:mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          
          {/* Chapter Marker - Gold/Amber theme for the Grand Finale */}
          <div className="flex items-center gap-3 text-amber-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em]">
            <Crown className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400/20 animate-pulse" /> Chapter VI
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-6 lg:mb-10">
            The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-500 to-orange-600">Unveiling</span>
          </h2>
        </motion.div>
      </header>

      {/* ===== STORY CARDS FLOW ===== */}
      <div className="space-y-8 lg:space-y-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row justify-start">
          
          <div className="group relative w-full p-8 sm:p-10 lg:p-14 bg-slate-900/40 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-slate-900/60 overflow-hidden">
            
            {/* THE ANIMATED BORDER (Gold/Amber Gradient) */}
            <div className="absolute inset-0 -z-10 p-0.5 rounded-3xl sm:rounded-[2.5rem] bg-linear-to-r from-amber-500/20 via-yellow-200/40 to-orange-500/20 group-hover:bg-linear-to-r group-hover:from-yellow-400 group-hover:via-amber-200 group-hover:to-orange-500 group-hover:animate-gradient-x" 
                 style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude' }} 
            />

            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_70%)]" />

            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-[1.9] text-slate-300 font-normal transition-colors duration-500 group-hover:text-slate-100">
              <p>
                When the world reopened, Rishikesh returned not as a casualty, but as a <span className="text-white font-bold">stronger force</span>. In 2023, he quietly completed his B.Tech in Mechanical Engineering. No grand celebrations, just another quiet closure, another chapter mastered.
              </p>
              
              <br />

              <p>
                Roles at HumanCloud and ForbesTech followed. He navigated agile sprints and complex datasets, but something was missing. He wasn't meant to be an employee within a system; <span className="text-amber-300 underline underline-offset-8">he was meant to create systems.</span>
              </p>

              {/* The "Empire" Grid */}
              <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 transition-colors">
                  <p className="text-xs font-mono text-amber-500 mb-2 uppercase tracking-tighter">Full-Stack Powerhouse</p>
                  <p className="text-white font-medium text-lg">SuccessMarathi & Lupa Ent.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 transition-colors">
                  <p className="text-xs font-mono text-amber-500 mb-2 uppercase tracking-tighter">Performance & Growth</p>
                  <p className="text-white font-medium text-lg">3.5x ROAS Meta Ads</p>
                </div>
              </div>

              <p>
                With no safety net, he adapted. He became a freelancer—the architect of digital ecosystems. From <span className="text-white">Lapx</span> to <span className="text-white">Unnati Enhancement Academy</span>, he integrated SEO, Google Analytics, and full-stack invoicing.
              </p>
              
              <br />
              
              <p>
                The quiet discomfort from 2016 had finally found its language. He wasn't waiting for permission. He was <span className="relative inline-block text-white group-hover:text-amber-300 transition-colors font-semibold">building an empire, one line of code at a time<span className="absolute bottom-0 left-0 w-full h-1px bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></span>.
              </p>
              
              <br />
              
              <div className="flex items-center gap-4 text-sm sm:text-base lg:text-lg text-slate-400 italic border-t border-white/5 pt-8">
                <Rocket className="w-5 h-5 text-amber-500" />
                <span>The boy with the QR code had become the architect of codebases.</span>
              </div>
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