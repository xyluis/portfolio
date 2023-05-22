import Link from 'next/link'

export function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-bold transition-colors hover:text-white/80"
        >
          Luís
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/" className="transition-colors hover:text-white/80">
                My Works
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
