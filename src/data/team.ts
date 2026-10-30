export interface TeamMember {
  id: string;
  name: string;
  nativeName?: string;
  role: string;
  location?: string;
  educationLines?: string[];
  bio: string[];
  areasOfContribution: string[];
  /**
   * Optional portrait path (e.g. "/team/teng-rui.jpg").
   * Leave empty to render a clean typographic monogram frame.
   */
  photoUrl?: string;
  /**
   * Optional verified profile links. Leave empty to omit.
   */
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export const TEAM_SECTION_COPY = {
  heading: ['PEOPLE BEHIND', 'THE LAB'],
  statement: 'Different minds. Shared curiosity. Things worth building.',
  paragraphs: [
    'IntDoorLab is shaped by the people behind its projects.',
    'A growing team of individuals bringing different perspectives, skills, and ideas into the process of making things.',
  ],
};

/**
 * Confirmed studio members.
 * Add additional TeamMember entries here as the studio expands;
 * the Team component automatically adapts from single-member layout to a multi-column grid.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'teng-rui',
    name: 'TENG RUI',
    nativeName: '廷睿',
    role: 'FOUNDER & DEVELOPER',
    location: 'MALAYSIA / IRELAND',
    educationLines: [
      'BSc (Hons) Computer Networks & Cyber Security',
      'Technological University of the Shannon (TUS)',
    ],
    bio: [
      'Founder of IntDoorLab, working across product concepts, software engineering, and technical development.',
      'Interested in the intersection of software, AI, cybersecurity, and human-computer interaction.',
      'Always exploring something new, usually by building it.',
    ],
    areasOfContribution: [
      'Software Development',
      'Technical Direction',
      'Product Development',
      'Systems & Security',
      'Interface Engineering',
    ],
    photoUrl: '',
    links: {
      github: '',
      linkedin: '',
    },
  },
];
