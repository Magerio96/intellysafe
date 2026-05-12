'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const VIDEO_IDS = ['WtxZrWH16AY', 'sozZ5R-LLk0', 'CDBz1hH9VZY']

export default function CasoDuso() {
  const t = useTranslations('applicazioni.casoDuso')
  const videos = t.raw('videos') as Array<{ titolo: string; descrizione: string }>

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0f1221', padding: '80px 0' }}>
      <AnimatedBackground compact />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label-light block mb-3">
            {t('label')}
          </motion.span>
          <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ willChange: 'transform' }}>
            {t('headline')}
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: 14, color: '#5a6480', lineHeight: 1.6, maxWidth: 600, willChange: 'transform' }}>
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Video grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {videos.map((v, idx) => (
            <motion.div
              key={VIDEO_IDS[idx]}
              variants={fadeInUp}
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
                  src={`https://www.youtube.com/embed/${VIDEO_IDS[idx]}`}
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
