import { Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HardHat, Zap, Radio, Cpu, ClipboardList } from 'lucide-react'
import TechGrid from './TechGrid'
import { VERTICALS, PROFESSIONAL_SERVICES } from '../data/verticals'

const ICONS = { HardHat, Zap, Radio, Cpu }

function VerticalCard({ vertical, isActive, onClick }) {
  const Icon = ICONS[vertical.icon]
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isActive}
      className={`group relative flex flex-col gap-4 rounded-xl border-l-[3px] border-y border-r border-y-ice/[0.07] border-r-ice/[0.07] bg-ice/[0.03] p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:bg-cyan/[0.04] ${
        isActive ? 'border-l-cyan' : 'border-l-transparent hover:border-l-cyan'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/[0.08]">
          <Icon size={22} className="text-cyan" />
        </div>
        <span
          className={`font-display text-[52px] leading-none transition-colors duration-200 ${
            isActive ? 'text-cyan/35' : 'text-cyan/15 group-hover:text-cyan/35'
          }`}
        >
          {vertical.n}
        </span>
      </div>

      <h3 className="font-display text-xl uppercase tracking-wide text-ice">{vertical.title}</h3>
      <p className="text-sm italic leading-relaxed text-ice/60">{vertical.description}</p>

      <p className="mt-auto text-xs text-steel">{vertical.tags.join(' · ')}</p>
    </button>
  )
}

function Verticals() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="servicios" className="relative overflow-hidden bg-navy py-20">
      <TechGrid className="opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Lo que hacemos
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          Cuatro verticales / un mismo sistema
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-ice/60">
          Estructuramos nuestra oferta en cuatro verticales integradas que permiten desarrollar
          proyectos de ingeniería de principio a fin.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {VERTICALS.map((vertical, i) => (
            <Fragment key={vertical.n}>
              <VerticalCard
                vertical={vertical}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              />

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-full rounded-xl border border-ice/[0.07] bg-carbon p-6"
                  >
                    <h4 className="font-display text-sm uppercase tracking-wide text-cyan">
                      {vertical.title} — detalle de capacidades
                    </h4>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {vertical.detalle.map((item) => (
                        <div key={item} className="flex items-center gap-2 rounded bg-ice/[0.03] px-3 py-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                          <span className="text-xs text-ice/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </div>

        {/* Banda de Servicios Profesionales — capa transversal */}
        <div
          className="mt-10 rounded-xl border border-cyan/20 px-6 py-6 sm:px-8"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,212,255,0.02))',
          }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 sm:pr-6">
              <ClipboardList size={24} className="shrink-0 text-cyan" />
              <h4 className="font-display text-base uppercase tracking-wide text-ice">
                Servicios Profesionales
              </h4>
            </div>

            <div className="hidden self-stretch border-l border-ice/[0.12] sm:block" />

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {PROFESSIONAL_SERVICES.map((service) => (
                <span key={service} className="text-[13px] text-ice/70">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verticals
