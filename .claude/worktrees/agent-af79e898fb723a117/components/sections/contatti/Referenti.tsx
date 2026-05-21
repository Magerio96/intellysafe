'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import { Mail, ExternalLink } from 'lucide-react'
import { REFERENTI } from '@/lib/constants'

export default function Referenti() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {REFERENTI.map(r => (
            <motion.div
              key={r.email}
              variants={fadeInUp}
              style={{ willChange: 'transform' }}
              className="card-light p-8"
            >
              <p className="section-label mb-1">{r.azienda}</p>
              <h3 className="text-xl font-display font-bold mt-3 mb-0.5" style={{ color: '#252849' }}>
                {r.nome}
              </h3>
              <p className="text-sm mb-5" style={{ color: '#9698B0' }}>
                {r.ruolo}
              </p>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${r.email}`}
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF6219]"
                  style={{ color: '#252849' }}
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {r.email}
                </a>
                <a
                  href={r.sito}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#FF6219]"
                  style={{ color: '#9698B0' }}
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  {r.sito}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
