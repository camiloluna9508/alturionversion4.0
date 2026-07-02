import { Check } from 'lucide-react'
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
    <section id="top" className="relative min-h-[680px] overflow-hidden bg-navy lg:min-h-[760px]">
      {/* EXPERIMENTAL — foto de fondo a sangre completa, fuera del spec (sección 5/18). */}
      <div className="absolute inset-0 z-0">
        <HeroPhotoPanel background />
      </div>
      {/* Scrim — oscurece de izquierda a derecha para que el texto siga siendo legible */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(100deg, rgba(2,11,24,0.96) 0%, rgba(2,11,24,0.9) 28%, rgba(2,11,24,0.6) 52%, rgba(2,11,24,0.2) 75%, rgba(2,11,24,0.05) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Scrim inferior — protege la fila de diferenciadores */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(2,11,24,0.8) 0%, transparent 35%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center gap-8 px-6 py-16 lg:min-h-[760px] lg:py-20">
        <div className="flex flex-col gap-6">
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

          <p className="max-w-[480px] text-[15px] leading-[1.7] text-ice/70">
            Diseñamos, construimos e integramos infraestructura de alto impacto. Del diseño a la
            operación, con rigor técnico y cobertura en más de 20 departamentos.
          </p>
        </div>

        <div className="flex flex-col gap-8">
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

          <ul className="flex flex-col gap-3 border-t border-ice/[0.15] pt-5 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {DIFERENCIADORES.map((item) => (
              <li key={item} className="flex max-w-xs items-start gap-2">
                <Check size={14} className="mt-0.5 shrink-0 text-cyan" />
                <span className="text-[13px] text-ice/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
