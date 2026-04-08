'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, viewportOnce } from '@/lib/animations'

export default function SistemaPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInLeft}
          style={{ willChange: 'transform' }}
        >
          <span className="section-label block mb-3">Il Sistema</span>
          <div
            style={{
              display: 'block',
              width: '3rem',
              height: '2px',
              backgroundColor: '#FF6219',
              borderRadius: '9999px',
              marginBottom: '1.5rem',
            }}
          />
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            style={{ color: '#252849' }}
          >
            IntellySafe Edge System
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: '#5A5C78' }}>
            IntellySafe Edge System è un sistema robotico di Intelligenza Artificiale per
            la sorveglianza attiva, costituito da un&apos;applicazione server dislocata e da
            un&apos;applicazione web che può interfacciarsi con i sistemi di navigazione di robot.
          </p>
          <p className="leading-relaxed mb-10" style={{ color: '#5A5C78' }}>
            Il sistema è in grado di rilevare intrusioni, grazie alle telecamere a bordo del
            robot e ad un algoritmo ottimizzato di intelligenza artificiale, in grado di
            riconoscere persone o animali.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Rilevamento intrusioni', 'Navigazione autonoma', 'Controllo remoto', 'AI Edge'].map(f => (
              <span key={f} className="badge-navy">{f}</span>
            ))}
          </div>

          <Link href="/sistema" className="btn-primary">
            Scopri il Sistema →
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInRight}
          style={{ willChange: 'transform' }}
          className="relative"
        >
          {/* Decorative glow */}
          <div
            className="absolute -inset-8 rounded-3xl opacity-30 blur-2xl"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(255,98,25,0.2) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <Image
              src="/images/dashboard.png"
              alt="IntellySafe dashboard interface"
              width={1156}
              height={540}
              className="w-full h-auto rounded-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
                border: '1px solid #F0F1F8',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
