import React from 'react';
import {
  NOTES_ENTRIES,
  NOTES_SECTION_COPY,
  NOTES_TOPICS,
  SHOW_EMPTY_NOTES_INDEX,
} from '@/data/notes';

export function Notes() {
  if (NOTES_ENTRIES.length === 0 && !SHOW_EMPTY_NOTES_INDEX) {
    return null;
  }

  return (
    <section
      id="notes"
      aria-labelledby="notes-heading"
      className="scroll-mt-16 border-t border-[var(--line)] bg-[var(--bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
          / {NOTES_SECTION_COPY.sectionLabel}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end border-b border-[var(--line)] pb-8">
          <div className="lg:col-span-5">
            <h2
              id="notes-heading"
              className="text-3xl sm:text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-[var(--fg)] uppercase"
            >
              {NOTES_SECTION_COPY.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base font-medium text-[var(--fg)]">
              {NOTES_SECTION_COPY.lead}
            </p>
            <p className="mt-1 text-xs font-mono-tech tracking-[0.12em] uppercase text-[var(--muted)]">
              {NOTES_SECTION_COPY.subLead}
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
            {NOTES_SECTION_COPY.paragraphs.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {NOTES_ENTRIES.length > 0 ? (
          <div className="mt-8 divide-y divide-[var(--line)] border-b border-[var(--line)]">
            {NOTES_ENTRIES.map((note) => (
              <article
                key={note.slug}
                className="py-7 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-baseline"
              >
                <div className="lg:col-span-3 font-mono-tech text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
                  <div>{note.date}</div>
                  <div className="mt-1 text-[11px]">// {note.category}</div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-xl font-semibold text-[var(--fg)]">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {note.summary}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:text-right font-mono-tech text-xs tracking-[0.16em] uppercase">
                  {note.href ? (
                    <a
                      href={note.href}
                      className="text-[var(--fg)] hover:opacity-70"
                    >
                      READ &rarr;
                    </a>
                  ) : (
                    <span className="text-[var(--muted)]">LOGGED</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-[var(--line)] p-6 sm:p-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--fg)] uppercase shrink-0">
              [ ARCHIVE INITIALISING ]
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {NOTES_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="border border-[var(--line)] px-3 py-1.5 font-mono-tech text-[11px] tracking-[0.12em] text-[var(--muted)] uppercase"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
