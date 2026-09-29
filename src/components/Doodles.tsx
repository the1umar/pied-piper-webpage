type DoodleProps = { className?: string }

export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M4 28c10-22 22 22 32 0s22 22 32 0 22 22 32 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Sparkle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M12 0c1 7 4 10 12 12-8 2-11 5-12 12-1-7-4-10-12-12C8 10 11 7 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Blob({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M48 26c22-18 62-20 88-4s41 50 34 80-36 56-70 60-72-14-83-44 9-74 31-92Z"
      />
    </svg>
  )
}

/** The small square handles from the reference design's label box. */
export function Handles() {
  return (
    <>
      {[
        'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        'top-0 right-0 translate-x-1/2 -translate-y-1/2',
        'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-2 bg-mint-500 ${position}`}
        />
      ))}
    </>
  )
}
