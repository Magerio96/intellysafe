'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function InputOutput() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0f1221', padding: '80px 0' }}>
      <AnimatedBackground compact />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: immagine in card dark */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInLeft} style={{ willChange: 'transform' }}>
            <div style={{
              backgroundColor: '#161b2e',
              border: '1px solid #1f2a45',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              <Image
                src="/images/mockup_laptop_inputoutput (1).png"
                alt="Input/Output sensoristica"
                width={700}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Right: testo */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label-light block mb-3">
              Sensoristica
            </motion.span>
            <motion.div variants={fadeInUp} style={{ width: '3rem', height: '2px', backgroundColor: '#FF6219', borderRadius: 9999, marginBottom: '1.5rem', willChange: 'transform' }} />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-6 text-white" style={{ willChange: 'transform' }}>
              Input/Output
            </motion.h2>
            <motion.p variants={fadeInUp} className="leading-relaxed" style={{ color: '#5a6480', fontSize: 14, lineHeight: 1.6, willChange: 'transform' }}>
              Potete equipaggiare il nostro sistema robotico con una serie di sensori analogici
              e digitali, e riportare le informazioni e gli eventi associati nel sw di
              supervisione e controllo. In questa schermata sono listati alcuni I/O presenti
              nel sistema robotico.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
