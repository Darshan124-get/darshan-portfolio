"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Suite",
    description: "End-to-end e-commerce platform with real-time analytics and inventory management.",
    color: "#0a0a0a",
    tech: ["RazorPay", "AWS S3", "RDBMS", "Flutter", "React"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Dial Desk",
    description: "A dual-platform automated calling system for colleges with a web admin panel and a robust teacher auto-call app.",
    color: "#111111",
    tech: ["Flutter", "HTML/CSS/JS", "Node.js", "Express","Docker", "MongoDB"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Pharmacy Billing System",
    description: "Comprehensive pharmacy management system with customer registry, inventory tracking, expiry alerts, and financial analytics.",
    color: "#050505",
    tech: ["Python", "HTML/CSS/JS", "REST API", "AWS SNS", "RazorPay", "Docker"],
    img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ProjectStack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".stack-card");
    
    cards.forEach((card: any, index: number) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 10%",
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 min-h-[300vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Stack <span className="text-accent-orange">Showcase</span></h2>
        <p className="text-white/40 mt-4">Scroll to see the transformation.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-[20vh]">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="stack-card w-full h-[70vh] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row"
            style={{ backgroundColor: project.color }}
          >
            <div className="md:w-1/2 h-1/2 md:h-full overflow-hidden">
               <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-bold mb-4">0{i + 1} / 03</span>
              <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{project.title}</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, j) => (
                  <span key={j} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold border border-white/10 uppercase tracking-widest text-white/40">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <button suppressHydrationWarning className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
                <div className="flex gap-4 items-center">
                   <Github className="text-white/40 hover:text-white cursor-pointer" />
                   <ExternalLink className="text-white/40 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
