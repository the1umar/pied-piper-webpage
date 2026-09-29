import { Sparkle } from './Doodles'

const items = [
  'TCP handshake analysis',
  'Anomaly detection',
  'Network traffic logs',
  'Interactive visualization',
  'AI chatbox',
  'Threat prediction',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-4 text-white">
      <div className="animate-marquee font-display flex w-max items-center gap-8 text-lg font-medium whitespace-nowrap">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center gap-8"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <li key={item} className="flex items-center gap-8">
                <span>{item}</span>
                <Sparkle className="size-4 text-mint-400" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
