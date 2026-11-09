/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Check, Copy, Sliders, Layers, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../utils/portfolio';

interface ProjectDialogProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sandbox' | 'tokens'>('overview');
  
  // Interactive sandbox state for live token experimentation
  const [sandboxColor, setSandboxColor] = useState<string>('#e32b3c');
  const [sandboxRadius, setSandboxRadius] = useState<number>(10);
  const [sandboxButtonState, setSandboxButtonState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [sandboxInputText, setSandboxInputText] = useState<string>('Saiful Islam Design Tokens');
  const [copiedToken, setCopiedToken] = useState<boolean>(false);

  useEffect(() => {
    if (project?.tokens?.primaryColor) {
      setSandboxColor(project.tokens.primaryColor);
    }
    setActiveTab('overview');
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCSS = () => {
    const css = `:root {\n  --color-primary: ${sandboxColor};\n  --radius-base: ${sandboxRadius}px;\n}`;
    navigator.clipboard.writeText(css);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleTriggerButton = () => {
    if (sandboxButtonState !== 'idle') return;
    setSandboxButtonState('loading');
    setTimeout(() => {
      setSandboxButtonState('success');
      setTimeout(() => setSandboxButtonState('idle'), 1800);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0e0e11] border border-white/15 shadow-2xl overflow-hidden text-[#f2efeb]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090909]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a09c9a]">
            <span className="text-[#e32b3c] font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            {project.client && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-white/60">{project.client}</span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-[#a09c9a] hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e32b3c] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Bar */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-white/[0.08] bg-[#0c0c0e]">
          <button
            onClick={() => setActiveTab('overview')}
            type="button"
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'overview'
                ? 'border-[#e32b3c] text-white font-semibold'
                : 'border-transparent text-[#a09c9a] hover:text-white'
            }`}
          >
            01. Case Study Overview
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            type="button"
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'sandbox'
                ? 'border-[#e32b3c] text-white font-semibold'
                : 'border-transparent text-[#a09c9a] hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-[#e32b3c]" />
            <span>02. Interactive Prototype Sandbox</span>
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            type="button"
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'tokens'
                ? 'border-[#e32b3c] text-white font-semibold'
                : 'border-transparent text-[#a09c9a] hover:text-white'
            }`}
          >
            03. Tokens & Architecture
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Cover Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#090909] border border-white/10">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title and Summary */}
              <div>
                <h2 id="dialog-title" className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-[#a09c9a] font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Outcome Highlight Box */}
              {project.outcomeMetric && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-[#e32b3c]/30 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#e32b3c] font-semibold tracking-wider">
                      Measurable Business Outcome
                    </h4>
                    <p className="text-sm text-white mt-1 font-sans">
                      {project.outcomeMetric}
                    </p>
                  </div>
                </div>
              )}

              {/* Role & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#a09c9a] tracking-wider">
                    My Responsibilities
                  </h4>
                  <p className="text-sm font-sans text-white font-medium">
                    {project.role}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#a09c9a] tracking-wider">
                    Tools & Stack Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Architecture Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#a09c9a] tracking-wider">
                  Technical & UX Highlights
                </h4>
                <ul className="space-y-2">
                  {project.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-[#f2efeb]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e32b3c]" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SANDBOX */}
          {activeTab === 'sandbox' && (
            <div className="space-y-8">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#e32b3c]" />
                  <span>Live Token & Component Simulation</span>
                </h3>
                <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                  Test the responsive component states and adjust design tokens live to inspect how token variables cascade.
                </p>
              </div>

              {/* Token Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[#090909] border border-white/[0.08]">
                {/* Color Token Swatches */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#a09c9a] block">
                    Accent Color Token (`--color-primary`)
                  </label>
                  <div className="flex items-center gap-2">
                    {['#e32b3c', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSandboxColor(color)}
                        style={{ backgroundColor: color }}
                        type="button"
                        className={`w-7 h-7 rounded-full border-2 transition-transform active:scale-90 ${
                          sandboxColor === color ? 'border-white scale-110' : 'border-transparent'
                        }`}
                        aria-label={`Select primary token color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Radius Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#a09c9a]">
                    <span>Border Radius Token (`--radius-base`)</span>
                    <span className="text-white font-semibold">{sandboxRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="28"
                    value={sandboxRadius}
                    onChange={(e) => setSandboxRadius(Number(e.target.value))}
                    className="w-full accent-[#e32b3c] cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Render Preview Frame */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#121216] border border-white/10 space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#a09c9a] flex items-center justify-between">
                  <span>Render Output Preview</span>
                  <span className="text-[#10b981]">● Interactive State Active</span>
                </div>

                {/* Simulated UI Card */}
                <div
                  style={{ borderRadius: `${sandboxRadius}px` }}
                  className="p-6 bg-[#090909] border border-white/10 space-y-4 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#a09c9a]">Active Component</span>
                    <span
                      style={{ color: sandboxColor }}
                      className="text-xs font-mono font-semibold"
                    >
                      {sandboxColor}
                    </span>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={sandboxInputText}
                      onChange={(e) => setSandboxInputText(e.target.value)}
                      style={{ borderRadius: `${Math.max(4, sandboxRadius - 2)}px` }}
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/15 text-sm text-white focus:outline-none focus:border-white transition-all font-sans"
                      placeholder="Type component label..."
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {/* Primary Button with Live Token Styling */}
                    <button
                      onClick={handleTriggerButton}
                      style={{
                        backgroundColor: sandboxColor,
                        borderRadius: `${Math.max(4, sandboxRadius - 2)}px`,
                      }}
                      type="button"
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all active:scale-95 shadow-lg flex items-center gap-2"
                    >
                      {sandboxButtonState === 'loading' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : sandboxButtonState === 'success' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>State Synchronized!</span>
                        </>
                      ) : (
                        <span>Simulate Click ({sandboxInputText.slice(0, 16)})</span>
                      )}
                    </button>

                    <button
                      onClick={handleCopyCSS}
                      type="button"
                      style={{ borderRadius: `${Math.max(4, sandboxRadius - 2)}px` }}
                      className="px-4 py-2.5 text-xs font-mono uppercase border border-white/20 bg-white/[0.02] hover:bg-white/[0.08] text-white transition-colors flex items-center gap-1.5"
                    >
                      {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedToken ? 'CSS Copied!' : 'Copy CSS Tokens'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TOKENS & ARCHITECTURE */}
          {activeTab === 'tokens' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#e32b3c]" />
                  <span>Design Token Specifications</span>
                </h3>
                <p className="text-xs text-[#a09c9a] mt-1 font-sans">
                  Variables configured according to the W3C Design Tokens Community Group specification.
                </p>
              </div>

              {/* Token Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#090909] text-[#a09c9a] border-b border-white/10 uppercase">
                    <tr>
                      <th className="px-4 py-3">Token Key</th>
                      <th className="px-4 py-3">Value</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Contrast Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] bg-[#0c0c0e]">
                    <tr>
                      <td className="px-4 py-3 text-white font-semibold">--color-primary</td>
                      <td className="px-4 py-3 text-[#e32b3c]">{project.tokens?.primaryColor || '#e32b3c'}</td>
                      <td className="px-4 py-3 text-[#a09c9a]">Brand / Semantic</td>
                      <td className="px-4 py-3 text-emerald-400 font-semibold">{project.tokens?.contrastRatio || '7.5:1 (AAA)'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white font-semibold">--radius-base</td>
                      <td className="px-4 py-3 text-white/80">{project.tokens?.radius || '12px'}</td>
                      <td className="px-4 py-3 text-[#a09c9a]">Elevation / Spatial</td>
                      <td className="px-4 py-3 text-[#a09c9a]">Geometric Match</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white font-semibold">--font-family</td>
                      <td className="px-4 py-3 text-white/80">{project.tokens?.fontFamily || 'Anton / Manrope'}</td>
                      <td className="px-4 py-3 text-[#a09c9a]">Typography Hierarchy</td>
                      <td className="px-4 py-3 text-emerald-400 font-semibold">Fluid Responsive</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Code Snippet */}
              <div className="p-4 rounded-xl bg-[#090909] border border-white/10 font-mono text-xs text-[#a09c9a] overflow-x-auto">
                <p className="text-white font-semibold mb-2">// Tailwind CSS v4 Theme Extension</p>
                <code>
                  {`@theme {\n  --color-primary: ${project.tokens?.primaryColor || '#e32b3c'};\n  --font-display: 'Anton', sans-serif;\n  --radius-card: ${project.tokens?.radius || '12px'};\n}`}
                </code>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/10 bg-[#090909]">
          <span className="text-xs font-mono text-[#a09c9a] hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">Esc</kbd> to close
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              type="button"
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#e32b3c] hover:bg-[#c92232] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
