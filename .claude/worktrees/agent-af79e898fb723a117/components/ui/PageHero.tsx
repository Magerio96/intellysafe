'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface Breadcrumb {
  label: string
  href: string
}
interface PageHeroProps {
  breadcrumbs: Breadcrumb[]
  title: string
  subtitle?: string
}

export default function PageHero({ breadcrumbs, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="noise relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundColor: '#161728',
        backgroundImage: 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(255,98,25,0.1) 0%, transparent 60%)',
      }}
    >
      <div className="container-max relative z-10">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {breadcrumbs.map((bc, i) => (
            <span key={bc.href} className="flex items-center gap-2">
              {i > 0 && <span>›</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link
                  href={bc.href}
                  className="transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {bc.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{bc.label}</span>
              )}
            </span>
          ))}
        </nav>
        <motion.h1
          className="gradient-text text-4xl md:text-5xl font-display font-bold tracking-tight mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          {title}
        </motion.h1>
        <div
          style={{
            display: 'block',
            width: '3rem',
            height: '2px',
            backgroundColor: '#FF6219',
            borderRadius: '9999px',
            marginBottom: '1rem',
          }}
        />
        {subtitle && (
          <motion.p
            className="text-lg"
            style={{ color: 'rgba(255,255,255,0.6)', willChange: 'transform' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
