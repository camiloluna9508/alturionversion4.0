import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Info } from 'lucide-react'
import TechGrid from './TechGrid'
import ColombiaMap from './ColombiaMap'
import ProjectPanel from './ProjectPanel'
import InviasCard from './InviasCard'
import { DEPARTMENT_PROJECTS } from '../data/departmentProjects'

const SPRING = { type: 'spring', stiffness: 260, damping: 28 }

function Legend() {
  return (
    <div className="flex items-center justify-center gap-6 text-xs text-steel">
      <span className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgba(245,158,11,0.7)' }} />
        Con proyectos
      </span>
      <span className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full border"
          style={{ borderColor: 'rgba(240,246,255,0.3)' }}
        />
        Sin proyectos
      </span>
    </div>
  )
}

function MapSection() {
  const [geoData, setGeoData] = useState(null)
  const [selectedDept, setSelectedDept] = useState(null)

  const hasProjectsSet = useMemo(() => new Set(Object.keys(DEPARTMENT_PROJECTS)), [])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}colombia.geo.json`)
      .then((res) => res.json())
      .then(setGeoData)
      .catch(() => setGeoData(null))
  }, [])

  const handleSelect = (name) => {
    if (!hasProjectsSet.has(name)) return
    setSelectedDept((current) => (current === name ? null : name))
  }

  const isSelected = Boolean(selectedDept)

  return (
    <section id="proyectos" className="relative overflow-hidden bg-navy py-20">
      <TechGrid className="opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Cobertura nacional
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          Proyectos ejecutados en Colombia
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-ice/60">
          Un mapa interactivo de los proyectos que hemos ejecutado en el territorio nacional.
          Seleccione un departamento para ver el detalle.
        </p>

        <div
          className={`mt-10 flex flex-col gap-8 ${
            isSelected ? 'lg:flex-row lg:items-start' : 'items-center'
          }`}
        >
          <motion.div
            layout
            transition={SPRING}
            className={isSelected ? 'w-[140px] shrink-0 lg:w-[220px]' : 'w-full max-w-[640px]'}
          >
            <ColombiaMap
              geoData={geoData}
              hasProjectsSet={hasProjectsSet}
              selectedDept={selectedDept}
              onSelectDept={handleSelect}
            />

            {isSelected ? (
              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded border border-ice/20 py-1.5 font-display text-[11px] uppercase tracking-wide text-ice/80 transition-colors duration-200 hover:border-cyan hover:text-cyan"
              >
                <X size={12} />
                Ver mapa completo
              </button>
            ) : (
              <div className="mt-6">
                <Legend />
              </div>
            )}
          </motion.div>

          {isSelected && (
            <div className="hidden shrink-0 lg:block">
              <Info size={16} className="text-steel" aria-label="Leyenda: ámbar con proyectos, azul sin proyectos, cian seleccionado" />
            </div>
          )}

          <AnimatePresence mode="wait">
            {isSelected && (
              <motion.div
                key={selectedDept}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full flex-1"
              >
                <ProjectPanel deptName={selectedDept} projects={DEPARTMENT_PROJECTS[selectedDept]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isSelected && <InviasCard />}

        {/* Accesibilidad — lista navegable por teclado equivalente al mapa (sección 10.2) */}
        <ul className="sr-only">
          {Object.entries(DEPARTMENT_PROJECTS).map(([name, projects]) => (
            <li key={name}>
              <button type="button" onClick={() => handleSelect(name)}>
                {name} — {projects.length} proyecto{projects.length !== 1 ? 's' : ''} ejecutado
                {projects.length !== 1 ? 's' : ''}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MapSection
