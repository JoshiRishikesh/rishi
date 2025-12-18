"use client";

import React from "react";

const skillSet1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"];
const skillSet2 = ["Meta Ads", "Google Ads", "GMB Optimization", "Facebook Pixel", "Lead Generation", "Ad Copywriting"];
const skillSet3 = ["Google Analytics", "Search Console", "Technical SEO", "Meta Tags", "PageSpeed Insights", "UI/UX Strategy"];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Heading - Forced to Top on Mobile */}
        <div className="w-full lg:col-span-1 space-y-6 text-center lg:text-left relative z-20">
          <div className="inline-block">
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              The Toolkit
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
              Logic Meets <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-100 to-yellow-400">
                Creativity.
              </span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            I leverage a modern stack to build solutions that are not just beautiful, 
            but structurally sound and conversion-optimized.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 text-white/50 text-sm italic">
            <span className="w-10 h-px bg-white/20 hidden sm:block"></span>
            <span>Tap to pause</span>
          </div>
        </div>

        {/* Right Side: Moving Marquees */}
        <div className="w-full lg:col-span-2 relative mt-4 lg:mt-0 z-10">
          {/* Gradient Masks - Hidden on very small screens to prevent overlap */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-linear-to-l from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />

          <div className="flex flex-col gap-5 md:gap-8 -rotate-1 py-4">
            
            {/* Row 1 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-3 md:gap-4 animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
                {[...skillSet1, ...skillSet1].map((skill, i) => (
                  <SkillTag key={i} name={skill} />
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-3 md:gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
                {[...skillSet2, ...skillSet2].map((skill, i) => (
                  <SkillTag key={i} name={skill} />
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-3 md:gap-4 animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
                {[...skillSet3, ...skillSet3].map((skill, i) => (
                  <SkillTag key={i} name={skill} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <div className="px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-sm md:text-lg whitespace-nowrap backdrop-blur-sm shadow-xl">
      {name}
    </div>
  );
}