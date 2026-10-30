'use client';

import React from 'react';
import { useTheme, type Theme } from './ThemeProvider';

const OPTIONS: { value: Theme; label: string }[] = [
  { value: 'light', label: 'LIGHT' },
  { value: 'dark', label: 'DARK' },
];

/**
 * Minimal two-segment typographic theme switch.
 * A flat solid block slides beneath the active label.
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const activeIndex = theme === 'dark' ? 1 : 0;

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={`relative grid grid-cols-2 border border-current font-mono-tech text-[10px] tracking-[0.18em] uppercase ${className}`}
    >
      {/* Sliding solid indicator */}
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-current transition-transform duration-[520ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />

      {OPTIONS.map((option, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(option.value)}
            className="relative z-10 px-2.5 py-1 cursor-pointer transition-colors duration-[520ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none"
          >
            {/* Active label is cut out of the solid block using the page background colour */}
            <span
              className={
                isActive
                  ? 'text-[var(--nav-bg,var(--bg))]'
                  : 'opacity-60 hover:opacity-100'
              }
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

