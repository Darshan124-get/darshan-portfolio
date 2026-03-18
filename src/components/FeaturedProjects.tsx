"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import Link from "next/link";

const projects = [
  {
    title: "Pharmacy Billing System",
    description: "A comprehensive solution for pharmaceutical retail management with automated billing and inventory tracking.",
    tech: ["Python", "Flask", "Supabase", "RazorPay"],
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop", // Placeholder
    live: "#",
    github: "#"
  },
  {
    title: "CRM Management System",
    description: "Enterprise-grade CRM for managing customer relationships, sales pipelines, and team performance.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", // Placeholder
    live: "#",
    github: "#"
  },
  {
    title: "Dial Desk",
    description: "A dual-platform automated calling system for colleges. Features a web admin panel for assigning tasks and a mobile app for teachers to auto-call absent students, track conversations, and log reviews.",
    tech: ["Flutter", "HTML/CSS/JS", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured <span className="text-primary font-serif italic text-5xl md:text-7xl">Works</span></h2>
             <p className="text-white/40 mt-4 max-w-sm">Selected projects that demonstrate technical depth and design excellence.</p>
          </div>
          <Link href="/projects" className="text-primary font-bold hover:underline underline-offset-8">Explore All Projects →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-[2rem] border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-primary/80 px-2 py-1 bg-primary/5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.live} className="flex items-center gap-2 text-sm font-bold border-b border-white/10 hover:border-primary pb-1 transition-all">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold border-b border-white/10 hover:border-primary pb-1 transition-all">
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
