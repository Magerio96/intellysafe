'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/animations'

export default function HomeCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="noise rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden"
          style={{ backgroundColor: '#FF6219', willChange: 'transform' }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              🚀 Pronto per la tua demo
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Pronto a scoprire IntellySafe?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Contattaci per una demo o per maggiori informazioni sul sistema.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contatti" className="btn-secondary">
                Contattaci ora →
              </Link>
              <Link
                href="/sistema"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Scopri il sistema
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
