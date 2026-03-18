"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectStack from "@/components/ProjectStack";
import MobileApps from "@/components/MobileApps";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TechStack />
      <About />
      <Experience />
      <FeaturedProjects />
      <ProjectStack />
      <MobileApps />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  );
}
