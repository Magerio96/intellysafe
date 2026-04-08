'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const stats = [
  { value: '6',   label: 'Modelli robot' },
  { value: '8',   label: 'Settori applicativi' },
  { value: 'h24', label: 'Sorveglianza autonoma' },
]

/* ─── Content animation ────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.9 } },
}
const item = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#161728' }}
    >
      <AnimatedBackground />

      {/* ── Corner accent lines (hero only) ── */}
      {[
        { top: 0,    left: 0,    background: 'linear-gradient(90deg, rgba(255,98,25,0.7), transparent)' },
        { top: 0,    right: 0,   background: 'linear-gradient(270deg, rgba(255,98,25,0.7), transparent)' },
        { bottom: 0, left: 0,    background: 'linear-gradient(90deg, rgba(255,98,25,0.7), transparent)' },
        { bottom: 0, right: 0,   background: 'linear-gradient(270deg, rgba(255,98,25,0.7), transparent)' },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ ...c, width: '25vw', height: 2 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        />
      ))}

      {/* ── Curtain reveal ── */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: '#161728' }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />

      {/* ── Content ── */}
      <div className="container-max relative z-10 w-full py-24 lg:min-h-screen lg:flex lg:items-center">
        <motion.div
          className="w-full max-w-3xl mx-auto flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} style={{ willChange: 'transform' }}>
            <span className="badge-orange mb-6 inline-flex">
              Sistema robotico AI — Intelligenza Artificiale
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl xl:text-[3.25rem] font-display font-bold text-white leading-[1.1] mb-6"
            style={{ willChange: 'transform' }}
          >
            Sistema robotico di IA
            <br />
            per attività di <AnimatedText />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.6)', willChange: 'transform' }}
          >
            Ud&apos;Anet, in collaborazione con Info Solution s.r.l, presenta IntellySafe
            Edge System: sviluppo di veicoli a guida autonoma da impiegare in processi
            produttivi e servizi a valore aggiunto senza ausilio del personale.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 mb-16"
            style={{ willChange: 'transform' }}
          >
            <Link href="/sistema" className="btn-primary">
              Scopri il Sistema →
            </Link>
            <Link href="/contatti" className="btn-secondary">
              Contattaci
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-12 pt-8 w-full max-w-sm"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', willChange: 'transform' }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#FF6219' }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
