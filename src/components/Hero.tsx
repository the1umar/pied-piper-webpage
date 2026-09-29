import { Blob, Handles, Sparkle, Squiggle } from './Doodles'

const handshake = [
  { label: 'SYN', from: 'client', ok: true },
  { label: 'SYN-ACK', from: 'server', ok: true },
  { label: 'ACK', from: 'client', ok: true },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <Blob className="absolute -top-24 -left-32 size-96 text-mint-200/60" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="relative inline-block border border-ink px-3 py-1.5 text-xs font-medium tracking-wide">
            CS 4366 · Senior Capstone · Fall 2026 👋
            <Handles />
          </span>

          <h1 className="font-display mt-7 text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
            Analyzing cyber threats from{' '}
            <span className="relative inline-block">
              log data
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-mint-400"
                preserveAspectRatio="none"
                role="presentation"
                aria-hidden="true"
              >
                <path
                  d="M2 8c50-6 120-7 196-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-pretty text-smoke">
            We're <strong className="font-semibold text-ink">Pied Piper</strong>
            , a five-person capstone team digging through large network traffic
            logs to find communications that never complete the TCP handshake —
            then making those findings explorable through a visualization window
            and an AI chatbox that talks to the same data.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#project"
              className="block-shadow-mint rounded-full bg-ink px-6 py-3 font-medium text-white transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              About the project
            </a>
            <a
              href="#schedule"
              className="rounded-full border border-ink px-6 py-3 font-medium transition-colors hover:bg-haze"
            >
              What's next →
            </a>
          </div>
        </div>

        <div className="relative">
          <Squiggle className="absolute -top-10 -left-6 w-24 text-lilac-300" />
          <Sparkle className="absolute -right-2 -bottom-6 size-10 text-sun-300" />

          <div className="block-shadow relative rotate-1 rounded-2xl border border-ink bg-white p-6 transition-transform hover:rotate-0">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-coral-300" />
              <span className="size-2.5 rounded-full bg-sun-300" />
              <span className="size-2.5 rounded-full bg-mint-400" />
              <p className="font-mono ml-2 text-xs text-smoke">
                capture_0918.pcap
              </p>
            </div>

            <ul className="font-mono mt-6 space-y-3 text-sm">
              {handshake.map((step) => (
                <li key={step.label} className="flex items-center gap-3">
                  <span className="w-14 text-xs text-smoke">{step.from}</span>
                  <span className="h-px flex-1 bg-ink/20" />
                  <span className="rounded-full bg-mint-200 px-3 py-1 text-xs">
                    {step.label}
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="w-14 text-xs text-smoke">client</span>
                <span className="h-px flex-1 border-t border-dashed border-coral-300 bg-transparent" />
                <span className="rounded-full bg-coral-300 px-3 py-1 text-xs">
                  no ACK
                </span>
              </li>
            </ul>

            <p className="mt-6 border-t border-ink/10 pt-4 text-sm text-smoke">
              <span className="font-semibold text-ink">1 of 4</span> sessions
              never finished the handshake — that's what we go looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
