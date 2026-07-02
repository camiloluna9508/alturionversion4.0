import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import fotoTelecomunicaciones from '../assets/projects/real/telecomunicaciones.webp'
import fotoPanelesSolares from '../assets/projects/real/panelessolares.webp'
import fotoSubestacion from '../assets/projects/real/subestacion.webp'
import fotoObraCivil from '../assets/projects/real/obracivil.webp'

const PHOTOS = [
  { src: fotoTelecomunicaciones, alt: 'Obra de telecomunicaciones ejecutada por Alturion' },
  { src: fotoPanelesSolares, alt: 'Planta solar ejecutada por Alturion' },
  { src: fotoSubestacion, alt: 'Subestación eléctrica ejecutada por Alturion' },
  { src: fotoObraCivil, alt: 'Obra civil de infraestructura ejecutada por Alturion' },
]

const CROSSFADE_MS = 9000

/**
 * Panel tipo HUD — zona foto del hero (sección 5). Fotos en crossfade, opacidad
 * completa, sin overlay de texto. Primera imagen precargada como LCP.
 */
function HeroPhotoPanel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length)
    }, CROSSFADE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-[280px] lg:h-full lg:min-h-[520px] w-full">
      {/* Esquinas tipo visor técnico (bracket corners) */}
      <div className="pointer-events-none absolute -inset-px z-10">
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos) => (
          <span
            key={pos}
            className={`absolute h-4 w-4 border-cyan/70 ${pos} ${
              pos.includes('top') ? 'border-t-2' : 'border-b-2'
            } ${pos.includes('left') ? 'border-l-2' : 'border-r-2'}`}
          />
        ))}
      </div>

      <div className="relative h-full w-full overflow-hidden rounded-lg border border-cyan/30 bg-carbon">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={PHOTOS[index].src}
            alt={PHOTOS[index].alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroPhotoPanel
