import type { Metadata } from 'next'
import ApplicazioniHero from '@/components/sections/applicazioni/ApplicazioniHero'
import Settori from '@/components/sections/applicazioni/Settori'
import CasoDuso from '@/components/sections/applicazioni/CasoDuso'
import CTABlock from '@/components/sections/home/CTABlock'

export const metadata: Metadata = { title: 'Applicazioni' }

export default function ApplicazioniPage() {
  return (
    <>
      <ApplicazioniHero />
      <Settori />
      <CasoDuso />
      <CTABlock />
    </>
  )
}
