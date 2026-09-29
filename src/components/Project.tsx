import { Blob } from './Doodles'

const pieces = [
  {
    tag: '01',
    accent: 'bg-mint-300',
    title: 'Find the broken handshakes',
    body: 'Sift large network traffic captures for communications that skip or never complete the TCP three-way handshake, and list every potential issue we find.',
  },
  {
    tag: '02',
    accent: 'bg-lilac-300',
    title: 'Show it on a timeline',
    body: 'A visualization window that lets a user pick any range of the capture and see what the traffic actually looked like over that window.',
  },
  {
    tag: '03',
    accent: 'bg-sun-300',
    title: 'Let people ask questions',
    body: 'An AI chatbox that answers questions about the data in plain language, instead of making users read raw packet logs.',
  },
  {
    tag: '04',
    accent: 'bg-coral-300',
    title: 'Wire the two together',
    body: 'The chat and the chart share one selection: ask about what you see, or click a suspicious session and ask what happened.',
  },
]

export function Project() {
  return (
    <section id="project" className="relative overflow-hidden py-24 sm:py-28">
      <Blob className="absolute -right-32 -bottom-24 size-[28rem] text-haze" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-sm tracking-wide text-mint-500 uppercase">
          The project
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Four pieces, one tool
        </h2>
        <p className="mt-5 max-w-xl text-lg text-pretty text-smoke">
          The brief asks for detection, visualization, and an AI assistant that
          actually understands what's on screen. Here's how we've split it up.
        </p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {pieces.map((piece) => (
            <li
              key={piece.tag}
              className="group rounded-2xl border border-ink bg-white p-8 transition-shadow hover:shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <span
                className={`font-mono inline-flex size-10 items-center justify-center rounded-full text-sm font-medium ${piece.accent}`}
              >
                {piece.tag}
              </span>
              <h3 className="font-display mt-5 text-xl font-bold">
                {piece.title}
              </h3>
              <p className="mt-3 leading-relaxed text-smoke">{piece.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
