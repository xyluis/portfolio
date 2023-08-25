import { songSchema } from '@/schemas/Song'
import { getBaseUrl } from './get-base-url'

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: 'no-store',
  })
  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getSpotifyStatus = async () => {
  const response = await fetch(`${getBaseUrl()}/api/spotify`, {
    cache: 'no-store',
  })
  const data = await response.json()

  const song = songSchema.parse(data)

  return song
}
