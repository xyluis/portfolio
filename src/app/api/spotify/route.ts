import { getNowPlaying } from '@/lib/spotify'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false })
  }

  return NextResponse.json({
    album: song.item.album_name,
    albumImageUrl: song.item.album.images[0].url,
    artist: song.item.artists.map((artist: any) => artist.name).join(', '),
    songUrl: song.item.external_urls.spotify,
    isPlaying: song.is_playing,
    title: song.item.name.replace(/\([^()]*\)/g, ''),
  })
}
