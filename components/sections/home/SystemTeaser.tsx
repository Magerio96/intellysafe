'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Cpu, Radio, Eye } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, viewportOnce } from '@/lib/animations'

const features = [
  { icon: Shield, title: 'Rilevamento intrusioni', desc: 'Algoritmo AI ottimizzato per riconoscere persone e animali in tempo reale.' },
  { icon: Cpu,    title: 'Edge Computing',         desc: 'Elaborazione dati direttamente a bordo del robot, senza dipendere dal cloud.' },
  { icon: Radio,  title: 'Controllo remoto',       desc: 'Comandabile da remoto tramite app dedicata in totale sicurezza.' },
  { icon: Eye,    title: 'Sorveglianza h24',       desc: 'Operativo 24 ore su 24, 7 giorni su 7, con missioni pianificabili.' },
]

export default function SystemTeaser() {
  return (
    <div className="flex-1 flex flex-col justify-center section-padding" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInLeft} className="section-label block mb-3" style={{ willChange: 'transform' }}>
              Il Sistema
            </motion.span>
            <motion.div
              variants={fadeInLeft}
              style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }}
            />
            <motion.h2
              variants={fadeInLeft}
              className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
              style={{ color: '#252849', willChange: 'transform' }}
            >
              IntellySafe<br />Edge System
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              Sistema robotico di intelligenza artificiale per la sorveglianza attiva.
              Sviluppato da Ud&apos;Anet in collaborazione con Info Solution s.r.l.
            </motion.p>
            <motion.div variants={fadeInLeft} style={{ willChange: 'transform' }}>
              <Link href="/sistema" className="btn-primary">
                Scopri il sistema →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — feature grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                style={{ willChange: 'transform' }}
                className="card-light p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(255,98,25,0.08)', border: '1px solid rgba(255,98,25,0.15)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#FF6219' }} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#252849' }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#5A5C78' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
