'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'

export default function KitMoliris() {
  const t = useTranslations('sistema.kitMoliris')
  const features = t.raw('features') as string[]

  return (
    <section style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
              {t('label')}
            </motion.span>
            <motion.div
              variants={fadeInUp}
              style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }}
            />
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              style={{ color: '#0f1221', willChange: 'transform' }}
            >
              {t('headline')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed mb-6"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              {t('text')}
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mb-8">
              {features.map(item => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  style={{ willChange: 'transform' }}
                  className="flex items-center gap-3 font-semibold text-sm"
                >
                  <span style={{
                    width: 28, height: 28, borderRadius: 8,
                    backgroundColor: '#fff3ee',
                    border: '1px solid #ffd4b8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#FF6219', display: 'block' }} />
                  </span>
                  <span style={{ color: '#0f1221' }}>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={staggerContainer}>
              <motion.h3
                variants={fadeInUp}
                className="text-lg font-display font-bold mb-3"
                style={{ color: '#0f1221', willChange: 'transform' }}
              >
                {t('missionTitle')}
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="leading-relaxed mb-3"
                style={{ color: '#5A5C78', willChange: 'transform' }}
              >
                {t('missionText1')}
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="leading-relaxed"
                style={{ color: '#5A5C78', willChange: 'transform' }}
              >
                {t('missionText2')}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            style={{ willChange: 'transform' }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-40px',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(255,98,25,0.07) 0%, transparent 65%)',
                filter: 'blur(40px)', pointerEvents: 'none',
              }} />
              <Image
                src="/images/img_kit_moliris-removebg-preview.png"
                alt="Kit Moliris"
                width={600}
                height={420}
                style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
