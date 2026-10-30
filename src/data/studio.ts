export interface NameElement {
  segment: string;
  meaning: string;
  description: string;
}

export interface StudioConfig {
  name: string;
  uppercaseName: string;
  domain: string;
  email: string;
  location: string;
  tagline: string;
  navLabel: string;
  heroSectionLabel: string;
  heroKeywords: string[];
  heroHeadline: string[];
  heroLead: string;
  heroDescription: string;
  heroCta: string;
  doorCaption: string[];
  scrollLabel: string;
  projectsSectionLabel: string;
  projectsHeading: string[];
  projectsSubtitle: string;
  aboutSectionLabel: string;
  aboutHeading: string[];
  aboutLead: string;
  aboutParagraphs: string[];
  aboutClosingIdea: string;
  areasHeading: string;
  focusAreas: string[];
  technologiesHeading: string;
  technologies: string[];
  nameSectionLabel: string;
  nameSectionTitle: string;
  nameBreakdown: NameElement[];
  contactSectionLabel: string;
  contactHeadline: string[];
  contactHeadingLabel: string;
  contactLines: string[];
  contactCtaLabel: string;
  footerTagline: string;
  footerKeywords: string;
  footerLines: string[];
  links: {
    github: string;
    linkedin: string;
  };
}

export const STUDIO_CONFIG: StudioConfig = {
  name: 'IntDoorLab',
  uppercaseName: 'INTDOORLAB',
  domain: 'intdoorlab.com',
  email: 'triston@intdoorlab.com',
  location: 'Ireland',
  tagline: 'INDEPENDENT TECHNOLOGY & EXPERIMENTATION LAB',
  navLabel: 'NAVIGATION',
  heroSectionLabel: '01 — INTRODUCTION',
  heroKeywords: ['IDEAS', 'EXPERIMENTS', 'TECHNOLOGY'],
  heroHeadline: ['BEYOND', 'WHAT', 'ALREADY', 'EXISTS.'],
  heroLead: 'An open door to ideas, possibilities, and things worth exploring.',
  heroDescription:
    'IntDoorLab is an independent lab exploring the intersection of technology, creativity, and engineering. A place where curiosity becomes experimentation, ideas take shape, and possibilities are built into something real.',
  heroCta: 'EXPLORE PROJECTS',
  doorCaption: ['A', 'DOOR', 'TO', 'IDEAS', 'AND', 'BEYOND.'],
  scrollLabel: '[SCROLL TO EXPLORE]',
  projectsSectionLabel: '02 — PROJECTS',
  projectsHeading: ['CURRENT', 'EXPLORATIONS'],
  projectsSubtitle:
    "Ideas in progress, experiments taking shape, and projects we're bringing into the world.",
  aboutSectionLabel: '03 — ABOUT',
  aboutHeading: ['A PLACE TO EXPLORE', "WHAT'S POSSIBLE."],
  aboutLead: 'Curiosity is where things begin. Building is how we find out.',
  aboutParagraphs: [
    "IntDoorLab was founded around a simple idea: technology is not just something to use. It's something to question, explore, experiment with, and create.",
    'Our interests move across software, artificial intelligence, cybersecurity, systems engineering, and digital experiences.',
    'Some projects begin with a problem. Others begin with a question, an unfamiliar concept, or simply the desire to see whether something can be done.',
    'We don\'t limit ourselves to a particular category or outcome. The process of exploring an idea is just as important as what eventually comes out of it.',
    'Founded by Teng Rui Tan, IntDoorLab is an independent space for turning curiosity into experimentation and experimentation into something tangible.',
  ],
  aboutClosingIdea: 'There is always more beyond what we already know.',
  areasHeading: '// AREAS OF EXPLORATION',
  focusAreas: [
    'Software & Systems Engineering',
    'Artificial Intelligence',
    'Human-Computer Interaction',
    'Desktop Applications',
    'Cybersecurity',
    'Automation & Intelligent Systems',
    'Interface & Experience Design',
    'Emerging Technologies',
  ],
  technologiesHeading: '// TECHNOLOGIES',
  technologies: [
    'C++',
    'Python',
    'JavaScript',
    'HTML & CSS',
    'PHP',
    'SQL',
    'Linux',
  ],
  nameSectionLabel: '// THE NAME',
  nameSectionTitle: 'INT / DOOR / LAB',
  nameBreakdown: [
    {
      segment: 'INT',
      meaning: 'INTELLIGENCE / TECHNOLOGY',
      description:
        'The ideas, logic, and systems that shape the way we understand and interact with technology.',
    },
    {
      segment: 'DOOR',
      meaning: 'POSSIBILITIES / EXPLORATION',
      description:
        'An opening to unfamiliar perspectives, new directions, and possibilities beyond the obvious.',
    },
    {
      segment: 'LAB',
      meaning: 'EXPERIMENTATION / CREATION',
      description:
        'A space to question, test, develop, and turn ideas into something tangible.',
    },
  ],
  contactSectionLabel: "05 — WHAT'S NEXT",
  contactHeadline: ["THERE'S ALWAYS", 'ANOTHER DOOR.'],
  contactHeadingLabel: 'HAVE AN IDEA WORTH EXPLORING?',
  contactLines: [
    'A possibility, an interesting problem, a project, or simply something you\'ve been thinking about.',
    "We're always open to interesting conversations, new perspectives, and opportunities to build something together.",
    "Let's see where it leads.",
  ],
  contactCtaLabel: 'GET IN TOUCH',
  footerTagline: 'INDEPENDENT TECHNOLOGY & EXPERIMENTATION LAB',
  footerKeywords: 'IDEAS / EXPERIMENTS / TECHNOLOGY',
  footerLines: [
    'INTDOORLAB',
    'INDEPENDENT TECHNOLOGY & EXPERIMENTATION LAB',
    'BUILT IN IRELAND',
  ],
  links: {
    github: 'https://github.com/Afugegege',
    linkedin: 'https://www.linkedin.com/in/triston-tan-teng-rui/',
  },
};
