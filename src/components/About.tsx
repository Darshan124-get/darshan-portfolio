"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutThreeVisual from "./AboutThreeVisual";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold tracking-widest mb-6">
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            I craft digital products with <span className="text-primary">Precision</span> & <span className="text-accent-yellow">Purpose</span>.
          </h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              I am a developer passionate about building modern web applications, mobile apps, and intelligent systems. 
              My journey in tech is driven by an insatiable curiosity for how things work and a desire to build solutions that 
              make a real impact.
            </p>
            <p>
              I enjoy solving real-world problems through technology and creating scalable solutions using modern frameworks 
              and cloud technologies. Whether it's a complex backend architecture or a pixel-perfect frontend animation, 
              I strive for excellence in every line of code.
            </p>
            <p>
              With deep expertise in <span className="text-white font-bold tracking-wide">Flutter Application Development</span> and architecting scalable <span className="text-white font-bold tracking-wide">AWS Cloud Infrastructure</span>, 
              I bring a robust and holistic approach to modern product development.
            </p>
          </div>
        </motion.div>

        {/* Right Side: 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <AboutThreeVisual />
          
          {/* Floating UI Card Overlay */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 p-6 glass rounded-2xl border border-white/10 max-w-[200px]"
          >
            <p className="text-sm font-bold text-white mb-2">Problem Solver</p>
            <p className="text-xs text-white/50">Turning complex ideas into simple interfaces.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
