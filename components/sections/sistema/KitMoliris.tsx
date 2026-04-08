'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'

export default function KitMoliris() {
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
              Navigazione autonoma
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
              Kit Moliris
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed mb-6"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              Installare il KIT su un robot mobile consente la navigazione autonoma mediante
              la percezione dell&apos;ambiente, la costruzione della mappa della zona, la
              localizzazione del robot sulla mappa e l&apos;evitamento ostacoli.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mb-8">
              {['Mapping Laser', 'Teleguida', 'Evitamento ostacoli'].map(item => (
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
                Missioni
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="leading-relaxed mb-3"
                style={{ color: '#5A5C78', willChange: 'transform' }}
              >
                Il robot raggiungerà autonomamente una serie di tappe dette &lsquo;waypoint&rsquo;
                pre-selezionate sulla mappa, attivando sensori ed attuatori installati a bordo.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="leading-relaxed"
                style={{ color: '#5A5C78', willChange: 'transform' }}
              >
                Ad ogni waypoint il robot può effettuare azioni usando sensori ed attuatori
                installati a bordo tramite un&apos;interfaccia semplice ed intuitiva.
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
