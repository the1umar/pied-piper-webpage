# Pied Piper — Senior Capstone Team Site

Team webpage for our senior capstone project, **Analyzing cyber threats from
log data**: finding network communications that never complete the TCP
handshake, surfacing them in a visualization window, and letting users ask an
AI chatbox questions about the same data.

This site covers the Stage 1 deliverables — group members and roles, meetings
and activities, and the upcoming schedule.

**Live site:** https://the1umar.github.io/pied-piper-webpage/

Deployed by the `Deploy to GitHub Pages` workflow on every push to `main`.

## Stack

React 19 + TypeScript, built with Vite, styled with Tailwind CSS v4.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:5173 |
| `npm run build` | Typecheck and build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run oxlint |

## Editing the content

Most of what changes lives in two data files — no component edits needed:

- `src/data/team.ts` — members, roles, focus blurbs, photos, and each
  member's per-stage `contributions`
- `src/data/schedule.ts` — stage milestones, the standup cadence, and the
  `meetings` log of what each standup covered

### Recording who did what in a stage

Every member carries a `contributions` list, one entry per stage, oldest
first. Append a new entry when a stage starts:

```ts
contributions: [
  { stage: 'Stage 1', work: 'Built and deployed this team webpage.' },
  { stage: 'Stage 2', work: 'Team webpage and the low-fidelity UI prototype.' },
  { stage: 'Stage 3' }, // no `work` yet — the card shows "to be confirmed"
]
```

Leaving `work` off still lists the stage, so an unconfirmed slot stays visible
instead of disappearing.

### Adding a team photo

Drop the original in `images/`, then resize it into the bundled assets folder:

```sh
sips -Z 900 -s format jpeg -s formatOptions 82 images/<member>.jpg \
  --out src/assets/team/<member>.jpg
```

Import it in `src/data/team.ts` and set it as that member's `photo`. A member
with no `photo` renders an initials placeholder instead.

## Design

White background, bold display type (Space Grotesk), mint-green accents, and
offset block shadows. Theme tokens are defined in the `@theme` block at the top
of `src/index.css`.
