'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import FeatureCard from '@/components/ui/FeatureCard'
import { FEATURE_IA } from '@/lib/constants'

export default function SistemaIA() {
  return (
    <section
      className="noise section-padding"
      style={{ backgroundColor: '#161728' }}
    >
      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          <span className="section-label-light block mb-3">IntellySafe Edge System</span>
          <div
            style={{
              display: 'block',
              width: '3rem',
              height: '2px',
              backgroundColor: '#FF6219',
              borderRadius: '9999px',
              margin: '0 auto 1.5rem',
            }}
          />
          <h2 className="gradient-text text-4xl md:text-5xl font-display font-bold">
            Il Sistema di Intelligenza Artificiale
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FEATURE_IA.map(f => (
            <motion.div key={f.id} variants={fadeInUp} style={{ willChange: 'transform' }}>
              <FeatureCard feature={f} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
