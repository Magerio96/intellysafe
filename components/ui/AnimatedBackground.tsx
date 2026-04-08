'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth < 768)
  }, [])
  return mobile
}

const NODE_PCT = [
  { x: 5,  y: 12 }, { x: 18, y: 6  }, { x: 35, y: 10 },
  { x: 55, y: 5  }, { x: 72, y: 12 }, { x: 88, y: 7  },
  { x: 95, y: 22 }, { x: 3,  y: 32 }, { x: 15, y: 45 },
  { x: 28, y: 28 }, { x: 48, y: 38 }, { x: 65, y: 25 },
  { x: 82, y: 40 }, { x: 92, y: 55 }, { x: 10, y: 62 },
  { x: 25, y: 72 }, { x: 42, y: 58 }, { x: 60, y: 68 },
  { x: 78, y: 60 }, { x: 90, y: 75 }, { x: 5,  y: 85 },
  { x: 20, y: 90 }, { x: 40, y: 80 }, { x: 58, y: 88 },
  { x: 75, y: 82 }, { x: 92, y: 88 }, { x: 50, y: 50 },
]

const BLOBS = [
  {
    animate: { x: [0, 70, -40, 0], y: [0, -50, 70, 0], scale: [1, 1.2, 0.88, 1] },
    transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' as const },
    style: { top: '-20%', left: '-8%', width: '60%', height: '80%',
      background: 'radial-gradient(ellipse, rgba(255,98,25,0.22) 0%, transparent 60%)' },
  },
  {
    animate: { x: [0, -55, 45, 0], y: [0, 60, -35, 0], scale: [1, 0.88, 1.18, 1] },
    transition: { duration: 19, repeat: Infinity, ease: 'easeInOut' as const, delay: 3 },
    style: { top: '5%', right: '-12%', width: '55%', height: '70%',
      background: 'radial-gradient(ellipse, rgba(255,98,25,0.16) 0%, transparent 60%)' },
  },
  {
    animate: { x: [0, 45, -60, 0], y: [0, -70, 25, 0], scale: [1, 1.12, 0.9, 1] },
    transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' as const, delay: 6 },
    style: { bottom: '-20%', left: '15%', width: '65%', height: '65%',
      background: 'radial-gradient(ellipse, rgba(30,90,200,0.12) 0%, transparent 60%)' },
  },
]

const SCAN_LINES = [0.25, 0.6, 0.85]
const RINGS = [0, 1, 2]

interface Props {
  /** Reduce intensity for sections that are shorter than the hero */
  compact?: boolean
}

export default function AnimatedBackground({ compact = false }: Props) {
  const isMobile = useIsMobile()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ w: 1440, h: 900 })

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) {
        setDims({ w: wrapRef.current.offsetWidth, h: wrapRef.current.offsetHeight })
      }
    }
    update()
    const ro = new ResizeObserver(update)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  // On mobile: use fewer nodes to reduce SVG complexity
  const nodePct = isMobile ? NODE_PCT.slice(0, 10) : NODE_PCT
  const nodes = nodePct.map(n => ({
    cx: (n.x / 100) * dims.w,
    cy: (n.y / 100) * dims.h,
  }))

  const edges: [number, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].cx - nodes[j].cx
      const dy = nodes[i].cy - nodes[j].cy
      if (Math.sqrt(dx * dx + dy * dy) < 200) edges.push([i, j])
    }
  }

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blobs — on mobile skip blur filter (too GPU heavy) */}
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ ...blob.style, filter: isMobile ? 'blur(40px)' : 'blur(70px)' }}
          animate={isMobile ? undefined : blob.animate}
          transition={blob.transition}
        />
      ))}

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Neural network SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${dims.w} ${dims.h}`}
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(255,98,25,0.18)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0.18] }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.03, ease: 'easeOut' }}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.cx} cy={n.cy} r={5}
              fill="none"
              stroke="rgba(255,98,25,0.3)"
              strokeWidth={1}
              animate={{ r: [5, 18, 5], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3 + (i % 4) * 0.7, repeat: Infinity, ease: 'easeOut', delay: (i % 6) * 0.5 }}
            />
            <motion.circle
              cx={n.cx} cy={n.cy} r={2.5}
              fill="#FF6219"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5 + (i % 3) * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
            />
          </g>
        ))}
      </svg>

      {/* Pulse rings from center — skip on mobile */}
      {!compact && !isMobile && RINGS.map(i => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: '50%', left: '50%',
            border: '1px solid rgba(255,98,25,0.2)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ width: ['0px', '120vmax'], height: ['0px', '120vmax'], opacity: [0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay: i * 1.25 }}
        />
      ))}

      {/* Scan lines — skip on mobile */}
      {!isMobile && SCAN_LINES.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0"
          style={{
            top: `${pos * 100}%`, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,98,25,0.35) 30%, rgba(255,98,25,0.35) 70%, transparent)',
          }}
          animate={{ opacity: [0, 1, 0], scaleX: [0.05, 1, 0.05] }}
          transition={{ duration: 3.5 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 2.5 }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, rgba(22,23,40,0.75) 100%)',
        }}
      />
    </div>
  )
}
