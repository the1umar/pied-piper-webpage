const links = [
  { label: 'Project', href: '#project' },
  { label: 'Team', href: '#team' },
  { label: 'Meetings', href: '#meetings' },
  { label: 'Schedule', href: '#schedule' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight whitespace-nowrap"
        >
          Pied Piper
          <span className="text-mint-500">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-smoke transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#team"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-mint-500 hover:text-ink"
        >
          Meet the team
        </a>
      </nav>
    </header>
  )
}
