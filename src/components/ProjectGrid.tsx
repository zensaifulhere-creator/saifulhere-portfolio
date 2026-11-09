/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ProjectItem, filterProjects } from '../utils/portfolio';
import { siteConfig } from '../config/site';

interface ProjectGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return filterProjects(siteConfig.projects, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'systems', label: 'Design Systems' },
    { id: 'prototypes', label: 'Interactive Prototypes' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Applications' },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32b3c] mb-2">
              <span>01 / Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              FEATURED PROJECTS & CASE STUDIES
            </h2>
          </div>

          <p className="text-sm text-[#a09c9a] max-w-md font-sans">
            Handcrafted design systems, high-fidelity React prototypes, and mobile interfaces engineered with extreme typographic and token discipline.
          </p>
        </div>

        {/* Filter Toolbar: Segmented Controls + Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] overflow-x-auto scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#e32b3c] text-white shadow-sm font-bold'
                    : 'text-[#a09c9a] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#a09c9a] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool, title, tech..."
              aria-label="Search projects by keyword"
              className="w-full pl-9 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.08] focus:border-[#e32b3c] focus:outline-none rounded-none text-base sm:text-xs text-white placeholder-[#a09c9a]/60 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#a09c9a] hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
            <p className="text-base text-white font-medium">No projects matched your criteria.</p>
            <p className="text-xs text-[#a09c9a] mt-1">Try clearing your search query or selecting "All Works".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-mono uppercase bg-white/10 hover:bg-white/15 text-white rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl bg-[#121214] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Cover Framing */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0c]">
                  <img
                    src={project.coverImage}
                    alt={`Preview screenshot of ${project.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Interactive Open Affordance */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#090909]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#e32b3c] group-hover:border-[#e32b3c] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Zero-Pill Unboxed Metadata */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a09c9a]">
                      <span className="text-[#e32b3c] font-semibold">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      {project.client && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="truncate max-w-[140px]">{project.client}</span>
                        </>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#e32b3c] transition-colors">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#a09c9a] font-sans line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tools Strip & Outcome Note */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#a09c9a]">
                    <div className="flex items-center gap-2 overflow-hidden truncate">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="font-mono text-[11px] text-white/70">
                          {idx > 0 && <span className="text-white/20 mr-2">/</span>}
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-white/40 text-[10px]">+{project.tools.length - 3}</span>
                      )}
                    </div>

                    <span className="font-mono text-[11px] text-[#e32b3c] group-hover:translate-x-0.5 transition-transform">
                      View Case Study →
                    </span>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
