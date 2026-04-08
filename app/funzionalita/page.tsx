import type { Metadata } from 'next'
import FunzionalitaHero from '@/components/sections/funzionalita/FunzionalitaHero'
import FunzionalitaDettaglio from '@/components/sections/funzionalita/FunzionalitaDettaglio'
import GuidaMissione from '@/components/sections/funzionalita/GuidaMissione'
import CTABlock from '@/components/sections/home/CTABlock'

export const metadata: Metadata = { title: 'Funzionalità' }

export default function FunzionalitaPage() {
  return (
    <>
      <FunzionalitaHero />
      <FunzionalitaDettaglio />
      <GuidaMissione />
      <CTABlock />
    </>
  )
}
