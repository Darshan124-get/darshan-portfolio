"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Let's <span className="text-primary italic font-serif">Connect</span></h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:abdaeshan890@gmail.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                   <Mail className="text-white/40 group-hover:text-primary" />
                 </div>
                 <div>
                   <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Email</p>
                   <p className="text-lg font-medium">abdaeshan890@gmail.com</p>
                 </div>
              </a>

              <a href="https://www.linkedin.com/in/darshan-ab-aa2631331?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer w-fit">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-yellow/50 group-hover:bg-accent-yellow/5 transition-all">
                   <Linkedin className="text-white/40 group-hover:text-accent-yellow" />
                 </div>
                 <div>
                   <p className="text-xs text-white/40 font-bold uppercase tracking-widest">LinkedIn</p>
                   <p className="text-lg font-medium">Darshan AB</p>
                 </div>
              </a>

              <a href="https://github.com/Darshan124-get" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer w-fit">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                   <Github className="text-white/40 group-hover:text-white" />
                 </div>
                 <div>
                   <p className="text-xs text-white/40 font-bold uppercase tracking-widest">GitHub</p>
                   <p className="text-lg font-medium">github.com/Darshan124-get</p>
                 </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Your Name</label>
                  <input suppressHydrationWarning type="text" placeholder="Darshan AB" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Email Address</label>
                  <input suppressHydrationWarning type="email" placeholder="abdaeshan890@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Message</label>
                <textarea suppressHydrationWarning rows={5} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 outline-none transition-all resize-none"></textarea>
              </div>
              <button suppressHydrationWarning className="w-full py-5 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all group">
                Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2026 DARSHAN AB. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm font-bold tracking-widest text-primary/40">AB DESIGN</div>
        </div>
      </footer>
    </section>
  );
}
