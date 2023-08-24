import Link from 'next/link'
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
} from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 hidden w-full items-end justify-between px-10 md:flex">
      <div className="flex flex-col items-center justify-center gap-4 after:h-24 after:w-px after:bg-white">
        <Link target="__blank" href="https://twitter.com/xyluiis">
          <TwitterLogoIcon className="h-5 w-5 transition-all hover:-translate-y-1 hover:text-indigo-500" />
        </Link>
        <Link target="__blank" href="https://github.com/xyluis">
          <GitHubLogoIcon className="h-5 w-5 transition-all hover:-translate-y-1 hover:text-indigo-500" />
        </Link>
        <Link
          target="__blank"
          href="https://discord.com/users/471333722810089492"
        >
          <DiscordLogoIcon className="h-5 w-5 transition-all hover:-translate-y-1 hover:text-indigo-500" />
        </Link>
      </div>
      <Link
        href="mailto:me@xyluis.tech"
        className="vertical flex items-center justify-center gap-4 font-mono transition-colors after:h-24 after:w-px after:bg-white hover:text-indigo-500"
      >
        me@xyluis.tech
      </Link>
    </footer>
  )
}
