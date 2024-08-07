import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
