import { useEffect, useRef, useState } from 'react'

/**
 * Reveal tipo "construcción" (motor visual ②, sección 3): las líneas del headline
 * se dibujan con stroke animation SVG, como trazo de lápiz técnico — no fade-in.
 *
 * `lines` es un array de líneas; cada línea es un array de tramos { text, accent? }.
 */
function AnimatedHeadline({ lines, className = '' }) {
  const svgRef = useRef(null)
  const textRefs = useRef([])
  const [ready, setReady] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (!el) return
      const length = el.getComputedTextLength()
      el.style.strokeDasharray = `${length}`
      el.style.strokeDashoffset = `${length}`
    })
    setReady(true)
    const start = requestAnimationFrame(() => setRevealed(true))
    return () => cancelAnimationFrame(start)
  }, [])

  let flatIndex = -1

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 640 260"
      className={`w-full overflow-visible ${className}`}
      role="img"
      aria-label={lines.map((line) => line.map((s) => s.text).join(' ')).join(' ')}
    >
      {lines.map((line, lineIdx) => (
        <text
          key={lineIdx}
          y={70 + lineIdx * 78}
          x="0"
          className="font-display uppercase"
          style={{ fontSize: 52, fontWeight: 700 }}
        >
          {line.map((segment) => {
            flatIndex += 1
            const idx = flatIndex
            const color = segment.accent ? 'var(--color-cyan)' : 'var(--color-ice)'
            return (
              <tspan
                key={idx}
                ref={(el) => (textRefs.current[idx] = el)}
                fill="none"
                stroke={color}
                strokeWidth="1"
                style={{
                  transition: ready
                    ? `stroke-dashoffset 0.9s cubic-bezier(0.4,0,0.2,1) ${lineIdx * 0.35}s`
                    : 'none',
                  strokeDashoffset: revealed ? 0 : undefined,
                }}
              >
                {segment.text}
              </tspan>
            )
          })}
        </text>
      ))}
      {/* Segunda pasada: relleno sólido que aparece justo después del trazo de cada línea */}
      {lines.map((line, lineIdx) => (
        <text
          key={`fill-${lineIdx}`}
          y={70 + lineIdx * 78}
          x="0"
          className="font-display uppercase"
          style={{
            fontSize: 52,
            fontWeight: 700,
            opacity: revealed ? 1 : 0,
            transition: `opacity 0.5s ease ${lineIdx * 0.35 + 0.6}s`,
          }}
        >
          {line.map((segment, i) => (
            <tspan key={i} fill={segment.accent ? 'var(--color-cyan)' : 'var(--color-ice)'}>
              {segment.text}
            </tspan>
          ))}
        </text>
      ))}
    </svg>
  )
}

export default AnimatedHeadline
