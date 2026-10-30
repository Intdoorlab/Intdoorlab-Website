export interface NoteEntry {
  slug: string;
  date: string;
  category:
    | 'DEVELOPMENT LOG'
    | 'TECHNICAL EXPERIMENT'
    | 'PRODUCT DESIGN'
    | 'AI & AUTOMATION'
    | 'ENGINEERING NOTE'
    | 'STUDIO UPDATE';
  title: string;
  summary: string;
  href?: string;
}

export const NOTES_SECTION_COPY = {
  lead: 'Thoughts, experiments, and things discovered along the way.',
  paragraphs: [
    'Not everything starts as a finished product. Some of the most interesting parts happen during the process.',
    "A space for documenting what we're learning, testing, designing, and building.",
  ],
};

export const NOTES_TOPICS: string[] = [
  'Development Logs',
  'Technical Experiments',
  'Product Design',
  'AI & Automation',
  'Engineering Notes',
  'Studio Updates',
];

/**
 * Studio Notes / Dispatches.
 * Intentionally empty until official notes are ready to publish — do not add placeholder articles.
 */
export const NOTES_ENTRIES: NoteEntry[] = [];

export const SHOW_EMPTY_NOTES_INDEX = true;
