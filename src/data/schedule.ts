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
    badge: 'Done',
    done: true,
  },
  {
    date: 'Oct 20, 2026',
    title: 'Stage 2 presentation',
    detail:
      'Walked the design in class — one slide per diagram, then the prototype and the implementation plan. The feedback set our build order for Stage 3.',
    badge: 'Done',
    done: true,
  },
  {
    date: 'Nov 10, 2026',
    title: 'Stage 3 report due',
    detail:
      'Implementation report submitted through Canvas: the working pipeline and detection, the UI, the AI assistant, and the use case diagram revised to match what we actually built.',
    badge: 'Done',
    done: true,
  },
  {
    date: 'Nov 19, 2026',
    title: 'Stage 3 presentation',
    detail:
      'Today — a live walkthrough of the implementation: a capture going through the pipeline, the detected sessions on the timeline, and the AI assistant answering questions about the same data.',
    badge: 'Due today',
    highlight: true,
  },
  {
    date: 'TBD',
    title: 'Stage 4',
    detail:
      'Final stage — testing, the remaining polish, and the end-of-semester demo. Handout not released yet.',
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

// Standups from the Stage 2 presentation through the Stage 3 presentation.
export const meetings: Meeting[] = [
  {
    date: 'Oct 20',
    title: 'Stage 2 feedback',
    detail:
      'Presented the design in class, then turned the instructor feedback into the order we would build the pieces in.',
  },
  {
    date: 'Oct 22',
    title: 'Implementation split',
    detail:
      'Divided the build: pipeline and backend to Cory, the UI to Eric, the assistant service to Ajibola, the chat panel to Umar and Ajibola.',
  },
  {
    date: 'Oct 27',
    title: 'Pipeline walkthrough',
    detail:
      'Cory demoed a real capture going in and incomplete handshakes coming out, and we agreed on the shape of the data the frontend would read.',
  },
  {
    date: 'Oct 29',
    title: 'UI shell review',
    detail:
      "Reviewed Eric's screens against live pipeline output and kept the detailed session view and the chat panel as separate pieces of work.",
  },
  {
    date: 'Nov 3',
    title: 'Assistant service review',
    detail:
      "Read through Ajibola's API layer and the first pass of system prompts, and picked the questions the assistant has to answer well.",
  },
  {
    date: 'Nov 5',
    title: 'Chat panel integration',
    detail:
      'Umar and Ajibola connected the chat panel to the assistant endpoint, and Amaan brought the revised use case diagram for review.',
  },
  {
    date: 'Nov 10',
    title: 'Report submitted',
    detail:
      'Final QA pass over the implementation report — screenshots, diagrams, and section numbering — then submitted through Canvas.',
  },
  {
    date: 'Nov 17',
    title: 'Presentation dry run',
    detail:
      "Ran Amaan's Stage 3 deck end to end for time and locked the demo order so the live walkthrough does not stall.",
  },
]
