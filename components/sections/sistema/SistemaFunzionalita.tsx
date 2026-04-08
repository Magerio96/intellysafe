'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { Zap, Users, Radio, Clock, Bell, Shield, Activity, Settings, ChevronDown, type LucideIcon } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { FEATURE_IA } from '@/lib/constants'

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap, users: Users, radio: Radio, clock: Clock,
  bell: Bell, shield: Shield, activity: Activity, settings: Settings,
}

export default function SistemaFunzionalita() {
  const [openId, setOpenId] = useState<number | null>(1)

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

        {/* ── Accordion 2 colonne ── */}
        <div className="grid lg:grid-cols-2 gap-3">
          {[FEATURE_IA.slice(0, 4), FEATURE_IA.slice(4, 8)].map((col, ci) => (
            <motion.div
              key={ci}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-2"
            >
              {col.map(f => {
                const Icon = ICON_MAP[f.icona] || Zap
                const isOpen = openId === f.id
                return (
                  <motion.div
                    key={f.id}
                    variants={fadeInUp}
                    style={{
                      willChange: 'transform',
                      borderRadius: 12,
                      border: isOpen ? '1px solid rgba(255,98,25,0.35)' : '1px solid rgba(255,255,255,0.07)',
                      backgroundColor: isOpen ? 'rgba(255,98,25,0.06)' : 'rgba(255,255,255,0.03)',
                      transition: 'background-color 0.25s, border-color 0.25s',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : f.id)}
                      className="w-full flex items-center gap-3 text-left"
                      style={{ padding: '16px 18px' }}
                    >
                      <div style={{
                        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                        backgroundColor: isOpen ? 'rgba(255,98,25,0.2)' : 'rgba(255,255,255,0.06)',
                        border: isOpen ? '1px solid rgba(255,98,25,0.3)' : '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background-color 0.25s, border-color 0.25s',
                      }}>
                        <Icon style={{ width: 15, height: 15, color: isOpen ? '#FF6219' : 'rgba(255,255,255,0.45)', transition: 'color 0.25s' }} />
                      </div>
                      <span
                        className="flex-1 font-semibold text-sm"
                        style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)' }}
                      >
                        {f.titolo}
                      </span>
                      <ChevronDown style={{
                        width: 15, height: 15,
                        color: 'rgba(255,255,255,0.3)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s',
                        flexShrink: 0,
                      }} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.55)', padding: '0 18px 16px 55px' }}
                          >
                            {f.descrizione}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
