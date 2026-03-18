"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    title: "KrishiMitra",
    category: "App",
    description: "An AI-powered agricultural mobile app to assist farmers with plant disease identification and fertilizer recommendations.",
    tech: ["Flutter", "Node.js", "MongoDB", "RESTful APIs", "AI"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Lyceum Clone",
    category: "Web",
    description: "A comprehensive Academic Management System for managing Attendance, Grades, and Student Profiles.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Internal Order Tracking System",
    category: "Web",
    description: "A fully digitalized internal process for SGB Agro Limited. Handled billing generation, packer notifications, shipping updates with tracking IDs, and WhatsApp messaging integration, all managed from an admin dashboard.",
    tech: ["HTML/CSS", "JavaScript", "Python", "Flask", "Supabase", "RESTful API", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Lead Management System",
    category: "Web",
    description: "A WhatsApp-integrated lead capture and management dashboard for SGB Agro Limited. Tracks customer advertisement interactions and provides role-based access for sales teams to track lead progress.",
    tech: ["HTML/CSS/JS", "Bootstrap", "Python", "Flask", "Supabase", "REST API"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Quick ID",
    category: "App",
    description: "An ID card photo capture application for colleges. Eliminates manual renaming by automatically saving photos under student names and offers a bulk zip download feature.",
    tech: ["Flutter"],
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Pharmacy Billing System",
    category: "Web",
    description: "A comprehensive solution for pharmaceutical retail management with automated billing, inventory tracking, and SMS/Email notifications.",
    tech: ["Python", "Flask", "Supabase", "RazorPay", "AWS S3", "Docker"],
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "CRM Management System",
    category: "Web",
    description: "Enterprise-grade CRM for managing customer relationships, sales pipelines, and team performance.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Dial Desk",
    category: "App",
    description: "A dual-platform automated calling system for colleges. Features a web admin panel for assigning tasks and a mobile app for teachers to auto-call absent students, track conversations, and log reviews.",
    tech: ["Flutter", "HTML/CSS/JS", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Learn Dart",
    category: "App",
    description: "A comprehensive learning app available on the Play Store, designed for beginners to easily understand and learn Dart programming. Integrated with AdMob.",
    tech: ["Flutter", "AdMob"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Learn Digital Marketing",
    category: "App",
    description: "A digital marketing learning platform app covering various marketing strategies, content creation, and real-world approaches. Integrated with AdMob.",
    tech: ["Flutter", "AdMob"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Event Management Software",
    category: "Web",
    description: "A comprehensive web admin and mobile user application for managing events end-to-end. Helps hall owners create profiles, manage availability, and handle customer bookings.",
    tech: ["HTML/CSS/JS", "Python", "MySQL", "Flutter", "Firebase"],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  },
  {
    title: "Bulk Email Automation System",
    category: "Web",
    description: "A mass email sending platform developed for educational institutions to automatically dispatch certificates and announcements using custom templates.",
    tech: ["Python", "MySQL", "SMTP", "JS"],
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000&auto=format&fit=crop",
    live: "#",
    github: "#"
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Explore All <span className="text-primary italic font-serif">Projects</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg">
            A comprehensive list of projects I have built, ranging from web applications and scalable backends to intelligent mobile apps.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-16 border-b border-white/10 pb-6 overflow-x-auto no-scrollbar">
          {["All", "Web", "App"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap ${
                filter === category
                  ? "bg-primary text-black"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group glass rounded-[2rem] border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-primary/80 px-2 py-1 bg-primary/5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                  <div className="flex gap-4 mt-auto">
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
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-white/40">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
