'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce, fadeInUpMobile, staggerContainerMobile } from '@/lib/animations'
import { useIsMobile } from '@/lib/useIsMobile'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const VIDEOS = [
  {
    id: 'WtxZrWH16AY',
    titolo: 'Scopri la prevenzione incendi intelligente',
    descrizione: 'Rilevamento di principi di incendio e anomalie termiche in tempo reale con MOLIRIS & Thermospot®.',
  },
  {
    id: 'sozZ5R-LLk0',
    titolo: 'Segui l\'agricoltura di precisione',
    descrizione: 'Distribuzione autonoma di biostimolanti e raccolta dati per una viticoltura smart.',
  },
  {
    id: 'CDBz1hH9VZY',
    titolo: 'Esplora lo smart farming con MOLIRIS',
    descrizione: 'Navigazione autonoma in serra e outdoor con rilevamento ostacoli in tempo reale.',
  },
]

export default function CasoDuso() {
  const isMobile = useIsMobile()
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0f1221', padding: '80px 0' }}>
      <AnimatedBackground compact />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          className="mb-12"
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={isMobile ? fadeInUpMobile : fadeInUp} style={{ willChange: 'transform' }} className="section-label-light block mb-3">
            Casi d&apos;uso
          </motion.span>
          <motion.div variants={isMobile ? fadeInUpMobile : fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
          <motion.h2 variants={isMobile ? fadeInUpMobile : fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ willChange: 'transform' }}>
            Il sistema in azione
          </motion.h2>
          <motion.p variants={isMobile ? fadeInUpMobile : fadeInUp} style={{ fontSize: 14, color: '#5a6480', lineHeight: 1.6, maxWidth: 600, willChange: 'transform' }}>
            Dalla prevenzione incendi all&apos;agricoltura di precisione — guarda MOLIRIS al lavoro in scenari operativi reali.
          </motion.p>
        </motion.div>

        {/* Video grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {VIDEOS.map((v) => (
            <motion.div
              key={v.id}
              variants={isMobile ? fadeInUpMobile : fadeInUp}
              className="group transition-all duration-200"
              style={{
                willChange: 'transform',
                borderRadius: 14,
                overflow: 'hidden',
                backgroundColor: '#161b2e',
                border: '1px solid #1f2a45',
              }}
              whileHover={{
                borderColor: 'rgba(255,106,31,0.33)',
                boxShadow: '0 6px 24px rgba(255,106,31,0.1)',
              } as any}
            >
              {/* Video embed 16:9 */}
              <div style={{ position: 'relative', paddingBottom: '56.25%', backgroundColor: '#0a0d1a' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titolo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    border: 'none',
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '18px 16px' }}>
                <p className="font-bold mb-1.5" style={{ fontSize: 14, color: '#fff' }}>{v.titolo}</p>
                <p style={{ fontSize: 12, color: '#5a6480', lineHeight: 1.5 }}>{v.descrizione}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
