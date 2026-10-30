import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[75vh] items-center bg-[var(--bg)] pt-24 pb-20 text-[var(--fg)]">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-[var(--muted)]">
            / 404
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-[-0.03em] uppercase">
            DOOR NOT FOUND.
          </h1>
          <p className="mt-4 max-w-md font-mono-tech text-xs leading-relaxed text-[var(--muted)]">
            The requested route does not exist within IntDoorLab.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-4 border border-[var(--fg)] px-6 py-3.5 font-mono-tech text-xs tracking-[0.18em] uppercase transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              <span>&larr; RETURN TO STUDIO</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

