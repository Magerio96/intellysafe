'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type Filtro = 'tutti' | 'tracked' | 'wheeled'

const VEICOLI = [
  {
    nome: 'Heavy Duty',
    immagine: '/images/NewHeavyDuty.png',
    tipo: 'tracked' as const,
    descrizione: 'Alta portata, uso industriale pesante',
    dettaglio: 'Progettato per ambienti industriali impegnativi, garantisce prestazioni elevate e affidabilità in condizioni estreme.',
    specs: [
      { label: 'Peso',       valore: '290',  unita: 'kg' },
      { label: 'Portata',    valore: '500',  unita: 'kg' },
      { label: 'Coppia',     valore: '1000', unita: 'Nm' },
      { label: 'Protezione', valore: 'IP65', unita: ''   },
    ],
    tags: ['Alta portata', 'Cingolato', 'Industriale'],
  },
  {
    nome: 'Tracked Pro',
    immagine: '/images/NewtrackedPro.png',
    tipo: 'tracked' as const,
    descrizione: 'Compatto e versatile, IP67',
    dettaglio: 'Soluzione compatta e versatile ideale per spazi ristretti, con elevata protezione contro acqua e polvere.',
    specs: [
      { label: 'Peso',       valore: '180',  unita: 'kg' },
      { label: 'Portata',    valore: '120',  unita: 'kg' },
      { label: 'Coppia',     valore: '600',  unita: 'Nm' },
      { label: 'Protezione', valore: 'IP67', unita: ''   },
    ],
    tags: ['Compatto', 'Cingolato', 'Versatile'],
  },
  {
    nome: 'Tracked Mini',
    immagine: '/images/trackedmini.png',
    tipo: 'tracked' as const,
    descrizione: 'Formato compatto, IP67',
    dettaglio: 'Il formato mini della linea tracked, pensato per spazi molto ristretti mantenendo un\'elevata protezione.',
    specs: [
      { label: 'Peso',       valore: '55',   unita: 'kg' },
      { label: 'Portata',    valore: '25',   unita: 'kg' },
      { label: 'Coppia',     valore: '—',    unita: ''   },
      { label: 'Protezione', valore: 'IP67', unita: ''   },
    ],
    tags: ['Mini', 'Cingolato', 'Spazi ristretti'],
  },
  {
    nome: 'Wheeled Mini',
    immagine: '/images/wheeledmini.png',
    tipo: 'wheeled' as const,
    descrizione: 'Leggero e agile, IP22',
    dettaglio: 'Il modello più leggero della gamma, ottimo per ambienti interni dove agilità e dimensioni ridotte sono prioritarie.',
    specs: [
      { label: 'Peso',       valore: '23',   unita: 'kg' },
      { label: 'Portata',    valore: '20',   unita: 'kg' },
      { label: 'Coppia',     valore: '—',    unita: ''   },
      { label: 'Protezione', valore: 'IP22', unita: ''   },
    ],
    tags: ['Mini', 'Ruote', 'Agile'],
  },
]

const FILTRI: { label: string; value: Filtro }[] = [
  { label: 'Tutti',    value: 'tutti'   },
  { label: 'Tracked',  value: 'tracked' },
  { label: 'Wheeled',  value: 'wheeled' },
]

export default function VeicoliCompatibili() {
  const [filtro,   setFiltro]   = useState<Filtro>('tutti')
  const [active,   setActive]   = useState(0)
  const [animKey,  setAnimKey]  = useState(0)

  const filtered = VEICOLI.filter(v => filtro === 'tutti' || v.tipo === filtro)
  const v = filtered[active] ?? filtered[0]

  function handleFiltro(f: Filtro) {
    setFiltro(f)
    setActive(0)
    setAnimKey(k => k + 1)
  }

  function handleSelect(i: number) {
    if (i === active) return
    setActive(i)
    setAnimKey(k => k + 1)
  }

  return (
    <section
      className="noise relative overflow-hidden"
      style={{ backgroundColor: '#161728', padding: '48px 0' }}
    >
      <AnimatedBackground compact />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
        >
          <div>
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label-light block mb-2">
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
            I sistemi supportano diverse piattaforme robotiche, permettendo l&apos;integrazione
            e il controllo di veicoli con caratteristiche e capacità differenti.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex gap-2 mb-6"
        >
          {FILTRI.map(f => (
            <motion.button
              key={f.value}
              variants={fadeInUp}
              onClick={() => handleFiltro(f.value)}
              className="text-xs font-bold uppercase tracking-wide transition-all duration-200"
              style={{
                padding: '7px 18px',
                borderRadius: 8,
                backgroundColor: filtro === f.value ? '#FF6219'                      : 'rgba(255,255,255,0.05)',
                color:           filtro === f.value ? '#fff'                          : 'rgba(255,255,255,0.45)',
                border:          filtro === f.value ? '1px solid #FF6219'             : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab veicoli orizzontali */}
        <div className="flex flex-wrap gap-2 mb-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.nome}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                whileHover={i !== active ? {
                  backgroundColor: 'rgba(255,106,31,0.08)',
                  borderColor: 'rgba(255,106,31,0.3)',
                  color: 'rgba(255,255,255,0.85)',
                  scale: 1.03,
                } : undefined}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(i)}
                className="relative"
                style={{
                  padding: '9px 20px',
                  borderRadius: 10,
                  backgroundColor: i === active ? 'rgba(255,106,31,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === active ? 'rgba(255,106,31,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  color: i === active ? '#FF6219' : 'rgba(255,255,255,0.5)',
                  fontWeight: 600,
                  fontSize: 13,
                  transition: 'background-color 0.15s, border-color 0.15s, color 0.15s',
                }}
              >
                {item.nome}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Contenuto dinamico */}
        <AnimatePresence mode="wait">
            <motion.div
              key={animKey}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
            >
              {/* Immagine */}
              <div className="relative flex items-center justify-center" style={{ height: 280 }}>
                <Image
                  src={v.immagine}
                  alt={v.nome}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
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
                  {v.specs.map(s => (
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
                  {v.tags.map(t => (
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
                  <Link href="/contatti" className="btn-secondary text-center">
                    Scheda tecnica
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

      </div>
    </section>
  )
}
