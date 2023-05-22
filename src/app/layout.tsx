import { ReactNode } from 'react'
import { Roboto, Roboto_Mono as RobotoMono } from 'next/font/google'

import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto',
})

const robotoMono = RobotoMono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto-mono',
})

export const metadata = {
  title: 'Luís',
  description: "Luís's personal website built with Next.js and Tailwind CSS.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoMono.variable} flex min-h-screen w-full flex-col items-center justify-start bg-black font-sans text-white antialiased lg:gap-32`}
      >
        <Header />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}
