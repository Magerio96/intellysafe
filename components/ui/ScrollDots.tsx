'use client'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',     label: 'Home' },
  { id: 'premio',   label: 'Campioni di Innovazione' },
  { id: 'edge',     label: 'Edge System' },
  { id: 'veicoli',  label: 'Veicoli' },
  { id: 'settori',  label: 'Applicazioni' },
  { id: 'contatti', label: 'Contatti' },
]

export default function ScrollDots() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const root = document.querySelector('main.snap-container') as HTMLElement | null
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }, index) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActive(index)
            // Notify navbar of active section
            window.dispatchEvent(new CustomEvent('sectionchange', { detail: id }))
          }
        },
        { root, threshold: 0.5 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Navigazione sezioni"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 lg:flex flex-col gap-3 hidden"
    >
      {SECTIONS.map(({ id, label }, i) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={`Vai a ${label}`}
          className="group flex items-center gap-2 justify-end"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Label tooltip */}
          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-semibold px-2 py-1 rounded-md"
            style={{
              background: 'rgba(37,40,73,0.9)',
              color: 'white',
              backdropFilter: 'blur(8px)',
            }}
          >
            {label}
          </span>

          {/* Dot */}
          <span
            className="block rounded-full transition-all duration-300 flex-shrink-0"
            style={
              i === active
                ? { width: 10, height: 10, backgroundColor: '#FF6219', boxShadow: '0 0 8px rgba(255,98,25,0.7)' }
                : hovered === i
                ? { width: 8, height: 8, backgroundColor: 'rgba(255,98,25,0.6)', boxShadow: '0 0 6px rgba(255,98,25,0.4)' }
                : { width: 6, height: 6, backgroundColor: 'rgba(255,255,255,0.35)' }
            }
          />
        </button>
      ))}
    </nav>
  )
}
