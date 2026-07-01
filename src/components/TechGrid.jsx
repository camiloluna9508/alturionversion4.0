import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Grid técnico animado tipo blueprint — motor visual ① (sección 3 del documento).
 * Reacciona al cursor con un parallax máximo de 8px. Sin filter: blur().
 */
function TechGrid({ accentLines = false, className = '' }) {
  const containerRef = useRef(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const springX = useSpring(mvX, { stiffness: 60, damping: 20, mass: 0.5 })
  const springY = useSpring(mvY, { stiffness: 60, damping: 20, mass: 0.5 })
  const x = useTransform(springX, [-1, 1], [-8, 8])
  const y = useTransform(springY, [-1, 1], [-8, 8])

  const handlePointerMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    mvX.set(relX * 2 - 1)
    mvY.set(relY * 2 - 1)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.svg
        style={{ x, y }}
        className="absolute inset-[-8px] h-[calc(100%+16px)] w-[calc(100%+16px)]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(240,246,255,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        {accentLines && (
          <g stroke="rgba(240,246,255,0.04)" strokeWidth="1" className="hidden lg:block">
            <line x1="25%" y1="0" x2="25%" y2="100%" />
            <line x1="50%" y1="0" x2="50%" y2="100%" />
            <line x1="75%" y1="0" x2="75%" y2="100%" />
          </g>
        )}
      </motion.svg>
    </div>
  )
}

export default TechGrid
