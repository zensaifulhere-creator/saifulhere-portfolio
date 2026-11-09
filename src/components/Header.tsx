/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Activity } from 'lucide-react';

interface HeaderProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  motionEnabled,
  onToggleMotion,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090909]/90 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 md:gap-6">
        {/* Zone 1: Brand Wordmark - saifulhere in small letters */}
        <a
          href="#top"
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e32b3c]"
        >
          <span className="font-mono font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#e32b3c] transition-colors lowercase">
            saifulhere<span className="text-[#e32b3c]">.</span>
          </span>
          <span className="text-[10px] tracking-widest text-[#a09c9a] uppercase font-mono hidden sm:inline-block border-l border-white/10 pl-2">
            UI·UX ENG
          </span>
        </a>

        {/* Zone 2: Navigation Links with Services Tab */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-[#a09c9a]"
        >
          <a
            href="#projects"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Works
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Services
          </a>
          <a
            href="#process"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Process
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Reviews
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Experience
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#e32b3c] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action & Controls (Cinematic Shape & Professional Styling) */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Cinematic Professional Swarm Toggle (Rectangular Architectural Design) */}
          <button
            role="switch"
            aria-checked={motionEnabled}
            onClick={onToggleMotion}
            type="button"
            title={
              motionEnabled
                ? 'Interactive particle kinetic swarm is ACTIVE. Click to pause.'
                : 'Interactive particle kinetic swarm is PAUSED. Click to activate.'
            }
            aria-label={`Particle swarm motion is ${motionEnabled ? 'Active' : 'Paused'}. Click to toggle.`}
            className={`group relative flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-[#101012] border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e32b3c] ${
              motionEnabled
                ? 'border-[#e32b3c]/60 shadow-[0_0_15px_rgba(227,43,60,0.2)]'
                : 'border-[#26262a] hover:border-white/30 text-[#888888]'
            }`}
          >
            {/* Swarm Label & Pulse Beacon */}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                {motionEnabled && (
                  <span className="absolute inline-flex h-full w-full rounded-none bg-[#e32b3c] opacity-75 animate-ping" />
                )}
                <span
                  className={`relative inline-flex rounded-none h-2 w-2 ${
                    motionEnabled ? 'bg-[#e32b3c]' : 'bg-[#444444]'
                  }`}
                />
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase hidden xs:inline text-[#f2efeb]">
                SWARM
              </span>
            </div>

            {/* Precision Rectangular Sliding Track */}
            <div
              className={`relative w-8 h-4 bg-[#0a0a0c] border border-white/10 p-0.5 transition-colors duration-200 ${
                motionEnabled ? 'border-[#e32b3c]/50' : 'border-white/10'
              }`}
            >
              <div
                className={`w-3 h-2.5 transition-all duration-200 ${
                  motionEnabled
                    ? 'translate-x-3.5 bg-[#e32b3c] shadow-[0_0_6px_rgba(227,43,60,0.8)]'
                    : 'translate-x-0 bg-[#3a3a40]'
                }`}
              />
            </div>

            {/* Readout Pill Tag */}
            <span
              className={`font-mono text-[9px] font-bold tracking-widest px-1 py-0.2 uppercase border ${
                motionEnabled
                  ? 'text-[#e32b3c] border-[#e32b3c]/40 bg-[#e32b3c]/10'
                  : 'text-[#666666] border-white/10 bg-white/[0.02]'
              }`}
            >
              {motionEnabled ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Cinematic "Let's Talk" Button (Sharp Geometry Matching the Noir Build) */}
          <button
            onClick={onOpenContact}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] font-mono font-bold uppercase tracking-widest text-white bg-[#e32b3c] hover:bg-[#c92030] border border-[#ff4d5e]/30 shadow-[0_0_16px_rgba(227,43,60,0.35)] hover:shadow-[0_0_24px_rgba(227,43,60,0.6)] transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-[#a09c9a] hover:text-white border border-[#26262a] bg-[#121214] focus:outline-none focus:border-[#e32b3c]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#e32b3c]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0c0e]/95 backdrop-blur-xl px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-widest">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Selected Works</span>
              <span className="text-[#e32b3c] text-[10px]">01</span>
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Services & Stack</span>
              <span className="text-[#e32b3c] text-[10px]">02</span>
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Design Process</span>
              <span className="text-[#e32b3c] text-[10px]">03</span>
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Pricing & Sprints</span>
              <span className="text-[#e32b3c] text-[10px]">04</span>
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Client Reviews</span>
              <span className="text-[#e32b3c] text-[10px]">05</span>
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Career Experience</span>
              <span className="text-[#e32b3c] text-[10px]">06</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>About & Philosophy</span>
              <span className="text-[#e32b3c] text-[10px]">07</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a09c9a] hover:text-white py-2 border-b border-white/[0.05] transition-colors flex items-center justify-between"
            >
              <span>Contact Channel</span>
              <span className="text-[#e32b3c] text-[10px]">08</span>
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 text-center text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#e32b3c] hover:bg-[#c92030] shadow-[0_0_15px_rgba(227,43,60,0.4)] transition-all"
            >
              Start a Project ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
