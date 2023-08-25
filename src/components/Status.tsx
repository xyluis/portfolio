'use client'

import { Music } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getSpotifyStatus } from '@/lib/spotify'

export function Status() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['spotify'],
    queryFn: getSpotifyStatus,
    refetchInterval: 120000,
  })

  return (
    <>
      {!isLoading && !isFetching && !error && data && data.isPlaying ? (
        <div className="hidden h-6 flex-col items-center justify-center gap-2 lg:flex lg:flex-row">
          <div className="flex items-center justify-center gap-2">
            <Music className="h-6 w-6 stroke-indigo-500" />
            <p>Listening now on Spotify:</p>
          </div>
          <a
            className="text-sm text-zinc-400 transition-colors hover:text-indigo-500 lg:text-base"
            href={data.songUrl}
            target="_blank"
            rel="noreferrer"
          >
            {data.title} - {data.artist}
          </a>
        </div>
      ) : (
        <div className="hidden w-full items-center justify-center gap-2 lg:flex lg:w-auto">
          <div className="h-6 w-6 animate-pulse rounded-full bg-indigo-500" />
          <div className="h-4 flex-1 animate-pulse rounded-full bg-zinc-400 lg:w-64" />
        </div>
      )}
    </>
  )
}
