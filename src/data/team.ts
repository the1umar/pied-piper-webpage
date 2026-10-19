import ajibola from '../assets/team/ajibola_ganiyu.jpg'
import amaan from '../assets/team/amaan_rahman.jpg'
import cory from '../assets/team/cory_merc.jpg'
import eric from '../assets/team/eric_desjardins.jpg'
import umar from '../assets/team/umar_afolami.jpg'

// What one member owned for one stage. Leave `work` off and the card shows a
// "to be confirmed" note in its place, so the stage still appears in the list.
export type Contribution = {
  stage: string
  work?: string
}

export type Member = {
  name: string
  role: string
  focus: string
  // Newest stage last — the card renders these in order.
  contributions: Contribution[]
  photo?: string
  accent: string
}

export const team: Member[] = [
  {
    name: 'Ajibola Ganiyu',
    role: 'Team Lead',
    focus: 'Coordinates the team, owns deliverables and the project timeline.',
    contributions: [
      {
        stage: 'Stage 1',
        work: 'Presentation slides and QA review of the full report.',
      },
      {
        stage: 'Stage 2',
        work: 'Presentation slides and QA review of the full report.',
      },
    ],
    photo: ajibola,
    accent: 'bg-mint-300',
  },
  {
    name: 'Umar Afolami',
    role: 'Frontend & Visualization',
    focus: 'Builds the traffic visualization window and the range selector.',
    contributions: [
      { stage: 'Stage 1', work: 'Built and deployed this team webpage.' },
      {
        stage: 'Stage 2',
        work: 'Team webpage and the low-fidelity UI prototype.',
      },
    ],
    photo: umar,
    accent: 'bg-lilac-300',
  },
  {
    name: 'Amaan Rahman',
    role: 'AI & Chatbox',
    focus:
      'Wires the chat assistant to the data so it can answer real questions.',
    contributions: [
      {
        stage: 'Stage 1',
        work: 'Ran the user interviews behind the requirements.',
      },
      { stage: 'Stage 2', work: 'Supported the use case and class diagrams.' },
    ],
    photo: amaan,
    accent: 'bg-sun-300',
  },
  {
    name: 'Cory Mercado',
    role: 'Data & Detection',
    focus: 'Parses the logs and flags handshakes that break the TCP sequence.',
    contributions: [
      { stage: 'Stage 1', work: 'Report specifications and IEEE formatting.' },
      {
        stage: 'Stage 2',
        work: 'Class diagram and the module breakdown behind it.',
      },
    ],
    photo: cory,
    accent: 'bg-coral-300',
  },
  {
    name: 'Eric Desjardins',
    role: 'Backend & Pipeline',
    focus: 'Moves captured traffic into storage the rest of the stack can query.',
    contributions: [
      { stage: 'Stage 1', work: 'Wrote the project proposal section.' },
      { stage: 'Stage 2', work: 'Use case diagram and sequence diagrams.' },
    ],
    photo: eric,
    accent: 'bg-mint-200',
  },
]
