"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, Zap, Award, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Import Link for navigation

const stats = [
  { label: "Years Experience", value: "3+", icon: Zap },
  { label: "Projects Delivered", value: "25+", icon: Target },
  { label: "Client Satisfaction", value: "100%", icon: Award },
];

export default function About() {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual/Experience Cards */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-2 h-64 rounded-3xl bg-linear-to-br from-yellow-400/20 to-transparent border border-white/5 flex items-center justify-center p-8 backdrop-blur-3xl"
              >
                 <div className="text-center">
                    <p className="text-5xl font-black text-white mb-2">3+</p>
                    <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold">Years of Innovation</p>
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Target className="text-blue-400 mb-3" size={28} />
                <h4 className="text-white font-bold text-lg">Growth</h4>
                <p className="text-gray-400 text-sm">Focusing on ROI-driven development.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <User className="text-purple-400 mb-3" size={28} />
                <h4 className="text-white font-bold text-lg">User-Centric</h4>
                <p className="text-gray-400 text-sm">Designing for the human experience.</p>
              </motion.div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full" />
          </div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div className="space-y-2">
              <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-px bg-yellow-400"></span> About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Turning Complex Logic <br />
                Into <span className="text-yellow-400">Fluid Experiences.</span>
              </h3>
            </div>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Based in India, I am a developer and digital strategist who thrives at the intersection of 
                <span className="text-white font-medium"> clean code </span> and 
                <span className="text-white font-medium"> business growth</span>.
              </p>

              <p>
                Whether I’m scaling a brand through Meta Ads or building full-stack applications, 
                my focus remains on performance and measurable outcomes.
              </p>
            </div>

            {/* NEW BUTTON HERE */}
            <div className="pt-2">
              <Link href="/about">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-2 text-white font-semibold hover:text-yellow-400 transition-colors"
                >
                  Know More About Me 
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-white font-bold text-2xl">{stat.value}</span>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}