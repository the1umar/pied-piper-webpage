import ajibola from '../assets/team/ajibola_ganiyu.jpg'
import amaan from '../assets/team/amaan_rahman.jpg'
import cory from '../assets/team/cory_merc.jpg'
import eric from '../assets/team/eric_desjardins.jpg'
import umar from '../assets/team/umar_afolami.jpg'

export type Member = {
  name: string
  role: string
  focus: string
  photo?: string
  accent: string
}

// TODO: roles below the team lead are placeholders — swap in what each person actually owns.
export const team: Member[] = [
  {
    name: 'Ajibola Ganiyu',
    role: 'Team Lead',
    focus: 'Coordinates the team, owns deliverables and the project timeline.',
    photo: ajibola,
    accent: 'bg-mint-300',
  },
  {
    name: 'Umar Afolami',
    role: 'Frontend & Visualization',
    focus: 'Builds the traffic visualization window and the range selector.',
    photo: umar,
    accent: 'bg-lilac-300',
  },
  {
    name: 'Amaan Rahman',
    role: 'AI & Chatbox',
    focus: 'Wires the chat assistant to the data so it can answer real questions.',
    photo: amaan,
    accent: 'bg-sun-300',
  },
  {
    name: 'Cory Mercado',
    role: 'Data & Detection',
    focus: 'Parses the logs and flags handshakes that break the TCP sequence.',
    photo: cory,
    accent: 'bg-coral-300',
  },
  {
    name: 'Eric Desjardins',
    role: 'Backend & Pipeline',
    focus: 'Moves captured traffic into storage the rest of the stack can query.',
    photo: eric,
    accent: 'bg-mint-200',
  },
]
