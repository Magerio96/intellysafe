'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function Premio() {
  return (
    <section
      className="relative flex-1 flex flex-col justify-center"
      style={{ background: 'linear-gradient(160deg, #161728 0%, #1A1D3A 50%, #1E2040 100%)' }}
    >
      {/* Top orange accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6219 25%, #FF6219 75%, transparent)' }}
      />
      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(46,49,96,0.8) 25%, rgba(46,49,96,0.8) 75%, transparent)' }}
      />

      <AnimatedBackground compact />

      {/* ── Text block ── */}
      <div className="container-max relative z-10 pt-10 pb-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} style={{ willChange: 'transform' }}>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(255,98,25,0.12)', border: '1px solid rgba(255,98,25,0.3)', color: '#FF6219' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#FF6219' }} />
              Premio Nazionale 2023
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            style={{ willChange: 'transform' }}
            className="font-display font-bold leading-[1.05] mb-3"
          >
            <span className="block text-white text-3xl md:text-4xl">Campioni di</span>
            <span
              className="block text-4xl md:text-5xl xl:text-[3.2rem]"
              style={{
                background: 'linear-gradient(110deg, #6BBFFF 0%, #4A9EFF 40%, #FF6219 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              InnovAzioni
            </span>
          </motion.h2>

          {/* Subtitle row */}
          <motion.div variants={fadeInUp} style={{ willChange: 'transform' }} className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: 'rgba(255,98,25,0.5)' }} />
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Decima Edizione &mdash; 10 / 11 Novembre 2023
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            style={{ willChange: 'transform', color: 'rgba(255,255,255,0.58)' }}
            className="text-base leading-relaxed text-center"
          >
            Il progetto{' '}
            <strong className="text-white font-semibold">IntellySafe Edge System</strong>{' '}
            è stato ammesso alla fase finale del contest nazionale, riconoscimento
            dell&apos;eccellenza tecnologica nel campo della sicurezza sul lavoro.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Banner image — full container width ── */}
      <motion.div
        className="container-max relative z-10 pb-10"
        initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ willChange: 'transform' }}
      >
        <div className="relative overflow-hidden sm:overflow-visible">
          {/* Glow behind */}
          <div
            className="absolute -inset-2 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 60%, rgba(20,70,200,0.3) 0%, transparent 70%)',
              filter: 'blur(24px)',
            }}
          />

          {/* Image frame — clickable */}
          <motion.a
            href="https://www.udanet.it/il-progetto-intellysafe-edge-system-e-stato-ammesso-alla-fase-finale-del-contest-per-il-premio-nazionale-campioni-di-innovazioni-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden cursor-pointer"
            style={{
              border: '1px solid rgba(100,160,255,0.2)',
              boxShadow: '0 0 60px rgba(20,60,180,0.3), 0 0 120px rgba(20,60,180,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
            whileHover="hover"
            initial="rest"
          >
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.025 } }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/images/Schermata-2023-11-10-alle-10.21.19-e1700213674851.png"
                alt="InnovAzioni 2023 — Campioni di Innovazione, Decima Edizione"
                width={3326}
                height={875}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </motion.div>

            {/* Edge vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(22,23,40,0.35) 0%, transparent 15%, transparent 85%, rgba(22,23,40,0.35) 100%)',
              }}
            />

            {/* Hover overlay con label */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.25 }}
              style={{ background: 'rgba(22,23,40,0.45)', backdropFilter: 'blur(2px)' }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{
                  background: 'rgba(255,98,25,0.9)',
                  boxShadow: '0 0 30px rgba(255,98,25,0.5)',
                }}
              >
                Leggi l&apos;articolo →
              </span>
            </motion.div>
          </motion.a>

          {/* Floating trophy badge */}
          <motion.div
            className="absolute -top-4 right-6 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
            style={{
              background: 'linear-gradient(135deg, #1A1D3A, #252849)',
              border: '1px solid rgba(255,98,25,0.4)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 20px rgba(255,98,25,0.12)',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>🏆</span>
            <span>Finalisti Nazionali</span>
          </motion.div>

          {/* Date badge bottom-left */}
          <motion.div
            className="absolute -bottom-3 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{
              background: 'rgba(22,23,40,0.92)',
              border: '1px solid rgba(100,160,255,0.2)',
              color: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(8px)',
            }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#6BBFFF' }} />
            10 / 11 Novembre 2023
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
