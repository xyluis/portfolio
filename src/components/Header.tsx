import Link from 'next/link'

export function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-center border-b border-white/20">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold transition-colors hover:text-white/80"
        >
          Luís
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 transition-colors hover:text-white/80"
              >
                <span className="font-mono">01.</span>
                <span>My Works</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
