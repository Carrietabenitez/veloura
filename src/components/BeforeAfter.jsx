import { motion } from 'framer-motion'
import beforeAfterImg from '../assets/before-after-neck.webp'

export default function BeforeAfter() {
  return (
    <section id="resultados" className="bg-mist py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
            Resultados
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl"
          >
            La constancia se nota
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-5xl shadow-soft"
        >
          <img
            src={beforeAfterImg}
            alt="Comparación antes y después del uso de goPure Tighten & Lift Neck Cream"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-stone">
          Los resultados pueden variar entre personas y dependen del uso constante.
          Fotografías con fines ilustrativos.
        </p>
      </div>
    </section>
  )
}
