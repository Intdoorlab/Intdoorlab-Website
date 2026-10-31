'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STUDIO_CONFIG } from '@/data/studio';
import { PROJECTS } from '@/data/projects';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

export interface NavigationProps {
  /** Passed on homepage when sticky hero is in its darkened scroll state */
  invertedOverHero?: boolean;
}

const NAV_ITEMS = [
  { index: '01', label: 'PROJECTS', href: '/#projects', sectionId: 'projects' },
  { index: '02', label: 'ABOUT', href: '/#about', sectionId: 'about' },
  { index: '03', label: 'NOTES', href: '/#notes', sectionId: 'notes' },
] as const;

export function Navigation({ invertedOverHero = false }: NavigationProps) {
  const pathname = usePathname();
  useTheme(); // Subscribes header to theme switches
  const isProjectRoute = pathname?.startsWith('/projects');
  const [activeSection, setActiveSection] = useState<string>(
    isProjectRoute ? 'projects' : ''
  );
  const [statusOpen, setStatusOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isProjectRoute) {
      setActiveSection('projects');
      return;
    }

    const handleScroll = () => {
      const sectionIds = ['projects', 'about', 'notes'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectRoute]);

  useEffect(() => {
    if (!statusOpen && !mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStatusOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [statusOpen, mobileMenuOpen]);

  // In both themes, the sticky hero transitions to the opposite polarity as the door closes
  // (light -> dark in light mode, dark -> light in dark mode), so the header inverts while over it.
  const inverted = invertedOverHero;

  const bgClass = inverted
    ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--inv-line)]'
    : 'bg-[var(--bg)] text-[var(--fg)] border-[var(--line)]';
  const mutedClass = inverted ? 'text-[var(--inv-muted)]' : 'text-[var(--muted)]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${bgClass}`}
      style={
        { '--nav-bg': inverted ? 'var(--fg)' : 'var(--bg)' } as React.CSSProperties
      }
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Wordmark & Tagline */}
        <div className="flex flex-col gap-0.5 justify-center">
          <Link
            href="/"
            className="text-sm sm:text-[15px] font-bold tracking-[0.22em] uppercase transition-opacity hover:opacity-70 leading-none"
          >
            {STUDIO_CONFIG.uppercaseName}
          </Link>
          <span className={`hidden sm:block font-mono-tech text-[11px] sm:text-[11.5px] tracking-[0.14em] uppercase leading-tight font-medium ${mutedClass}`}>
            {STUDIO_CONFIG.tagline}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary studio navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                className="group relative flex items-center gap-1.5 py-1 font-mono-tech text-xs tracking-[0.16em] uppercase leading-none"
              >
                <span className={mutedClass}>[{item.index}]</span>
                <span
                  className={`relative pb-0.5 leading-none ${
                    isActive
                      ? 'border-b border-current font-medium'
                      : 'border-b border-transparent group-hover:border-current'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Studio Indicator [ ● ] */}
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setStatusOpen((prev) => !prev)}
              aria-expanded={statusOpen}
              aria-label="Toggle studio status readout"
              className="font-mono-tech text-xs tracking-[0.18em] px-1 py-1 transition-opacity hover:opacity-70 cursor-pointer flex items-center gap-1.5 leading-none"
            >
              <span className={`${mutedClass} leading-none`}>[</span>
              <span
                className="inline-block h-2 w-2 bg-current"
                style={{ borderRadius: '9999px' }}
                aria-hidden="true"
              />
              <span className={`${mutedClass} leading-none`}>]</span>
            </button>

            {statusOpen && (
              <div
                className={`absolute right-0 top-full mt-3 w-72 border p-4 font-mono-tech text-[11px] leading-relaxed tracking-[0.1em] ${
                  inverted
                    ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--inv-line)]'
                    : 'bg-[var(--bg)] text-[var(--fg)] border-[var(--fg)]'
                }`}
              >
                <div className="flex items-center justify-between border-b border-current/20 pb-2 mb-2.5 uppercase">
                  <span>STUDIO INDEX</span>
                  <button
                    type="button"
                    onClick={() => setStatusOpen(false)}
                    className="uppercase opacity-70 hover:opacity-100 cursor-pointer"
                  >
                    [X]
                  </button>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className={mutedClass}>IDENTITY</span>
                    <span>{STUDIO_CONFIG.tagline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={mutedClass}>ACTIVE BUILDS</span>
                    <span>0{PROJECTS.length} IN PROGRESS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={mutedClass}>BASE</span>
                    <span>IRELAND</span>
                  </div>
                  <div className="pt-2 border-t border-current/20">
                    <a
                      href={`mailto:${STUDIO_CONFIG.email}`}
                      className="underline underline-offset-4 hover:opacity-75 break-all"
                    >
                      {STUDIO_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Minimalist Theme Switch */}
          <ThemeToggle />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="font-mono-tech text-xs tracking-[0.16em] uppercase py-1 px-2 border border-current cursor-pointer"
          >
            {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className={`md:hidden border-t px-5 py-5 space-y-4 ${bgClass}`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.sectionId}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 font-mono-tech text-xs tracking-[0.18em] uppercase border-b border-current/15"
            >
              <span>
                <span className={`${mutedClass} mr-2`}>[{item.index}]</span>
                {item.label}
              </span>
              <span>-&gt;</span>
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between font-mono-tech text-[11px] tracking-[0.14em]">
            <span className={mutedClass}>CONTACT</span>
            <a href={`mailto:${STUDIO_CONFIG.email}`} className="underline underline-offset-4">
              {STUDIO_CONFIG.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

