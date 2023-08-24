'use client'

import { useEffect, useState } from 'react'
import { Song, songSchema } from '@/schemas/Song'
import { ChevronsRight, Music } from 'lucide-react'

export default function Home() {
  const [song, setSong] = useState<Song>()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/now-playing')
      const data = await response.json()
      const song = songSchema.parse(data)

      setSong(song)
    }
    fetchData()
  }, [])

  return (
    <main className="container my-auto flex h-full items-center justify-center xl:my-0">
      <section>
        <div className="flex h-full w-full flex-col items-start justify-start space-y-4">
          <span className="font-mono md:text-xl">Hi, my name is</span>
          <div className="flex items-center justify-center gap-4">
            {/* <h1 className="font-regular text-6xl line-through decoration-from-font md:text-8xl">
              Luís Felipe.
            </h1> */}
            <h1 className="bg-gradient-to-l from-indigo-500 to-indigo-200 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
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
          {song && song.isPlaying ? (
            <div className="hidden h-6 flex-col items-center justify-center gap-2 lg:flex lg:flex-row">
              <div className="flex items-center justify-center gap-2">
                <Music className="h-6 w-6 stroke-indigo-500" />
                <p>Listening now on Spotify:</p>
              </div>
              <a
                className="text-sm text-zinc-400 transition-colors hover:text-indigo-500 lg:text-base"
                href={song.songUrl}
                target="_blank"
                rel="noreferrer"
              >
                {song.title} - {song.artist}
              </a>
            </div>
          ) : (
            <div className="hidden w-full items-center justify-center gap-2 lg:flex lg:w-auto">
              <div className="h-6 w-6 animate-pulse rounded-full bg-indigo-500" />
              <div className="h-4 flex-1 animate-pulse rounded-full bg-zinc-400 lg:w-64" />
            </div>
          )}
          <a
            href="/"
            className="group flex items-center justify-center gap-2 rounded-md border border-indigo-500 bg-transparent px-4 py-2 opacity-75 transition-colors hover:cursor-not-allowed"
          >
            Check out my works
            <ChevronsRight className="h-6 w-6 stroke-indigo-500 transition-all group-hover:stroke-indigo-500" />
          </a>
        </div>
      </section>
      {/* <div className="hidden h-96 w-96 overflow-hidden rounded-md border border-indigo-500 xl:flex">
        <Image
          src="https://github.com/xyluis.png"
          alt=""
          width={1080}
          height={1080}
          className="h-full w-full rounded-md"
        />
      </div> */}
    </main>
  )
}
