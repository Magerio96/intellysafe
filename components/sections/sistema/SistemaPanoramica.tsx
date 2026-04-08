'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInRight, viewportOnce } from '@/lib/animations'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Users, Radio, Clock, Bell, Shield, type LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap, users: Users, radio: Radio, clock: Clock, bell: Bell, shield: Shield,
}

const FEATURES = [
  { icona: 'zap',    titolo: 'Azioni automatiche',       descrizione: 'Esegue azioni automatiche se rileva malfunzionamenti ed intrusioni' },
  { icona: 'bell',   titolo: 'Allarmi in tempo reale',   descrizione: 'Invia messaggi di allarme agli operatori in campo ed alla centrale di sorveglianza' },
  { icona: 'radio',  titolo: 'Controllo da remoto',      descrizione: 'Può essere comandato tramite apposita applicazione sia localmente che a distanza, per garantire la massima sicurezza agli operatori' },
  { icona: 'clock',  titolo: 'Controllo programmato',    descrizione: 'Svolge un servizio di controllo programmabile o in automatico' },
  { icona: 'shield', titolo: 'Intercetta intrusi',       descrizione: 'Intercetta e documenta le attività svolte da personale non autorizzato nell\'area sorvegliata' },
  { icona: 'users',  titolo: 'Modalità collaborativa',   descrizione: 'Lavora in modalità collaborativa con altri robot della stessa serie' },
]

export default function SistemaPanoramica() {
  return (
    <section id="panoramica" style={{ backgroundColor: '#f5f6fa', padding: '80px 0', borderTop: '1px solid #e4e8f0' }}>
      <div className="container-max">

        {/* ── Blocco A: testo + immagine ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
              Il Sistema
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
              Descrizione del sistema
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed mb-4"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              IntellySafe Edge System è un sistema robotico di Intelligenza Artificiale per
              la sorveglianza attiva, costituito da un&apos;applicazione server dislocata e da
              un&apos;applicazione web che può interfacciarsi con i sistemi di navigazione di robot.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed mb-8"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              Il sistema è in grado di rilevare intrusioni, grazie alle telecamere a bordo del
              robot e ad un algoritmo ottimizzato di intelligenza artificiale, in grado di
              riconoscere persone o animali.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ willChange: 'transform' }}>
              <Link href="/contatti" className="btn-primary">
                Richiedi una demo →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            style={{ willChange: 'transform' }}
          >
            <div style={{ borderRadius: 16, overflow: 'hidden' }}>
              <Image
                src="/images/scheduling_missioni-removebg-preview.png"
                alt="IntellySafe Sistema"
                width={700}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Interfaccia utente ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            style={{ willChange: 'transform' }}
          >
            <div style={{ borderRadius: 16, overflow: 'hidden' }}>
              <Image
                src="/images/schermata-1.png"
                alt="Interfaccia utente IntellySafe"
                width={700}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInUp} style={{ willChange: 'transform' }} className="section-label block mb-3">
              Interfaccia
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
              Interfaccia utente e alcune basi robotiche
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed"
              style={{ color: '#5A5C78', willChange: 'transform' }}
            >
              Il sistema si controlla tramite un&apos;interfaccia grafica accessibile da un comune
              browser per PC o tablet in connessione wireless. L&apos;interfaccia permette di
              visualizzare il video della telecamera di bordo e le telemetrie del robot, di creare
              e gestire le mappe, di programmare e gestire le missioni, ma anche guidare e
              controllare il robot tramite tastiera, mouse o joypad.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Feature grid 3×2 ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FEATURES.map(f => {
            const Icon = ICON_MAP[f.icona]
            return (
              <motion.div
                key={f.titolo}
                variants={fadeInUp}
                className="group relative overflow-hidden flex flex-col"
                style={{
                  willChange: 'transform',
                  backgroundColor: '#fff',
                  border: '1px solid #e4e8f0',
                  borderRadius: 16,
                  padding: '24px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                whileHover={{ borderColor: 'rgba(255,106,31,0.33)', boxShadow: '0 6px 24px rgba(255,106,31,0.08)' } as any}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  backgroundColor: '#fff3ee',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16, flexShrink: 0,
                }}>
                  <Icon style={{ width: 20, height: 20, color: '#FF6219', strokeWidth: 1.8 }} />
                </div>
                <p className="font-bold mb-2" style={{ color: '#0f1221', fontSize: 15 }}>{f.titolo}</p>
                <p style={{ color: '#6b7290', fontSize: 13, lineHeight: 1.6 }}>{f.descrizione}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#FF6219' }} />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
