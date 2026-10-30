# IntDoorLab — Official Studio Website

Minimalist, monochromatic, pure-2D Swiss-editorial studio website for **IntDoorLab** (`intdoorlab.com`).

## Development

Both development and production servers run on `http://localhost:3001` by default:

```bash
npm run dev
```

Production build & server (`http://localhost:3001`):

```bash
npm run typecheck
npm run build
npm start
```

## Where to Update Studio Data

All studio copy, links, projects, team members, and notes are stored in structured TypeScript modules under `src/data/` so content can be updated or expanded without modifying component markup:

- `src/data/studio.ts` — Studio overview, focus areas, technologies, contact email, and external profile links (`github`, `linkedin`).
- `src/data/projects.ts` — Project entries (`OverLy`, `Friday`, `Things`), development statuses, text specimens, optional `screenshots` paths (`public/projects/...`), and optional `productWebsiteUrl` / `githubUrl` / `downloadUrl` links.
- `src/data/team.ts` — Team roster (`TEAM_MEMBERS`). Adding members automatically transitions the section into a multi-column grid.
- `src/data/notes.ts` — Studio notes & dispatches (`NOTES_ENTRIES`).

