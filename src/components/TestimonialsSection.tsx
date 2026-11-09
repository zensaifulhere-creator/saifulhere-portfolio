/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/site';
import {
  getNextSlideIndex,
  getPrevSlideIndex,
  calculateProgressPercentage,
} from '../utils/portfolio';

interface TestimonialsSectionProps {
  onOpenContact?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenContact,
}) => {
  const { testimonials } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = testimonials.length;
  const current = testimonials[activeIndex] || testimonials[0];

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => getNextSlideIndex(prev, total));
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => getPrevSlideIndex(prev, total));
  }, [total]);

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Keep auto review showing always on: continuous 6-second cycle
  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [total, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const progress = calculateProgressPercentage(activeIndex, total);

  return (
    <section
      id="testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#09090b] focus:outline-none"
      aria-label="Client Testimonials and Endorsements"
    >
      {/* Cinematic Noir Atmospheric Blur Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e32b3c]/12 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -right-24 w-[450px] h-[450px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e32b3c]/[0.04] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-3">
              <span className="w-1.5 h-1.5 bg-[#e32b3c] animate-pulse" />
              <span>04 / Endorsements</span>
              <span className="text-white/20">·</span>
              <span className="text-white/70">Client Feedback & Sample Profiles</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              WHAT GREAT PRODUCT WORK <span className="text-[#e32b3c]">LOOKS LIKE</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#cfccc9] max-w-md font-sans leading-relaxed">
            These review cards include illustrative sample content. Replace each sample with permissioned client feedback before treating it as an endorsement.
          </p>
        </div>

        {/* Carousel Main Container */}
        <div
          className="space-y-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Spotlight Card: Frosted Glass with Light Ash Background Tone */}
          <div className="relative rounded-none border border-white/20 bg-gradient-to-br from-[#26282f]/95 via-[#202126]/95 to-[#191a1e]/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-all duration-300">
            
            {/* Top Crimson Accent Beam */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#e32b3c] to-transparent opacity-90" />
            
            {/* Ambient Internal Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e32b3c]/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

            <div className="p-6 sm:p-10 md:p-14 relative z-10">
              
              {/* Card Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e32b3c]/15 border border-[#e32b3c]/40 flex items-center justify-center text-[#e32b3c] shadow-[0_0_12px_rgba(227,43,60,0.25)]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#e32b3c] fill-[#e32b3c]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4d1cc]">
                      {current.verified ? `Verified Endorsement · ${current.year}` : `Sample Profile · ${current.year}`}
                    </span>
                  </div>
                </div>

                {/* Impact Metric Chip */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#e32b3c]/15 border border-[#e32b3c]/40 font-mono text-xs text-white shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-[#e32b3c]" />
                  <span className="text-[#e2dedb] uppercase text-[10px] tracking-wide">{current.verified ? 'Impact:' : 'Sample impact:'}</span>
                  <span className="font-semibold text-white">{current.impact}</span>
                </div>

              </div>

              {/* Animated Testimonial Text & Client Photograph */}
              <div className="min-h-[220px] sm:min-h-[200px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: direction * 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -direction * 14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    {/* The Quote: High Contrast and Crystal Readability */}
                    <blockquote className="font-sans text-xl sm:text-2xl md:text-3xl text-white font-normal leading-relaxed tracking-tight drop-shadow-sm">
                      &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    {/* Author, Deliverable & Organization with Client Picture */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                      
                      <div className="flex items-center gap-4">
                        {/* High-Resolution Client Photograph Portrait */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative overflow-hidden bg-[#2d2e36] border border-white/30 shadow-lg">
                          {current.avatarImage ? (
                            <img
                              src={current.avatarImage}
                              alt={`Portrait of ${current.author}`}
                              className="w-full h-full object-cover object-center filter contrast-105"
                              loading="eager"
                            />
                          ) : (
                            <span className="w-full h-full flex items-center justify-center font-mono text-sm text-white">
                              {current.avatarInitials}
                            </span>
                          )}
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#e32b3c] border-2 border-[#191a1e]" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display text-2xl text-white tracking-wide">
                              {current.author}
                            </h4>
                            {current.verified && (
                              <span title="Verified Client">
                                <CheckCircle2 className="w-4 h-4 text-[#e32b3c]" />
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-[#d4d1cc] font-sans">
                            {current.role} <span className="text-white/30">·</span>{' '}
                            <span className="text-white font-medium">{current.company}</span>
                          </p>
                        </div>
                      </div>

                      {/* Deliverable Project Tag */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#d4d1cc] bg-white/[0.05] border border-white/15 px-3 py-2 self-start sm:self-auto">
                        <Briefcase className="w-3.5 h-3.5 text-[#e32b3c]" />
                        <span className="text-white/60 uppercase text-[10px]">Delivered:</span>
                        <span className="text-white font-medium truncate max-w-[220px] sm:max-w-none">
                          {current.project}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Bottom Interactive Control Strip */}
            <div className="border-t border-white/10 bg-[#16171b]/90 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Slide Counter & Progress */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <span className="font-mono text-xs text-white tracking-widest">
                  <span className="text-[#e32b3c] font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                  <span className="text-white/40"> / {String(total).padStart(2, '0')}</span>
                </span>

                <div className="w-28 sm:w-36 h-1 bg-white/15 overflow-hidden">
                  <div
                    className="h-full bg-[#e32b3c] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Auto Review Always On Indicator */}
                <div
                  className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#e2dedb] px-2.5 py-1 bg-white/[0.05] border border-white/15 select-none"
                  title="Auto review rotation is continuously active"
                >
                  <span className="w-1.5 h-1.5 bg-[#e32b3c] animate-ping" />
                  <span className="text-white font-medium">Auto [Always On]</span>
                </div>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="px-3.5 py-2 bg-white/[0.05] hover:bg-[#e32b3c] hover:text-white border border-white/20 text-white font-mono text-xs transition-all cursor-pointer flex items-center gap-1 active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">PREV</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="px-3.5 py-2 bg-white/[0.05] hover:bg-[#e32b3c] hover:text-white border border-white/20 text-white font-mono text-xs transition-all cursor-pointer flex items-center gap-1 active:scale-95 shadow-sm"
                >
                  <span className="hidden sm:inline">NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Direct Client Selector / Thumbnail Grid with Client Pictures */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {testimonials.map((t, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`p-3 text-left transition-all duration-200 border cursor-pointer relative overflow-hidden backdrop-blur-md ${
                    isSelected
                      ? 'bg-[#2b2d35]/95 border-[#e32b3c] shadow-[0_0_20px_rgba(227,43,60,0.25)] ring-1 ring-[#e32b3c]'
                      : 'bg-[#1a1b20]/70 border-white/10 hover:border-white/30 hover:bg-[#22242b]/80'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#e32b3c]" />
                  )}

                  <div className="flex items-center gap-2.5 mb-2">
                    {/* Small Client Thumbnail Photo */}
                    <div className="w-7 h-7 shrink-0 overflow-hidden border border-white/20 bg-[#25262c]">
                      {t.avatarImage ? (
                        <img
                          src={t.avatarImage}
                          alt={t.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="w-full h-full flex items-center justify-center font-mono text-[8px] text-white">
                          {t.avatarInitials}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] text-white/50">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#e32b3c] font-bold">
                        {t.avatarInitials}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans font-medium text-xs text-white truncate">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-[#cfccc9] truncate font-sans">
                    {t.company}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Direct CTA Bridge to Contact */}
          {onOpenContact && (
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#1b1c21]/80 border border-white/15 backdrop-blur-md">
              <div className="text-center sm:text-left">
                <p className="text-sm text-white font-medium">
                  Have a similar design system or creative engineering challenge?
                </p>
                <p className="text-xs text-[#d4d1cc] font-sans">
                  Let's discuss scope, deliverables, and production timelines.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-[#e32b3c] hover:bg-[#c92232] text-white font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shrink-0 active:scale-95 font-semibold"
              >
                Start A Project
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
