"use client";

import React from "react";

// Core Technologies (The Build)
const skillSet1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"];

// Growth & Marketing (The Results)
const skillSet2 = ["Meta Ads", "Google Ads", "GMB Optimization", "Facebook Pixel", "Lead Generation", "Ad Copywriting"];

// Optimization & Analytics (The Logic)
const skillSet3 = ["Google Analytics", "Search Console", "Technical SEO", "Meta Tags", "PageSpeed Insights", "UI/UX Strategy"];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">
        
        {/* Left Side: Heading (1/3) */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">
              The Toolkit
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
              Logic Meets <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-100 to-yellow-400">
                Creativity.
              </span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            I leverage a modern stack to build solutions that are not just beautiful, 
            but structurally sound and conversion-optimized.
          </p>
          
          <div className="flex items-center gap-4 text-white/50 text-sm italic">
            <span className="w-10 h-px bg-white/20"></span>
            Hover to focus
          </div>
        </div>

        {/* Right Side: Moving Marquees (2/3) */}
        <div className="lg:col-span-2 relative">
          {/* Gradient Masks to hide the edges smoothly */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#020617] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#020617] to-transparent z-10" />

          <div className="flex flex-col gap-8 -rotate-1">
            
            {/* Row 1 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
                {[...skillSet1, ...skillSet1].map((skill, i) => (
                  <SkillTag key={i} name={skill} />
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]">
                {[...skillSet2, ...skillSet2].map((skill, i) => (
                  <SkillTag key={i} name={skill} />
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex overflow-hidden group">
              <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
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
    <div className="px-8 py-4 rounded-2xl bg-white/3 border border-white/10 text-white font-semibold text-lg hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300 cursor-default backdrop-blur-sm shadow-xl">
      {name}
    </div>
  );
}