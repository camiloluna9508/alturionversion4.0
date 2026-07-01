import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_PROJECTS } from '../data/galleryProjects'
import { VERTICAL_CHIP_CLASS } from '../data/departmentProjects'

const BORDER_HOVER_CLASS = {
  Energía: 'hover:border-amber/50',
  Telecomunicaciones: 'hover:border-cyan/50',
  Tecnología: 'hover:border-cyan/50',
  Infraestructura: 'hover:border-steel/50',
  'Telecom. / Energía': 'hover:border-amber/50',
}

/**
 * Galería de proyectos — sección 11. Carrusel horizontal manual: scroll-snap nativo,
 * swipe/drag + indicador de puntos. Sin autoplay, sin métricas en las tarjetas.
 */
function Gallery() {
  const scrollRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 })

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const { scrollLeft } = el
        let closest = 0
        let closestDist = Infinity
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const dist = Math.abs(card.offsetLeft - el.offsetLeft - scrollLeft)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setActiveIndex(closest)
        ticking = false
      })
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToIndex = (i) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  // Drag-to-scroll con mouse (el touch/trackpad ya funciona nativo vía overflow-x + scroll-snap).
  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    const el = scrollRef.current
    dragState.current = { dragging: true, startX: e.clientX, startScroll: el.scrollLeft }
    el.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return
    const el = scrollRef.current
    el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX)
  }
  const onPointerUp = (e) => {
    dragState.current.dragging = false
    scrollRef.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <section id="galeria" className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-display text-[11px] font-bold uppercase tracking-[3px] text-cyan">
          Evidencia
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-ice sm:text-4xl">
          Proyectos que hablan por sí solos
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-ice/60">
          Una muestra visual del trabajo ejecutado — del diseño a la obra terminada.
        </p>
      </div>

      <div className="relative mt-10">
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto px-6 pb-4 active:cursor-grabbing"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          {GALLERY_PROJECTS.map((project, i) => (
            <article
              key={project.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`w-[280px] shrink-0 overflow-hidden rounded-xl border border-ice/[0.07] bg-carbon transition-all duration-200 hover:-translate-y-1 sm:w-[340px] ${
                BORDER_HOVER_CLASS[project.vertical] ?? ''
              }`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={project.image}
                alt={`${project.title} — ${project.location}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-4">
                <span
                  className={`inline-block rounded border px-2 py-0.5 text-[11px] uppercase tracking-wide ${
                    VERTICAL_CHIP_CLASS[project.vertical] ?? 'border-steel/30 bg-steel/15 text-steel'
                  }`}
                >
                  {project.vertical}
                </span>
                <h3 className="mt-2 font-display text-base uppercase tracking-wide text-ice">
                  {project.title}
                </h3>
                <p className="mt-1 text-[13px] text-ice/60">
                  {project.location} · {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            aria-label="Proyecto anterior"
            className="hidden text-steel transition-colors duration-200 hover:text-cyan sm:block"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {GALLERY_PROJECTS.map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir al proyecto ${i + 1}: ${project.title}`}
                aria-current={activeIndex === i}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeIndex === i ? 'w-6 bg-cyan' : 'w-2 bg-ice/20'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(GALLERY_PROJECTS.length - 1, activeIndex + 1))}
            aria-label="Proyecto siguiente"
            className="hidden text-steel transition-colors duration-200 hover:text-cyan sm:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
