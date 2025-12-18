"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BarChart3, Search, Megaphone, Smartphone, Gauge, Plus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building lightning-fast, scalable web applications using Next.js, React, and modern backend solutions. I focus on clean architecture and SEO-ready code.",
    icon: Code2,
    color: "#facc15",
  },
  {
    id: 2,
    title: "Meta Ads Strategy",
    description: "Data-backed ad campaigns that lower customer acquisition costs. I manage everything from pixel setup to creative A/B testing for maximum ROI.",
    icon: Megaphone,
    color: "#60a5fa",
  },
  {
    id: 3,
    title: "SEO & Visibility",
    description: "Optimizing your digital footprint through technical SEO and GMB. I ensure your business ranks where your customers are actually searching.",
    icon: Search,
    color: "#4ade80",
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "Turning raw data into actionable insights. I set up advanced tracking to measure exactly how users interact with your brand.",
    icon: BarChart3,
    color: "#f87171",
  },
  {
    id: 5,
    title: "UI/UX Strategy",
    description: "Designing logical user flows that reduce friction. I bridge the gap between aesthetic design and high-conversion functionality.",
    icon: Smartphone,
    color: "#c084fc",
  },
  {
    id: 6,
    title: "Speed Optimization",
    description: "Core Web Vitals matter. I optimize assets and server responses to ensure your site scores 90+ on PageSpeed Insights.",
    icon: Gauge,
    color: "#2dd4bf",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Solutions That <span className="text-yellow-400">Scale.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 cursor-pointer transition-colors hover:bg-white/8"
              style={{ minHeight: "220px" }}
            >
              {/* Layout prop ensures smooth transition of height */}
              <motion.div layout className="relative z-10 flex flex-col h-full">
                
                {/* Icon & Title Row */}
                <motion.div layout="position" className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                </motion.div>

                {/* Animated Description */}
                <AnimatePresence>
                  {hoveredIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="text-gray-400 leading-relaxed pb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                        View Projects <Plus size={14} />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p 
                      layout 
                      className="text-gray-500 text-sm line-clamp-2"
                    >
                      Hover to explore my strategy and approach for {service.title.toLowerCase()}.
                    </motion.p>
                  )
                }
                </AnimatePresence>
              </motion.div>

              {/* Subtle background glow on hover */}
              <motion.div 
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-white/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}