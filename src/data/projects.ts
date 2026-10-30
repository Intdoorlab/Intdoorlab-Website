export type ProjectFilterCategory =
  | 'ALL'
  | 'APPLICATIONS'
  | 'AI & SYSTEMS'
  | 'EXPERIMENTS';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectFeatureItem {
  title: string;
  description: string;
  note?: string;
}

export interface ProjectTextSpecimen {
  windowLabel: string;
  modeLabel: string;
  primaryLines: string[];
  secondaryLines: string[];
  footerMeta: string;
  theme: 'dark' | 'light';
}

export interface Project {
  number: string;
  slug: string;
  name: string;
  category: string;
  filterCategories: Exclude<ProjectFilterCategory, 'ALL'>[];
  status: string;
  leadHook: string;
  tagline: string;
  shortDescription: string;
  exploreLabel: string;
  overview: string[];
  featuresHeading: string;
  features: ProjectFeatureItem[];
  potentialScopeHeading?: string;
  potentialScopeNote?: string;
  potentialScopeItems?: string[];
  techStack: string[];
  platforms: string[];
  tags: string[];
  textSpecimens: ProjectTextSpecimen[];
  screenshots: ProjectScreenshot[];
  links: {
    productWebsiteUrl?: string;
    githubUrl?: string;
    downloadUrl?: string;
    downloadStatusLabel: string;
  };
}

