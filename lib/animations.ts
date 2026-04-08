import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}
export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}
export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

// Legacy aliases — kept so existing imports don't break
export const fadeInUpMobile    = fadeInUp
export const fadeInLeftMobile  = fadeInLeft
export const fadeInRightMobile = fadeInRight
export const staggerContainerMobile = staggerContainer
export const scaleInMobile     = scaleIn

export const viewportOnce = { once: true, amount: 0.15 }
