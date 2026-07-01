import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(10,22,40,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'rgba(0,212,255,0.15)',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Alturion" className="h-8 w-8" />
          <span className="font-display text-xl uppercase tracking-wide text-ice">
            ALTUR<span className="text-amber">I</span>ON
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[12px] uppercase tracking-[2px] text-ice transition-colors duration-200 hover:text-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded border border-cyan px-5 py-2 font-display text-[12px] uppercase tracking-[2px] text-cyan transition-colors duration-200 hover:bg-cyan/10 lg:inline-block"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="text-ice lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan/15 bg-navy px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm uppercase tracking-[2px] text-ice hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-block rounded border border-cyan px-5 py-2 font-display text-[12px] uppercase tracking-[2px] text-cyan"
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav
