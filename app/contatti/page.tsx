import type { Metadata } from 'next'
import ContattiMain from '@/components/sections/contatti/ContattiMain'

export const metadata: Metadata = { title: 'Contatti' }

export default function ContattiPage() {
  return <ContattiMain />
}
