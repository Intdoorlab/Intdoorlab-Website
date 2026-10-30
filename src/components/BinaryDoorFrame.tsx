'use client';

import React, { useEffect, useId, useMemo, useRef } from 'react';
import { clamp, lerp } from '@/lib/animations';
import { useTheme } from './ThemeProvider';

export interface BinaryDoorFrameProps {
  /** 0 = door fully open, 1 = door fully closed */
  closeProgress?: number;
  /** Color of the four binary doorframe segments */
  binaryColor?: string;
  /** Interior opening fill behind the solid #111111 door leaf */
  openingColor?: string;
  /** Independently controllable binary strings for all 4 segments */
  topBinary?: string;
  rightBinary?: string;
  bottomBinary?: string;
  leftBinary?: string;
  /** Whether binary digits travel continuously along their frame paths */
  animated?: boolean;
  /** Travel speed in SVG units per second */
  speed?: number;
  className?: string;
  ariaLabel?: string;
}

/** Number of times each binary string is repeated along its path (covers path length + one period). */
const REPEATS = 4;

/**
 * Pure 2D geometric doorway and 4-segment binary doorframe.
 * - LEFT segment: rotated 90 deg counterclockwise (bottom-to-top path)
 * - TOP segment: horizontal/angled doorframe path (left-to-right)
 * - RIGHT segment: rotated 90 deg clockwise (top-to-bottom path)
 * - BOTTOM segment: horizontal/angled doorframe path (left-to-right)
 * - Solid #111111 door panel hinges on the left edge and sweeps flat across the opening.
 *
 * Binary digits travel infinitely along each segment in a continuous clockwise loop
 * (top -> right, right -> down, bottom -> left, left -> up). Glyphs naturally enter and
 * exit at the ends of each path, so the frame geometry never changes.
 */
