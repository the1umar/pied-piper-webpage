export type Milestone = {
  date: string
  title: string
  detail: string
  badge?: string
  highlight?: boolean
  done?: boolean
}

// Dates from the CS 4366 stage handouts and the team's own planning.
export const milestones: Milestone[] = [
  {
    date: 'Sep 29, 2026',
    title: 'Stage 1 report due',
    detail:
      'Software Requirements Specification (PDF) and presentation slides submitted through Canvas, plus the URL of this page.',
    badge: 'Done',
    done: true,
  },
  {
    date: 'Oct 1, 2026',
    title: 'Stage 1 presentation',
    detail:
      'Presented the requirements spec and project plan in class and took feedback from the instructor and classmates.',
    badge: 'Done',
    done: true,
  },
  {
    date: 'Oct 18, 2026',
    title: 'Stage 2 report due',
    detail:
      'Software Design Specification (IEEE two-column PDF) and slides submitted through Canvas: class, use case, and sequence diagrams, the low-fidelity prototype, and the implementation plan.',
    badge: 'Due today',
    highlight: true,
  },
  {
    date: 'TBD',
    title: 'Stage 2 presentation',
    detail:
      'A 10–15 minute walkthrough of the design: one full slide per diagram, then the prototype and implementation plan. Date announced by the instructor.',
    badge: 'Tentative',
  },
  {
    date: 'TBD',
    title: 'Stage 3',
    detail:
      'Implementation stage — we start building against the design in this report. Handout not released yet.',
    badge: 'Tentative',
  },
]

export const standup = {
  days: ['Tue', 'Thu'],
  time: '3:30 PM',
  note: 'right after our capstone class lets out',
}

export type Meeting = {
  date: string
  title: string
  detail: string
}

// Standups from the Stage 1 presentation through the Stage 2 due date.
export const meetings: Meeting[] = [
  {
    date: 'Oct 1',
    title: 'Stage 1 feedback',
    detail:
      'Presented Stage 1 in class and folded the instructor feedback into the design we were starting.',
  },
  {
    date: 'Oct 6',
    title: 'First diagram pass',
    detail:
      'Reviewed drafts of the class, use case, and sequence diagrams and fixed the places where they disagreed.',
  },
  {
    date: 'Oct 8',
    title: 'Prototype review',
    detail:
      'Walked the low-fidelity UI screens against the golden rules and labeled each one with the function it supports.',
  },
  {
    date: 'Oct 13',
    title: 'Report assembly',
    detail:
      'Pulled the sections into the IEEE template and checked that every diagram stays readable at full width.',
  },
  {
    date: 'Oct 15',
    title: 'Dry run & QA',
    detail:
      'Ran the presentation end to end for time and did a final QA pass over the report before submission.',
  },
]
