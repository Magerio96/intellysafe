'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Props {
  id: string
  index: number
  totalSections: number
  isDark?: boolean
  children: React.ReactNode
}

export default function SnapSection({ id, index, totalSections, isDark = true, children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const root = document.querySelector('main.snap-container') as HTMLElement | null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { root, threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToNext = () => {
    const sections = Array.from(
      document.querySelectorAll('main.snap-container > section')
    )
    const next = sections[index + 1] as HTMLElement | undefined
    next?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id={id}
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
      className="relative min-h-screen w-full flex flex-col"
    >
      <motion.div
        className="flex-1 flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {index < totalSections - 1 && (
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-colors duration-200 animate-bounce"
          style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(37,40,73,0.35)' }}
          aria-label="Sezione successiva"
          onMouseEnter={e => (e.currentTarget.style.color = isDark ? 'white' : '#252849')}
          onMouseLeave={e => (e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(37,40,73,0.35)')}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </section>
  )
}
