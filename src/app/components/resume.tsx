"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle, Code2, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: <Code2 className="text-yellow-400" size={20} />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Marketing & Data",
    icon: <Globe className="text-blue-400" size={20} />,
    skills: ["Meta Ads", "Google Analytics", "SEO", "Data Research"],
  },
  {
    title: "Engineering",
    icon: <Cpu className="text-purple-400" size={20} />,
    skills: ["Mechanical Design", "Project Management", "Systems Thinking"],
  },
];

export default function ResumeSection() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
          
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-10 uppercase font-black text-6xl pointer-events-none select-none">
            RESUME
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to bring your <br />
                  <span className="text-yellow-400 italic">ideas to life?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  I combine mechanical engineering precision with modern full-stack development to build scalable, high-performance digital solutions.
                </p>
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/path-to-your-resume.pdf" // Update this link
                  download
                  className="group relative inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)]"
                >
                  <Download size={22} className="group-hover:animate-bounce" />
                  Download My CV
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="mt-4 text-slate-500 text-sm flex items-center gap-2">
                  <FileText size={14} /> PDF • 1.2 MB • Updated Dec 2024
                </p>
              </motion.div>
            </div>

            {/* Right Side: Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-colors ${
                    i === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-950 rounded-lg border border-white/10">
                      {cat.icon}
                    </div>
                    <h3 className="text-white font-bold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium text-slate-400 bg-slate-950/50 px-3 py-1.5 rounded-full border border-white/5 flex items-center gap-1.5"
                      >
                        <CheckCircle size={10} className="text-yellow-400/60" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}