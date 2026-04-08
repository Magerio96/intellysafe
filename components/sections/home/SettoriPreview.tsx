'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { SETTORI } from '@/lib/constants'

export default function SettoriPreview() {
  const preview = SETTORI.slice(0, 4)

  return (
    <section className="noise section-padding" style={{ backgroundColor: '#161728' }}>
      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label-light block mb-3">Applicazioni</span>
              <div
                style={{
                  display: 'block',
                  width: '3rem',
                  height: '2px',
                  backgroundColor: '#FF6219',
                  borderRadius: '9999px',
                  marginBottom: '1.5rem',
                }}
              />
              <h2 className="gradient-text text-4xl md:text-5xl font-display font-bold leading-tight">
                Settori e applicazioni
              </h2>
            </div>
            <p className="text-base md:text-right max-w-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Soluzioni per ogni ambito industriale e di servizio.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {preview.map((s, i) => (
            <motion.div
              key={s.id}
              variants={fadeInUp}
              style={{ willChange: 'transform' }}
              className="glass-card p-6 flex gap-5"
            >
              {/* Icon */}
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: 'rgba(255,98,25,0.1)',
                  border: '1px solid rgba(255,98,25,0.2)',
                }}
              >
                {s.icona}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-white mb-2 text-sm">{s.titolo}</h3>
                <ul className="space-y-1">
                  {s.voci.map((v, vi) => (
                    <li
                      key={vi}
                      className="text-xs flex items-start gap-1.5"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      <span style={{ color: '#FF6219' }} className="shrink-0 mt-0.5">▸</span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            +{SETTORI.length - 4} altri settori disponibili
          </p>
          <Link href="/applicazioni" className="btn-secondary">
            Vedi tutte le applicazioni →
          </Link>
        </div>
      </div>
    </section>
  )
}
