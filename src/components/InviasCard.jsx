import { Route } from 'lucide-react'
import { INVIAS_PROJECT } from '../data/departmentProjects'

/**
 * Tarjeta fija del proyecto de cobertura nacional (INVÍAS) — sección 10.2.
 * Cubrió 16 departamentos no especificados en el brochure; no se mapea al SVG.
 */
function InviasCard() {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-xl border border-ice/[0.07] bg-carbon p-6 sm:flex-row sm:items-center">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber/20 bg-amber/[0.08]">
        <Route size={22} className="text-amber" />
      </div>
      <div>
        <span className="inline-block rounded border border-amber/30 bg-amber/15 px-2 py-0.5 text-[11px] uppercase tracking-wide text-amber">
          {INVIAS_PROJECT.vertical}
        </span>
        <h4 className="mt-2 font-display text-base uppercase tracking-wide text-ice">
          {INVIAS_PROJECT.title}
        </h4>
        <p className="mt-1 text-[13px] text-ice/60">
          {INVIAS_PROJECT.location} · {INVIAS_PROJECT.year}
        </p>
        <p className="mt-1 text-[13px] text-ice/50">{INVIAS_PROJECT.metrics}</p>
      </div>
    </div>
  )
}

export default InviasCard
