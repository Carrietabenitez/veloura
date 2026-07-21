import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink py-14 text-lavender-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <span className="font-display text-xl italic text-white">goPure</span>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Contacto
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-lavender-100/60">
          © {year} goPure. Todos los derechos reservados. Producto cosmético de uso tópico —
          resultados sujetos a variación individual.
        </div>
      </div>
    </footer>
  )
}
