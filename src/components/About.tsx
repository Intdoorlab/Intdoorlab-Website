import React from 'react';
import { STUDIO_CONFIG } from '@/data/studio';
import { BinaryDoorFrame } from './BinaryDoorFrame';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 border-t border-[var(--line)] bg-[var(--bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Identifier */}
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
          / {STUDIO_CONFIG.aboutSectionLabel}
        </div>

        {/* Main Three-Column Architectural Composition */}
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Studio Overview */}
          <div className="lg:col-span-5">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--fg)] uppercase"
            >
              {STUDIO_CONFIG.aboutHeading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-7 space-y-4 text-[15px] sm:text-base leading-[1.75] text-[var(--fg)]/85">
              <p className="text-base sm:text-lg font-medium text-[var(--fg)] leading-snug">
                {STUDIO_CONFIG.aboutLead}
              </p>

              {STUDIO_CONFIG.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p className="border-l-2 border-[var(--fg)] pl-4 font-medium text-[var(--fg)]">
                {STUDIO_CONFIG.aboutClosingIdea}
              </p>
            </div>
          </div>

          {/* Center: Signature Binary Door Emblem */}
          <div className="lg:col-span-3 flex justify-center py-2 sm:py-0">
            <div className="w-[160px] xs:w-[185px] sm:w-[220px]">
              <BinaryDoorFrame
                closeProgress={0}
                binaryColor="var(--fg)"
                openingColor="var(--door-opening, #FAFAFA)"
                ariaLabel="IntDoorLab open geometric door mark"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Focus Areas & Technologies */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 border-t lg:border-t-0 lg:border-l border-[var(--line)] pt-8 lg:pt-0 lg:pl-10">
            {/* Focus Areas */}
            <div>
              <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                {STUDIO_CONFIG.areasHeading}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--fg)]">
                {STUDIO_CONFIG.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center justify-between border-b border-[var(--line)] pb-2 last:border-b-0 last:pb-0"
                  >
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                {STUDIO_CONFIG.technologiesHeading}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {STUDIO_CONFIG.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[var(--line)] px-3 py-1.5 font-mono-tech text-xs tracking-[0.08em] text-[var(--fg)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conceptual Breakdown: INT / DOOR / LAB */}
        <div className="mt-16 sm:mt-20 border-t border-[var(--line)] pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <span className="font-mono-tech text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
              {STUDIO_CONFIG.nameSectionLabel}
            </span>
            <span className="font-mono-tech text-xs tracking-[0.2em] font-semibold text-[var(--fg)]">
              {STUDIO_CONFIG.nameSectionTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[var(--line)] divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
            {STUDIO_CONFIG.nameBreakdown.map((item, idx) => (
              <div key={item.segment} className="p-6 sm:p-7 bg-[var(--bg)]">
                <div className="flex items-baseline justify-between">
                  <span className="text-xl sm:text-2xl font-bold tracking-[0.08em] text-[var(--fg)]">
                    {item.segment}
                  </span>
                  <span className="font-mono-tech text-[11px] tracking-[0.18em] text-[var(--muted)]">
                    — 0{idx + 1}
                  </span>
                </div>
                <div className="mt-2 font-mono-tech text-[11px] tracking-[0.14em] text-[var(--fg)] uppercase">
                  {item.meaning}
                </div>
                <p className="mt-3 text-sm sm:text-[14.5px] leading-relaxed text-[var(--fg)]/85">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
