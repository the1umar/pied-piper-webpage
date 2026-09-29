const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-2xl font-bold">
            Pied Piper<span className="text-mint-400">.</span>
          </p>
          <p className="mt-2 text-sm text-white/60">
            CS 4366 Senior Capstone · Texas Tech University
          </p>
        </div>

        <ul className="flex gap-6 text-sm text-white/60">
          <li>
            <a
              href="https://github.com/the1umar/pied-piper-webpage"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-mint-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="#top" className="transition-colors hover:text-mint-400">
              Back to top
            </a>
          </li>
          <li className="text-white/40">© {year}</li>
        </ul>
      </div>
    </footer>
  )
}
