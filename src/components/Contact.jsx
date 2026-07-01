import { useCallback, useRef, useState } from 'react'
import { Send } from 'lucide-react'
import Recaptcha from './Recaptcha'

const VERTICAL_OPTIONS = ['Infraestructura', 'Energía', 'Telecomunicaciones', 'Tecnología']

const FIELD_CLASS =
  'min-h-[44px] w-full rounded border border-ice/10 bg-ice/[0.03] px-4 py-2.5 text-[15px] text-ice placeholder:text-steel/60 outline-none transition-colors duration-200 focus:border-cyan'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    vertical: '',
    mensaje: '',
  })
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleRecaptchaChange = useCallback((token) => setRecaptchaToken(token), [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!recaptchaToken) {
      setStatus('recaptcha-required')
      return
    }
    if (!FORMSPREE_ENDPOINT) {
      // eslint-disable-next-line no-console
      console.warn('VITE_FORMSPREE_ENDPOINT no está configurado — ver .env.example')
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      // FormData recoge también el campo oculto "g-recaptcha-response" que
      // grecaptcha.render inyecta dentro del <form>; se fija explícito por robustez.
      const formData = new FormData(e.target)
      formData.set('g-recaptcha-response', recaptchaToken)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', empresa: '', correo: '', telefono: '', vertical: '', mensaje: '' })
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-slate py-20">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Hablemos
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          De su próximo proyecto
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className={FIELD_CLASS}
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa / Entidad"
              required
              value={form.empresa}
              onChange={handleChange}
              className={FIELD_CLASS}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              required
              value={form.correo}
              onChange={handleChange}
              className={FIELD_CLASS}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
              value={form.telefono}
              onChange={handleChange}
              className={FIELD_CLASS}
            />
          </div>

          <select
            name="vertical"
            required
            value={form.vertical}
            onChange={handleChange}
            className={`${FIELD_CLASS} ${form.vertical ? 'text-ice' : 'text-steel/60'}`}
          >
            <option value="" disabled>
              Vertical de interés
            </option>
            {VERTICAL_OPTIONS.map((v) => (
              <option key={v} value={v} className="text-ice">
                {v}
              </option>
            ))}
          </select>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            required
            rows={5}
            value={form.mensaje}
            onChange={handleChange}
            className={`${FIELD_CLASS} min-h-[44px] resize-y`}
          />

          <Recaptcha ref={recaptchaRef} onChange={handleRecaptchaChange} />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded bg-cyan px-6 py-3 font-display text-sm uppercase tracking-wide text-navy transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send size={16} />
            {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
          </button>

          {status === 'recaptcha-required' && (
            <p className="text-sm text-amber">Confirma el reCAPTCHA antes de enviar.</p>
          )}
          {status === 'success' && (
            <p className="text-sm text-cyan">
              Mensaje enviado. Nuestro equipo se pondrá en contacto pronto.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-amber">
              No se pudo enviar el mensaje. Intenta de nuevo o escríbenos a
              contacto@alturion.com.co.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
