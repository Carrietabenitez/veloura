import { motion } from 'framer-motion'
import { Droplet, Hand, Sunrise } from 'lucide-react'

const STEPS = [
  {
    icon: Droplet,
    title: 'Aplicar',
    desc: 'Toma una pequeña cantidad y distribúyela sobre el cuello, limpio y seco.',
  },
  {
    icon: Hand,
    title: 'Masajear',
    desc: 'Masajea con movimientos ascendentes hasta que la crema se absorba por completo.',
  },
  {
    icon: Sunrise,
    title: 'Mañana y noche',
    desc: 'Incorpórala a tu rutina dos veces al día para acompañar el uso constante.',
  },
]

export default function HowToUse() {
  return (
    <section className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
            Ritual diario
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl"
          >
            Cómo usarla
          </motion.h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-lavender-200 sm:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-lavender-700 shadow-card ring-1 ring-lavender-100">
                <step.icon size={28} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
