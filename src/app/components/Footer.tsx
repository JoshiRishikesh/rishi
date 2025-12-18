"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpCircle, ExternalLink, Heart, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredProjects = [
    { name: "Lupa Entertainment", url: "https://lupaentertainment.com", tag: "Entertainment" },
    { name: "Success Marathi", url: "https://successmarathi.com", tag: "Affiliate Marketing" },
    { name: "Emergent Institute", url: "https://emergentinstitute.in", tag: "Education" },
    { name: "Lapx", url: "https://lapx.co.in", tag: "Technology" },
    { name: "CIS Services", url: "https://cisservices.in", tag: "Professional Services" },
    { name: "Unnati Academy", url: "https://unnatienhancementacademy.com", tag: "LMS Portal" },
    { name: "Sunpower Solar", url: "https://sunpowersolar.com", tag: "Renewable Energy" },
  ];

  return (
    <footer className="relative bg-[#020617] pt-32 pb-16 px-10 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-1px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-125 h-125 bg-yellow-400/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="space-y-6">
            {/* Increased Width & Removed Over-Brightness */}
            <Image 
              src="/logo.avif" 
              alt="Rishikesh Joshi" 
              width={240} // Increased from 200
              height={80} 
              className="object-contain brightness-100 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
            />

            {/* Increased Font Size from text-sm to text-base/lg */}
            <p className="text-yellow-400 font-black tracking-[0.45em] uppercase text-base md:text-lg leading-snug border-b-2 border-yellow-400/20 pb-2 inline-block">
              Engineering Precision <span className="text-white/40 mx-2">•</span> Digital Innovation
            </p>
          </div>
                      <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-semibold">
              Hybrid Professional specializing in <span className="text-yellow-400"></span><span className="text-yellow-400">Next-JS and Full-Stack Development. </span> 
              Delivering high-performance digital solutions across Pune and beyond.
            </p>
            
            <div className="flex items-center gap-4 self-start px-6 py-3 bg-blue-500/5 border border-blue-500/20 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
              </span>
              <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Open for Work</span>
            </div>
          </div>

          {/* Column 2: Projects */}
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-bold text-base uppercase tracking-[0.2em] border-l-4 border-yellow-400 pl-5">
              Featured Work
            </h3>
            <ul className="flex flex-col gap-5">
              {featuredProjects.map((site) => (
                <li key={site.name}>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all text-base font-medium"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">{site.name}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-all text-yellow-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-bold text-base uppercase tracking-[0.2em] border-l-4 border-blue-400 pl-5">
              Contact Details
            </h3>
            <div className="flex flex-col gap-6">
              {/* WhatsApp/Call Section */}
              <a href="https://wa.me/918208108473" className="flex items-center gap-5 text-slate-400 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-green-400/50 transition-all">
                  <MessageSquare size={20} className="group-hover:text-green-400" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs text-slate-500 uppercase font-black tracking-tighter">WhatsApp & Call</span>
                   <span className="text-lg font-semibold">+91 8208108473</span>
                </div>
              </a>

              {/* LinkedIn Section */}
              <a href="https://www.linkedin.com/in/rishijoshi0811/" target="_blank" className="flex items-center gap-5 text-slate-400 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-400/50 transition-all">
                  <Linkedin size={20} className="group-hover:text-blue-400" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs text-slate-500 uppercase font-black tracking-tighter">Professional</span>
                   <span className="text-lg font-semibold">rishijoshi0811</span>
                </div>
              </a>

              {/* Email Section */}
              <a href="mailto:rishikeshjoshi.official@gmail.com" className="flex items-center gap-5 text-slate-400 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-yellow-400/50 transition-all">
                  <Mail size={20} className="group-hover:text-yellow-400" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs text-slate-500 uppercase font-black tracking-tighter">Email</span>
                   <span className="text-lg font-semibold truncate max-w-50">rishikeshjoshi.official</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="text-slate-400 text-sm tracking-wide font-medium">
              © {new Date().getFullYear()} <span className="text-white font-black uppercase tracking-[0.25em] ml-2"> Rishikesh Joshi </span>. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500 uppercase font-bold tracking-[0.3em]">
              Built with Next.js in Pune
            </div>
          </div>

          <motion.button 
            onClick={scrollToTop} 
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all text-sm font-black tracking-[0.3em] shadow-xl shadow-black/20"
          >
            BACK TO TOP
            <ArrowUpCircle size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}