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
        className="hero-stage sticky top-0 flex min-h-screen flex-col justify-between pt-20 pb-8 sm:pt-24 sm:pb-10 overflow-hidden"
        style={
          {
            '--hero-bg-t': backgroundMix.toFixed(4),
            '--hero-fg-t': foregroundMix.toFixed(4),
          } as React.CSSProperties
        }
      >
        {/* Main Asymmetric Editorial Grid */}
        <div className="mx-auto my-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Far-Left Section Identifier & Keywords Column */}
            <div className="lg:col-span-2 flex lg:flex-col justify-between lg:justify-start items-start gap-6 lg:self-start lg:pt-3">
              <div>
                <div
                  className="font-mono-tech text-xs tracking-[0.2em]"
                  style={{ color: secondaryTextColor }}
                >
                  /
                </div>
                <div className="font-mono-tech text-xs sm:text-sm font-medium tracking-[0.16em] mt-0.5">
                  {STUDIO_CONFIG.heroSectionLabel}
                </div>
                <div
                  className="mt-3 h-px w-6"
                  style={{ backgroundColor: primaryTextColor }}
                />
              </div>

              <div className="lg:mt-6 space-y-1 font-mono-tech text-[11px] tracking-[0.18em] uppercase">
                {STUDIO_CONFIG.heroKeywords.map((kw) => (
                  <div key={kw}>{kw}</div>
                ))}
                <div
                  className="pt-2 tracking-[0.22em]"
                  style={{ color: secondaryTextColor }}
                >
                  //
                </div>
              </div>
            </div>

            {/* Center-Left Editorial Headline & Studio Statement */}
            <div className="lg:col-span-5 xl:col-span-6">
              <h1 className="text-[2.65rem] leading-[0.98] sm:text-6xl lg:text-[4.15rem] xl:text-[4.85rem] font-bold tracking-[-0.035em] uppercase">
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

              <div className="mt-6 sm:mt-8 max-w-[540px] space-y-2.5">
                <p
                  className="text-sm sm:text-base font-medium leading-[1.6]"
                  style={{ color: primaryTextColor }}
                >
                  {STUDIO_CONFIG.heroLead}
                </p>
                <p
                  className="font-mono-tech text-xs sm:text-[13.5px] leading-[1.75]"
                  style={{ color: secondaryTextColor }}
                >
                  {STUDIO_CONFIG.heroDescription}
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-4 border px-6 py-3.5 font-mono-tech text-xs tracking-[0.18em] uppercase transition-colors duration-150 hover:bg-[var(--hero-fg)] hover:text-[var(--hero-bg)]"
                  style={{
                    borderColor: primaryTextColor,
                  }}
                >
                  <span>[{STUDIO_CONFIG.heroCta}]</span>
                </Link>
              </div>
            </div>

            {/* Right Column — Signature Binary Door */}
            <div className="lg:col-span-5 xl:col-span-4">
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
            className="flex items-end justify-between border-t pt-4"
            style={{ borderColor }}
          >
            <div
              className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.18em] uppercase"
              style={{ color: secondaryTextColor }}
            >
              INT // DOOR // LAB
            </div>

            <div className="flex flex-col items-center gap-2">
              <span
                className="font-mono-tech text-[11px] tracking-[0.22em] uppercase"
                style={{ color: secondaryTextColor }}
              >
                {STUDIO_CONFIG.scrollLabel}
              </span>
              <span
                className="block h-6 w-px"
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

