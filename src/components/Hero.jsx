import { Check } from 'lucide-react'
import TechGrid from './TechGrid'
import AnimatedHeadline from './AnimatedHeadline'
import HeroPhotoPanel from './HeroPhotoPanel'

const HEADLINE_LINES = [
  [{ text: 'Ingeniería' }],
  [{ text: 'que ' }, { text: 'CONECTA', accent: true }],
  [{ text: 'el país.' }],
]

const DIFERENCIADORES = [
  'Ciclo completo propio — del diseño a la operación, sin intermediarios',
  'Respaldados por 17 años de operación de SINERCOM S.A.S.',
  'Proyectos ejecutados en más de 20 departamentos de Colombia',
]

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      {/* Glow amber sutil, radial-gradient puro — nunca filter: blur() */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(closest-side, rgba(245,158,11,0.08), transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* radial-gradient sutil desde slate, sobre el navy base */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(10,22,40,0.9), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <TechGrid accentLines />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-12 px-6 pb-20 pt-14 lg:grid-cols-[55%_45%] lg:gap-y-10 lg:pb-28 lg:pt-20">
        {/* Zona texto — bloque superior (glass card, eyebrow, headline, subhead) */}
        <div className="order-1 flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
          <div
            className="inline-flex w-fit flex-col gap-1 rounded-lg border px-4 py-3 sm:w-full sm:max-w-sm"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(0,212,255,0.3)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          >
            <p className="font-display text-xs uppercase tracking-widest text-ice">
              [ 2026 ] · Ingeniería Integral
            </p>
            <p className="text-xs text-steel">RITEL · RETIE · SG-SST · Cobertura Nacional</p>
          </div>

          <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
            Tecnología · Telecomunicaciones · Energía · Infraestructura
          </p>

          <AnimatedHeadline lines={HEADLINE_LINES} className="max-w-xl" />

          <p className="max-w-[480px] text-[15px] leading-[1.7] text-ice/60">
            Diseñamos, construimos e integramos infraestructura de alto impacto. Del diseño a la
            operación, con rigor técnico y cobertura en más de 20 departamentos.
          </p>
        </div>

        {/* Zona foto — panel HUD (columna derecha en desktop, spane ambas filas) */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <HeroPhotoPanel />
        </div>

        {/* Zona texto — bloque inferior (CTAs + diferenciadores) */}
        <div className="order-3 flex flex-col gap-8 lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="rounded bg-cyan px-6 py-3 text-center font-display text-sm uppercase tracking-wide text-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded border border-ice/30 px-6 py-3 text-center font-display text-sm uppercase tracking-wide text-ice transition-colors duration-200 hover:border-ice/60"
            >
              Contáctenos →
            </a>
          </div>

          <ul className="flex flex-col gap-3 border-t border-ice/[0.08] pt-5 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {DIFERENCIADORES.map((item) => (
              <li key={item} className="flex max-w-xs items-start gap-2">
                <Check size={14} className="mt-0.5 shrink-0 text-cyan" />
                <span className="text-[13px] text-ice/50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
