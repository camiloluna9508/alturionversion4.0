import { Mail, Phone, Globe, MapPin } from 'lucide-react'
import { VERTICALS } from '../data/verticals'
import logo from '../assets/logo.png'

const EMPRESA_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

const CONTACT_CHANNELS = [
  { icon: MapPin, label: 'Cra. 10 # 79-33, Ibagué, Colombia' },
  { icon: Mail, label: 'contacto@alturion.com.co', href: 'mailto:contacto@alturion.com.co' },
  { icon: Phone, label: '311 552 6686', href: 'tel:+573115526686' },
  { icon: Globe, label: 'www.alturion.com.co', href: 'https://www.alturion.com.co' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ice/[0.06] bg-navy pt-16">
      {/* Marca de fondo, muy tenue, recortada por el contenedor */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 w-[220px] select-none opacity-[0.06] sm:w-[320px] lg:w-[420px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Fila 1 — Columna marca: logo + manifiesto, a todo el ancho */}
        <div className="border-b border-ice/[0.06] pb-10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Alturion" className="h-10 w-10 shrink-0" />
            <p className="font-display text-xl uppercase tracking-wide text-ice">
              ALTUR<span className="text-amber">I</span>ON
            </p>
          </div>
          <p className="mt-6 max-w-2xl border-l-2 border-amber/40 pl-5 font-display text-lg italic leading-relaxed text-ice/80 sm:text-xl">
            "La excavación con el dato. La energía con la conectividad. La obra física con la
            inteligencia digital."
          </p>
        </div>

        {/* Fila 2 — Servicios / Empresa / Contacto */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 sm:grid-cols-3">
          <div>
            <h4 className="font-display text-xs uppercase tracking-[2px] text-ice/80">
              Servicios
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {VERTICALS.map((v) => (
                <li key={v.n}>
                  <a
                    href="#servicios"
                    className="text-[13px] text-steel transition-colors duration-200 hover:text-cyan"
                  >
                    {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[2px] text-ice/80">Empresa</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {EMPRESA_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-steel transition-colors duration-200 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-xs uppercase tracking-[2px] text-ice/80">
              Contacto
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CONTACT_CHANNELS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-2 text-[13px] text-steel transition-colors duration-200 hover:text-cyan"
                    >
                      <Icon size={14} className="shrink-0" />
                      {label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-[13px] text-steel">
                      <Icon size={14} className="shrink-0" />
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ice/[0.06] pb-12 pt-12">
          <div
            className="rounded-xl border border-cyan/20 px-6 py-10 text-center sm:px-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,212,255,0.02))',
            }}
          >
            <h3 className="font-display text-2xl uppercase tracking-wide text-ice sm:text-3xl">
              ¿Hablemos de su próximo proyecto?
            </h3>
            <a
              href="#contacto"
              className="mt-6 inline-block rounded bg-cyan px-8 py-3 font-display text-sm uppercase tracking-wide text-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              Hablemos
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-ice/[0.06] py-6 text-center text-xs text-steel sm:flex-row sm:justify-between sm:text-left">
          <p>© Alturion 2026</p>
          <p>Política de tratamiento de datos (Ley 1581/2012)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
