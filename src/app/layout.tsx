import { ReactNode } from 'react'
import { Metadata } from 'next'

import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { getBaseUrl } from '@/lib/get-base-url'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Luís',
  description: "Luís's personal website built with Next.js and Tailwind CSS.",
  openGraph: {
    type: 'website',
    title: 'Luís',
    description: "Luís's personal website built with Next.js and Tailwind CSS.",
    url: getBaseUrl(),
    images: {
      url: '/og.image.png',
    },
  },
  twitter: {
    title: 'Luís',
    description: "Luís's personal website built with Next.js and Tailwind CSS.",
    images: {
      url: '/og.image.png',
    },
  },
  metadataBase: new URL(getBaseUrl()),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 font-sans text-zinc-100 antialiased lg:gap-32">
        <Providers>
          <Header />
          {children}
          <Footer />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
