"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Play } from "lucide-react";

import Image from "next/image";

const titles = ["Full Stack Developer", "Flutter App Developer", "AWS Cloud Architect", "Software Engineer"];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center md:items-start"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-primary/20 bg-secondary/50 backdrop-blur-sm group">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-accent-yellow/20 overflow-hidden relative">
              <Image
                src="/darshan.jpeg"
                alt="Darshan AB"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin-slow pointer-events-none" />
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 mt-12"
          >
            {[
              { icon: <Github />, label: "GitHub", href: "https://github.com/Darshan124-get" },
              { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/darshan-ab-aa2631331?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: <Mail />, label: "Email", href: "mailto:abdaeshan890@gmail.com" },
              { icon: <Play />, label: "Play Store", href: "https://play.google.com/store/apps/dev?id=9092775155164182538" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h4 className="text-primary font-medium tracking-widest mb-4">HELLO, I'M</h4>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            DARSHAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">AB</span>
          </h1>

          <div className="h-12 mb-8 overflow-hidden">
            <motion.p
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="text-2xl md:text-3xl font-medium text-accent-yellow"
            >
              {titles[index]}
            </motion.p>
          </div>

          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
            "I build scalable applications, intelligent tools, and beautiful user experiences."
          </p>

          <button suppressHydrationWarning className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              View Work <Play fill="black" size={16} />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
