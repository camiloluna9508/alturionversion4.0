import { BadgeCheck, ShieldCheck, Leaf, Check } from 'lucide-react'
import { PILLARS } from '../data/pillars'

const ICONS = { BadgeCheck, ShieldCheck, Leaf }

function Pillars() {
  return (
    <section className="relative bg-slate py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-amber">
          Cómo trabajamos
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          Tres pilares, un solo propósito
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-ice/60">
          Ejecutamos cada proyecto con precisión técnica, control y trazabilidad en cada etapa —
          con un compromiso real por la sostenibilidad desde el diseño.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon]
            return (
              <div
                key={pillar.n}
                className="rounded-xl border border-amber/20 bg-ice/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-amber">{pillar.n}</span>
                  <Icon size={22} className="text-amber" />
                </div>
                <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-ice">
                  {pillar.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ice/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-base italic leading-relaxed text-ice/60">
          "Más que entregar soluciones, construimos relaciones basadas en confianza, seguridad y
          responsabilidad con el entorno."
        </p>
      </div>
    </section>
  )
}

export default Pillars
