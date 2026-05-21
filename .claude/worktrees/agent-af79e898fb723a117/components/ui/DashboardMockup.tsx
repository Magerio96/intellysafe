'use client'
import { motion } from 'framer-motion'

const navItems = [
  { icon: '🗺', label: 'DASHBOARD', active: true },
  { icon: '📅', label: 'CALENDAR',  active: false },
  { icon: '🎯', label: 'MISSIONS',  active: false },
  { icon: '☁',  label: 'STORAGE',  active: false },
  { icon: '⚙',  label: 'SETTINGS', active: false },
  { icon: '⚡', label: 'DEVELOP',  active: false },
]

const cameras = ['Front', 'Close', 'Left']

export default function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform' }}
    >
      {/* Tablet wrapper */}
      <div
        style={{
          borderRadius: 16,
          background: '#1E2846',
          boxShadow: '0 32px 80px rgba(30,40,70,0.35), 0 0 0 1px rgba(255,255,255,0.08)',
          overflow: 'hidden',
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        }}
      >
        {/* ── Top bar ── */}
        <div
          style={{
            background: '#141C32',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#FA5A14', display: 'inline-block' }}
            />
            <span style={{ color: 'white', fontWeight: 700, fontSize: 11, letterSpacing: '0.05em' }}>
              IntellySafe
            </span>
          </div>

          {/* Robot name */}
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: '0.1em' }}>
            ROBOT — UNIT 01
          </span>

          {/* Status indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {[
              { color: '#22c55e', label: 'Online' },
              { color: '#eab308', label: 'GPS' },
              { color: '#FA5A14', label: 'AI Active', pulse: true },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {s.pulse ? (
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, display: 'inline-block' }}
                  />
                ) : (
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                )}
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8, letterSpacing: '0.08em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body: 3 columns ── */}
        <div style={{ display: 'flex', height: 320 }}>

          {/* Sidebar */}
          <div style={{ width: '20%', background: '#141C32', borderRight: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
            {navItems.map(item => (
              <div
                key={item.label}
                style={{
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  background: item.active ? '#FA5A14' : 'transparent',
                  color: item.active ? 'white' : 'rgba(255,255,255,0.45)',
                  fontSize: 8,
                  letterSpacing: '0.1em',
                  cursor: 'default',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <span style={{ fontSize: 10 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main area */}
          <div style={{ flex: 1, background: '#1E2846', padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Metric cards */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { value: '0', unit: 'km/h' },
                { value: '0', unit: 'm/s' },
                { value: 'Battery', unit: null, battery: true },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 6,
                    padding: '8px 10px',
                  }}
                >
                  {m.battery ? (
                    <>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 7, letterSpacing: '0.1em', marginBottom: 5 }}>BATTERY</div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: '68%', height: '100%', background: '#22c55e', borderRadius: 3 }} />
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 7, marginTop: 3 }}>68%</div>
                    </>
                  ) : (
                    <>
                      <div style={{ color: 'white', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>{m.value}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 7, letterSpacing: '0.1em', marginTop: 2 }}>{m.unit}</div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Map area */}
            <div
              style={{
                flex: 1,
                background: 'rgba(0,0,0,0.2)',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.07)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              {/* Corner labels */}
              {[
                { top: 6, left: 8,    label: 'CAMERA Front' },
                { top: 6, right: 8,   label: 'CAMERA Right' },
                { bottom: 6, left: 8, label: 'CAMERA Left' },
              ].map((c, i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    top: c.top, bottom: c.bottom, left: c.left, right: c.right,
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: 6,
                    letterSpacing: '0.08em',
                    fontFamily: 'inherit',
                  }}
                >
                  {c.label}
                </span>
              ))}

              {/* Robot icon */}
              <div style={{ fontSize: 32, lineHeight: 1 }}>🚀</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 7, letterSpacing: '0.12em', textAlign: 'center' }}>
                NO MISSION SCHEDULED
              </div>
              <div
                style={{
                  background: '#FA5A14',
                  color: 'white',
                  fontSize: 7,
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: 4,
                  letterSpacing: '0.08em',
                  cursor: 'default',
                }}
              >
                START NOW
              </div>
            </div>

            {/* Nav dots */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>‹</span>
              {[1,2,3,4,5,6].map(i => (
                <span
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: i <= 3 ? '#FA5A14' : 'rgba(255,255,255,0.2)',
                    display: 'inline-block',
                  }}
                />
              ))}
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>›</span>
            </div>
          </div>

          {/* Camera panel */}
          <div
            style={{
              width: '25%',
              background: '#141C32',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ color: '#FA5A14', fontSize: 8, letterSpacing: '0.15em', fontWeight: 700, marginBottom: 2 }}>
              CAMERA
            </div>
            {cameras.map(cam => (
              <div
                key={cam}
                style={{
                  flex: 1,
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 5,
                  padding: '6px 8px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                {/* Live dot */}
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: cameras.indexOf(cam) * 0.4 }}
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#22c55e',
                    display: 'inline-block',
                  }}
                />
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 7, letterSpacing: '0.08em' }}>
                  CAMERA {cam.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
