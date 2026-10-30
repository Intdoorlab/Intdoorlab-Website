'use client';

import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { ProjectSection } from './ProjectSection';
import { About } from './About';
import { Team } from './Team';
import { Notes } from './Notes';
import { Footer } from './Footer';

export function HomeClient() {
  const [heroIsDark, setHeroIsDark] = useState(false);

  return (
    <>
      <Navigation invertedOverHero={heroIsDark} />
      <main>
        <Hero onHeroDarkStateChange={setHeroIsDark} />
        <ProjectSection />
        <About />
        <Team />
        <Notes />
      </main>
      <Footer />
    </>
  );
}

