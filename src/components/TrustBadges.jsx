import { motion } from 'framer-motion'
import { ShieldCheck, FlaskConical, Truck, Lock } from 'lucide-react'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Dermatológicamente probada',
    desc: 'Formulada y evaluada bajo supervisión dermatológica.',
  },
  {
    icon: FlaskConical,
    title: 'Ingredientes seleccionados',
    desc: 'Activos elegidos por su afinidad con la piel del cuello.',
  },
  {
    icon: Truck,
    title: 'Envío rápido',
    desc: 'Recíbela en tu puerta en pocos días hábiles.',
  },
  {
    icon: Lock,
    title: 'Compra segura',
    desc: 'Pago encriptado de principio a fin.',
  },
]

export default function TrustBadges() {
  return (
    <section className="relative border-y border-lavender-100 bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-10">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-lavender-50 text-lavender-700">
              <item.icon size={22} strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="text-xs text-stone">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
