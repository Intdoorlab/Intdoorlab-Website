export interface NoteEntry {
  slug: string;
  date: string;
  category:
    | 'DEVELOPMENT LOG'
    | 'TECHNICAL EXPERIMENT'
    | 'RESEARCH & DISCOVERIES'
    | 'PRODUCT & INTERFACE DESIGN'
    | 'AI & EMERGING TECHNOLOGIES'
    | 'ENGINEERING NOTES'
    | 'STUDIO UPDATES';
  title: string;
  summary: string;
  href?: string;
}

export const NOTES_SECTION_COPY = {
  sectionLabel: '04 — NOTES',
  title: 'THOUGHTS IN PROGRESS.',
  lead: 'Not everything needs to begin as a finished idea.',
  subLead: 'A record of things discovered along the way.',
  paragraphs: [
    'Development experiments, technical observations, design decisions, unexpected discoveries, and ideas that emerge during the process of building.',
    'Some notes become projects. Some remain questions. Others simply document something worth remembering.',
    'This is where the process lives.',
  ],
};

export const NOTES_TOPICS: string[] = [
  'Development Logs',
  'Technical Experiments',
  'Research & Discoveries',
  'Product & Interface Design',
  'AI & Emerging Technologies',
  'Engineering Notes',
  'Studio Updates',
];

export const NOTES_ENTRIES: NoteEntry[] = [];

export const SHOW_EMPTY_NOTES_INDEX = true;
