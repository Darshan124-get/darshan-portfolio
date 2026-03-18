"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const apps = [
  {
    name: "Learn Dart",
    description: "A comprehensive learning app for beginners to easily understand Dart programming. Fully built in Flutter and integrated with AdMob.",
    icon: "🎯",
    link: "https://play.google.com/store/apps/details?id=com.dart_ceafzio.drat&pcampaignid=web_share"
  },
  {
    name: "Learn Digital Marketing",
    description: "A learning platform covering digital marketing strategies and content creation. Developed with Flutter and monetized via AdMob.",
    icon: "📈",
    link: ""
  }
];

export default function MobileApps() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Mobile <span className="text-accent-green">Apps</span></h2>
          <p className="text-white/40 mt-4">Available on Google Play Store.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-center gap-8 bg-secondary/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-accent-green/30 transition-all duration-500"
            >
              <div className="w-32 h-32 rounded-3xl bg-white/5 flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                {app.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">{app.name}</h3>
                <p className="text-white/50 mb-6 leading-relaxed">{app.description}</p>
                <a 
                  href={app.link}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent-green text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(126,224,129,0.4)] transition-all"
                >
                  <Play fill="black" size={16} /> Get it on Play Store
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
