'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'

export default function EdgeSystemIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
    }
  }

  return (
    <section
      className="flex-1 flex flex-col justify-center"
      style={{ backgroundColor: '#f5f6fa', padding: '56px 0' }}
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Colonna sinistra ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.span
              variants={fadeInUp}
              className="block mb-4 text-xs font-bold tracking-[2.5px] uppercase"
              style={{
                willChange: 'transform',
                color: '#ff6a1f',
                borderBottom: '2px solid #ff6a1f',
                display: 'inline-block',
                paddingBottom: '4px',
              }}
            >
              Il Sistema di Intelligenza Artificiale
            </motion.span>

            {/* Titolo */}
            <motion.h2
              variants={fadeInUp}
              style={{ willChange: 'transform', lineHeight: 1.15, marginBottom: '1rem' }}
              className="font-display font-bold"
            >
              <span className="block text-4xl md:text-5xl" style={{ color: '#0f1221' }}>IntellySafe</span>
              <span className="block text-4xl md:text-5xl" style={{ color: '#ff6a1f' }}>Edge System</span>
            </motion.h2>

            {/* Sottotitolo */}
            <motion.p
              variants={fadeInUp}
              style={{ willChange: 'transform', color: '#6b7290', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '440px' }}
              className="text-sm"
            >
              Veicoli a guida autonoma che operano in campo senza ausilio del personale — sicuri, programmabili e sempre attivi.
            </motion.p>

            {/* Bottoni */}
            <motion.div variants={fadeInUp} style={{ willChange: 'transform' }} className="flex items-center gap-3 flex-wrap">
              <Link
                href="/sistema"
                className="inline-flex items-center text-sm font-bold text-white px-5 py-3 rounded-lg"
                style={{ backgroundColor: '#ff6a1f', borderRadius: '8px' }}
              >
                Scopri il sistema →
              </Link>
              <button
                onClick={togglePlay}
                className="inline-flex items-center text-sm font-semibold px-5 py-3 rounded-lg"
                style={{
                  backgroundColor: 'transparent',
                  color: '#0f1221',
                  border: '1.5px solid #c8cedd',
                  borderRadius: '8px',
                }}
              >
                {playing ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {playing ? 'Pausa demo' : 'Guarda la demo'}
              </button>
            </motion.div>
          </motion.div>

          {/* ── Colonna destra — card video ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'transform' }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#0f1221',
                borderRadius: '14px',
                boxShadow: '0 6px 30px rgba(15,18,33,0.12)',
              }}
            >
              {/* Barra superiore */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ backgroundColor: '#161b2e' }}
              >
                <span className="rounded-full" style={{ width: 7, height: 7, backgroundColor: '#ff5f57', display: 'inline-block' }} />
                <span className="rounded-full" style={{ width: 7, height: 7, backgroundColor: '#febc2e', display: 'inline-block' }} />
                <span className="rounded-full" style={{ width: 7, height: 7, backgroundColor: '#28c840', display: 'inline-block' }} />
                <span className="ml-2 text-xs" style={{ color: '#3a4060' }}>Demo — Associazione azioni al WP</span>
              </div>

              {/* Video */}
              <div className="relative" style={{ backgroundColor: '#0a0d1a' }}>
                <video
                  ref={videoRef}
                  className="w-full block"
                  style={{ maxHeight: '260px', objectFit: 'cover' }}
                  src="/videos/IntellySafe-Video-Presentation (1).mp4"
                  loop
                  playsInline
                  onEnded={() => setPlaying(false)}
                />

                {/* Overlay play (solo quando non in play) */}
                {!playing && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                    style={{ backgroundColor: 'rgba(10,13,26,0.55)' }}
                    onClick={togglePlay}
                  >
                    <button
                      className="flex items-center justify-center rounded-full mb-3"
                      style={{
                        width: 42,
                        height: 42,
                        backgroundColor: '#ff6a1f',
                      }}
                    >
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </button>
                    <span className="text-xs" style={{ color: '#3a4060' }}>Guarda la demo completa</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
