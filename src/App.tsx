/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectDialog } from './components/ProjectDialog';
import { ProcessAndSkills } from './components/ProcessAndSkills';
import { PricingSection } from './components/PricingSection';
import { ExperienceAndAbout } from './components/ExperienceAndAbout';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AntigravityCanvas } from './components/AntigravityCanvas';
import { StudioChatbot } from './components/StudioChatbot';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { motion } from 'motion/react';
import { ProjectItem } from './utils/portfolio';

export default function App() {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return false;
      const saved = localStorage.getItem('saiful_portfolio_motion');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Design Systems Architecture');
  const [selectedBudget, setSelectedBudget] = useState<string>('$500–$650 / ৳60,000–৳80,000');

  const toggleMotion = () => {
    setMotionEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('saiful_portfolio_motion', String(next));
      return next;
    });
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (service: string, budget: string) => {
    setSelectedService(service);
    setSelectedBudget(budget);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#f2efeb] relative selection:bg-[#e32b3c] selection:text-white">
      {/* Viewport Top Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Background Interactive Antigravity Particle Field */}
      <AntigravityCanvas motionEnabled={motionEnabled} />

      {/* Main Content Hierarchy */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          motionEnabled={motionEnabled}
          onToggleMotion={toggleMotion}
          onOpenContact={handleOpenContact}
        />

        <main className="flex-1">
          <Hero onOpenContact={handleOpenContact} />
          
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectGrid onSelectProject={(p) => setSelectedProject(p)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProcessAndSkills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <PricingSection onSelectTier={handleSelectTier} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ExperienceAndAbout />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestimonialsSection onOpenContact={handleOpenContact} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactSection
              selectedService={selectedService}
              selectedBudget={selectedBudget}
            />
          </motion.div>
        </main>

        <Footer />
      </div>

      {/* Deep Accessible Project Case Study & Sandbox Modal */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Cinematic Noir Studio Gemini AI Copilot */}
      <StudioChatbot />
    </div>
  );
}
