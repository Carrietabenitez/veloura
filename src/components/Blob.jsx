import { motion } from 'framer-motion'

/**
 * Mancha orgánica difuminada en tonos lavanda — el motivo de "hidratación"
 * que se repite (con variaciones) a lo largo de toda la página como firma visual.
 */
export default function Blob({ className = '', delay = 0, tone = 'light' }) {
  const gradients = {
    light: 'from-lavender-200/60 via-lavender-100/40 to-transparent',
    deep: 'from-lavender-400/40 via-lavender-300/25 to-transparent',
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl ${gradients[tone]} ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay, ease: 'easeOut' }}
    />
  )
}
