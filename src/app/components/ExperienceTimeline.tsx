"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";

const workExperience = [
  {
    id: "w1",
    year: "Sept 2024 – Present",
    title: "Freelance Web Developer & Marketer",
    org: "Self-Employed",
    desc: "Building high-performance Next.js sites and running data-driven marketing campaigns.",
    details: [
      "Developed 5+ custom Next.js applications with 100/100 Lighthouse scores.",
      "Managed $2k+ monthly ad spend on Meta Ads with a 3.5x average ROAS.",
      "Implemented advanced SEO strategies, increasing organic traffic by 40% for clients.",
    ],
    current: true,
    color: "yellow",
  },
  {
    id: "w2",
    year: "Feb 2024 – Aug 2024",
    title: "Data Research Intern",
    org: "ForbesTech",
    desc: "Synthesized complex datasets into actionable business intelligence reports.",
    details: [
      "Automated data collection using Python scripts, saving 10 hours of manual work weekly.",
      "Created interactive dashboards in PowerBI for executive-level reporting.",
      "Cleaned and processed datasets with over 50,000+ entries for market analysis.",
    ],
    current: false,
    color: "yellow",
  },
  {
    id: "w3",
    year: "May 2023 – Sept 2023",
    title: "Project Manager Intern",
    org: "HumanCloud",
    desc: "Spearheaded workflow optimizations and cross-functional communication.",
    details: [
      "Assisted in managing Agile sprints for a team of 12 developers.",
      "Reduced project turnaround time by 15% through workflow automation.",
      "Bridged the gap between stakeholders and technical teams through clear documentation.",
    ],
    current: false,
    color: "yellow",
  },
];

const education = [
  {
    id: "e1",
    year: "2020 – 2023",
    title: "B.Tech Mechanical Engineering",
    org: "NCER College, Pune",
    desc: "Direct Second Year admission. Specialized in systems thinking and problem-solving.",
    details: [
      "Secured First Class with Distinction.",
      "Lead Researcher for a project on sustainable energy systems.",
      "Active member of the Robotics and Automation Club.",
    ],
    color: "blue",
  },
  {
    id: "e2",
    year: "2018 – 2020",
    title: "Diploma in Mechanical Engineering",
    org: "Polytechnic Institute",
    desc: "Achieved 74% aggregate with a focus on core engineering principles.",
    details: [
      "Completed hands-on training in CAD/CAM software.",
      "Specialized in Industrial Production and Manufacturing processes.",
    ],
    color: "blue",
  },
  {
    id: "e3",
    year: "2018",
    title: "Higher Secondary (Science)",
    org: "HSC Board",
    desc: "Focused on Physics, Chemistry, and Mathematics (PCM).",
    details: ["Focused on analytical logic and advanced mathematics."],
    color: "blue",
  },
];

const TimelineItem = ({ item, index, icon: Icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const isYellow = item.color === "yellow";
  const accentColor = isYellow ? "text-yellow-400" : "text-blue-400";
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-8 last:pb-0 group"
    >
      {/* Connector Line */}
      <div className="absolute left-37.5 top-2 bottom-0 w-1px bg-slate-800 group-last:bg-transparent" />

      {/* Icon Circle */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-xl flex items-center justify-center z-10 transition-all duration-300 border
        ${item.current 
          ? "bg-yellow-400 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]" 
          : "bg-slate-900 border-slate-700"}`}>
        <Icon size={16} className={item.current ? "text-slate-900" : accentColor} />
      </div>

      {/* Expandable Card */}
      <motion.div 
        layout
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer relative bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-2xl transition-all duration-500 hover:border-slate-600`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border 
            ${isYellow ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" : "text-blue-400 border-blue-400/20 bg-blue-400/5"}`}>
            {item.year}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-500"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <p className={`${accentColor} font-medium text-sm mb-2`}>{item.org}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Highlights:</p>
                {item.details.map((detail: string, i: number) => (
                  <div key={i} className="flex gap-3 items-start text-sm text-slate-300">
                    <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${accentColor}`} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function ExperienceTimeline() {
  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Section */}
          <motion.div layout>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                <Briefcase className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Work Experience</h2>
            </div>
            <div className="space-y-4">
              {workExperience.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} icon={Briefcase} />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div layout>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} icon={GraduationCap} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}