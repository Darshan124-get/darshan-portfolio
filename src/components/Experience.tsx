"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  
  {
    company: "Social Innovate Hackathon (24h)",
    role: "KrishiMitra Developer",
    period: "2025",
    description: "Built 'KrishiMitra', an AI-powered agricultural mobile app to assist farmers.",
    tech: ["Flutter", "Node.js", "MongoDB", "RESTful APIs", "AI"],
    details: [
      "Developed a mobile application that identifies plant diseases by analyzing photos of leaves.",
      "Provides personalized fertilizer recommendations and cultivation tips.",
      "Features a labor connection platform to streamline hiring for farm operations."
    ]
  },
  {
    company: "V-havishkar Cloud Club",
    role: "1st Prize Winner",
    period: "2025",
    description: "Developed 'Lyceum Clone', a comprehensive Academic Management System.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    details: [
      "Engineered a full-scale platform for managing Attendance, Grades, and Student Profiles.",
      "Integrated fee management and student tracking functionalities.",
      "Built using a robust PHP-based backend with a relational MySQL database."
    ]
  },
  {
    company: "Arduinothon (24-Hour Hackathon)",
    role: "5th Prize Winner",
    period: "2025",
    description: "Created a 'Rural Development' solution using integrated hardware-software prototypes.",
    tech: ["Arduino", "Sensors", "Hardware Components", "C++"],
    details: [
      "Secured 5th Prize for developing a functional prototype targeted at rural infrastructure challenges.",
      "Integrated various hardware sensors with Arduino for real-time data collection and processing.",
      "Completed full design and prototyping within a high-pressure 24-hour window."
    ]
  },
  {
    company: "Drexel University",
    role: "Web Developer Intern",
    period: "2025",
    description: "Built CRM System and WhatsApp Chatbot for business inquiries.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "MySQL", "Node.js"],
    details: [
      "Developed a CRM System with customer management and sales workflow.",
      "Built an automated WhatsApp Chatbot for business enquiries using Node.js.",
      "Created a Digital Business Course Website for educational training."
    ]
  },
  {
    company: "Python Full Stack Developer Internship",
    role: "Intern",
    period: "2026",
    description: "Developed a comprehensive Pharmacy Billing System.",
    tech: ["Python", "Flask", "Supabase", "AWS S3", "Docker", "RazorPay"],
    details: [
      "Engineered a Pharmacy Billing System with stock management and expiry tracking.",
      "Integrated RazorPay for seamless payment processing.",
      "Utilized AWS S3 for profile storage and Docker for containerization.",
      "Implemented SMS and Email billing notifications."
    ]
  }
  ,
  {
    company: "Anveshana Hack For Hire 2026 Hackathon",
    role: "1st Prize Winner",
    period: "2026",
    description: "Built an Internal Order Tracking and Lead Management System for SBG Agro Private Limited.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB", "SQL", "Supabase"],
    details: [
      "Developed an internal order tracking system to digitalize manual billing, packet shifting, and supplier management.",
      "Built a lead management system integrated with WhatsApp to capture customer details from advertisements and store them in the database.",
      "Implemented role-based access with separate panels for admin monitoring and assigning leads to the sales team."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Professional <span className="text-primary">Journey</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">A timeline of my growth and contributions in the tech industry.</p>
        </div>

        {/* The Vertical Line (Desktop) */}
        <div className="absolute left-1/2 -translate-x-px top-40 bottom-0 w-px bg-white/10 hidden md:block" />
        
        {/* The Vertical Line (Mobile) */}
        <div className="absolute left-[55.5px] top-40 bottom-0 w-px bg-white/10 md:hidden" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex items-center justify-between w-full mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Spacer for desktop */}
              <div className="hidden md:block w-5/12" />

              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,107,0,0.5)] z-20" />

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-[calc(100%-80px)] ml-auto md:w-5/12 md:ml-0"
              >
                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 group">
                  <span className="text-primary font-bold text-sm tracking-widest mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                  <h4 className="text-lg font-medium text-accent-yellow mb-4">{exp.role}</h4>
                  <p className="text-white/60 mb-6 text-sm">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 border border-white/5 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 text-xs text-white/50">
                    {exp.details.map((detail, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
