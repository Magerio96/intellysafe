'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, Pause, Zap, Wifi, BellRing, Network, BarChart2, Settings2 } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const FEATURES = [
  { icon: Zap,      title: 'Azioni automatiche',   description: 'Esegue azioni se rileva malfunzionamenti o intrusioni' },
  { icon: Wifi,     title: 'Controllo remoto',      description: 'Comandato localmente o a distanza tramite apposita app' },
  { icon: BellRing, title: 'Allarmi istantanei',    description: 'Messaggi di allarme agli operatori e alla centrale h24' },
  { icon: Network,  title: 'Modalità collaborativa',description: 'Lavora in sinergia con altri robot della stessa serie' },
  { icon: BarChart2,title: 'Misurazioni in campo',  description: 'Rileva dati da sensoristica ed attuatori in tempo reale' },
  { icon: Settings2,title: 'Gestione flessibile',   description: 'Pianifica, gestisce e supervisiona le missioni autonomamente' },
]

export default function EdgeSystem() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else         { v.play();  setPlaying(true)  }
  }

  return (
    <section
      className="flex-1 flex flex-col justify-center"
      style={{ backgroundColor: '#f5f6fa', padding: '48px 0' }}
    >
      <div className="container-max">
        <div className="flex flex-col gap-8">
        {/* ── Riga 1: testo + video ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Colonna sinistra: testo */}
          <div className="flex flex-col gap-6">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span
                variants={fadeInUp}
                style={{ willChange: 'transform' }}
                className="section-label block mb-3"
              >
                Il Sistema di Intelligenza Artificiale
              </motion.span>

              <motion.div
                variants={fadeInUp}
                style={{ willChange: 'transform', width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.25rem' }}
              />

              <motion.h2
                variants={fadeInUp}
                style={{ willChange: 'transform', color: '#252849' }}
                className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight"
              >
                IntellySafe <span style={{ color: '#FF6219' }}>Edge System</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                style={{ willChange: 'transform', color: '#5A5C78' }}
                className="text-base mb-6 leading-relaxed"
              >
                Veicoli a guida autonoma che operano in campo senza ausilio del personale — sicuri, programmabili e sempre attivi.
              </motion.p>

              <motion.div variants={fadeInUp} style={{ willChange: 'transform' }} className="flex items-center gap-3 flex-wrap">
                <Link href="/sistema" className="btn-primary">
                  Scopri il sistema →
                </Link>
                <button onClick={togglePlay} className="btn-outline">
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {playing ? 'Pausa demo' : 'Guarda la demo'}
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Colonna destra: video */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'transform' }}
            className="flex"
          >
            <div
              className="w-full"
              style={{ backgroundColor: '#0f1221', borderRadius: '14px', boxShadow: '0 6px 30px rgba(15,18,33,0.12)', overflow: 'hidden' }}
            >
              {/* Barra top */}
              <div className="flex items-center gap-2 px-3 py-2 flex-shrink-0" style={{ backgroundColor: '#161b2e' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#febc2e', display: 'inline-block' }} />
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#28c840', display: 'inline-block' }} />
                <span className="ml-2 text-xs" style={{ color: '#3a4060' }}>Demo — Associazione azioni al WP</span>
              </div>

              {/* Video — aspect ratio 16:9 */}
              <div className="relative" style={{ backgroundColor: '#0a0d1a', paddingBottom: '56.25%' }}>
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'contain' }}
                  src="/videos/IntellySafe-Video-Presentation (1).mp4"
                  loop
                  playsInline
                  onEnded={() => setPlaying(false)}
                />
                {!playing && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                    style={{ backgroundColor: 'rgba(10,13,26,0.55)' }}
                    onClick={togglePlay}
                  >
                    <button className="flex items-center justify-center rounded-full mb-2" style={{ width: 42, height: 42, backgroundColor: '#ff6a1f' }}>
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </button>
                    <span className="text-xs" style={{ color: '#8a94b0' }}>Guarda la demo completa</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Riga 2: feature grid 100% width ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="group relative overflow-hidden flex flex-col"
                style={{
                  willChange: 'transform',
                  backgroundColor: '#fff',
                  border: '1px solid #e4e8f0',
                  borderRadius: '12px',
                  padding: '16px',
                  transition: 'border-color 0.2s',
                }}
                whileHover={{ borderColor: 'rgba(255,106,31,0.4)' } as any}
              >
                <div className="flex-shrink-0 flex items-center justify-center mb-3" style={{ width: 32, height: 32, backgroundColor: 'rgba(255,98,25,0.08)', borderRadius: '8px' }}>
                  <Icon className="w-4 h-4" style={{ color: '#FF6219' }} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#252849' }}>{f.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#5A5C78' }}>{f.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#ff6a1f' }} />
              </motion.div>
            )
          })}
        </motion.div>

        </div>
      </div>
    </section>
  )
}
