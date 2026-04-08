'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['Monitoraggio', 'Sorveglianza', 'Sicurezza']

export default function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % words.length), 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
          style={{
            willChange: 'transform',
            background: 'linear-gradient(110deg, #6BBFFF 0%, #4A9EFF 40%, #FF6219 85%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
