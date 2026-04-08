'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { SCHEDULING_CARDS } from '@/lib/constants'

export default function FunzionalitaDettaglio() {
  return (
    <section style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max flex flex-col gap-20">

        {/* ── Blocco 1: Scheduling — testo sinistra, immagine destra ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
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

          {/* Right: immagine ritagliata — excess bianco a destra rimosso */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInRight} style={{ willChange: 'transform' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: 12, overflow: 'hidden' }}>
              <Image
                src="/images/scheduling.png"
                alt="Scheduling missioni"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: '1px', backgroundColor: '#e4e8f0' }} />

        {/* ── Blocco 2: Input/Output — immagine sinistra, testo destra ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: immagine */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInLeft} style={{ willChange: 'transform' }}>
            <Image
              src="/images/scheduling_missioni-removebg-preview.png"
              alt="Input/Output sensoristica"
              width={700}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>

          {/* Right: testo */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
              Sensoristica
            </motion.span>
            <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: '#0f1221', willChange: 'transform' }}>
              Input/Output
            </motion.h2>
            <motion.p variants={fadeInUp} className="leading-relaxed" style={{ color: '#6b7290', fontSize: 14, lineHeight: 1.6, willChange: 'transform' }}>
              Potete equipaggiare il nostro sistema robotico con una serie di sensori analogici
              e digitali, e riportare le informazioni e gli eventi associati nel sw di
              supervisione e controllo. In questa schermata sono listati alcuni I/O presenti
              nel sistema robotico.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
