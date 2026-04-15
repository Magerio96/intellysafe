'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const VEICOLI = [
  {
    nome: 'Heavy Duty',
    immagine: '/images/NewHeavyDuty.png',
    tipo: 'tracked',
    descrizione: 'Alta portata, uso industriale pesante',
    dettaglio: 'Progettato per ambienti industriali impegnativi, garantisce prestazioni elevate e affidabilità in condizioni estreme.',
    specs: [
      { label: 'Peso', valore: '290', unita: 'kg' },
      { label: 'Portata', valore: '500', unita: 'kg' },
      { label: 'Coppia', valore: '1000', unita: 'Nm' },
      { label: 'Protezione', valore: 'IP65', unita: '' },
    ],
    tags: ['Alta portata', 'Cingolato', 'Industriale'],
  },
  {
    nome: 'Tracked Pro',
    immagine: '/images/NewtrackedPro.png',
    tipo: 'tracked',
    descrizione: 'Compatto e versatile, IP67',
    dettaglio: 'Soluzione compatta e versatile ideale per spazi ristretti, con elevata protezione contro acqua e polvere.',
    specs: [
      { label: 'Peso', valore: '180', unita: 'kg' },
      { label: 'Portata', valore: '120', unita: 'kg' },
      { label: 'Coppia', valore: '600', unita: 'Nm' },
      { label: 'Protezione', valore: 'IP67', unita: '' },
    ],
    tags: ['Compatto', 'Cingolato', 'Versatile'],
  },
]

export default function VehiclesTeaser() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const handleSelect = (i: number) => {
    if (i === active) return
    setActive(i)
    setAnimKey(k => k + 1)
  }

  const v = VEICOLI[active]

  return (
    <section
      className="noise flex-1 flex flex-col justify-center relative overflow-hidden"
      style={{ backgroundColor: '#161728', padding: '32px 0' }}
    >
      <AnimatedBackground compact />

      <div className="container-max relative z-10">

        {/* Header — titolo + sottotitolo affiancati per risparmiare spazio verticale */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              style={{ willChange: 'transform' }}
              className="section-label-light block mb-2"
            >
              Compatibilità
            </motion.span>
            <motion.div
              variants={fadeInUp}
              style={{ willChange: 'transform', width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '0.75rem' }}
            />
            <motion.h2
              variants={fadeInUp}
              style={{ willChange: 'transform' }}
              className="text-4xl md:text-5xl font-display font-bold leading-tight gradient-text"
            >
              Veicoli compatibili
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            style={{ willChange: 'transform', color: 'rgba(255,255,255,0.5)', maxWidth: 400 }}
            className="text-base leading-relaxed md:text-right"
          >
            I sistemi supportano diverse piattaforme robotiche, permettendo l&apos;integrazione e il controllo di veicoli con caratteristiche e capacità differenti.
          </motion.p>
        </motion.div>

        {/* Body: lista + contenuto dinamico */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start">

          {/* ── Lista veicoli ── */}
          <div className="flex flex-col gap-2">
            {VEICOLI.map((item, i) => (
              <motion.button
                key={item.nome}
                onClick={() => handleSelect(i)}
                className="relative text-left rounded-xl overflow-hidden"
                style={{
                  backgroundColor: i === active ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${i === active ? 'rgba(255,106,31,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  padding: '12px 16px',
                  transition: 'background-color 0.15s, border-color 0.15s',
                }}
                whileHover={i !== active ? {
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  borderColor: 'rgba(255,106,31,0.25)',
                } : undefined}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top transition-transform duration-200"
                  style={{ backgroundColor: '#FF6219', transform: i === active ? 'scaleY(1)' : 'scaleY(0)' }}
                />
                <p className="font-bold text-sm mb-1 text-white">{item.nome}</p>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-1"
                  style={item.tipo === 'tracked'
                    ? { color: '#ff6a1f', backgroundColor: 'rgba(255,106,31,0.12)', border: '1px solid rgba(255,106,31,0.3)' }
                    : { color: '#8a94b0', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }
                  }
                >
                  {item.tipo}
                </span>
                <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.descrizione}</p>
              </motion.button>
            ))}

            <Link
              href="/sistema"
              className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 mt-1"
              style={{ border: '1px dashed rgba(255,255,255,0.15)' }}
            >
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>+ 3 altri modelli</span>
              <span style={{ color: '#FF6219' }}>→</span>
            </Link>
          </div>

          {/* ── Contenuto dinamico ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={animKey}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
            >
              {/* Immagine — no box, sfondo trasparente */}
              <div className="relative flex items-center justify-center" style={{ height: 280 }}>
                <Image
                  src={v.immagine}
                  alt={v.nome}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                {/* Badge nome bottom-left */}
                <span
                  className="absolute bottom-2 left-2 text-xs font-bold px-3 py-1.5 rounded-md z-10"
                  style={{ backgroundColor: '#FF6219', color: '#fff' }}
                >
                  {v.nome}
                </span>
              </div>

              {/* Specifiche */}
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">{v.nome}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{v.dettaglio}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {v.specs.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl p-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <p className="text-[10px] uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</p>
                      <p className="font-bold text-white" style={{ fontSize: 15 }}>
                        {s.valore}
                        {s.unita && <span className="text-[11px] font-normal ml-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.unita}</span>}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <Link href="/contatti" className="btn-primary text-center">
                    Richiedi informazioni →
                  </Link>
                  <Link href="/sistema" className="btn-secondary text-center">
                    Vedi tutti i veicoli →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
