import { team } from '../data/team'
import { Sparkle } from './Doodles'

export function Team() {
  return (
    <section id="team" className="border-t border-ink/10 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-sm tracking-wide text-mint-500 uppercase">
          The team
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Five of us, and who does what
          </h2>
          <p className="flex items-center gap-2 text-sm text-smoke">
            <Sparkle className="size-4 text-mint-400" />
            Texas Tech University
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <li key={member.name} className="group">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-2xl ${member.accent} ${
                    index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                  } transition-transform group-hover:rotate-0`}
                />
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="relative aspect-square w-full rounded-2xl border border-ink object-cover transition-transform group-hover:-translate-y-1"
                  />
                ) : (
                  <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl border border-ink bg-white transition-transform group-hover:-translate-y-1">
                    <span className="font-display text-5xl font-bold text-ink/15">
                      {member.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </span>
                    <span className="font-mono absolute bottom-4 text-xs text-smoke">
                      photo coming soon
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-display mt-6 text-xl font-bold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-mint-500">
                {member.role}
              </p>
              <p className="mt-2 leading-relaxed text-smoke">{member.focus}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
