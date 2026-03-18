"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-xl font-black text-white tracking-widest transition-all duration-500 group-hover:scale-110 group-hover:glow-text">
              A<span className="text-primary">B</span>
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-black tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">DARSHAN</p>
            <p className="text-[10px] font-bold tracking-[0.5em] text-primary/60 group-hover:text-primary transition-colors">PORTFOLIO</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a suppressHydrationWarning href="/darshan ab-1(1).PDF" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-white/10 hover:border-primary/50 text-sm font-medium transition-all duration-300 hover:glow-text inline-block">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button suppressHydrationWarning className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 md:hidden py-8 px-6 flex flex-col gap-6"
          >
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-white/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/darshan ab-1(1).PDF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl font-semibold text-primary"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
