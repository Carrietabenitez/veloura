import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Minus, Plus, CheckCircle2, Loader2 } from 'lucide-react'
import productJar from '../assets/product-jar-clean.webp'
import { trackEvent } from "../lib/events";

// TODO: reemplaza con el número de WhatsApp real del negocio (código de país + número, sin espacios ni +)
const WHATSAPP_NUMBER = '573215684375'

// TODO: ajusta precios reales. unitPrice es el precio por frasco.
const PRICING = {
  unitPrice: 65000,
  currency: 'COP',
}

// API pública y gratuita con la división política de Colombia (departamentos y ciudades/municipios).
// Docs: https://docs.api-colombia.com/
const API_BASE = 'https://api-colombia.com/api/v1'

const formatPrice = (value) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: PRICING.currency,
    maximumFractionDigits: 0,
  }).format(value)

const initialForm = {
  name: '',
  identification:'',
  email:'',
  phone: '',
  address: '',
  notes: '',
  manualCity: '',
}

export default function OrderForm() {
  const [form, setForm] = useState(initialForm)
  const [qty, setQty] = useState(1)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const [departments, setDepartments] = useState([])
  const [departmentId, setDepartmentId] = useState('')
  const [loadingDepartments, setLoadingDepartments] = useState(true)
  const [departmentsError, setDepartmentsError] = useState(false)

  const [cities, setCities] = useState([])
  const [cityId, setCityId] = useState('')
  const [loadingCities, setLoadingCities] = useState(false)
  const [citiesError, setCitiesError] = useState(false)

  const total = PRICING.unitPrice * qty

  // Carga los departamentos una sola vez.
  useEffect(() => {
    let active = true
    setLoadingDepartments(true)
    setDepartmentsError(false)

    fetch(`${API_BASE}/Department`)
      .then((res) => {
        if (!res.ok) throw new Error('Respuesta no válida')
        return res.json()
      })
      .then((data) => {
        if (!active) return
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name, 'es'))
        setDepartments(sorted)
      })
      .catch(() => {
        if (active) setDepartmentsError(true)
      })
      .finally(() => {
        if (active) setLoadingDepartments(false)
      })

    return () => {
      active = false
    }
  }, [])

  // Carga los municipios cuando cambia el departamento seleccionado.
  useEffect(() => {
    if (!departmentId) {
      setCities([])
      setCityId('')
      return
    }

    let active = true
    setLoadingCities(true)
    setCitiesError(false)
    setCityId('')

    fetch(`${API_BASE}/Department/${departmentId}/cities`)
      .then((res) => {
        if (!res.ok) throw new Error('Respuesta no válida')
        return res.json()
      })
      .then((data) => {
        if (!active) return
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name, 'es'))
        setCities(sorted)
      })
      .catch(() => {
        if (active) setCitiesError(true)
      })
      .finally(() => {
        if (active) setLoadingCities(false)
      })

    return () => {
      active = false
    }
  }, [departmentId])

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresa tu nombre completo.'
    if(!form.identification.trim()) next.identification ='Ingresa tu cédula.'
    if (!form.email.trim()) {
  next.email = 'Ingresa tu correo';
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
  next.email = 'Ingresa un correo electrónico válido';
}
    if (!form.phone.trim()) next.phone = 'Ingresa un teléfono de contacto.'
    else if (!/^[\d\s+()-]{7,}$/.test(form.phone.trim())) next.phone = 'Revisa el número, parece incompleto.'
    if (!form.address.trim()) next.address = 'Ingresa la dirección de entrega.'
    if (!departmentsError && !departmentId) next.department = 'Selecciona tu departamento.'
    if (!citiesError && departmentId && !cityId) next.city = 'Selecciona tu municipio.'
    if (citiesError && !form.manualCity?.trim()) next.city = 'Escribe tu municipio.'
    return next
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const next = validate();
  setErrors(next);

  if (Object.keys(next).length > 0) return;

  const departmentName =
    departments.find((d) => String(d.id) === departmentId)?.name;

  const cityName = citiesError
    ? form.manualCity
    : cities.find((c) => String(c.id) === cityId)?.name;

  const message = [
    "¡Hola! Quiero hacer un pedido contraentrega de goPure Tighten & Lift Neck Cream:",
    `• Nombre: ${form.name}`,
    `• Cedula: ${form.identification}`,
    `• Correo: ${form.email}`,
    `• Teléfono: ${form.phone}`,
    `• Dirección: ${form.address}`,
    `• Departamento: ${departmentName ?? ""}`,
    `• Municipio: ${cityName ?? ""}`,
    `• Cantidad: ${qty} frasco${qty > 1 ? "s" : ""}`,
    `• Total estimado: ${formatPrice(total)}`,
    form.notes.trim() ? `• Notas: ${form.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  // 📊 Evento de conversión
  trackEvent(
    "pedido_contraentrega",
    "Formulario",
    `Cantidad: ${qty}`
  );

  setSubmitted(true);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  if (submitted) {
    return (
      <section id="pedido" className="bg-lavender-50 py-28">
        <div className="mx-auto max-w-md px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-4xl bg-white p-10 shadow-soft"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lavender-100 text-lavender-700">
              <CheckCircle2 size={28} strokeWidth={1.8} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-medium text-ink">
              ¡Pedido enviado!
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Te contactaremos al {form.phone} para confirmar tu entrega contraentrega. Si se
              abrió WhatsApp, envía el mensaje para que quede registrado de una vez.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm(initialForm)
                setQty(1)
                setDepartmentId('')
                setCityId('')
              }}
              className="mt-8 text-sm font-semibold text-lavender-700 underline underline-offset-4"
            >
              Hacer otro pedido
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="pedido" className="bg-lavender-50 py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-lavender-600">
            Pedido contraentrega
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
            Paga cuando la recibas
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
            Completa tus datos, confirmamos por WhatsApp y pagas en efectivo cuando el
            repartidor te entregue tu goPure Tighten & Lift Neck Cream.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card">
            <img src={productJar} alt="" className="h-20 w-20 object-contain" />
            <div>
              <p className="text-sm font-semibold text-ink">Tighten & Lift Neck Cream</p>
              <p className="text-xs text-stone">Frasco 1.7 fl oz (50 ml)</p>
              <p className="mt-1 font-display text-lg font-medium text-lavender-700">
                {formatPrice(PRICING.unitPrice)} c/u
              </p>
            </div>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-stone">
            <li className="flex items-center gap-3">
              <Truck size={18} className="text-lavender-600" strokeWidth={1.8} />
              Envío rápido a todo el país
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-lavender-600" strokeWidth={1.8} />
              Sin pagos por adelantado — pagas contraentrega
            </li>
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-4xl bg-white p-8 shadow-soft"
        >
          <div className="space-y-5">
            <Field
              label="Nombre completo"
              value={form.name}
              onChange={handleChange('name')}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label="Cedula de ciudadanía"
              value={form.identification}
              onChange={handleChange('identification')}
              error={errors.identification}
              autoComplete="cedula"
            />
            <Field
              label="Correo Electronico"
              value={form.email}
              onChange={handleChange('email')}
              error={errors.email}
              autoComplete="email"
            />
            <Field
              label="Teléfono"
              type="tel"
              value={form.phone}
              onChange={handleChange('phone')}
              error={errors.phone}
              autoComplete="tel"
            />
            <Field
              label="Dirección de entrega"
              value={form.address}
              onChange={handleChange('address')}
              error={errors.address}
              autoComplete="street-address"
            />
            <div>
              <label className="mb-2 block text-sm font-medium text-ink">Departamento</label>
              {departmentsError ? (
                <p className="text-xs text-stone">
                  No pudimos cargar la lista de departamentos. Escríbelo en las notas, por
                  favor.
                </p>
              ) : (
                <div className="relative">
                  <select
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                    disabled={loadingDepartments}
                    className={`w-full appearance-none rounded-2xl border bg-lavender-50/50 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 ${
                      errors.department
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-lavender-200 focus:border-lavender-500 focus:ring-lavender-200'
                    }`}
                  >
                    <option value="">
                      {loadingDepartments ? 'Cargando departamentos…' : 'Selecciona tu departamento'}
                    </option>
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                  {loadingDepartments && (
                    <Loader2
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-lavender-400"
                    />
                  )}
                </div>
              )}
              {errors.department && (
                <p className="mt-1.5 text-xs text-red-500">{errors.department}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ink">Municipio</label>
              {citiesError ? (
                <Field
                  label=""
                  placeholder="Escribe tu municipio"
                  value={form.manualCity}
                  onChange={handleChange('manualCity')}
                  error={errors.city}
                />
              ) : (
                <div className="relative">
                  <select
                    value={cityId}
                    onChange={(e) => setCityId(e.target.value)}
                    disabled={!departmentId || loadingCities}
                    className={`w-full appearance-none rounded-2xl border bg-lavender-50/50 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 disabled:opacity-50 ${
                      errors.city
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-lavender-200 focus:border-lavender-500 focus:ring-lavender-200'
                    }`}
                  >
                    <option value="">
                      {!departmentId
                        ? 'Primero elige un departamento'
                        : loadingCities
                          ? 'Cargando municipios…'
                          : 'Selecciona tu municipio'}
                    </option>
                    {cities.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {loadingCities && (
                    <Loader2
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-lavender-400"
                    />
                  )}
                  {errors.city && <p className="mt-1.5 text-xs text-red-500">{errors.city}</p>}
                </div>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ink">Cantidad</label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Restar frasco"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender-50 text-lavender-700 transition-colors hover:bg-lavender-100"
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center font-display text-lg">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  aria-label="Sumar frasco"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender-50 text-lavender-700 transition-colors hover:bg-lavender-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ink">
                Notas (opcional)
              </label>
              <textarea
                value={form.notes}
                onChange={handleChange('notes')}
                rows={2}
                placeholder="Punto de referencia, horario preferido, etc."
                className="w-full rounded-2xl border border-lavender-200 bg-lavender-50/50 px-4 py-3 text-sm text-ink placeholder:text-stone/60 focus:border-lavender-500 focus:outline-none focus:ring-2 focus:ring-lavender-200"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-lavender-100 pt-6">
            <span className="text-sm text-stone">Total contraentrega</span>
            <span className="font-display text-2xl font-medium text-ink">
              {formatPrice(total)}
            </span>
          </div>

          <button
  type="submit"
  className="mt-6 w-full rounded-full bg-leaf-500 px-6 py-4 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-leaf-600 hover:shadow-glow animate-pulse"
>
  Confirmar pedido contraentregaaa
</button>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, error, ...props }) {
  return (
    <div>
      {label && <label className="mb-2 block text-sm font-medium text-ink">{label}</label>}
      <input
        {...props}
        className={`w-full rounded-2xl border bg-lavender-50/50 px-4 py-3 text-sm text-ink placeholder:text-stone/60 focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-300 focus:ring-red-100'
            : 'border-lavender-200 focus:border-lavender-500 focus:ring-lavender-200'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}
