# goPure — Tighten & Lift Neck Cream · Landing Page

Landing page premium construida con React 19 + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Cómo correrla

Este entorno no tiene acceso a internet para instalar paquetes, así que el proyecto
viene con todo el código listo pero sin `node_modules`. En tu computadora, con Node.js
instalado:

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    Navbar.jsx        # Navbar fija con glassmorphism y menú móvil
    Hero.jsx           # Hero con producto y beneficios principales
    TrustBadges.jsx    # 4 tarjetas de confianza
    Benefits.jsx       # 6 tarjetas de beneficios
    Ingredients.jsx    # Ácido hialurónico, cafeína, manteca de cupuaçu
    BeforeAfter.jsx    # Comparación antes/después
    HowToUse.jsx       # 3 pasos de uso
    Testimonials.jsx   # Slider automático (foto real + 2 testimonios en texto)
    FAQ.jsx            # Accordion animado
    CTA.jsx            # Banner final de compra
    Footer.jsx
  assets/              # Imágenes reales del producto que proporcionaste
  App.jsx
  index.css
```

## Sobre las imágenes

De las 7 fotos que compartiste, se usaron 5 en la landing:

- `product-jar-clean.png` → Hero
- `ingredients-lab.png` → fondo atmosférico (blureado) de la sección Ingredientes
- `before-after-neck.png` → sección Antes y Después
- `testimonial-claudia.png` → un slide del carrusel de testimonios
- `cta-final-model.png` → banner de cierre (CTA final)

La imagen del strip de 5 paneles no se usó como sección (ya es una mini-landing en sí
misma); quedó fuera para no duplicar contenido, pero puedes pedirme incorporarla como
pieza descargable o carrusel aparte si te sirve.

## Notas de diseño

- Tipografías: **Fraunces** (display, itálica en detalles) + **Inter** (cuerpo), cargadas
  vía Google Fonts en `index.html`.
- Paleta: lavanda/blanco/gris con verde reservado únicamente para los CTA, tal como
  pediste.
- Se respeta `prefers-reduced-motion` y hay estados de foco visibles para accesibilidad
  con teclado.
- No se incluyen afirmaciones médicas ni promesas de resultados garantizados; los
  testimonios y la sección de resultados llevan aclaraciones de que estos pueden variar.
