import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS, TEAM_SECTION_COPY } from '@/data/team';

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function Team() {
  const isSingleMember = TEAM_MEMBERS.length === 1;

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-16 border-t border-[var(--line)] bg-[var(--bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header & Positioning Copy */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end border-b border-[var(--line)] pb-10">
          <div className="lg:col-span-5">
            <div className="font-mono-tech text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
              {TEAM_SECTION_COPY.sectionLabel}
            </div>
            <h2
              id="team-heading"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-[var(--fg)] uppercase"
            >
              {TEAM_SECTION_COPY.statement}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-3">
            {TEAM_SECTION_COPY.paragraphs.map((line, i) => (
              <p key={i} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[var(--fg)]/85">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Confirmed Team Members — Expands automatically as members are added to src/data/team.ts */}
        <div
          className={
            isSingleMember
              ? 'mt-10'
              : 'mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={member.id}
              className={`border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-8 ${
                isSingleMember
                  ? 'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start'
                  : 'flex flex-col justify-between'
              }`}
            >
              {/* Portrait or Typographic Monogram Frame */}
              <div className={isSingleMember ? 'lg:col-span-3' : 'mb-6'}>
                {member.photoUrl ? (
                  <div className="relative aspect-[4/5] w-full max-w-[240px] border border-[var(--fg)] bg-[var(--fg)] overflow-hidden">
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      sizes="240px"
                      className="object-cover grayscale"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/4] max-w-[200px] flex-col justify-between border border-[var(--fg)] bg-[var(--bg)] p-5 font-mono-tech">
                    <div className="flex items-center justify-between text-[11px] tracking-[0.18em] text-[var(--muted)]">
                      <span>0{index + 1}</span>
                      <span>// FOUNDER</span>
                    </div>
                    <div className="text-3xl font-bold tracking-[0.12em] text-[var(--fg)]">
                      {getInitials(member.name)}
                    </div>
                    <div className="text-[10px] tracking-[0.16em] text-[var(--muted)] uppercase">
                      INTDOORLAB
                    </div>
                  </div>
                )}
              </div>

              {/* Member Identity & Bio */}
              <div className={isSingleMember ? 'lg:col-span-9' : ''}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] pb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-[0.04em] text-[var(--fg)] uppercase">
                      {member.name}
                      {member.nativeName && (
                        <span className="ml-3 text-base font-normal text-[var(--muted)]">
                          {member.nativeName}
                        </span>
                      )}
                    </h3>
                    <div className="mt-1 font-mono-tech text-xs tracking-[0.18em] text-[var(--fg)] uppercase">
                      {member.role}
                    </div>
                  </div>

                  {member.location && (
                    <div className="font-mono-tech text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">
                      {member.location}
                    </div>
                  )}
                </div>

                {member.educationLines && member.educationLines.length > 0 && (
                  <div className="mt-4 space-y-0.5 font-mono-tech text-xs leading-relaxed text-[var(--fg)]">
                    {member.educationLines.map((edu, idx) => (
                      <div
                        key={idx}
                        className={idx > 0 ? 'text-[var(--muted)]' : ''}
                      >
                        {edu}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 space-y-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[var(--fg)]/85">
                  {member.bio.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                {/* Areas of Contribution */}
                {member.areasOfContribution.length > 0 && (
                  <div className="mt-6">
                    <div className="font-mono-tech text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase mb-2.5">
                      AREAS OF CONTRIBUTION
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.areasOfContribution.map((skill) => (
                        <span
                          key={skill}
                          className="border border-[var(--line)] px-2.5 py-1 font-mono-tech text-[11px] tracking-[0.1em] text-[var(--fg)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profile Links (GitHub & LinkedIn) */}
                {member.links && (
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--line)] pt-5 font-mono-tech text-xs tracking-[0.16em] uppercase">
                    {'github' in member.links &&
                      (member.links.github ? (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[var(--fg)] px-4 py-2 text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                        >
                          GITHUB &rarr;
                        </a>
                      ) : (
                        <span className="border border-[var(--line)] px-4 py-2 text-[var(--muted)]">
                          GITHUB
                        </span>
                      ))}

                    {'linkedin' in member.links &&
                      (member.links.linkedin ? (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[var(--fg)] px-4 py-2 text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                        >
                          LINKEDIN &rarr;
                        </a>
                      ) : (
                        <span className="border border-[var(--line)] px-4 py-2 text-[var(--muted)]">
                          LINKEDIN
                        </span>
                      ))}

                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[var(--fg)] px-4 py-2 text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                      >
                        WEBSITE &rarr;
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
