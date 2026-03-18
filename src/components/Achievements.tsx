"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Briefcase, GraduationCap, AppWindow } from "lucide-react";

const achievements = [
  {
    title: "Internships Completed",
    value: "2+",
    icon: <Briefcase className="text-primary" />,
    description: "Industry experience at Drexel University & Python Full Stack roles."
  },
  {
    title: "Projects Built",
    value: "15+",
    icon: <Trophy className="text-accent-yellow" />,
    description: "Full-scale applications across Web, Mobile & AI domains."
  },
  {
    title: "Certifications",
    value: "10+",
    icon: <GraduationCap className="text-accent-green" />,
    description: "Verified expertise in modern tech stacks and cloud platforms."
  },
  {
    title: "Mobile Apps Live",
    value: "3+",
    icon: <AppWindow className="text-white" />,
    description: "Published and maintained on Google Play Store."
  },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className="p-8 glass rounded-3xl border border-white/5 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-4xl font-bold mb-2 group-hover:text-primary transition-colors">{item.value}</h4>
              <p className="font-bold text-white/80 mb-2">{item.title}</p>
              <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
