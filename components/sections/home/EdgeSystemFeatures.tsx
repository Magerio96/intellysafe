'use client'
import { motion } from 'framer-motion'
import { Zap, Wifi, BellRing, Network, BarChart2, Settings2 } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const FEATURES = [
  {
    icon: Zap,
    title: 'Azioni automatiche',
    description: 'Esegue azioni se rileva malfunzionamenti o intrusioni',
  },
  {
    icon: Wifi,
    title: 'Controllo remoto',
    description: 'Comandato localmente o a distanza tramite apposita app',
  },
  {
    icon: BellRing,
    title: 'Allarmi istantanei',
    description: 'Messaggi di allarme agli operatori e alla centrale h24',
  },
  {
    icon: Network,
    title: 'Modalità collaborativa',
    description: 'Lavora in sinergia con altri robot della stessa serie',
  },
  {
    icon: BarChart2,
    title: 'Misurazioni in campo',
    description: 'Rileva dati da sensoristica ed attuatori in tempo reale',
  },
  {
    icon: Settings2,
    title: 'Gestione flessibile',
    description: 'Pianifica, gestisce e supervisiona le missioni autonomamente',
  },
]

const STATS = [
  { value: 'h24', label: 'Operatività continua' },
  { value: '6+',  label: 'Modelli robot' },
  { value: '8',   label: 'Settori applicativi' },
  { value: 'IP67',label: 'Protezione massima' },
]

export default function EdgeSystemFeatures() {
  return (
    <section
      className="flex-1 flex flex-col justify-center"
      style={{ backgroundColor: '#f5f6fa', padding: '40px 0' }}
    >
      <div className="container-max">

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                style={{ willChange: 'transform' }}
                className="feature-card group relative rounded-xl p-4 overflow-hidden"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e4e8f0',
                  borderRadius: '12px',
                  padding: '16px 15px',
                  transition: 'border-color 0.2s',
                }}
                whileHover={{ borderColor: 'rgba(255,106,31,0.4)' } as any}
              >
                <div className="flex items-start gap-3">
                  {/* Icona */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-lg"
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: '#fff3ee',
                      borderRadius: '8px',
                    }}
                  >
                    <Icon style={{ width: 18, height: 18, color: '#ff6a1f' }} />
                  </div>

                  {/* Testo */}
                  <div>
                    <p className="font-semibold text-xs mb-1" style={{ color: '#0f1221' }}>{f.title}</p>
                    <p className="text-xs leading-snug" style={{ color: '#8a94b0', lineHeight: 1.45 }}>{f.description}</p>
                  </div>
                </div>

                {/* Lineetta hover bottom */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: '#ff6a1f' }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex rounded-xl overflow-hidden"
          style={{ backgroundColor: '#0f1221', borderRadius: '12px' }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex-1 py-5 text-center"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid #1f2a45' : 'none',
              }}
            >
              <div className="text-2xl font-bold" style={{ color: '#ff6a1f' }}>{s.value}</div>
              <div className="text-xs mt-1" style={{ color: '#5a6480' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
