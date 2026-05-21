import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '../globals.css'

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
  description: "Sistema robotico di intelligenza artificiale per sorveglianza attiva, monitoraggio e sicurezza.",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()
  const messages = await getMessages()
  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        <Script src="https://embeds.iubenda.com/widgets/1f14b2ca-f5a3-49d4-83ef-13c9a7eb3b39.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
