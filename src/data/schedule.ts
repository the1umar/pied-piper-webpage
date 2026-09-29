export type Milestone = {
  date: string
  title: string
  detail: string
  badge?: string
  highlight?: boolean
}

// Dates from the CS 4366 Stage 1 handout and the team's own planning.
export const milestones: Milestone[] = [
  {
    date: 'Sep 29, 2026',
    title: 'Stage 1 report due',
    detail:
      'Software Requirements Specification (PDF) and presentation slides submitted through Canvas, plus the URL of this page.',
    badge: 'Due today',
    highlight: true,
  },
  {
    date: 'Oct 1, 2026',
    title: 'Stage 1 presentation',
    detail:
      'We present the requirements spec and project plan in class and take feedback from the instructor and classmates.',
  },
  {
    date: 'Oct 18, 2026',
    title: 'Stage 2 due',
    detail:
      'Next set of deliverables in the capstone sequence, building on the Stage 1 requirements.',
  },
  {
    date: 'TBD',
    title: 'Stage 2 presentation',
    detail: 'Date to be announced by the instructor.',
    badge: 'Tentative',
  },
]

export const standup = {
  days: ['Tue', 'Thu'],
  time: '3:30 PM',
  note: 'right after our capstone class lets out',
}
