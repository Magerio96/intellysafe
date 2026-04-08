import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | IntellySafe Edge System',
    default: 'IntellySafe Edge System — Robot IA per Monitoraggio e Sorveglianza',
  },
  description: "Sistema robotico di intelligenza artificiale per sorveglianza attiva, monitoraggio e sicurezza. Sviluppato da Ud'Anet in collaborazione con Info Solution s.r.l.",
  keywords: ['robot sorveglianza', 'intelligenza artificiale', 'sicurezza', 'automazione', 'IntellySafe', 'guida autonoma'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
