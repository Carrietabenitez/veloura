import { motion } from 'framer-motion'
import ctaModel from '../assets/cta-final-model.png'

export default function CTA() {
  return (
    <section id="comprar" className="bg-lavender-100 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-5xl shadow-soft"
        >
          <img
            src={ctaModel}
            alt="Recupera la firmeza y juventud de tu cuello con goPure Tighten & Lift Neck Cream — Comprar ahora"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
