'use client'
import { motion } from 'framer-motion'
import {
  Zap, Network, Radio, CalendarClock,
  BellRing, Activity, ScanEye, Settings2,
} from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'

const capabilities = [
  {
    icon: Zap,
    title: 'Azioni automatiche',
    description: 'Esegue azioni automatiche se rileva malfunzionamenti ed intrusioni',
  },
  {
    icon: Network,
    title: 'Modalità collaborativa',
    description: 'Lavora in modalità collaborativa con altri robot della stessa serie',
  },
  {
    icon: Radio,
    title: 'Comandato anche a distanza',
    description: 'Può essere comandato tramite apposita applicazione sia localmente che a distanza, per garantire la massima sicurezza agli operatori',
  },
  {
    icon: CalendarClock,
    title: 'Controllo programmato o automatico',
    description: 'Svolge un servizio di controllo programmabile o in automatico',
  },
  {
    icon: BellRing,
    title: 'Invia messaggi di allarme',
    description: 'Invia messaggi di allarme agli operatori in campo ed alla centrale di sorveglianza',
  },
  {
    icon: Activity,
    title: 'Misurazioni analogiche e digitali',
    description: 'Rileva misurazioni analogiche e digitali in campo proveniente da sensoristica ed attuatori. Di conseguenza esegue azioni programmate',
  },
  {
    icon: ScanEye,
    title: 'Intercetta le attività del personale non autorizzato',
    description: "Intercetta e documenta le attività svolte da personale non autorizzato nell'area sorvegliata",
  },
  {
    icon: Settings2,
    title: 'Gestione flessibile',
    description: 'Permette di gestire i sensori in modo flessibile, di pianificare le missioni, gestirle e di supervisionarne il funzionamento in tempo reale',
  },
]

export default function AICapabilities() {
  return (
    <section className="section-padding flex-1 flex flex-col justify-center" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

          {/* ── Left: text + capabilities ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Label */}
            <motion.span
              variants={fadeInUp}
              style={{ willChange: 'transform' }}
              className="section-label block mb-3"
            >
              Il Sistema di Intelligenza Artificiale
            </motion.span>

            {/* Divider */}
            <motion.div
              variants={fadeInUp}
              style={{ willChange: 'transform', width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem' }}
            />

            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              style={{ willChange: 'transform', color: '#252849' }}
              className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight"
            >
              IntellySafe Edge System
            </motion.h2>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon
                return (
                  <motion.div
                    key={cap.title}
                    variants={fadeInUp}
                    style={{ willChange: 'transform', borderBottom: '1px solid #E8EAF2' }}
                    className="py-4"
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: '#FF6219' }}
                      />
                      <div>
                        <p
                          className="font-semibold text-sm mb-1"
                          style={{ color: '#252849' }}
                        >
                          {cap.title}
                        </p>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: '#5A5C78' }}
                        >
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ── Right: video ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ willChange: 'transform' }}
            className="relative"
          >
            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-40px',
                background: 'radial-gradient(ellipse at 60% 50%, rgba(250,90,20,0.08) 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
            />

            <div
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
                border: '1px solid #F0F1F8',
              }}
            >
              <video
                src="/videos/IntellySafe-Video-Presentation (1).mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
