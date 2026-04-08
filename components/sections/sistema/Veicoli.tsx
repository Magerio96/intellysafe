'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations'
import VeicoloCard from '@/components/ui/VeicoloCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { VEICOLI } from '@/lib/constants'

export default function Veicoli() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F8F9FF' }}>
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          <SectionTitle label="Compatibilità" title="Veicoli compatibili" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {VEICOLI.map(v => (
            <motion.div key={v.id} variants={fadeInUp} style={{ willChange: 'transform' }}>
              <VeicoloCard veicolo={v} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
