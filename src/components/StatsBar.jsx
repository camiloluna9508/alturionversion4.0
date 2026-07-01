import { STATS } from '../data/stats'

/**
 * Barra de stats — sección 6. Franja inmediata debajo del hero, ancho completo.
 */
function StatsBar() {
  return (
    <section
      className="border-y bg-amber/[0.07]"
      style={{ borderColor: 'rgba(245,158,11,0.15)' }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4 sm:gap-y-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 px-4 text-center sm:border-ice/[0.08] ${
              i !== 0 ? 'sm:border-l' : ''
            }`}
          >
            <p className="font-display text-[32px] leading-none text-amber">{stat.value}</p>
            <p className="text-[11px] uppercase tracking-wide text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
