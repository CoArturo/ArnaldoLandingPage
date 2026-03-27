import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Arnaldo Farias | English Coach',
  description: 'Aprende a comunicarte en inglés en situaciones reales, desde cero y sin miedo. Sesiones personalizadas con más de 34 años de experiencia.',
  keywords: ['english coach', 'clases de inglés', 'profesor de inglés', 'aprender inglés'],
}

export const viewport: Viewport = {
  themeColor: '#003049',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
