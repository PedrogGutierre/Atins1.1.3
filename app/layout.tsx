import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { LanguageTransition } from '@/components/language-transition'
import { Navbar } from '@/components/navbar'

import './globals.css'
import "flag-icons/css/flag-icons.min.css"


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

// 1. BLOCO METADATA LIMPO (sem a parte dos ícones do v0)
export const metadata: Metadata = {
  title: 'ChaleMarua | Chalé à beira-mar',
  description:
    'CasaMarua — seu refúgio perfeito entre o mar e a tranquilidade. Reserve sua estadia em um chalé aconchegante à beira da praia.',
  generator: 'v0.app',
}


export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#1d6fa5'
    }
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >

      <body className="font-sans antialiased">

        <LanguageProvider>
          {/* A Navbar fica fixa, fora da animação */}
          <Navbar />

          {/* Apenas o conteúdo da página vai piscar com o Framer Motion */}
          <LanguageTransition>
            {children}
          </LanguageTransition>

        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && (
          <Analytics />
        )}

      </body>

    </html>
  )
}