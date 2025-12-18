"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PlayCircle, BarChart, Globe, Layout, Smartphone, FileText } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web Dev", "Marketing", "SEO & GMB", "Video Editing"];

const projects = [
  // WEB DEVELOPMENT
  { id: 1, title: "Lupa Entertainment", category: "Web Dev", icon: Globe, link: "https://lupaentertainment.com", image: "/projects/lupa.avif" },
  { id: 2, title: "CIS Services", category: "Web Dev", icon: Globe, link: "https://cisservices.in", image: "/projects/cis.avif" },
  { id: 3, title: "Emergent Institute", category: "Web Dev", icon: Globe, link: "https://emergentinstitute.in", image: "/projects/emergent.avif" },
  { id: 4, title: "Unnati Academy", category: "Web Dev", icon: Globe, link: "https://unnatienhancementacademy.com", image: "/projects/unnati.avif" },
  { id: 5, title: "Sunpower Solar", category: "Web Dev", icon: Globe, link: "https://sunpowersolar.com", image: "/projects/solar.avif" },
  { id: 6, title: "Lapx.co.in", category: "Web Dev", icon: Globe, link: "https://lapx.co.in", image: "/projects/lapx_web.avif" },
  { id: 7, title: "Invoicing App", category: "Web Dev", icon: FileText, description: "Full Stack Invoicing Solution", image: "/projects/invoice.avif" },
  { id: 8, title: "Success Marathi", category: "Web Dev", icon: BarChart, description: "Affiliate Marketing Platform", image: "/projects/success.avif" },
  // SEO & GMB
  { id: 9, title: "Subhash Painting", category: "SEO & GMB", icon: Layout, description: "Business Profile Creation", image: "/projects/subhash.avif" },
  { id: 10, title: "Shri Renuka Steels", category: "SEO & GMB", icon: Layout, description: "GMB Optimization", image: "/projects/renuka.avif" },
  { id: 11, title: "Lapx GMB", category: "SEO & GMB", icon: BarChart, description: "Local SEO Management", image: "/projects/lapx_gmb.avif" },

  // MARKETING / SOCIAL MEDIA
  { id: 12, title: "Online Go", category: "Marketing", icon: Smartphone, description: "Social Media Management", image: "/projects/onlinego.avif" },
  { id: 13, title: "Emergent Social", category: "Marketing", icon: Smartphone, description: "Social Media Strategy", image: "/projects/emergent_social.avif" },

  // VIDEO EDITING
  { id: 14, title: "Emergent Reels", category: "Video Editing", icon: PlayCircle, description: "Reels & Video Production", image: "/projects/reels.avif" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">My Projects</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Selected <span className="text-yellow-400 not-italic">Works.</span></h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeTab === cat 
                  ? "bg-yellow-400 text-black border-yellow-400" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/container">
          {/* Scrollable Area */}
          <motion.div 
            layout
            className="flex gap-5 overflow-x-auto pb-10 pt-4 scrollbar-hide snap-x"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative flex-none w-65 sm:w-75 aspect-square rounded-4xl overflow-hidden bg-[#0b1220] border border-white/5 snap-start group"
                >
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
                  
                  {/* Floating Content */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <project.icon size={14} className="text-yellow-400" />
                        <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                    
                    {/* Expandable Section */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                        {project.description || `High-impact project in ${project.category.toLowerCase()}.`}
                      </p>
                      
                      {project.link ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-tighter hover:text-yellow-400 transition-colors"
                        >
                          Visit Website <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-gray-500 text-[11px] font-bold uppercase">Case Study Coming Soon</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}