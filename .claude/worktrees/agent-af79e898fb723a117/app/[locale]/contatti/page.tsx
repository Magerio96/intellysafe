import type { Metadata } from 'next'
import ContattiHero from '@/components/sections/contatti/ContattiHero'
import ContattiMain from '@/components/sections/contatti/ContattiMain'

export const metadata: Metadata = { title: 'Contatti' }

export default function ContattiPage() {
  return (
    <>
      <ContattiHero />
      <ContattiMain />
    </>
  )
}
