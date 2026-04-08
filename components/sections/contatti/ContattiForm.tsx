'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/animations'

interface FormData {
  nome: string
  email: string
  messaggio: string
}

export default function ContattiForm() {
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
    <section className="section-padding" style={{ backgroundColor: '#F8F9FF' }}>
      <div className="container-max max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ willChange: 'transform' }}
        >
          {submitted ? (
            <div className="card-light p-10 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: 'rgba(255,98,25,0.1)' }}
              >
                ✓
              </div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#252849' }}>
                Messaggio inviato!
              </h3>
              <p style={{ color: '#5A5C78' }}>Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="card-light p-8 space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: '#252849' }}
                >
                  Nome *
                </label>
                <input
                  {...register('nome', { required: 'Il nome è obbligatorio' })}
                  className={`input-field${errors.nome ? ' input-field-error' : ''}`}
                  placeholder="Il tuo nome"
                />
                {errors.nome && (
                  <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: '#252849' }}
                >
                  Email *
                </label>
                <input
                  {...register('email', {
                    required: "L'email è obbligatoria",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Email non valida',
                    },
                  })}
                  type="email"
                  className={`input-field${errors.email ? ' input-field-error' : ''}`}
                  placeholder="tua@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: '#252849' }}
                >
                  Messaggio
                </label>
                <textarea
                  {...register('messaggio')}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Il tuo messaggio..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {loading ? 'Invio in corso...' : 'Invia messaggio →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
