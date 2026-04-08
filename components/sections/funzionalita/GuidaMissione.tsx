'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import Image from 'next/image'
import { STEPS_MISSIONE } from '@/lib/constants'

const STEP_IMAGES = [
  '/images/mockup_mission1 (3).png',
  '/images/mockup_mission2 (2).png',
  '/images/mockup_mission3_new.png',
  '/images/mockup_mission4_pt.2 (1).png',
]

export default function GuidaMissione() {
  const [activeStep, setActiveStep] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [direction, setDirection] = useState(1)

  function goTo(i: number) {
    if (i === activeStep) return
    setDirection(i > activeStep ? 1 : -1)
    setActiveStep(i)
    setAnimKey(k => k + 1)
  }

  const step = STEPS_MISSIONE[activeStep]

  return (
    <section style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max">

        {/* Header */}
        <motion.div className="mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
            Workflow
          </motion.span>
          <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#0f1221', willChange: 'transform' }}>
            Pianificazione di una missione
          </motion.h2>
        </motion.div>

        {/* Step indicator */}
        <motion.div className="relative w-full mb-10" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp}>
          {/* Linee connettore — da centro col1 (12.5%) a centro col4 (87.5%), divise in 3 segmenti uguali */}
          <div className="absolute flex" style={{ top: 18, left: '12.5%', right: '12.5%', zIndex: 0 }}>
            {[0, 1, 2].map(i => (
              <div key={i} className="flex-1 transition-all duration-500" style={{ height: 2, backgroundColor: i < activeStep ? '#FF6219' : '#e4e8f0' }} />
            ))}
          </div>

          {/* Cerchi + etichette — grid 4 colonne uguali */}
          <div className="grid grid-cols-4 relative" style={{ zIndex: 1 }}>
            {STEPS_MISSIONE.map((s, i) => (
              <button key={s.numero} onClick={() => goTo(i)} className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300" style={{
                  backgroundColor: i < activeStep ? 'rgba(255,98,25,0.2)' : i === activeStep ? '#FF6219' : '#fff',
                  color: i < activeStep ? '#FF6219' : i === activeStep ? '#fff' : '#c8cedd',
                  border: i < activeStep ? '2px solid rgba(255,98,25,0.4)' : i === activeStep ? 'none' : '2px solid #e4e8f0',
                  boxShadow: i === activeStep ? '0 0 16px rgba(255,98,25,0.35)' : 'none',
                }}>
                  {i < activeStep ? '✓' : s.numero}
                </div>
                <span className="text-[11px] font-medium hidden md:block text-center leading-tight" style={{ maxWidth: 90, color: i === activeStep ? '#FF6219' : i < activeStep ? '#6b7290' : '#c8cedd' }}>
                  {s.titolo}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Slider card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={animKey}
            initial={{ opacity: 0, x: direction * 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -16 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e4e8f0',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {/* Left: immagine su sfondo dark */}
            <div className="min-h-[220px] md:min-h-[360px]" style={{ backgroundColor: '#0f1221', position: 'relative' }}>
              <Image
                src={STEP_IMAGES[activeStep]}
                alt={step.titolo}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: testo */}
            <div className="p-6 md:p-10" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: '50%',
                backgroundColor: '#FF6219', color: '#fff',
                fontSize: 13, fontWeight: 700,
              }}>
                {step.numero}
              </div>
              <h3 className="font-display font-bold" style={{ fontSize: 20, color: '#0f1221' }}>{step.titolo}</h3>
              <p style={{ fontSize: 13, color: '#6b7290', lineHeight: 1.6 }}>{step.descrizione}</p>

              {/* Nav buttons dentro la card */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => goTo(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="transition-all duration-200 disabled:opacity-30 font-semibold text-sm"
                  style={{ padding: '9px 20px', borderRadius: 8, border: '1.5px solid #e4e8f0', color: '#0f1221', backgroundColor: 'transparent' }}
                >
                  ← Precedente
                </button>
                <button
                  onClick={() => goTo(Math.min(STEPS_MISSIONE.length - 1, activeStep + 1))}
                  disabled={activeStep === STEPS_MISSIONE.length - 1}
                  className="transition-all duration-200 disabled:opacity-30 font-semibold text-sm text-white"
                  style={{ padding: '9px 20px', borderRadius: 8, backgroundColor: '#FF6219', border: 'none' }}
                >
                  Successivo →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
