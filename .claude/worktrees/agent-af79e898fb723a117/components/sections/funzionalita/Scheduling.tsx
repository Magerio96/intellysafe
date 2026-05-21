'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'
import { SCHEDULING_CARDS } from '@/lib/constants'

export default function Scheduling() {
  return (
    <section style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: testo + cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
              Pianificazione
            </motion.span>
            <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: '#0f1221', willChange: 'transform' }}>
              Scheduling missioni e supervisione
            </motion.h2>
            <motion.p variants={fadeInUp} className="leading-relaxed mb-8" style={{ color: '#6b7290', fontSize: 14, lineHeight: 1.6, willChange: 'transform' }}>
              Il robot è equipaggiato con una applicazione accessibile in rete locale, tramite browser web,
              in grado di pianificarne le missioni, gestirle e di supervisionarne il funzionamento in tempo reale.
            </motion.p>

            {/* 2 cards */}
            <div className="flex flex-col gap-3">
              {SCHEDULING_CARDS.map((card, i) => (
                <motion.div key={i} variants={fadeInUp} style={{
                  willChange: 'transform',
                  backgroundColor: '#fff',
                  border: '1px solid #e4e8f0',
                  borderRadius: 12,
                  padding: '16px 18px',
                }}>
                  <div className="flex items-start gap-3">
                    <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#FF6219', flexShrink: 0, marginTop: 6, display: 'block' }} />
                    <div>
                      <p className="font-bold mb-1" style={{ fontSize: 13, color: '#0f1221' }}>{card.titolo}</p>
                      <p style={{ fontSize: 12, color: '#8a94b0', lineHeight: 1.5 }}>{card.testo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: immagine in dark card */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInRight} style={{ willChange: 'transform' }}>
            <div style={{
              backgroundColor: '#0f1221',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(15,18,33,0.12)',
            }}>
              <Image
                src="/images/scheduling_missioni (1).png"
                alt="Scheduling missioni"
                width={700}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
