export interface TeamMember {
  id: string;
  name: string;
  nativeName?: string;
  role: string;
  location?: string;
  educationLines?: string[];
  bio: string[];
  areasOfContribution: string[];
  photoUrl?: string;
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export const TEAM_SECTION_COPY = {
  sectionLabel: '// THE PEOPLE BEHIND THE LAB',
  statement: 'BUILT BY CURIOUS MINDS.',
  paragraphs: [
    'IntDoorLab is an independent initiative founded by Teng Rui Tan, with room for different minds, perspectives, and disciplines to come together.',
    'The lab grows through the people, collaborations, and ideas that contribute to its projects.',
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'teng-rui',
    name: 'TENG RUI',
    nativeName: '廷睿',
    role: 'FOUNDER / DEVELOPER',
    location: 'MALAYSIA / IRELAND',
    educationLines: [
      'BSc (Hons) Computer Networks & Cyber Security',
      'Technological University of the Shannon (TUS)',
    ],
    bio: [
      'Founder of IntDoorLab, exploring the intersection of technology, engineering, and creative problem-solving.',
      'Working across software development, intelligent systems, cybersecurity, and product experimentation.',
      "Driven by curiosity, an interest in understanding how things work, and the desire to build things that don't already exist.",
    ],
    areasOfContribution: [
      'Software Engineering',
      'Technical Direction',
      'Product Development',
      'Systems & Security',
      'Interface Engineering',
      'Research & Experimentation',
    ],
    photoUrl: '',
    links: {
      github: 'https://github.com/Afugegege',
      linkedin: 'https://www.linkedin.com/in/triston-tan-teng-rui/',
    },
  },
];
