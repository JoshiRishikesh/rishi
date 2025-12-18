"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#work" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Resume", href: "/#resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Detect active section safely
  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const id = link.href.split("#")[1];
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-linear-to-b from-[#020617]/90 to-[#020617]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-17">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="shrink-0"
        >
          <Link href="/">
            <Image
              src="/logo.avif"
              alt="Rishikesh Joshi"
              width={120}
              height={40}
              priority
              className="object-contain cursor-pointer opacity-90 hover:opacity-100 transition"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <nav className="flex items-center gap-9">
            {navLinks.map((link, i) => {
              const linkId = link.href.split("#")[1];
              const isActive = activeSection === linkId;

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`group relative text-[15px] font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }
                    `}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                        ${
                          isActive
                            ? "w-full bg-yellow-400"
                            : "w-0 bg-yellow-400/90 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
          >
            <Link
              href="/#contact"
              className="bg-yellow-400/90 text-black px-6 py-2 rounded-full font-semibold text-xs tracking-wide hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20"
            >
              CONTACT ME
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-8 flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => {
              const linkId = link.href.split("#")[1];
              const isActive = activeSection === linkId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold transition
                    ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-yellow-400 text-black px-10 py-2.5 rounded-full font-bold text-sm"
            >
              CONTACT ME
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
