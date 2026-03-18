"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiFlutter, SiNodedotjs, 
  SiMongodb, SiFirebase, SiThreedotjs, SiTailwindcss,
  SiPython, SiDocker, SiFlask
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techs = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <FaAws /> },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-2">Technology Stack</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>
        <p className="text-white/40 text-sm hidden md:block">Powering modern digital experiences</p>
      </div>

      <div className="relative flex marquee-container overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-12 py-4 whitespace-nowrap"
        >
          {[...techs, ...techs].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-120 group-hover:text-primary">
                {tech.icon}
              </span>
              <span className="text-xl font-medium tracking-tight group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
