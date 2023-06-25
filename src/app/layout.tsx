import { ReactNode } from 'react'
import { Metadata } from 'next'

import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'

export const metadata: Metadata = {
  title: 'Luís',
  description: "Luís's personal website built with Next.js and Tailwind CSS.",
  openGraph: {
    type: 'website',
    title: 'Luís',
    images: {
      url: 'https://i.imgur.com/JrAR7s2.png',
    },
  },
  twitter: {
    title: 'Luís',
    description: "Luís's personal website built with Next.js and Tailwind CSS.",
    images: {
      url: 'https://i.imgur.com/JrAR7s2.png',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen w-full flex-col items-center justify-center bg-black font-sans text-white antialiased lg:gap-32">
        <Header />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}
