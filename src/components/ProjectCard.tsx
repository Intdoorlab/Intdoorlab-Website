'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primarySpecimen = project.textSpecimens[0];
  const primaryScreenshot = project.screenshots[0];

  return (
    <article className="group flex flex-col justify-between border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-7 transition-colors duration-150 hover:border-[var(--fg)]">
      <div>
        {/* Card Header Metadata */}
        <div className="flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-4">
          <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] text-[var(--fg)]">
            {project.number}
          </span>
          <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase text-right">
            // {project.category}
          </span>
        </div>

        {/* Project Name & Description */}
        <div className="mt-5">
          <h3 className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.025em] text-[var(--fg)]">
            <Link
              href={`/projects/${project.slug}`}
              className="focus:outline-none hover:opacity-75 transition-opacity"
            >
              {project.name}
            </Link>
          </h3>

          <p className="mt-3 text-[15px] font-medium leading-snug text-[var(--fg)]">
            {project.leadHook}
          </p>

          <p className="mt-2 min-h-[3.75rem] text-[14px] leading-relaxed text-[var(--fg)]/80">
            {project.shortDescription}
          </p>
        </div>

        {/* Visual / Text Specimen Preview Area */}
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name} project details`}
          className="mt-6 block focus:outline-none"
        >
          {primaryScreenshot ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--line)] bg-[var(--fg)]">
              <Image
                src={primaryScreenshot.src}
                alt={primaryScreenshot.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={`flex min-h-[196px] flex-col justify-between border p-4 sm:p-5 font-mono-tech transition-colors ${
                primarySpecimen?.theme === 'dark'
                  ? 'border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]'
                  : 'border-[var(--line)] bg-[var(--bg)] text-[var(--fg)] group-hover:border-[var(--fg)]'
              }`}
            >
              {/* Top Specimen Header Bar */}
              <div
                className={`flex items-center justify-between border-b pb-2.5 text-[10px] tracking-[0.16em] uppercase ${
                  primarySpecimen?.theme === 'dark'
                    ? 'border-[var(--inv-line)] text-[var(--inv-muted)]'
                    : 'border-[var(--line)] text-[var(--muted)]'
                }`}
              >
                <span>{project.name.toUpperCase()}</span>
                <span>SPECIMEN</span>
              </div>

              {/* Primary Text Lines */}
              <div className="my-4 space-y-1.5 text-[11.5px] sm:text-xs leading-relaxed">
                {primarySpecimen?.primaryLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === 1 && project.slug === 'overly'
                        ? 'font-semibold'
                        : 'opacity-90'
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Specimen Footer */}
              <div
                className={`border-t pt-2.5 text-[10px] tracking-[0.14em] uppercase ${
                  primarySpecimen?.theme === 'dark'
                    ? 'border-[var(--inv-line)] text-[var(--inv-muted)]'
                    : 'border-[var(--line)] text-[var(--muted)]'
                }`}
              >
                {primarySpecimen?.footerMeta}
              </div>
            </div>
          )}
        </Link>
      </div>

      {/* Status & Details Link */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
        <span className="font-mono-tech text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
          [{project.status}]
        </span>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] tracking-[0.15em] text-[var(--fg)] uppercase transition-transform duration-150 group-hover:translate-x-0.5 min-h-[44px] py-1 px-1 -my-1 -mr-1"
        >
          <span>[{project.exploreLabel}]</span>
        </Link>
      </div>
    </article>
  );
}

