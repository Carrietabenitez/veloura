import { motion } from 'framer-motion'
import { Droplets, Coffee, Leaf } from 'lucide-react'
import labBg from '../assets/ingredients-lab.png'

const INGREDIENTS = [
  {
    icon: Droplets,
    name: 'Ácido hialurónico',
    desc: 'Hidrata profundamente y ayuda a retener la humedad, dejando la piel con una sensación más suave y elástica.',
  },
  {
    icon: Coffee,
    name: 'Cafeína',
    desc: 'Conocida por ayudar a revitalizar la piel y mejorar su apariencia, dejándola con sensación de mayor firmeza y tono.',
  },
  {
    icon: Leaf,
    name: 'Manteca de cupuaçu',
    desc: 'Rica en ácidos grasos y antioxidantes que nutren, suavizan y contribuyen a la elasticidad de la piel.',
  },
]

export default function Ingredients() {
  return (
    <section id="ingredientes" className="relative overflow-hidden bg-lavender-800 py-28">
      <img
        src={labBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-125 object-cover opacity-15 blur-2xl"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-800 via-lavender-800/95 to-lavender-800" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-lavender-300"
          >
            Ciencia y naturaleza
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-balance font-display text-3xl font-medium text-white sm:text-4xl"
          >
            Ingredientes en perfecta armonía
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {INGREDIENTS.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="glass rounded-4xl bg-white/[0.06] p-8 !border-white/10"
            >
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lavender-200">
                <ing.icon size={26} strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-xl font-medium text-white">{ing.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-lavender-100/80">{ing.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-xs uppercase tracking-widest text-lavender-300/70"
        >
          Fórmula libre de parabenos · Cruelty free
        </motion.p>
      </div>
    </section>
  )
}
