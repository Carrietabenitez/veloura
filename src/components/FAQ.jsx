import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: '¿Cada cuánto se usa?',
    a: 'Se recomienda aplicarla dos veces al día, por la mañana y por la noche, sobre el cuello limpio y seco.',
  },
  {
    q: '¿Cuándo pueden apreciarse cambios en la apariencia?',
    a: 'Con el uso constante, muchas personas comienzan a notar cambios en la apariencia de la piel en las primeras semanas. Los tiempos pueden variar de una persona a otra.',
  },
  {
    q: '¿Sirve para cualquier tipo de piel?',
    a: 'Su fórmula está pensada para adaptarse a distintos tipos de piel. Si tienes piel muy sensible o alguna condición particular, te recomendamos consultar antes con un dermatólogo.',
  },
  {
    q: '¿Cuánto dura un frasco?',
    a: 'Cada frasco contiene 50 ml. Con un uso de dos veces al día, suele durar aproximadamente entre 6 y 8 semanas.',
  },
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-lavender-100 py-2">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-ink">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lavender-50 text-lavender-700"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm leading-relaxed text-stone">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-ivory py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
            Dudas frecuentes
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl"
          >
            Preguntas frecuentes
          </motion.h2>
        </div>

        <div className="mt-12">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
