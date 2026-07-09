import fotoControlAcceso from '../assets/projects/real/controlaccesoeldorado.webp'
import fotoCctvBolivar from '../assets/projects/real/cctvbolivar.webp'
import fotoSubestacion800 from '../assets/projects/real/subestacion800kva.webp'
import fotoObraCivilLpr from '../assets/projects/real/obracivillpr.webp'
import fotoCctvSolarInvias from '../assets/projects/real/cctvsolarinvias.webp'
import fotoAuceSemaforizacion from '../assets/projects/real/aucesemaforizacion.webp'
import fotoPlantaSolarFlotante from '../assets/projects/real/plantasolarflotante.webp'
import fotoIluminacionDali from '../assets/projects/real/iluminaciondali.webp'
import fotoEscuelas5g from '../assets/projects/real/escuelas5g.webp'

// Los 9 proyectos de referencia — sección 1 del documento de diseño (Brochure Alturion 2026).
// `image`: foto real dedicada por proyecto (match 1:1, sin reutilización entre verticales) —
// src/assets/projects/real/.
export const GALLERY_PROJECTS = [
  {
    title: 'Sistemas de control de acceso · Aeropuerto El Dorado',
    location: 'Bogotá D.C.',
    year: '2012–2013',
    vertical: 'Tecnología',
    image: fotoControlAcceso,
  },
  {
    title: 'Implementación sistema CCTV',
    location: 'Cartagena · B/manga (Bolívar, Sucre, Santander)',
    year: '2015–2018',
    vertical: 'Telecomunicaciones',
    image: fotoCctvBolivar,
  },
  {
    title: 'Subestación eléctrica 800 KVA',
    location: 'Bogotá D.C.',
    year: '2017–2018',
    vertical: 'Energía',
    image: fotoSubestacion800,
  },
  {
    title: 'Obra civil para proyecto de cámaras LPR',
    location: 'Medellín, Antioquia',
    year: '2018',
    vertical: 'Infraestructura',
    image: fotoObraCivilLpr,
  },
  {
    title: 'Implementación sistema CCTV con energía solar',
    location: 'Vías Invías — 16 departamentos',
    year: '2019–2020',
    vertical: 'Telecom. / Energía',
    image: fotoCctvSolarInvias,
  },
  {
    title: 'AUCE, semaforización y cámaras inteligentes',
    location: 'Bogotá D.C.',
    year: '2020–2021',
    vertical: 'Tecnología',
    image: fotoAuceSemaforizacion,
  },
  {
    title: 'Planta solar flotante 1.350 KW',
    location: 'Tierralta, Córdoba',
    year: '2022',
    vertical: 'Energía',
    image: fotoPlantaSolarFlotante,
  },
  {
    title: 'Iluminación y sistema DALI · Túnel de Occidente',
    location: 'Vía Medellín al Mar, Antioquia',
    year: '2023',
    vertical: 'Energía',
    image: fotoIluminacionDali,
  },
  {
    title: 'Escuelas en potencia 5G',
    location: 'Antioquia · Santander · Meta · Caldas',
    year: '2024–2026',
    vertical: 'Telecomunicaciones',
    image: fotoEscuelas5g,
  },
]
