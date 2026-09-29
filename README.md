# Pied Piper — Senior Capstone Team Site

Team webpage for our senior capstone project, **Analyzing cyber threats from
log data**: finding network communications that never complete the TCP
handshake, surfacing them in a visualization window, and letting users ask an
AI chatbox questions about the same data.

This site covers the Stage 1 deliverables — group members and roles, meetings
and activities, and the upcoming schedule.

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

- `src/data/team.ts` — members, roles, focus blurbs, photos
- `src/data/schedule.ts` — stage deadlines and the standup cadence

### Adding a team photo

Drop the original in `images/`, then resize it into the bundled assets folder:

```sh
sips -Z 900 -s format jpeg -s formatOptions 82 images/eric_desjardins.jpg \
  --out src/assets/team/eric_desjardins.jpg
```

Import it in `src/data/team.ts` and set it as that member's `photo`. A member
with no `photo` renders an initials placeholder instead.

## Design

White background, bold display type (Space Grotesk), mint-green accents, and
offset block shadows. Theme tokens are defined in the `@theme` block at the top
of `src/index.css`.
