import React from 'react';
import { STUDIO_CONFIG } from '@/data/studio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Section Identifier */}
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
          / {STUDIO_CONFIG.contactSectionLabel}
        </div>

        {/* Main Split Contact Block */}
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Oversized Closing Headline */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2
              id="contact-heading"
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[0.98] tracking-[-0.035em] uppercase"
            >
              {STUDIO_CONFIG.contactHeadline.map((line, index) => {
                const isLast = index === STUDIO_CONFIG.contactHeadline.length - 1;
                return (
                  <span key={line} className="block">
                    {line}
                    {isLast && (
                      <span className="editorial-cursor" aria-hidden="true" />
                    )}
                  </span>
                );
              })}
            </h2>
          </div>

          {/* Right: Supporting Statement & Contact Action */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--line)] lg:pl-12 flex flex-col justify-between gap-8">
            <div>
              <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
                //
              </div>

              <div className="mt-4 font-mono-tech text-xs sm:text-[13px] font-medium tracking-[0.18em] text-[var(--fg)] uppercase">
                {STUDIO_CONFIG.contactHeadingLabel}
              </div>

              <div className="mt-3 space-y-1.5 text-[14.5px] sm:text-[15px] leading-relaxed text-[var(--fg)]/85">
                {STUDIO_CONFIG.contactLines.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === STUDIO_CONFIG.contactLines.length - 1
                        ? 'text-[var(--fg)] font-medium'
                        : ''
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="inline-block border-b border-[var(--fg)] pb-1 font-mono-tech text-sm sm:text-base tracking-[0.06em] text-[var(--fg)] transition-opacity hover:opacity-70"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </div>
            </div>

            <div>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="inline-flex items-center gap-2 border border-[var(--fg)] px-6 py-3.5 font-mono-tech text-xs tracking-[0.18em] text-[var(--fg)] uppercase transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
              >
                <span>[{STUDIO_CONFIG.contactCtaLabel}</span>
                <span aria-hidden="true">&rarr;]</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Studio Colophon */}
        <div className="mt-20 border-t border-[var(--line)] pt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between font-mono-tech text-[11px] tracking-[0.16em] uppercase">
          <div className="space-y-1">
            <div className="font-semibold text-[var(--fg)]">
              {STUDIO_CONFIG.footerLines[0]}
            </div>
            <div className="text-[var(--muted)]">{STUDIO_CONFIG.footerLines[1]}</div>
            <div className="text-[var(--muted)]">{STUDIO_CONFIG.footerKeywords}</div>
            <div className="text-[var(--muted)]">{STUDIO_CONFIG.footerLines[2]}</div>
          </div>

          <div className="space-y-1 sm:text-right text-[var(--muted)]">
            <div>&copy; {currentYear} INTDOORLAB</div>
            <div>{STUDIO_CONFIG.domain.toUpperCase()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
