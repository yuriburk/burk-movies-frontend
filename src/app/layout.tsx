import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Navigation } from '@/components/layout'
import './globals.css'

const source = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Burk Movies',
  description: 'Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={source.className}>
        <NextTopLoader />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
