'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Home, Package, ShieldCheck } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'
import Image from 'next/image'

const CARDS = [
  {
    icon: Shield,
    titolo: 'Sicurezza e sorveglianza',
    descrizione: 'Ronde autonome h24, rilevamento intrusioni e dissuasione attiva senza presidio umano continuativo.',
    tag: ['Ronde', 'Intrusioni', 'Dissuasione'],
  },
  {
    icon: Home,
    titolo: 'Sicurezza degli ambienti',
    descrizione: 'Monitoraggio costante di perdite, gas, fumo e principi di incendio in ambienti industriali e civili.',
    tag: ['Gas', 'Fumo', 'Incendio'],
  },
  {
    icon: Package,
    titolo: 'Logistica industriale',
    descrizione: 'Trasporto autonomo di materiali, gestione magazzino e integrazione con sistemi WMS esistenti.',
    tag: ['Trasporto', 'Magazzino', 'WMS'],
  },
  {
    icon: ShieldCheck,
    titolo: 'Difesa e perimetrazione',
    descrizione: 'Pattugliamento automatico di zone vietate con alert in tempo reale e documentazione delle attività.',
    tag: ['Pattugliamento', 'Alert'],
  },
]

export default function SectorsTeaser() {
  return (
    <section
      className="flex-1 flex flex-col justify-center"
      style={{ backgroundColor: '#f5f6fa', padding: '48px 0', borderTop: '1px solid #e4e8f0' }}
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-end" style={{ paddingBottom: '30px' }}>

          {/* ── Sinistra: header + card grid ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6">

            {/* Header */}
            <div>
              <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
                Applicazioni
              </motion.span>
              <motion.div variants={fadeInUp} style={{ willChange: 'transform', width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '0.75rem' }} />
              <motion.h2 variants={fadeInUp} style={{ willChange: 'transform', color: '#0f1221' }} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-2">
                Settori e <span style={{ color: '#FF6219' }}>applicazioni</span>
              </motion.h2>
              <motion.p variants={fadeInUp} style={{ willChange: 'transform', color: '#6b7290', fontSize: 14, lineHeight: 1.6 }}>
                Soluzioni per ogni ambito industriale e di servizio. Scopri dove IntellySafe è già al lavoro.
              </motion.p>
            </div>

            {/* Card grid 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.titolo}
                    variants={fadeInUp}
                    className="group relative overflow-hidden flex flex-col"
                    style={{
                      willChange: 'transform',
                      backgroundColor: '#fff',
                      border: '1px solid #e4e8f0',
                      borderRadius: 16,
                      padding: '20px',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    whileHover={{ borderColor: 'rgba(255,106,31,0.33)', boxShadow: '0 6px 24px rgba(255,106,31,0.08)' } as any}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 mb-3" style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#fff3ee' }}>
                      <Icon style={{ width: 20, height: 20, color: '#FF6219', strokeWidth: 1.8 }} />
                    </div>
                    <p className="font-bold mb-1.5" style={{ fontSize: 14, color: '#0f1221' }}>{card.titolo}</p>
                    <p className="flex-1" style={{ fontSize: 12, color: '#6b7290', lineHeight: 1.55 }}>{card.descrizione}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {card.tag.map(t => (
                        <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5, backgroundColor: '#fff3ee', border: '1px solid #ffd4b8', color: '#FF6219' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#FF6219' }} />
                  </motion.div>
                )
              })}
            </div>

            {/* CTA visible only on mobile */}
            <motion.div variants={fadeInUp} style={{ willChange: 'transform' }} className="flex gap-3 lg:hidden mt-2">
              <Link href="/applicazioni" className="btn-primary text-sm">Vedi tutte →</Link>
              <Link href="/contatti" className="btn-secondary text-sm" style={{ color: '#0f1221', border: '1.5px solid #c8cedd' }}>Contattaci</Link>
            </motion.div>

          </motion.div>

          {/* ── Destra: immagine + CTA ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'transform' }}
            className="relative flex-col gap-4 hidden lg:flex"
          >
            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{ inset: '-40px', background: 'radial-gradient(ellipse at 50% 50%, rgba(255,98,25,0.06) 0%, transparent 65%)', filter: 'blur(40px)' }}
            />
            <div className="relative z-10">
              <Image
                src="/images/application.png"
                alt="Applicazioni IntellySafe"
                width={800}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Bottom row sotto immagine */}
            <div className="relative z-10 flex items-center justify-between">
              <p style={{ fontSize: 13, color: '#8a94b0' }}>+4 altri settori disponibili</p>
              <div className="flex items-center gap-2.5">
                <Link href="/applicazioni" className="inline-flex items-center font-bold text-white" style={{ fontSize: 13, backgroundColor: '#FF6219', padding: '11px 22px', borderRadius: 8 }}>
                  Vedi tutte →
                </Link>
                <Link href="/contatti" className="inline-flex items-center font-semibold" style={{ fontSize: 13, color: '#0f1221', border: '1.5px solid #c8cedd', padding: '11px 22px', borderRadius: 8, backgroundColor: 'transparent' }}>
                  Contattaci
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
