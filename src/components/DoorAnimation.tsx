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
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="flex items-center gap-4 sm:gap-7">
        {/* Main Binary Door SVG */}
        <div className="w-[210px] sm:w-[250px] lg:w-[275px] xl:w-[295px] shrink-0">
          <BinaryDoorFrame
            closeProgress={effectiveClose}
            binaryColor={binaryColor}
            openingColor="var(--door-opening, #FAFAFA)"
            ariaLabel={`IntDoorLab binary door — ${percentClosed}% closed`}
            className="w-full h-auto"
          />
        </div>

        {/* Supporting Door Caption (Right of Door, matching reference composition) */}
        <div className="flex flex-col justify-between py-6 select-none">
          <span
            className="font-mono-tech text-[11px] tracking-[0.2em] mb-5 block"
            style={{ color: secondaryTextColor }}
          >
            //
          </span>

          <div
            className="font-mono-tech text-[11px] sm:text-xs leading-[1.65] tracking-[0.16em] uppercase"
            style={{ color: binaryColor }}
          >
            {STUDIO_CONFIG.doorCaption.map((word, idx) => (
              <div key={idx}>{word}</div>
            ))}
          </div>

          <div
            className="font-mono-tech text-[10px] tracking-[0.18em] uppercase mt-8 tabular-nums"
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

