import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import testimonialImg from '../assets/testimonial-claudia.webp'

const TEXT_TESTIMONIALS = [
  {
    name: 'Marisol P.',
    age: 47,
    comment:
      'La textura es liviana y se siente muy agradable al aplicarla. Después de varias semanas noto la piel del cuello más suave.',
  },
  {
    name: 'Renata G.',
    age: 55,
    comment:
      'Se absorbe rápido y no deja sensación grasosa. La incorporé a mi rutina de noche sin ningún problema.',
  },
  {
    name: 'Carolina Martinez.',
    age: 60,
    comment:
      'Uso la crema hace unas semanas y la verdad es que la piel del cuello se siente mucho más suave. El envase es lindo y el aroma es muy discreto, nada invasivo.',
  },
  {
    name: 'Patricia N.',
    age: 60,
    comment:
      'Lo que más valoro es que se absorbe rápido y no queda pegajosa. La aplico todas las mañanas antes de vestirme y ya es parte de mi rutina.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-lavender-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const slides = [
  
    { type: 'text', data: TEXT_TESTIMONIALS[0] },
    { type: 'text', data: TEXT_TESTIMONIALS[1] },
    { type: 'text', data: TEXT_TESTIMONIALS[2] },
    { type: 'text', data: TEXT_TESTIMONIALS[3] },
  ]
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative overflow-hidden bg-mist py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
            Testimonios
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
            Experiencias reales
          </h2>
        </div>

        <div className="relative mt-14 min-h-[24rem]">
          <AnimatePresence mode="wait">
            {slides[index].type === 'image' ? (
              <motion.div
                key="image-slide"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-4xl shadow-soft"
              >
                <img
                  src={testimonialImg}
                  alt="Testimonio real de una clienta sobre goPure Tighten & Lift Neck Cream"
                  className="w-full"
                  loading="lazy"
                />
              </motion.div>
            ) : (
              <motion.div
                key={slides[index].data.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="rounded-4xl bg-white p-10 shadow-card"
              >
                <Stars />
                <p className="mt-5 text-balance font-display text-xl font-medium leading-relaxed text-ink">
                  “{slides[index].data.comment}”
                </p>
                <p className="mt-6 text-sm font-semibold text-lavender-700">
                  {slides[index].data.name}{' '}
                  <span className="font-normal text-stone">· {slides[index].data.age} años</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-lavender-600' : 'w-2 bg-lavender-200'
              }`}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-stone">
          Las experiencias compartidas son testimonios personales y no constituyen garantía de
          resultados.
        </p>
      </div>
    </section>
  )
}
