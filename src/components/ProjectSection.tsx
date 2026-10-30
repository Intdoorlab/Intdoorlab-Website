'use client';

import React, { useState } from 'react';
import {
  PROJECTS,
  PROJECT_FILTERS,
  type ProjectFilterCategory,
} from '@/data/projects';
import { STUDIO_CONFIG } from '@/data/studio';
import { ProjectCard } from './ProjectCard';

export function ProjectSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterCategory>('ALL');

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.filterCategories.includes(activeFilter)
        );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 border-t border-[var(--line)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
          / {STUDIO_CONFIG.projectsSectionLabel}
        </div>

        {/* Heading + Supporting Copy + Filter Bar */}
        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-b border-[var(--line)] pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-10">
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--fg)] uppercase"
            >
              {STUDIO_CONFIG.projectsHeading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="max-w-[340px] font-mono-tech text-xs sm:text-[13px] leading-[1.65] text-[var(--muted)] pb-0.5">
              {STUDIO_CONFIG.projectsSubtitle}
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            role="tablist"
            aria-label="Filter studio projects by domain"
            className="flex flex-wrap items-center gap-1.5"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-2 font-mono-tech text-[11px] tracking-[0.16em] uppercase transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--fg)] text-[var(--bg)]'
                      : 'bg-transparent text-[var(--muted)] hover:text-[var(--fg)] border border-transparent hover:border-[var(--line)]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Three-Column Studio Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

