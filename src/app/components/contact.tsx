"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin, MapPin, ExternalLink, Phone, ArrowUpRight } from "lucide-react";

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", 
  "Meta Ads", "SEO", "Google Analytics", "Google My Business", "Mechanical Design"
];

const contactCards = [
  {
    name: "Email",
    value: "rishikeshjoshi.official@gmail.com",
    href: "mailto:rishikeshjoshi.official@gmail.com",
    icon: <Mail className="text-yellow-400" />,
    color: "hover:border-yellow-400/50"
  },
  {
    name: "WhatsApp",
    value: "+91 8208108473",
    href: "https://wa.me/918208108473",
    icon: <MessageSquare className="text-green-400" />,
    color: "hover:border-green-400/50"
  },
  {
    name: "LinkedIn",
    value: "rishijoshi0811",
    href: "https://www.linkedin.com/in/rishijoshi0811/",
    icon: <Linkedin className="text-blue-400" />,
    color: "hover:border-blue-400/50"
  }
];

export default function FinalContactSection() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* 1. Tech Stack Marquee */}
      <div className="mb-32">
        <div className="flex flex-col items-center mb-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 text-center">
            Powering projects with
          </span>
          <div className="h-1px w-20 bg-linear-to-r from-transparent via-slate-700 to-transparent" />
        </div>
        
        <div className="flex overflow-hidden group select-none">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 items-center px-6"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black text-slate-100 hover:text-yellow-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Let’s start a <br />
            <span className="text-yellow-400 italic">conversation.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-16 max-w-xl mx-auto font-light leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* 2. Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target="_blank"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 bg-white/5 border border-white/10 rounded-4xl flex flex-col items-center gap-4 transition-all duration-300 ${card.color}`}
            >
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                {card.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{card.name}</p>
                <p className="text-white font-medium text-sm break-all">{card.value}</p>
              </div>
              <ArrowUpRight size={16} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>


      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-yellow-400/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}