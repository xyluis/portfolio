import { cache } from 'react'

export const getBaseUrl = cache(() => {
  return process.env.VERCEL_URL
    ? `https://xyluis.tech`
    : `http://localhost:${process.env.PORT ?? 3000}`
})
