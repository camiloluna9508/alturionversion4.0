import { useEffect, useMemo, useRef } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import 'd3-transition'

// Viewbox interno fijo — el "encoger" del mapa (sección 10.4) es una animación de
// tamaño del contenedor (Framer Motion layout), no un recálculo de la geometría D3.
const VIEW_W = 520
const VIEW_H = 620

// Sistema de colores — sección 10.5 (preserva la silueta completa de Colombia).
const FILL_BASE = 'rgb(var(--color-map-base-rgb))'
const STROKE_BASE = 'rgba(240,246,255,0.12)'
const FILL_PROJECTS = 'rgba(245,158,11,0.55)'
const FILL_PROJECTS_HOVER = 'rgba(245,158,11,0.7)'
const STROKE_PROJECTS = '#F59E0B'
const FILL_SELECTED = 'rgba(0,212,255,0.65)'
const STROKE_SELECTED = '#00D4FF'

function ColombiaMap({ geoData, hasProjectsSet, selectedDept, onSelectDept }) {
  const svgRef = useRef(null)
  const prevSelectedRef = useRef(null)

  // El archipiélago de San Andrés queda a ~7° de longitud del continente: incluirlo
  // en fitSize() encogería la silueta continental hasta hacerla ilegible. Se excluye
  // solo del cálculo de encuadre y del renderizado — no tiene proyectos en el brochure.
  const mainlandFeatures = useMemo(
    () =>
      geoData?.features.filter((f) => !f.properties.DPTO_CNMBR.includes('ANDRÉS')) ?? [],
    [geoData],
  )

  const pathGenerator = useMemo(() => {
    if (mainlandFeatures.length === 0) return null
    const projection = geoMercator().fitSize(
      [VIEW_W, VIEW_H],
      { type: 'FeatureCollection', features: mainlandFeatures },
    )
    return geoPath(projection)
  }, [mainlandFeatures])

  // Color de reposo — animado vía d3-transition, nunca vuelto a fijar por JSX
  // (así React nunca compite con las mutaciones imperativas de D3 sobre fill/stroke).
  const restingColor = (name) =>
    hasProjectsSet.has(name)
      ? { fill: FILL_PROJECTS, stroke: STROKE_PROJECTS, strokeWidth: 1.5 }
      : { fill: FILL_BASE, stroke: STROKE_BASE, strokeWidth: 1 }

  // Transición de selección: revierte el departamento previo y resalta el nuevo.
  useEffect(() => {
    if (!svgRef.current) return
    const svgSel = select(svgRef.current)
    const prev = prevSelectedRef.current

    if (prev && prev !== selectedDept) {
      const c = restingColor(prev)
      svgSel
        .selectAll('path.dept')
        .filter(function filterPrev() {
          return this.dataset.name === prev
        })
        .transition()
        .duration(200)
        .attr('fill', c.fill)
        .attr('stroke', c.stroke)
        .attr('stroke-width', c.strokeWidth)
    }

    if (selectedDept) {
      svgSel
        .selectAll('path.dept')
        .filter(function filterSelected() {
          return this.dataset.name === selectedDept
        })
        .transition()
        .duration(200)
        .attr('fill', FILL_SELECTED)
        .attr('stroke', STROKE_SELECTED)
        .attr('stroke-width', 1.5)
    }

    prevSelectedRef.current = selectedDept
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDept, hasProjectsSet])

  // Interacción hover/click — vinculada con d3-selection, no con eventos sintéticos de React.
  useEffect(() => {
    if (!svgRef.current) return
    const selection = select(svgRef.current).selectAll('path.dept')

    selection
      .on('mouseenter', function onEnter() {
        const name = this.dataset.name
        if (name === selectedDept || !hasProjectsSet.has(name)) return
        select(this).transition().duration(200).attr('fill', FILL_PROJECTS_HOVER)
      })
      .on('mouseleave', function onLeave() {
        const name = this.dataset.name
        if (name === selectedDept || !hasProjectsSet.has(name)) return
        select(this).transition().duration(200).attr('fill', FILL_PROJECTS)
      })
      .on('click', function onClick() {
        onSelectDept(this.dataset.name)
      })

    return () => {
      selection.on('mouseenter', null).on('mouseleave', null).on('click', null)
    }
  }, [selectedDept, hasProjectsSet, onSelectDept])

  if (!pathGenerator) {
    return (
      <div className="flex aspect-[520/620] w-full items-center justify-center text-sm text-steel">
        Cargando mapa…
      </div>
    )
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Mapa de Colombia con los departamentos donde Alturion ha ejecutado proyectos. Los departamentos en color ámbar tienen proyectos ejecutados; el seleccionado se resalta en cian."
    >
      {mainlandFeatures.map((feature) => {
        const name = feature.properties.DPTO_CNMBR
        const initial = restingColor(name)
        const clickable = hasProjectsSet.has(name)
        return (
          <path
            key={name}
            className={`dept ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
            data-name={name}
            d={pathGenerator(feature)}
            fill={initial.fill}
            stroke={initial.stroke}
            strokeWidth={initial.strokeWidth}
            aria-hidden="true"
          />
        )
      })}
    </svg>
  )
}

export default ColombiaMap
