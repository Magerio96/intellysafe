import type { Metadata } from 'next'
import SistemaHero from '@/components/sections/sistema/SistemaHero'
import SistemaPanoramica from '@/components/sections/sistema/SistemaPanoramica'
import KitMoliris from '@/components/sections/sistema/KitMoliris'
import SistemaFunzionalita from '@/components/sections/sistema/SistemaFunzionalita'
import VeicoliCompatibili from '@/components/sections/sistema/VeicoliCompatibili'
import CTABlock from '@/components/sections/home/CTABlock'

export const metadata: Metadata = { title: 'Il Sistema' }

export default function SistemaPage() {
  return (
    <>
      <SistemaHero />
      <SistemaPanoramica />
      <KitMoliris />
      <SistemaFunzionalita />
      <VeicoliCompatibili />
      <CTABlock />
    </>
  )
}
