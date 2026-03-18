"use client";

import React from "react";
import { motion } from "framer-motion";

const certs = [
  { title: "Docker Foundations Course", issuer: "Docker", year: "2024", img: "/Certificate-main/Darshan  AB_Docker Foundations Course_pages-to-jpg-0001.jpg" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2024", img: "/Certificate-main/Introduction_to_Cybersecurity_certificate_abdarshan890-gmail-com_e7748104-770d-4f29-a53b-23b14dce34a6_page-0001.jpg" },
  { title: "AWS Containers", issuer: "AWS", year: "2024", img: "/Certificate-main/aws contaners_page-0001.jpg" },
  { title: "AWS Developer", issuer: "AWS", year: "2024", img: "/Certificate-main/aws deloper_page-0001.jpg" },
  { title: "Flutter Development", issuer: "Flutter", year: "2024", img: "/Certificate-main/flutter_page-0001.jpg" },
  { title: "Certificate of Excellence", issuer: "Institution", year: "2024", img: "/Certificate-main/IMG-20250629-WA0012(1).jpg" },
  { title: "Professional Certificate", issuer: "Institution", year: "2024", img: "/Certificate-main/IMG-20250728-WA0017.jpg" },
  { title: "Digital Certificate", issuer: "Institution", year: "2024", img: "/Certificate-main/ad.jpeg" },
  { title: "Achievement Certificate", issuer: "Institution", year: "2024", img: "/Certificate-main/image.png" },
];

export default function Certifications() {
  return (
    <section className="py-24 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Certifications & <span className="text-accent-yellow">Learning</span></h2>
      </div>

      <div className="space-y-8 w-full max-w-full overflow-hidden">
        {/* Row 1: Left */}
        <div className="flex marquee-container overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ x: { repeat: Infinity, duration: 30, ease: "linear" }}}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...certs, ...certs, ...certs].map((cert, i) => (
              <div key={i} className="inline-block min-w-[300px] h-[200px] rounded-2xl glass overflow-hidden border border-white/10 group">
                <div className="h-2/3 overflow-hidden relative">
                   <img src={cert.img} alt={cert.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-4 bg-secondary">
                  <p className="text-sm font-bold truncate">{cert.title}</p>
                  <p className="text-[10px] text-white/40">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right */}
        <div className="flex marquee-container overflow-hidden w-full">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ x: { repeat: Infinity, duration: 30, ease: "linear" }}}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...certs, ...certs, ...certs].map((cert, i) => (
              <div key={i} className="inline-block min-w-[300px] h-[200px] rounded-2xl glass overflow-hidden border border-white/10 group">
                <div className="h-2/3 overflow-hidden relative">
                   <img src={cert.img} alt={cert.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-4 bg-secondary">
                  <p className="text-sm font-bold truncate">{cert.title}</p>
                  <p className="text-[10px] text-white/40">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
