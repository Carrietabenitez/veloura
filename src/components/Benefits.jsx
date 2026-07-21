import { motion } from 'framer-motion'
import { Droplets, TrendingUp, Sparkles, Layers, Wind, CalendarCheck } from 'lucide-react'
import Blob from './Blob'

const BENEFITS = [
  {
    icon: Droplets,
    title: 'Hidratación intensa',
    desc: 'Aporta un aporte profundo de humedad que la piel del cuello suele perder con el tiempo.',
  },
  {
    icon: TrendingUp,
    title: 'Aspecto más firme',
    desc: 'Ayuda a mejorar la apariencia de firmeza con el uso constante.',
  },
  {
    icon: Sparkles,
    title: 'Piel más suave',
    desc: 'Deja una sensación sedosa y una piel visiblemente más suave al tacto.',
  },
  {
    icon: Layers,
    title: 'Textura uniforme',
    desc: 'Contribuye a una textura más pareja y refinada.',
  },
  {
    icon: Wind,
    title: 'Sensación de frescura',
    desc: 'Una fórmula ligera que se absorbe sin dejar sensación pesada.',
  },
  {
    icon: CalendarCheck,
    title: 'Uso diario',
    desc: 'Pensada para integrarse fácilmente en tu rutina de mañana y noche.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-ivory py-28">
      <Blob className="right-0 top-0 h-80 w-80" tone="light" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-lavender-600"
          >
            Beneficios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl"
          >
            Una rutina, seis razones para quererla
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group rounded-4xl border border-lavender-100 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-50 text-lavender-700 transition-colors group-hover:bg-lavender-100">
                <b.icon size={26} strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-xl font-medium text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