export function BinaryDoorFrame({
  closeProgress = 0,
  binaryColor = 'var(--fg, #111111)',
  openingColor = 'var(--door-opening, #FAFAFA)',
  topBinary = '0 1 1 0 0 1 0 0 1 1 0 1',
  rightBinary = '1 0 1 1 0 1 0 1 1 0 0 1 0 1 1 0 1',
  bottomBinary = '0 1 1 0 0 1 1 0 1 0 1 0',
  leftBinary = '0 1 0 1 1 0 0 1 1 0 1 0 1 1 0',
  animated = true,
  speed = 16,
  className = '',
  ariaLabel = 'IntDoorLab geometric binary door',
}: BinaryDoorFrameProps) {
  const uid = useId().replace(/:/g, '');
  const { theme } = useTheme();
  const flowSign = theme === 'dark' ? -1 : 1;
  const p = clamp(closeProgress, 0, 1);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRefs = useRef<(SVGTextPathElement | null)[]>([]);

  // Inner doorway frame vertices (exact 2D architectural trapezoid from reference)
  const hingeX = 76;
  const hingeTopY = 98;
  const hingeBottomY = 402;

  const frameRightX = 266;
  const frameTopRightY = 58;
  const frameBottomRightY = 442;

  // Open-state free edge of the solid black door leaf
  const openDoorRightX = 160;
  const openDoorTopRightY = 128;
  const openDoorBottomRightY = 372;

  // Interpolated 2D door leaf free-edge vertices as door closes (0 -> 1)
  const doorRightX = lerp(openDoorRightX, frameRightX, p);
  const doorTopRightY = lerp(openDoorTopRightY, frameTopRightY, p);
  const doorBottomRightY = lerp(openDoorBottomRightY, frameBottomRightY, p);

  const openingPoints = `${hingeX},${hingeTopY} ${frameRightX},${frameTopRightY} ${frameRightX},${frameBottomRightY} ${hingeX},${hingeBottomY}`;
  const doorPoints = `${hingeX},${hingeTopY} ${doorRightX},${doorTopRightY} ${doorRightX},${doorBottomRightY} ${hingeX},${hingeBottomY}`;

  // Four binary frame paths positioned directly along the doorframe lines (no extra box)
  // `dir`: +1 travels toward the path end, -1 travels toward the path start.
  const segments = useMemo(
    () => [
      {
        key: 'top',
        text: topBinary,
        dir: 1, // left -> right
        d: `M ${hingeX + 2} ${hingeTopY - 8} L ${frameRightX} ${frameTopRightY - 8}`,
      },
      {
        key: 'right',
        text: rightBinary,
        dir: 1, // top -> bottom (rotated 90deg clockwise)
        d: `M ${frameRightX + 10} ${frameTopRightY} L ${frameRightX + 10} ${frameBottomRightY}`,
      },
      {
        key: 'bottom',
        text: bottomBinary,
        dir: -1, // right -> left
        d: `M ${hingeX + 2} ${hingeBottomY + 15} L ${frameRightX} ${frameBottomRightY + 15}`,
      },
      {
        key: 'left',
        text: leftBinary,
        dir: 1, // bottom -> top (rotated 90deg counterclockwise)
        d: `M ${hingeX - 10} ${hingeBottomY} L ${hingeX - 10} ${hingeTopY}`,
      },
    ],
    [topBinary, rightBinary, bottomBinary, leftBinary]
  );

  useEffect(() => {
    let rafId = 0;
    let cancelled = false;
    let isVisible = true;
    let periods: number[] = [];
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Measure the exact advance of one repeat period ("<binary> ") in SVG units,
    // so the loop wraps seamlessly regardless of the resolved font.
    const measure = () => {
      const m = measureRef.current;
      if (!m) return;
      periods = segments.map((segment) => {
        m.textContent = segment.text;
        const single = m.getComputedTextLength();
        m.textContent = `${segment.text} ${segment.text}`;
        const double = m.getComputedTextLength();
        return Math.max(double - single, 1);
      });
      m.textContent = '';
    };

    const apply = (elapsedSeconds: number, moving: boolean) => {
      segments.forEach((segment, i) => {
        const el = textPathRefs.current[i];
        const period = periods[i];
        if (!el || !period) return;
        const effectiveDir = segment.dir * flowSign;
        const phase = moving ? (elapsedSeconds * speed) % period : period / 2;
        const offset = effectiveDir > 0 ? -period + phase : -phase;
        el.setAttribute('startOffset', offset.toFixed(2));
      });
    };

    const shouldMove = () => animated && !reduceQuery.matches;
    let startTime = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      if (isVisible) apply((now - startTime) / 1000, true);
      rafId = window.requestAnimationFrame(tick);
    };

    const init = () => {
      if (cancelled) return;
      window.cancelAnimationFrame(rafId);
      measure();
      startTime = performance.now();
      apply(0, shouldMove());
      if (shouldMove()) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const fontsReady: Promise<unknown> =
      typeof document !== 'undefined' && document.fonts
        ? document.fonts.ready
        : Promise.resolve();
    fontsReady.then(init);

    // Pause updates while the door is off-screen
    let observer: IntersectionObserver | null = null;
    if (svgRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      });
      observer.observe(svgRef.current);
    }

    reduceQuery.addEventListener('change', init);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      observer?.disconnect();
      reduceQuery.removeEventListener('change', init);
    };
  }, [segments, animated, speed, flowSign]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 500"
      role="img"
      aria-label={ariaLabel}
      className={`block select-none ${className}`}
    >
      <defs>
        {segments.map((segment) => (
          <path key={segment.key} id={`door-${segment.key}-${uid}`} d={segment.d} />
        ))}
      </defs>

      {/* Flat 2D doorway interior opening */}
      <polygon points={openingPoints} fill={openingColor} />

      {/* Solid 2D door panel */}
      <polygon
        points={doorPoints}
        fill="var(--door-fill, #111111)"
        stroke="var(--door-stroke, transparent)"
        strokeWidth="1"
      />

      {/* Four independently controllable binary doorframe segments */}
      <g
        style={{ fill: binaryColor }}
        className="font-mono-tech"
        fontSize="11.5"
        fontWeight="500"
        letterSpacing="0.22em"
        aria-hidden="true"
      >
        {/* Hidden measurement node (same typographic settings) */}
        <text ref={measureRef} x="0" y="-100" visibility="hidden" />

        {segments.map((segment, i) => (
          <text key={segment.key}>
            <textPath
              ref={(el) => {
                textPathRefs.current[i] = el;
              }}
              href={`#door-${segment.key}-${uid}`}
            >
              {Array.from({ length: REPEATS }, () => segment.text).join(' ')}
            </textPath>
          </text>
        ))}
      </g>
    </svg>
  );
}
