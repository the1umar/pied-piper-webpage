import { milestones } from '../data/schedule'

export function Schedule() {
  return (
    <section id="schedule" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-sm tracking-wide text-mint-500 uppercase">
          Upcoming
        </p>
        <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Where we're headed
        </h2>
        <p className="mt-5 max-w-xl text-lg text-pretty text-smoke">
          Deadlines come from the CS 4366 stage handouts. Presentation dates are
          confirmed in class.
        </p>

        <ol className="mt-14 border-l-2 border-dashed border-ink/20 pl-8 sm:pl-12">
          {milestones.map((milestone) => (
            <li key={milestone.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[2.4rem] size-4 rounded-full border-2 border-ink sm:-left-[3.4rem] ${
                  milestone.highlight ? 'bg-mint-400' : 'bg-white'
                }`}
              />
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-sm text-smoke">{milestone.date}</p>
                {milestone.badge && (
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                      milestone.highlight
                        ? 'bg-mint-300'
                        : 'border border-ink/15 text-smoke'
                    }`}
                  >
                    {milestone.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display mt-1 text-xl font-bold">
                {milestone.title}
              </h3>
              <p className="mt-1 max-w-xl leading-relaxed text-pretty text-smoke">
                {milestone.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
