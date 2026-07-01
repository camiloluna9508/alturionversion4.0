import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

// Clave de pruebas oficial de Google (siempre "pasa", solo para desarrollo local).
// Reemplazar con VITE_RECAPTCHA_SITE_KEY registrada en Google reCAPTCHA Admin Console
// para el dominio de producción antes de lanzar (checklist sección 17).
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

let scriptPromise = null
function loadRecaptchaScript() {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve) => {
    if (window.grecaptcha?.render) {
      resolve(window.grecaptcha)
      return
    }
    window.__onRecaptchaLoad = () => resolve(window.grecaptcha)
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  })
  return scriptPromise
}

/**
 * Widget reCAPTCHA v2 (checkbox "No soy un robot") — sección 12. Se ubica justo
 * antes del botón de envío. La verificación real del token ocurre server-side
 * (Formspree/EmailJS), esto solo bloquea el envío en el cliente si falta el token.
 */
const Recaptcha = forwardRef(function Recaptcha({ onChange }, ref) {
  const containerRef = useRef(null)
  const widgetId = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadRecaptchaScript().then((grecaptcha) => {
      if (cancelled || !containerRef.current || widgetId.current !== null) return
      widgetId.current = grecaptcha.render(containerRef.current, {
        sitekey: SITE_KEY,
        theme: 'dark',
        callback: (token) => onChange(token),
        'expired-callback': () => onChange(null),
      })
    })
    return () => {
      cancelled = true
    }
  }, [onChange])

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current)
    },
  }))

  return <div ref={containerRef} />
})

export default Recaptcha
