import { z } from 'zod'

export const songSchema = z.object({
  album: z.string().optional(),
  albumImageUrl: z.string().optional(),
  artist: z.string().optional(),
  isPlaying: z.boolean().default(false),
  songUrl: z.string().optional(),
  title: z.string().optional(),
})

export type Song = z.infer<typeof songSchema>
