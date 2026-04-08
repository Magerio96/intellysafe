'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/lib/animations'
import { Mail, ExternalLink, CheckCircle } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { REFERENTI } from '@/lib/constants'

interface FormData {
  nome: string
  email: string
  messaggio: string
}

export default function ContattiMain() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0f1221', padding: '80px 0 100px' }}>
      <AnimatedBackground compact />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: headline + referenti ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} style={{ willChange: 'transform' }}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ background: 'rgba(255,98,25,0.15)', color: '#FF6219', border: '1px solid rgba(255,98,25,0.3)' }}
              >
                🚀 Parliamo del tuo progetto
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-5"
              style={{ willChange: 'transform' }}
            >
              Trasforma la tua<br />
              <span style={{
                background: 'linear-gradient(110deg, #6BBFFF 0%, #4A9EFF 40%, #FF6219 85%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                sicurezza con l&apos;AI
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base mb-10 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 460, willChange: 'transform' }}
            >
              Compila il form oppure contatta direttamente uno dei nostri referenti.
              Siamo pronti a mostrarti il sistema in azione.
            </motion.p>

            {/* Referenti */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-4">
              {REFERENTI.map(r => {
                const logoSrc = r.azienda === "Ud'Anet"
                  ? '/images/logo-udanet.png'
                  : '/images/logo_infoSolution.png'
                return (
                  <motion.div
                    key={r.email}
                    variants={fadeInUp}
                    style={{
                      willChange: 'transform',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 16,
                      padding: '20px 22px',
                      display: 'flex',
                      gap: 16,
                      alignItems: 'center',
                    }}
                  >
                    {/* Logo */}
                    <div style={{
                      flexShrink: 0,
                      width: 56, height: 56, borderRadius: 12,
                      backgroundColor: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: 8,
                    }}>
                      <img src={logoSrc} alt={r.azienda} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm mb-0.5">{r.nome}</p>
                      <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.ruolo} · {r.azienda}</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href={`mailto:${r.email}`}
                          className="flex items-center gap-1.5 text-xs transition-colors duration-200 hover:text-orange-400"
                          style={{ color: 'rgba(255,255,255,0.55)' }}
                        >
                          <Mail style={{ width: 12, height: 12, flexShrink: 0 }} />
                          <span className="truncate">{r.email}</span>
                        </a>
                        <a
                          href={r.sito}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs transition-colors duration-200 hover:text-orange-400"
                          style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                          <ExternalLink style={{ width: 12, height: 12, flexShrink: 0 }} />
                          <span className="truncate">{r.sito.replace('https://', '')}</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            style={{ willChange: 'transform' }}
          >
            <div className="p-6 md:p-10" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
            }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    backgroundColor: 'rgba(255,98,25,0.15)',
                    border: '1px solid rgba(255,98,25,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <CheckCircle style={{ width: 28, height: 28, color: '#FF6219' }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Messaggio inviato!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Ti risponderemo al più presto.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-white text-xl mb-6">Inviaci un messaggio</h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    {/* Nome */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Nome *
                      </label>
                      <input
                        {...register('nome', { required: 'Il nome è obbligatorio' })}
                        placeholder="Il tuo nome"
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10,
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          border: `1px solid ${errors.nome ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                          color: '#fff', fontSize: 14, outline: 'none',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = '#FF6219'}
                        onBlur={e => e.currentTarget.style.borderColor = errors.nome ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                      />
                      {errors.nome && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.nome.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Email *
                      </label>
                      <input
                        {...register('email', {
                          required: "L'email è obbligatoria",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email non valida' },
                        })}
                        type="email"
                        placeholder="tua@email.com"
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10,
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          border: `1px solid ${errors.email ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                          color: '#fff', fontSize: 14, outline: 'none',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = '#FF6219'}
                        onBlur={e => e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                      />
                      {errors.email && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.email.message}</p>}
                    </div>

                    {/* Messaggio */}
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Messaggio
                      </label>
                      <textarea
                        {...register('messaggio')}
                        rows={5}
                        placeholder="Descrivi brevemente il tuo progetto o la tua richiesta..."
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10,
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: '#fff', fontSize: 14, outline: 'none',
                          resize: 'none', fontFamily: 'inherit',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = '#FF6219'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full font-bold text-sm text-white transition-opacity duration-200 disabled:opacity-50"
                      style={{
                        padding: '14px 24px', borderRadius: 10,
                        backgroundColor: '#FF6219', border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {loading ? 'Invio in corso...' : 'Invia messaggio →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
