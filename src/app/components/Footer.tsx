"use client";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-b from-[#020617]/95 to-[#020617] backdrop-blur-xl text-white border-t border-white/10 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Image src="/logo.avif" alt="Rishikesh Joshi" width={180} height={60} className="object-contain opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Mechanical Engineer by degree, Full Stack Developer by passion. Building high-performance web applications and digital strategies from Pune, India.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md shadow-black/20">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md shadow-black/20">
                <Github size={18} />
              </a>
              <a href="mailto:your-email@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md shadow-black/20">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-[0.2em]">Featured Work</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Lupa Entertainment", url: "https://lupaentertainment.com" },
                { name: "Success Marathi", url: "https://successmarathi.com" },
                { name: "Emergent Institute", url: "https://emergentinstitute.in" },
                { name: "Lapx", url: "https://lapx.co.in" },
              ].map((site) => (
                <li key={site.name}>
                  <a href={site.url} target="_blank" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    {site.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="text-left md:text-right">
              <h3 className="text-white font-semibold text-xl">Have a project in mind?</h3>
              <p className="text-gray-400 mt-2 text-sm">Let’s talk about building something amazing.</p>
            </div>
            <motion.a href="mailto:your-email@gmail.com" whileHover={{ scale: 1.05 }} className="bg-yellow-400/90 text-black px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20">
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-gray-300">Rishikesh Joshi</span>. All rights reserved.
          </div>

          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group text-sm font-medium">
            BACK TO TOP
            <ArrowUpCircle size={18} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
