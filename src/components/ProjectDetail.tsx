'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, type Project } from '@/data/projects';

export interface ProjectDetailProps {
  project: Project;
}

type DetailTab = 'specimens' | 'features' | 'stack';

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeSpecimenIndex, setActiveSpecimenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<DetailTab>('specimens');

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? PROJECTS[currentIndex - 1]
      : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : PROJECTS[0];

  const hasScreenshots = project.screenshots.length > 0;
  const activeScreenshot = hasScreenshots
    ? project.screenshots[activeSpecimenIndex] ?? project.screenshots[0]
    : null;
  const activeSpecimen =
    project.textSpecimens[activeSpecimenIndex] ?? project.textSpecimens[0];

  const scrollToDetailBlock = (tab: DetailTab, elementId: string) => {
    setActiveTab(tab);
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-20 text-[var(--fg)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Metadata Column */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-24 lg:self-start">
            <div>
              {/* Index & Back Link */}
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div>
                  <span className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)] block">
                    /
                  </span>
                  <span className="font-mono-tech text-sm font-semibold tracking-[0.2em]">
                    {project.number}
                  </span>
                </div>

                <Link
                  href="/#projects"
                  className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase transition-colors hover:text-[var(--fg)]"
                >
                  &larr; BACK TO PROJECTS
                </Link>
              </div>

              {/* Category & Status */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] tracking-[0.16em] uppercase">
                <span className="text-[var(--muted)]">// {project.category}</span>
                <span className="border border-[var(--fg)] px-2.5 py-1 text-[var(--fg)]">
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-[-0.03em]">
                {project.name}
              </h1>

              <p className="mt-4 font-mono-tech text-xs leading-[1.7] tracking-[0.12em] text-[var(--fg)] uppercase">
                {project.tagline}
              </p>

              {/* Editorial Overview */}
              <div className="mt-6 space-y-4 text-sm leading-[1.78] text-[var(--muted)]">
                {project.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action Buttons (Only active links when verified URLs exist) */}
              <div className="mt-8 space-y-3">
                {project.links.downloadUrl ? (
                  <a
                    href={project.links.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between border border-[var(--fg)] bg-[var(--fg)] px-5 py-3.5 font-mono-tech text-xs tracking-[0.18em] text-[var(--bg)] uppercase transition-opacity hover:opacity-85"
                  >
                    <span>DOWNLOAD</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <div className="flex w-full items-center justify-between border border-[var(--fg)] bg-[var(--fg)] px-5 py-3.5 font-mono-tech text-xs tracking-[0.18em] text-[var(--bg)] uppercase">
                    <span>RELEASE // {project.links.downloadStatusLabel}</span>
                    <span className="text-[var(--inv-muted)]">--</span>
                  </div>
                )}

                {project.links.productWebsiteUrl && (
                  <a
                    href={project.links.productWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between border border-[var(--fg)] bg-[var(--bg)] px-5 py-3.5 font-mono-tech text-xs tracking-[0.18em] text-[var(--fg)] uppercase transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                  >
                    <span>PRODUCT WEBSITE</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}

                {project.links.githubUrl && (
                  <a
                    href={project.links.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between border border-[var(--fg)] bg-[var(--bg)] px-5 py-3.5 font-mono-tech text-xs tracking-[0.18em] text-[var(--fg)] uppercase transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                  >
                    <span>VIEW ON GITHUB</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>

              {/* Project Tags */}
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--line)] pt-5 font-mono-tech text-[11px] tracking-[0.15em] text-[var(--muted)] uppercase">
                {project.tags.map((tag) => (
                  <span key={tag}># {tag}</span>
                ))}
              </div>
            </div>

            {/* Section Index Jump List (01 / 02 / 03 matching reference layout) */}
            <div className="mt-10 border-t border-[var(--line)] pt-6">
              <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)] mb-3">
                /
              </div>
              <div className="space-y-2.5 font-mono-tech text-xs tracking-[0.16em] uppercase">
                {(
                  [
                    {
                      key: 'specimens',
                      num: '01',
                      label: hasScreenshots ? 'SCREENS' : 'SPECIMENS',
                      targetId: 'detail-specimens',
                    },
                    {
                      key: 'features',
                      num: '02',
                      label: 'FEATURES & SCOPE',
                      targetId: 'detail-features',
                    },
                    {
                      key: 'stack',
                      num: '03',
                      label: 'TECH STACK',
                      targetId: 'detail-stack',
                    },
                  ] as const
                ).map((item) => {
                  const isCurrent = activeTab === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() =>
                        scrollToDetailBlock(item.key, item.targetId)
                      }
                      className={`flex w-full items-center gap-6 py-1 text-left transition-colors cursor-pointer ${
                        isCurrent
                          ? 'text-[var(--fg)] font-semibold'
                          : 'text-[var(--muted)] hover:text-[var(--fg)]'
                      }`}
                    >
                      <span>{item.num}</span>
                      <span className="h-px w-5 bg-current" aria-hidden="true" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Presentation & Technical Specification Column */}
          <div className="lg:col-span-7 space-y-12">
            {/* 01 — Primary Specimen / Screenshot Stage */}
            <section id="detail-specimens" className="scroll-mt-24">
              {activeScreenshot ? (
                <div className="border border-[var(--fg)] bg-[var(--fg)]">
                  <div className="flex items-center justify-between border-b border-[var(--inv-line)] px-4 py-3 font-mono-tech text-[11px] tracking-[0.16em] text-[var(--inv-muted)] uppercase">
                    <span>{activeScreenshot.caption}</span>
                    <span>
                      0{activeSpecimenIndex + 1} / 0{project.screenshots.length}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={activeScreenshot.src}
                      alt={activeScreenshot.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`border p-6 sm:p-10 font-mono-tech ${
                    activeSpecimen.theme === 'dark'
                      ? 'border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]'
                      : 'border-[var(--fg)] bg-[var(--bg)] text-[var(--fg)]'
                  }`}
                >
                  {/* Architectural Window Bar */}
                  <div
                    className={`flex flex-wrap items-center justify-between gap-2 border-b pb-4 text-[11px] tracking-[0.16em] uppercase ${
                      activeSpecimen.theme === 'dark'
                        ? 'border-[var(--inv-line)] text-[var(--inv-muted)]'
                        : 'border-[var(--line)] text-[var(--muted)]'
                    }`}
                  >
                    <span>{activeSpecimen.windowLabel}</span>
                    <span>[ - ] [ + ] [ X ]</span>
                  </div>

                  {/* Mode Subtitle */}
                  <div
                    className={`mt-6 text-[11px] tracking-[0.18em] uppercase ${
                      activeSpecimen.theme === 'dark'
                        ? 'text-[var(--inv-muted)]'
                        : 'text-[var(--muted)]'
                    }`}
                  >
                    // {activeSpecimen.modeLabel}
                  </div>

                  {/* Primary Specimen Content Box */}
                  <div
                    className={`my-8 border p-6 sm:p-8 space-y-3 text-sm sm:text-base leading-relaxed ${
                      activeSpecimen.theme === 'dark'
                        ? 'border-[var(--inv-line)] bg-[var(--inv-surface)]'
                        : 'border-[var(--line)] bg-[var(--bg)]'
                    }`}
                  >
                    {activeSpecimen.primaryLines.map((line, i) => (
                      <div key={i} className="tracking-[0.02em]">
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Secondary Specimen Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] tracking-[0.14em] uppercase">
                    {activeSpecimen.secondaryLines.map((meta, i) => (
                      <div
                        key={i}
                        className={
                          activeSpecimen.theme === 'dark'
                            ? 'text-[var(--inv-muted)]'
                            : 'text-[var(--muted)]'
                        }
                      >
                        {meta}
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-8 border-t pt-4 flex items-center justify-between text-[11px] tracking-[0.16em] uppercase ${
                      activeSpecimen.theme === 'dark'
                        ? 'border-[var(--inv-line)] text-[var(--inv-muted)]'
                        : 'border-[var(--line)] text-[var(--muted)]'
                    }`}
                  >
                    <span>{activeSpecimen.footerMeta}</span>
                    <span>
                      0{activeSpecimenIndex + 1} / 0
                      {project.textSpecimens.length}
                    </span>
                  </div>
                </div>
              )}

              {/* Selector Strip (Thumbnails / Specimen Views) */}
              {(hasScreenshots
                ? project.screenshots.length > 1
                : project.textSpecimens.length > 1) && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(hasScreenshots
                    ? project.screenshots.map((s, idx) => ({
                        key: s.src,
                        label: s.caption,
                        idx,
                      }))
                    : project.textSpecimens.map((s, idx) => ({
                        key: s.modeLabel,
                        label: s.modeLabel,
                        idx,
                      }))
                  ).map((item) => {
                    const isSelected = activeSpecimenIndex === item.idx;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActiveSpecimenIndex(item.idx)}
                        className={`border p-3.5 text-left font-mono-tech text-[11px] tracking-[0.13em] uppercase transition-colors cursor-pointer ${
                          isSelected
                            ? 'border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]'
                            : 'border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
                        }`}
                      >
                        <div className="text-[10px] opacity-70 mb-1">
                          0{item.idx + 1}
                        </div>
                        <div className="line-clamp-2">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>

            {/* 02 — Features / Objectives & Explored Scope */}
            <section
              id="detail-features"
              className="scroll-mt-24 border-t border-[var(--line)] pt-10"
            >
              <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                // 02 — {project.featuresHeading}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {project.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="border border-[var(--line)] p-5 bg-[var(--bg)]"
                  >
                    <div className="font-mono-tech text-[11px] tracking-[0.16em] text-[var(--muted)]">
                      0{index + 1}
                    </div>
                    <h2 className="mt-2 text-base font-semibold tracking-[-0.01em] text-[var(--fg)]">
                      {feature.title}
                    </h2>
                    <p className="mt-2 text-[13.5px] leading-[1.68] text-[var(--muted)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {project.potentialScopeItems &&
                project.potentialScopeItems.length > 0 && (
                  <div className="mt-8 border border-[var(--line)] p-6">
                    <div className="font-mono-tech text-xs tracking-[0.16em] text-[var(--fg)] uppercase">
                      // {project.potentialScopeHeading}
                    </div>
                    {project.potentialScopeNote && (
                      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                        {project.potentialScopeNote}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.potentialScopeItems.map((scopeItem) => (
                        <span
                          key={scopeItem}
                          className="border border-[var(--line)] px-3 py-1.5 font-mono-tech text-[11px] tracking-[0.12em] text-[var(--fg)]"
                        >
                          {scopeItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </section>

            {/* 03 — Technology Stack & Platforms */}
            <section
              id="detail-stack"
              className="scroll-mt-24 border-t border-[var(--line)] pt-10"
            >
              <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                // 03 — TECHNOLOGY & PLATFORM ARCHITECTURE
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-[var(--line)] p-6">
                  <div className="font-mono-tech text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
                    TECHNOLOGY STACK
                  </div>
                  <ul className="mt-4 space-y-2.5 font-mono-tech text-xs tracking-[0.1em] text-[var(--fg)]">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center justify-between border-b border-[var(--line)] pb-2 last:border-b-0 last:pb-0"
                      >
                        <span>{tech}</span>
                        <span className="text-[var(--muted)]">//</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[var(--line)] p-6">
                  <div className="font-mono-tech text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
                    PLATFORMS & STAGE
                  </div>
                  <ul className="mt-4 space-y-2.5 font-mono-tech text-xs tracking-[0.1em] text-[var(--fg)]">
                    {project.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="flex items-center justify-between border-b border-[var(--line)] pb-2 last:border-b-0 last:pb-0"
                      >
                        <span>{platform}</span>
                        <span className="text-[var(--muted)]">--</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Project-to-Project Pagination */}
            <nav
              aria-label="Other studio projects"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[var(--line)] pt-10"
            >
              <Link
                href={`/projects/${prevProject.slug}`}
                className="border border-[var(--line)] p-5 transition-colors hover:border-[var(--fg)]"
              >
                <div className="font-mono-tech text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase">
                  &larr; PREVIOUS // {prevProject.number}
                </div>
                <div className="mt-1.5 text-lg font-semibold text-[var(--fg)]">
                  {prevProject.name}
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="border border-[var(--line)] p-5 text-left sm:text-right transition-colors hover:border-[var(--fg)]"
              >
                <div className="font-mono-tech text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase">
                  NEXT // {nextProject.number} &rarr;
                </div>
                <div className="mt-1.5 text-lg font-semibold text-[var(--fg)]">
                  {nextProject.name}
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

