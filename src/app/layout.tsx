import { ReactNode } from 'react'

import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'

export const metadata = {
  title: 'Luís',
  description: "Luís's personal website built with Next.js and Tailwind CSS.",
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
