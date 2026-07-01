import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import TechGrid from './TechGrid'

const FICHAS = [
  {
    n: '01',
    title: '¿Qué hacemos?',
    text: 'Proyectos de infraestructura civil, eléctrica, de telecomunicaciones y tecnología — desde el diseño hasta la operación.',
  },
  {
    n: '02',
    title: '¿Cómo lo hacemos?',
    text: 'Equipo técnico certificado, cumplimiento normativo estricto y procesos de calidad auditables.',
  },
  {
    n: '03',
    title: '¿Para quién?',
    text: 'Entidades gubernamentales, privadas, constructoras, operadores de telecomunicaciones y empresas del sector energético.',
  },
]

function Nosotros() {
  const [open, setOpen] = useState(false)

  return (
    <section id="nosotros" className="relative overflow-hidden bg-slate py-20">
      <TechGrid className="opacity-40" />

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Quiénes somos
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          Una nueva generación de ingeniería
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-ice/70">
          Alturion es una empresa colombiana de soluciones integrales de ingeniería, con sede en
          Ibagué y cobertura nacional. Diseñamos, construimos e integramos infraestructura de alto
          impacto para el sector público y privado.
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-6 inline-flex items-center gap-2 rounded border border-cyan px-5 py-2 font-display text-[12px] uppercase tracking-[2px] text-cyan transition-colors duration-200 hover:bg-cyan/10"
        >
          Conocer más
          <ChevronDown
            size={16}
            className="transition-transform duration-200"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="mt-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {FICHAS.map((f) => (
                  <div
                    key={f.n}
                    className="rounded-xl border border-ice/[0.07] bg-carbon p-5"
                  >
                    <p className="font-display text-2xl text-amber">{f.n}</p>
                    <h3 className="mt-2 font-display text-base uppercase tracking-wide text-ice">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ice/70">{f.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ice/60">
                Nuestro equipo reúne trayectoria en proyectos de infraestructura esencial en más
                de 15 departamentos del país, como evolución estratégica del equipo técnico de
                SINERCOM S.A.S. — accionista fundador de Alturion.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Nosotros
