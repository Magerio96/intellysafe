'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { Shield, Home, Leaf, Heart, Package, Settings, Crosshair, Zap, type LucideIcon } from 'lucide-react'

const SETTORI: { titolo: string; icon: LucideIcon; voci: string[] }[] = [
  {
    titolo: 'Sicurezza e sorveglianza',
    icon: Shield,
    voci: ['Ronde', 'Rilevamento intrusi', 'Dissuasione'],
  },
  {
    titolo: 'Sicurezza degli ambienti',
    icon: Home,
    voci: ['Rilevamento perdite acqua', 'Principi di incendio', 'Gas', 'Fumo'],
  },
  {
    titolo: 'Agricoltura di precisione',
    icon: Leaf,
    voci: ['Irrorazione fitofarmaci', 'Conferimento (raccolta)', 'Controllo inerbimento'],
  },
  {
    titolo: 'Sanità',
    icon: Heart,
    voci: ['Sanificazione', 'Trasporto farmaci e campioni', 'Trasporto biancheria e rifiuti'],
  },
  {
    titolo: 'Movimentazione materiali',
    icon: Package,
    voci: ['Con braccio manipolatore', 'Con integrazione alla logistica'],
  },
  {
    titolo: 'Impianti industriali o centrali',
    icon: Settings,
    voci: ['Ispezioni', 'Rilevamento'],
  },
  {
    titolo: 'Rilevamento laser',
    icon: Crosshair,
    voci: ['Rilevamenti laser scanner ad alta risoluzione di edifici', 'Digital twin'],
  },
  {
    titolo: 'Primo intervento',
    icon: Zap,
    voci: ['Primo intervento dopo un disastro'],
  },
]

export default function Settori() {
  return (
    <section style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max">

        {/* Header */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
            Applicazioni
          </motion.span>
          <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#0f1221', willChange: 'transform' }}>
            Settori e possibili applicazioni
          </motion.h2>
        </motion.div>

        {/* Grid 4×2 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ willChange: 'transform' }}
        >
          {SETTORI.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titolo}
                variants={fadeInUp}
                className="group relative overflow-hidden flex flex-col"
                style={{
                  willChange: 'transform',
                  backgroundColor: '#fff',
                  border: '1px solid #e4e8f0',
                  borderRadius: 16,
                  padding: '24px 20px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                whileHover={{
                  borderColor: 'rgba(255,106,31,0.33)',
                  boxShadow: '0 6px 24px rgba(255,106,31,0.08)',
                } as any}
              >
                {/* Icona */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  backgroundColor: '#fff3ee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: 20, height: 20, color: '#FF6219', strokeWidth: 1.8 }} />
                </div>

                {/* Titolo */}
                <p className="font-bold mt-3.5 mb-3" style={{ fontSize: 14, color: '#0f1221' }}>
                  {s.titolo}
                </p>

                {/* Lista */}
                <ul className="flex flex-col gap-1.5 flex-1">
                  {s.voci.map(v => (
                    <li key={v} className="flex items-start gap-2">
                      <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#FF6219', flexShrink: 0, marginTop: 5, display: 'block' }} />
                      <span style={{ fontSize: 12, color: '#6b7290', lineHeight: 1.6 }}>{v}</span>
                    </li>
                  ))}
                </ul>

                {/* Accent bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#FF6219' }} />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
