'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { STUDIO_CONFIG } from '@/data/studio';
import {
  clamp,
  computeHeroScrollState,
  type HeroScrollVisualState,
} from '@/lib/animations';
import { DoorAnimation } from './DoorAnimation';

export interface HeroProps {
  onHeroDarkStateChange?: (isDark: boolean) => void;
}

const INITIAL_VISUAL_STATE = computeHeroScrollState(0);

/**
 * Asymmetric Swiss-editorial Hero with scroll-linked 2D door-closing animation
 * and scoped background darkening (light theme: #FAFAFA -> #111111,
 * dark theme: #111111 -> deeper black).
 * Only this Hero section transitions background colour; all subsequent sections
 * keep the active theme's studio palette.
 */
export function Hero({ onHeroDarkStateChange }: HeroProps) {
  const runwayRef = useRef<HTMLElement | null>(null);
  const [visualState, setVisualState] =
    useState<HeroScrollVisualState>(INITIAL_VISUAL_STATE);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;
      const el = runwayRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollableDistance = Math.max(el.offsetHeight - viewportHeight, 1);
      const scrolled = -rect.top;
      const rawProgress = clamp(scrolled / scrollableDistance, 0, 1);

      const nextState = computeHeroScrollState(rawProgress);
      setVisualState(nextState);

      // Header remains inverted only while user is still viewing the sticky hero
      const heroStillOccupyingTop = rect.bottom > 72;
      onHeroDarkStateChange?.(nextState.isDarkHero && heroStillOccupyingTop);
    };

    const requestUpdate = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [onHeroDarkStateChange]);

  const { doorCloseProgress, backgroundMix, foregroundMix } = visualState;

  // Colours resolve in CSS (.hero-stage) from the active theme + scroll mix values,
  // so the hero never flashes the wrong palette and theme switches apply instantly.
  const primaryTextColor = 'var(--hero-fg)';
  const secondaryTextColor = 'var(--hero-muted)';
  const borderColor = 'var(--hero-border)';
  const binaryColor = 'var(--hero-fg)';

  return (
    <section
      ref={runwayRef}
      aria-label="IntDoorLab Studio Introduction"
      className="relative h-[130vh] sm:h-[135vh]"
    >
      {/* Sticky full-viewport stage that darkens as the binary door closes */}
      <div
        className="hero-stage sticky top-0 flex min-h-[100dvh] flex-col justify-between pt-16 pb-4 sm:pt-20 sm:pb-6 overflow-x-clip"
        style={
          {
            '--hero-bg-t': backgroundMix.toFixed(4),
            '--hero-fg-t': foregroundMix.toFixed(4),
          } as React.CSSProperties
        }
      >
        {/* Main Asymmetric Editorial Grid */}
        <div className="mx-auto my-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-3 sm:py-0">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Far-Left Section Identifier & Keywords Column */}
            <div className="lg:col-span-2 flex items-center justify-between lg:flex-col lg:justify-start lg:items-start gap-4 lg:self-start lg:pt-2">
              <div>
                <div
                  className="font-mono-tech text-[10px] sm:text-[10.5px] tracking-[0.22em] uppercase"
                  style={{ color: secondaryTextColor }}
                >
                  / {STUDIO_CONFIG.heroSectionLabel}
                </div>
                <div
                  className="mt-2.5 h-px w-6 hidden lg:block"
                  style={{ backgroundColor: secondaryTextColor }}
                />
              </div>

              <div
                className="font-mono-tech text-[9.5px] sm:text-[10px] lg:text-[10.5px] tracking-[0.2em] sm:tracking-[0.22em] uppercase"
                style={{ color: secondaryTextColor }}
              >
                {/* On desktop: vertical keyword list. On mobile: compact inline list */}
                <div className="hidden lg:block space-y-1.5">
                  {STUDIO_CONFIG.heroKeywords.map((kw) => (
                    <div key={kw}>{kw}</div>
                  ))}
                  <div className="pt-1 tracking-[0.24em] opacity-60">
                    //
                  </div>
                </div>
                <div className="lg:hidden tracking-[0.16em] opacity-75">
                  {STUDIO_CONFIG.heroKeywords.join(' // ')}
                </div>
              </div>
            </div>

            {/* Center-Left Editorial Headline & Studio Statement */}
            <div className="lg:col-span-6 xl:col-span-6">
              <h1 className="text-[2rem] leading-[1.02] xs:text-[2.35rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] font-bold tracking-[-0.035em] uppercase">
                {STUDIO_CONFIG.heroHeadline.map((line, index) => {
                  const isLast = index === STUDIO_CONFIG.heroHeadline.length - 1;
                  return (
                    <span key={line} className="block">
                      {line}
                      {isLast && (
                        <span className="editorial-cursor" aria-hidden="true" />
                      )}
                    </span>
                  );
                })}
              </h1>

              <div className="mt-3.5 sm:mt-6 max-w-[540px] space-y-2 sm:space-y-3">
                <p
                  className="text-sm sm:text-lg font-medium leading-snug tracking-tight"
                  style={{ color: primaryTextColor }}
                >
                  {STUDIO_CONFIG.heroLead}
                </p>
                <p
                  className="text-[13.5px] sm:text-[15.5px] leading-[1.65] sm:leading-[1.72] font-normal"
                  style={{ color: primaryTextColor, opacity: 0.85 }}
                >
                  {STUDIO_CONFIG.heroDescription}
                </p>
              </div>

              <div className="mt-4 sm:mt-7">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-4 border px-5 py-2.5 sm:px-6 sm:py-3 font-mono-tech text-xs tracking-[0.18em] uppercase transition-colors duration-150 hover:bg-[var(--hero-fg)] hover:text-[var(--hero-bg)] min-h-[44px]"
                  style={{
                    borderColor: primaryTextColor,
                  }}
                >
                  <span>[{STUDIO_CONFIG.heroCta}]</span>
                </Link>
              </div>
            </div>

            {/* Right Column — Signature Binary Door */}
            <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-end my-1 sm:my-0">
              <DoorAnimation
                closeProgress={doorCloseProgress}
                binaryColor={binaryColor}
                secondaryTextColor={secondaryTextColor}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue + Progress Line */}
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex items-end justify-between border-t pt-3"
            style={{ borderColor }}
          >
            <div
              className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.18em] uppercase"
              style={{ color: secondaryTextColor }}
            >
              INT // DOOR // LAB
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span
                className="font-mono-tech text-[10.5px] tracking-[0.2em] uppercase"
                style={{ color: secondaryTextColor }}
              >
                {STUDIO_CONFIG.scrollLabel}
              </span>
              <span
                className="block h-5 w-px"
                style={{ backgroundColor: secondaryTextColor }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

