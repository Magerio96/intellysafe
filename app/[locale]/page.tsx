'use client'

import { useEffect } from 'react'
import Hero from '@/components/sections/home/Hero'
import Premio from '@/components/sections/home/Premio'
import EdgeSystem from '@/components/sections/home/EdgeSystem'
import VehiclesTeaser from '@/components/sections/home/VehiclesTeaser'
import SectorsTeaser from '@/components/sections/home/SectorsTeaser'
import CTABlock from '@/components/sections/home/CTABlock'
import SnapSection from '@/components/ui/SnapSection'
import ScrollDots from '@/components/ui/ScrollDots'

const TOTAL = 6

// Dark: hero(0), premio(1), veicoli(3), contatti(5)
// Light: edge(2), settori(4)
const DARK = [true, true, false, true, false, true]

export default function HomePage() {
  useEffect(() => {
    // Prevent browser from restoring scroll position on back/forward navigation
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    // Reset window scroll so footer doesn't bleed in from a previous page
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="-mt-16">
      <main
        className="snap-container"
        style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}
      >
        <SnapSection id="hero"    index={0} totalSections={TOTAL} isDark={DARK[0]}><Hero /></SnapSection>
        <SnapSection id="premio"  index={1} totalSections={TOTAL} isDark={DARK[1]}><Premio /></SnapSection>
        <SnapSection id="edge"    index={2} totalSections={TOTAL} isDark={DARK[2]}><EdgeSystem /></SnapSection>
        <SnapSection id="veicoli" index={3} totalSections={TOTAL} isDark={DARK[3]}><VehiclesTeaser /></SnapSection>
        <SnapSection id="settori" index={4} totalSections={TOTAL} isDark={DARK[4]}><SectorsTeaser /></SnapSection>
        <SnapSection id="contatti"index={5} totalSections={TOTAL} isDark={DARK[5]}><CTABlock /></SnapSection>
      </main>
      <ScrollDots />
    </div>
  )
}
