import { standup } from '../data/schedule'
import { Sparkle } from './Doodles'

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export function Meetings() {
  return (
    <section id="meetings" className="bg-haze py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm tracking-wide text-mint-500 uppercase">
            Meetings & activities
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Standup twice a week
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-smoke">
            The five of us meet every{' '}
            <strong className="font-semibold text-ink">Tuesday</strong> and{' '}
            <strong className="font-semibold text-ink">Thursday</strong> at{' '}
            <strong className="font-semibold text-ink">{standup.time}</strong>,{' '}
            {standup.note}. Everyone says what they shipped, what's next, and
            what they're stuck on.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-smoke">
            <Sparkle className="size-4 text-mint-400" />
            Extra working sessions get scheduled before a deliverable is due.
          </p>
        </div>

        <WeekCard />
      </div>
    </section>
  )
}

function WeekCard() {
  return (
    <div className="block-shadow rounded-2xl border border-ink bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold">A typical week</p>
        <p className="font-mono text-xs text-smoke">Fall 2026</p>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-2 sm:gap-3">
        {week.map((day) => {
          const isStandup = standup.days.includes(day)
          return (
            <div key={day}>
              <p
                className={`font-mono text-center text-xs tracking-wide uppercase ${
                  isStandup ? 'text-ink' : 'text-smoke/60'
                }`}
              >
                {day}
              </p>
              <div
                className={`mt-2 flex h-36 flex-col justify-end rounded-xl border p-2 sm:h-44 ${
                  isStandup
                    ? 'border-ink bg-mint-200'
                    : 'border-dashed border-ink/15 bg-white'
                }`}
              >
                {isStandup && (
                  <div className="rounded-lg border border-ink bg-white px-2 py-2 text-center">
                    <p className="font-mono text-[0.65rem] text-smoke">
                      {standup.time}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold">Standup</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 text-sm text-smoke">
        <span className="size-3 rounded-sm border border-ink bg-mint-200" />
        Team standup · 30 minutes
      </p>
    </div>
  )
}
