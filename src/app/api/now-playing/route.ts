import { getNowPlaying } from '@/services/spotify'
// import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
    })
  }

  const song = await response.json()

  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
    })
  }

  return new Response(
    JSON.stringify({
      album: song.item.album_name,
      albumImageUrl: song.item.album.images[0].url,
      artist: song.item.artists[0].name,
      songUrl: song.item.external_urls.spotify,
      isPlaying: song.is_playing,
      title: song.item.name.replace(/\([^()]*\)/g, ''),
    }),
    {
      status: 200,
    },
  )
}
