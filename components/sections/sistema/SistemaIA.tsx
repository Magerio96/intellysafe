'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { Zap, Users, Radio, Clock, Bell, Shield, Activity, Settings, type LucideIcon } from 'lucide-react'

const ICON_MAP: Record<number, LucideIcon> = {
  0: Zap, 1: Users, 2: Radio, 3: Clock, 4: Bell, 5: Shield, 6: Activity, 7: Settings,
}

export default function SistemaIA() {
  const t = useTranslations('sistema.sistemaIA')
  const features = t.raw('features') as Array<{ titolo: string; descrizione: string }>

  return (
    <section
      className="noise section-padding"
      style={{ backgroundColor: '#161728' }}
    >
      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          <span className="section-label-light block mb-3">{t('label')}</span>
          <div
            style={{
              display: 'block',
              width: '3rem',
              height: '2px',
              backgroundColor: '#FF6219',
              borderRadius: '9999px',
              margin: '0 auto 1.5rem',
            }}
          />
          <h2 className="gradient-text text-4xl md:text-5xl font-display font-bold">
            {t('headline')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((f, idx) => {
            const Icon = ICON_MAP[idx] ?? Zap
            return (
              <motion.div key={f.titolo} variants={fadeInUp} style={{ willChange: 'transform' }}>
                <div
                  className="group relative overflow-hidden flex flex-col h-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '24px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    backgroundColor: 'rgba(255,98,25,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16, flexShrink: 0,
                  }}>
                    <Icon style={{ width: 20, height: 20, color: '#FF6219', strokeWidth: 1.8 }} />
                  </div>
                  <p className="font-bold mb-2 text-white" style={{ fontSize: 14 }}>{f.titolo}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>{f.descrizione}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#FF6219' }} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
