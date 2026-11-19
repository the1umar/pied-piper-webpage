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
    role: 'Team Lead & AI Backend',
    focus:
      'Runs the team and owns the service behind the AI assistant — the API layer, the Anthropic SDK integration, and the prompts.',
    contributions: [
      {
        stage: 'Stage 1',
        work: 'Presentation slides and QA review of the full report.',
      },
      {
        stage: 'Stage 2',
        work: 'Presentation slides and QA review of the full report.',
      },
      {
        stage: 'Stage 3',
        work: 'Built the AI assistant backend: the API endpoints, the Anthropic SDK integration, and the system prompts that ground answers in the capture data. Paired with Umar on the chat panel.',
      },
    ],
    photo: ajibola,
    accent: 'bg-mint-300',
  },
  {
    name: 'Umar Afolami',
    role: 'Frontend & AI Chat',
    focus:
      'Builds the AI assistant chat panel and keeps this team site up to date.',
    contributions: [
      { stage: 'Stage 1', work: 'Built and deployed this team webpage.' },
      {
        stage: 'Stage 2',
        work: 'Team webpage and the low-fidelity UI prototype.',
      },
      {
        stage: 'Stage 3',
        work: 'Built the AI assistant chat panel with Ajibola — the full conversation surface and its wiring to the assistant API — plus this team webpage.',
      },
    ],
    photo: umar,
    accent: 'bg-lilac-300',
  },
  {
    name: 'Amaan Rahman',
    role: 'Design Docs & Presentation',
    focus:
      'Keeps the diagrams honest against what we actually built, and puts the stage decks together.',
    contributions: [
      {
        stage: 'Stage 1',
        work: 'Ran the user interviews behind the requirements.',
      },
      { stage: 'Stage 2', work: 'Supported the use case and class diagrams.' },
      {
        stage: 'Stage 3',
        work: 'Built the Stage 3 presentation slides and revised the use case diagram to match the implemented system.',
      },
    ],
    photo: amaan,
    accent: 'bg-sun-300',
  },
  {
    name: 'Cory Mercado',
    role: 'Data Pipeline & Backend',
    focus:
      'Moves captured traffic into storage the rest of the stack can query, and flags handshakes that break the TCP sequence.',
    contributions: [
      { stage: 'Stage 1', work: 'Report specifications and IEEE formatting.' },
      {
        stage: 'Stage 2',
        work: 'Class diagram and the module breakdown behind it.',
      },
      {
        stage: 'Stage 3',
        work: 'Built the data pipeline and the backend behind it: capture ingestion, incomplete-handshake detection, and the endpoints the frontend reads.',
      },
    ],
    photo: cory,
    accent: 'bg-coral-300',
  },
  {
    name: 'Eric Desjardins',
    role: 'Frontend & UI',
    focus:
      'Builds the interface around the data — navigation, the session list, and the visualization window.',
    contributions: [
      { stage: 'Stage 1', work: 'Wrote the project proposal section.' },
      { stage: 'Stage 2', work: 'Use case diagram and sequence diagrams.' },
      {
        stage: 'Stage 3',
        work: 'Built the initial UI — every screen except the detailed session view and the AI assistant chat — against live pipeline output.',
      },
    ],
    photo: eric,
    accent: 'bg-mint-200',
  },
]
