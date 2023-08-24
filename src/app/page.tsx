'use client'

import { Music } from 'lucide-react'
// import Image from 'next/image'

import { useEffect, useState } from 'react'

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export default function Home() {
  const [song, setSong] = useState<NowPlayingSong>()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/now-playing')
      const songRes = await res.json()
      setSong(songRes)
    }
    fetchData()
  }, [])

  return (
    <main className="container my-auto flex h-full items-center justify-center gap-4 xl:my-0">
      <section>
        <div className="flex h-full w-full flex-col items-start justify-start gap-4">
          <span className="font-mono md:text-xl">Hi, my name is</span>
          <div className="flex items-center justify-center gap-4">
            {/* <h1 className="font-regular text-6xl line-through decoration-from-font md:text-8xl">
              Luís Felipe.
            </h1> */}
            <h1 className="text-6xl font-bold text-indigo-500 md:text-8xl">
              Luís.
            </h1>
          </div>
          <h1 className="text-4xl font-bold text-zinc-400 md:text-6xl">
            I build some stuff on the internet.
          </h1>
          <p className="max-w-4xl text-zinc-400">
            I love how technology can change the world and the way we see it. I
            really like backend but I&apos;ve been learning a lot about frontend
            for some time now. You can see my progress on my{' '}
            <a
              target="_blank"
              href="https://github.com/xyluis"
              className="font-bold text-zinc-100 decoration-indigo-500 transition-colors hover:text-indigo-500 hover:underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          {
            song && song.isPlaying && (
              <div className="mt-4 flex h-6 flex-col items-center justify-center gap-2 lg:flex-row">
                <div className="flex items-center justify-center gap-2">
                  <Music className="h-6 w-6 stroke-indigo-500" />
                  <p>Listening:</p>
                </div>
                <a
                  className="font-mono text-sm text-zinc-400 transition-colors hover:text-indigo-500 lg:text-base"
                  href={song.songUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {song.title} - {song.artist}
                </a>
              </div>
            ) /* : (
              <>
                <div className="h-6 w-6 animate-pulse rounded-full bg-indigo-500" />
                <div className="h-4 w-64 animate-pulse rounded-full bg-zinc-400" />
              </>
            ) */
          }
          {/* <a
          href="/"
          className="flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 transition-colors hover:bg-white hover:text-black"
        >
          Check out my works!
        </a> */}
        </div>
        {/* <div className="hidden h-60 w-60 overflow-hidden rounded-md border border-white/40 xl:flex">
        <Image
          src="https://github.com/xyluis.png"
          alt=""
          width={1080}
          height={1080}
          className="h-full w-full rounded-md"
        />
      </div> */}
      </section>
    </main>
  )
}
