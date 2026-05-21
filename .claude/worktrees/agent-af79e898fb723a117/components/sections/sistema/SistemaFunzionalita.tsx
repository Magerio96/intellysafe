'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { Zap, Users, Radio, Clock, Bell, Shield, Activity, Settings, type LucideIcon } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { FEATURE_IA } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap, users: Users, radio: Radio, clock: Clock,
  bell: Bell, shield: Shield, activity: Activity, settings: Settings,
}

export default function SistemaFunzionalita() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0f1221', padding: '80px 0' }}>
      <AnimatedBackground compact />

      <div className="container-max relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label-light block mb-3">
            Intelligenza Artificiale
          </motion.span>
          <motion.div
            variants={fadeInUp}
            style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }}
          />
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold text-white"
            style={{ willChange: 'transform' }}
          >
            Il Sistema di Intelligenza Artificiale
          </motion.h2>
        </motion.div>

        {/* ── Card grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {FEATURE_IA.map(f => {
            const Icon = ICON_MAP[f.icona] || Zap
            return (
              <motion.div
                key={f.id}
                variants={fadeInUp}
                whileHover={{
                  borderColor: 'rgba(255,98,25,0.4)',
                  backgroundColor: 'rgba(255,98,25,0.05)',
                  y: -2,
                }}
                style={{
                  willChange: 'transform',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.07)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  padding: '20px',
                  transition: 'background-color 0.2s, border-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                  backgroundColor: 'rgba(255,98,25,0.1)',
                  border: '1px solid rgba(255,98,25,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: 16, height: 16, color: '#FF6219' }} />
                </div>
                <p className="font-semibold text-sm text-white leading-snug">{f.titolo}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.descrizione}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