export const PROJECT_FILTERS: ProjectFilterCategory[] = [
  'ALL',
  'APPLICATIONS',
  'AI & SYSTEMS',
  'EXPERIMENTS',
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    slug: 'overly',
    name: 'OverLy',
    category: 'DESKTOP APPLICATION / MUSIC',
    filterCategories: ['APPLICATIONS'],
    status: 'IN DEVELOPMENT',
    leadHook: 'A different way to experience music.',
    tagline: 'A DIFFERENT WAY TO EXPERIENCE MUSIC.',
    shortDescription:
      "Music shouldn't be confined to a player window. OverLy explores a more connected listening experience through floating lyrics, desktop integration, and thoughtful interface design.",
    exploreLabel: 'EXPLORE OVERLY',
    overview: [
      'OverLy is a desktop application exploring a more connected listening experience through floating lyrics, desktop integration, and thoughtful interface design.',
      'Designed around active workflows, OverLy keeps music visually present without interrupting focus — combining responsive lyric timing, dynamic theming, and an interface that respects the desktop environment.',
    ],
    featuresHeading: 'CONCEPTS & CAPABILITIES IN DEVELOPMENT',
    features: [
      {
        title: 'Floating Lyrics Overlay',
        description:
          'Always-on-top desktop surface engineered to sit cleanly beside active windows without obstructing work.',
      },
      {
        title: 'Real-Time Synchronised Lyrics',
        description:
          'Time-aligned lyric progression synchronised to active desktop media playback.',
      },
      {
        title: 'Dynamic Album Artwork Theming',
        description:
          'Adaptive colour and atmospheric styling derived from the currently playing track.',
      },
      {
        title: 'Customisable Layouts',
        description:
          'Multiple display densities ranging from compact minimal overlays to expanded lyric views.',
      },
      {
        title: 'Desktop Music Integration',
        description:
          'Direct integration with system-level playback state and media session metadata.',
      },
      {
        title: 'Platform Roadmap',
        description:
          'Active development focused on Windows support, with future macOS support planned.',
      },
    ],
    potentialScopeHeading: 'EXPLORED PLAYBACK SOURCES',
    potentialScopeNote:
      'Target playback ecosystems under exploration and ongoing integration — compatibility varies by platform and development stage:',
    potentialScopeItems: [
      'Windows Media Controls (SMTC)',
      'Spotify',
      'Apple Music',
      'YouTube Music',
      'Tidal',
      'Browser-Based Music Players',
    ],
    techStack: ['Electron', 'JavaScript', 'HTML & CSS', 'Windows Media Session'],
    platforms: ['Windows (In Development)', 'macOS (Planned)'],
    tags: ['WINDOWS', 'LYRICS', 'DESKTOP', 'MUSIC'],
    textSpecimens: [
      {
        windowLabel: 'OVERLY / PROJECT SPECIMEN',
        modeLabel: 'VIEW 01 — SYNCHRONISED LYRICS SURFACE',
        primaryLines: [
          '01:42.18 — The night is quiet',
          '01:46.04 — but the music speaks',
          '01:50.90 — to everything in motion',
        ],
        secondaryLines: [
          'LAYOUT: FLOATING OVERLAY',
          'THEMING: DYNAMIC ARTWORK PALETTE',
          'SYNC: REAL-TIME PLAYBACK TRACKING',
        ],
        footerMeta: 'WINDOWS DESKTOP // IN DEVELOPMENT',
        theme: 'dark',
      },
      {
        windowLabel: 'OVERLY // COMPACT BAR SPECIMEN',
        modeLabel: 'VIEW 02 — MINIMAL WORKFLOW MODE',
        primaryLines: [
          '[ PLAYING ]  but the music speaks  —  01:46 / 03:28',
        ],
        secondaryLines: [
          'MODE: COMPACT SINGLE-LINE OVERLAY',
          'BEHAVIOUR: LOW-FOOTPRINT DESKTOP PRESENCE',
        ],
        footerMeta: 'CUSTOMISABLE LAYOUT CONCEPT',
        theme: 'dark',
      },
      {
        windowLabel: 'OVERLY // SYSTEM INTEGRATION SPECIMEN',
        modeLabel: 'VIEW 03 — MEDIA SESSION PIPELINE',
        primaryLines: [
          'SOURCE -> SYSTEM MEDIA CONTROLS -> LYRIC RESOLUTION -> OVERLAY RENDER',
        ],
        secondaryLines: [
          'PRIMARY TARGET: WINDOWS',
          'FUTURE ROADMAP: MACOS',
        ],
        footerMeta: 'ARCHITECTURE OVERVIEW',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'IN DEVELOPMENT',
    },
  },
  {
    number: '02',
    slug: 'friday',
    name: 'Friday',
    category: 'ARTIFICIAL INTELLIGENCE / AUTOMATION',
    filterCategories: ['AI & SYSTEMS', 'APPLICATIONS', 'EXPERIMENTS'],
    status: 'EXPERIMENTAL',
    leadHook: 'An assistant that goes beyond answering.',
    tagline: 'AN ASSISTANT THAT GOES BEYOND ANSWERING.',
    shortDescription:
      'Exploring what happens when AI moves beyond conversation and becomes part of the environment around us. Voice interaction, contextual awareness, desktop control, and intelligent automation.',
    exploreLabel: 'EXPLORE FRIDAY',
    overview: [
      'Friday is an experimental AI environment exploring what happens when artificial intelligence moves beyond passive conversation and becomes part of the system around us.',
      'An ongoing exploration investigating voice interaction, contextual awareness, desktop control, file operations, and intelligent automation.',
    ],
    featuresHeading: 'RESEARCH & DEVELOPMENT OBJECTIVES',
    features: [
      {
        title: 'Voice Interaction',
        description:
          'Natural spoken input and conversational feedback loops for hands-free desktop assistance.',
      },
      {
        title: 'Desktop Automation',
        description:
          'Coordinating multi-step local tasks across system utilities and everyday workflows.',
      },
      {
        title: 'File & Browser Operations',
        description:
          'Structured file inspection, organisation, and assisted browser navigation.',
      },
      {
        title: 'AI-Powered Reasoning & Tool Integrations',
        description:
          'Connecting language-model reasoning with deterministic local tools and actions.',
      },
      {
        title: 'Personal Memory',
        description:
          'Context retention across sessions to support continuity in ongoing tasks.',
      },
      {
        title: 'Application & Media Control',
        description:
          'Interfacing with desktop applications and Windows media controls.',
      },
    ],
    techStack: ['JavaScript', 'Python', 'Electron', 'HTML & CSS', 'LLM Tooling'],
    platforms: ['Desktop Research Environment (Windows)'],
    tags: ['AI', 'AUTOMATION', 'VOICE', 'EXPERIMENTAL'],
    textSpecimens: [
      {
        windowLabel: 'FRIDAY / PROJECT SPECIMEN',
        modeLabel: 'VIEW 01 — COMMAND & WORKFLOW DISPATCH',
        primaryLines: [
          'Ask Friday anything...',
          '/ Open project workspace',
          '/ Summarise local documents',
          '/ Check active desktop tasks',
        ],
        secondaryLines: [
          'STATE: EXPERIMENTAL BUILD',
          'FOCUS: VOICE + DESKTOP AUTOMATION + REASONING',
        ],
        footerMeta: 'ONGOING EXPERIMENTAL PROJECT',
        theme: 'dark',
      },
      {
        windowLabel: 'FRIDAY // TOOL EXECUTION LOOP',
        modeLabel: 'VIEW 02 — CAPABILITY EXPLORATION',
        primaryLines: [
          'INPUT (VOICE / TEXT) -> REASONING -> TOOL DISPATCH -> LOCAL CONTEXT',
        ],
        secondaryLines: [
          'MODULES: FILE OPS // BROWSER // MEMORY // MEDIA CONTROLS',
        ],
        footerMeta: 'INTERNAL R&D ENVIRONMENT',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'EXPERIMENTAL BUILD',
    },
  },
  {
    number: '03',
    slug: 'things',
    name: 'Things',
    category: 'PRODUCTIVITY / INTELLIGENT SYSTEMS',
    filterCategories: ['APPLICATIONS', 'AI & SYSTEMS', 'EXPERIMENTS'],
    status: 'PLANNING / EXPERIMENTAL',
    leadHook: 'Make room for everything on your mind.',
    tagline: 'MAKE ROOM FOR EVERYTHING ON YOUR MIND.',
    shortDescription:
      'An exploration of personal organisation and the relationship between thoughts, information, and action. Turning unstructured ideas into something easier to understand, organise, and act upon.',
    exploreLabel: 'EXPLORE THINGS',
    overview: [
      'Things is an exploration of personal organisation and the relationship between thoughts, information, and action.',
      'The project investigates how unstructured ideas can be turned into something easier to understand, organise, and act upon through calm interface design and intelligent parsing.',
    ],
    featuresHeading: 'CONCEPTUAL EXPLORATIONS',
    features: [
      {
        title: 'Natural-Language Capture',
        description:
          'Writing thoughts and intentions plainly before structuring them into actionable items.',
      },
      {
        title: 'Structured Information Synthesis',
        description:
          'Exploring AI-assisted parsing to turn loose notes into organised ideas, plans, and priorities.',
      },
      {
        title: 'Calm Everyday Interface',
        description:
          'Studying minimal, low-noise layouts that reduce friction in daily planning.',
      },
    ],
    techStack: ['Concept Architecture', 'Interface Prototyping', 'AI Parsing Exploration'],
    platforms: ['Cross-Platform Concept'],
    tags: ['PRODUCTIVITY', 'AI', 'ORGANISATION', 'CONCEPT'],
    textSpecimens: [
      {
        windowLabel: 'THINGS / PROJECT SPECIMEN',
        modeLabel: 'VIEW 01 — STRUCTURED VIEWS',
        primaryLines: [
          "[ INBOX ] Capture what's on your mind",
          '[ TODAY ] What matters right now',
          "[ PLANNED ] What's coming next",
          '[ SOMEDAY ] Ideas worth keeping',
        ],
        secondaryLines: [
          'STAGE: PLANNING / EXPERIMENTAL',
          'APPROACH: UNSTRUCTURED THOUGHTS -> ORGANISED ACTIONS',
        ],
        footerMeta: 'CONCEPT DEVELOPMENT',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'PLANNING STAGE',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
