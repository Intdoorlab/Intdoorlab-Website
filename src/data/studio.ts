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
  heroHeadline: string[];
  heroLead: string;
  heroDescription: string;
  doorCaption: string[];
  currentlyBuildingSubtitle: string;
  aboutHeading: string[];
  aboutLead: string;
  aboutParagraphs: string[];
  aboutClosingIdea: string;
  nameSectionLabel: string;
  nameBreakdown: NameElement[];
  focusAreas: string[];
  technologies: string[];
  contactHeadline: string[];
  contactHeadingLabel: string;
  contactLines: string[];
  contactCtaLabel: string;
  footerLines: string[];
  /**
   * Fill in your verified external profile URLs here when ready.
   * Leave as empty string ("") to display non-clickable placeholders without broken links.
   */
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
  tagline: 'Independent Software Studio',
  heroHeadline: ['BUILDING', 'SOFTWARE', 'BEYOND', 'THE OBVIOUS.'],
  heroLead: 'A door to ideas, experiments, and things yet to be built.',
  heroDescription:
    'IntDoorLab is an independent software studio where technology meets curiosity, and ideas become something real.',
  doorCaption: ['A', 'DOOR', 'TO', 'IDEAS', 'AND', 'BEYOND.'],
  currentlyBuildingSubtitle:
    "Things we're working on, exploring, and bringing to life.",
  aboutHeading: ['ABOUT', 'THE STUDIO'],
  aboutLead: 'We like building things.',
  aboutParagraphs: [
    'From desktop applications to intelligent systems, our work moves between software engineering, experimentation, and interface design.',
    "Some ideas start with a problem. Others start with curiosity. Either way, we enjoy exploring what's possible and figuring out how to make it work.",
    'Founded by Teng Rui Tan, IntDoorLab is an independent software studio built around a simple idea:',
  ],
  aboutClosingIdea: "There's always something beyond what's already been done.",
  nameSectionLabel: '// INT / DOOR / LAB',
  nameBreakdown: [
    {
      segment: 'INT',
      meaning: 'INTELLIGENCE / TECHNOLOGY',
      description:
        'The systems, logic, and technologies behind what we build.',
    },
    {
      segment: 'DOOR',
      meaning: 'POSSIBILITIES / EXPLORATION',
      description:
        'An opening to new perspectives, unfamiliar ideas, and what lies beyond.',
    },
    {
      segment: 'LAB',
      meaning: 'EXPERIMENTATION / DEVELOPMENT',
      description:
        'A place to explore, test, create, and turn ideas into something tangible.',
    },
  ],
  focusAreas: [
    'Software Engineering',
    'Artificial Intelligence',
    'Desktop Applications',
    'Automation',
    'Cybersecurity',
    'Interface Design',
  ],
  technologies: [
    'C++',
    'Python',
    'JavaScript',
    'HTML / CSS',
    'PHP',
    'SQL',
    'Linux',
  ],
  contactHeadline: ['A DOOR', "TO WHAT'S", 'NEXT.'],
  contactHeadingLabel: 'HAVE SOMETHING IN MIND?',
  contactLines: [
    'An idea, a project, a question, or simply something worth discussing.',
    'Get in touch.',
  ],
  contactCtaLabel: 'GET IN TOUCH',
  footerLines: [
    'INTDOORLAB',
    'INDEPENDENT SOFTWARE STUDIO',
    'BUILT IN IRELAND',
  ],
  links: {
    // Add your official studio or profile URLs below (e.g. "https://github.com/...")
    github: 'https://github.com/Intdoorlab',
    linkedin: '',
  },
};
