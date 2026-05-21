'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function FunzionalitaHero() {
  const t = useTranslations('funzionalita.hero')

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#161728' }}>
      <AnimatedBackground compact />
      <div className="container-max relative z-10">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <Link href="/" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Home
          </Link>
          <span>›</span>
          <span className="text-white font-medium">{t('headline')}</span>
        </nav>
        <motion.h1 className="gradient-text text-4xl md:text-5xl font-display font-bold tracking-tight mb-4"
          initial="hidden" animate="visible" variants={fadeInUp} style={{ willChange: 'transform' }}>
          {t('headline')}
        </motion.h1>
        <div style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: '9999px', marginBottom: '1rem' }} />
        <motion.p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', willChange: 'transform' }}
          initial="hidden" animate="visible" variants={fadeInUp}>
          {t('description')}
        </motion.p>
      </div>
    </section>
  )
}
