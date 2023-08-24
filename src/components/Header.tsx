import Link from 'next/link'
import { Signature } from './Signature'

export function Header() {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-[88px] w-full items-center justify-center backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Signature width={74} height={24} />
        <nav className="hidden font-mono md:flex">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link
                href="http://github.com/xyluis"
                target="_blank"
                className="flex items-center justify-center gap-2 transition-colors hover:text-indigo-500"
              >
                <span>Github</span>
              </Link>
            </li>
            <li>
              <Link
                href="http://twitter.com/xyluiis"
                target="_blank"
                className="flex items-center justify-center gap-2 transition-colors hover:text-indigo-500"
              >
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.com/users/471333722810089492"
                target="_blank"
                className="flex items-center justify-center gap-2 transition-colors hover:text-indigo-500"
              >
                <span>Discord</span>
              </Link>
            </li>
          </ul>
        </nav>

        <span className="font-mono text-xs text-zinc-500">
          {new Date().getFullYear()}
        </span>
      </div>
    </div>
  )
}
