import { Variants } from 'framer-motion'

// ── Desktop animations (full effects) ──────────────────────
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40,  filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88, filter: 'blur(6px)' },
  visible: { opacity: 1, scale: 1,    filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

// ── Mobile animations (no blur, minimal transform) ─────────
export const fadeInUpMobile: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.4, ease: 'easeOut' } },
}
export const fadeInLeftMobile: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}
export const fadeInRightMobile: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}
export const staggerContainerMobile: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
export const scaleInMobile: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

export const viewportOnce = { once: true, amount: 0.15 }
