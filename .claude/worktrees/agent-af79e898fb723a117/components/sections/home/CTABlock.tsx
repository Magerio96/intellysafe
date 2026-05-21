'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { REFERENTI } from '@/lib/constants'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function CTABlock() {
  const t = useTranslations('home.ctaBlock')

  return (
    <div
      className="flex-1 flex flex-col justify-center section-padding relative overflow-hidden"
      style={{ backgroundColor: '#252849' }}
    >
      <AnimatedBackground compact />

      <div className="container-max relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} style={{ willChange: 'transform' }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255,98,25,0.15)', color: '#FF6219', border: '1px solid rgba(255,98,25,0.3)' }}
            >
              {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl xl:text-[3.2rem] font-display font-bold text-white leading-[1.1] mb-5"
            style={{ willChange: 'transform' }}
          >
            {t('headline1')}<br />
            <span style={{
              background: 'linear-gradient(110deg, #6BBFFF 0%, #4A9EFF 40%, #FF6219 85%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {t('headlineAccent')}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)', willChange: 'transform' }}
          >
            {t('description')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center mb-16"
            style={{ willChange: 'transform' }}
          >
            <Link href="/contatti" className="btn-primary">
              {t('cta1')}
            </Link>
            <Link href="/sistema" className="btn-secondary">
              {t('cta2')}
            </Link>
          </motion.div>

          {/* Referenti */}
          <motion.div
            variants={fadeInUp}
            style={{ willChange: 'transform', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {REFERENTI.map(r => {
              const logo = r.azienda === "Ud'Anet"
                ? { src: '/images/logo-udanet.png', alt: "Ud'Anet" }
                : { src: '/images/logo_infoSolution.png', alt: 'Info Solution' }
              return (
                <div key={r.email} className="glass-card p-5 flex flex-col items-center text-center">
                  {/* Logo azienda */}
                  <div className="mb-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
                    />
                  </div>
                  <p className="font-display font-bold text-white mb-0.5">{r.nome}</p>
                  <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>{r.ruolo}</p>
                  <a
                    href={`mailto:${r.email}`}
                    className="text-xs font-medium transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FF6219')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {r.email}
                  </a>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
