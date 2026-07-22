import { motion } from "framer-motion";
import { Check, ShoppingBag, ArrowDown } from "lucide-react";
import Blob from "./Blob";
import productJar from "../assets/product-jar-clean.webp";

const BENEFITS = [
  "Hidratación intensa",
  "Apariencia de mayor firmeza",
  "Mejora la textura de la piel",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-lavender-radial pt-28 lg:pt-20"
    >
      <Blob className="-left-32 -top-20 h-96 w-96" tone="light" />
      <Blob
        className="-right-24 bottom-0 h-[28rem] w-[28rem]"
        tone="deep"
        delay={0.3}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-lavender-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lavender-700">
            Cuidado dermocosmético para el cuello
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Recupera la apariencia firme y saludable de tu cuello
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-stone"
          >
            Una crema formulada para hidratar profundamente y mejorar la
            apariencia de la piel del cuello con el uso constante.
          </motion.p>

          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-ink">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lavender-100 text-lavender-700">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pedido"
              className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-8 py-4 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-leaf-600 hover:shadow-glow"
            >
              <ShoppingBag size={18} strokeWidth={2.5} />
              Comprar ahora
            </a>

            <a
              href="#beneficios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-800 underline decoration-lavender-300 decoration-2 underline-offset-4 transition-colors hover:text-lavender-600"
            >
              Ver beneficios
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <img
            src={productJar}
            alt="goPure Tighten & Lift Neck Cream"
            width={700}
            height={700}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full drop-shadow-[0_40px_60px_rgba(87,61,130,0.25)]"
          />

          <div className="glass absolute -left-6 top-10 hidden rounded-3xl px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-2xl font-medium text-lavender-700">
              4%
            </p>
            <p className="text-xs text-stone">Manteca de cupuaçu</p>
          </div>

          <div className="glass absolute -right-4 bottom-16 hidden rounded-3xl px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-2xl font-medium text-lavender-700">
              2.5%
            </p>
            <p className="text-xs text-stone">Matribust®</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}