'use client';

import React from 'react';
import { BinaryDoorFrame } from './BinaryDoorFrame';
import { STUDIO_CONFIG } from '@/data/studio';

export interface DoorAnimationProps {
  /** Scroll-driven door closing state [0..1] */
  closeProgress: number;
  binaryColor: string;
  secondaryTextColor: string;
  reducedMotion?: boolean;
}

/**
 * Wraps the BinaryDoorFrame alongside the editorial vertical door caption
 * ("A DOOR TO IDEAS AND WHAT'S NEXT.") and optional scroll progress readout.
 */
export function DoorAnimation({
  closeProgress,
  binaryColor,
  secondaryTextColor,
  reducedMotion = false,
}: DoorAnimationProps) {
  const effectiveClose = reducedMotion ? (closeProgress > 0.5 ? 1 : 0) : closeProgress;
  const percentClosed = Math.round(effectiveClose * 100);

  return (
    <div className="relative flex items-center justify-center lg:justify-end w-full">
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {/* Main Binary Door SVG */}
        <div className="w-[150px] xs:w-[175px] sm:w-[240px] lg:w-[275px] xl:w-[295px] shrink-0">
          <BinaryDoorFrame
            closeProgress={effectiveClose}
            binaryColor={binaryColor}
            openingColor="var(--door-opening, #FAFAFA)"
            ariaLabel={`IntDoorLab binary door — ${percentClosed}% closed`}
            className="w-full h-auto"
          />
        </div>

        {/* Supporting Door Caption (Right of Door, matching reference composition) */}
        <div className="flex flex-col justify-between py-2 sm:py-6 select-none shrink-0">
          <span
            className="font-mono-tech text-[9.5px] sm:text-[10px] tracking-[0.24em] mb-2 sm:mb-4 block opacity-50"
            style={{ color: secondaryTextColor }}
          >
            //
          </span>

          <div
            className="font-mono-tech text-[9px] xs:text-[9.5px] sm:text-[10.5px] leading-[1.65] sm:leading-[1.7] tracking-[0.18em] sm:tracking-[0.22em] uppercase"
            style={{ color: secondaryTextColor }}
          >
            {STUDIO_CONFIG.doorCaption.map((word, idx) => (
              <div key={idx}>{word}</div>
            ))}
          </div>

          <div
            className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase mt-3 sm:mt-6 tabular-nums opacity-60"
            style={{ color: secondaryTextColor }}
            aria-hidden="true"
          >
            [{String(percentClosed).padStart(3, '0')}%]
          </div>
        </div>
      </div>
    </div>
  );
}

