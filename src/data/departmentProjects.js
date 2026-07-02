import fotoTelecomunicaciones from '../assets/projects/real/telecomunicaciones.webp'
import fotoPanelesSolares from '../assets/projects/real/panelessolares.webp'
import fotoSubestacion from '../assets/projects/real/subestacion.webp'
import fotoObraCivil from '../assets/projects/real/obracivil.webp'
import placeholderTecnologia from '../assets/projects/placeholder-tecnologia.svg'

// Proyectos por departamento — sección 10.3 del documento de diseño.
// Las keys deben coincidir EXACTAMENTE con la propiedad DPTO_CNMBR del GeoJSON
// (public/colombia.geo.json), tildes y comas incluidas. Fuente: Brochure Alturion 2026.
//
// `image`: foto real cuando existe match exacto con el proyecto (subestación, planta solar,
// obra civil LPR); para el resto se reutiliza la foto real más representativa de la misma
// vertical (mismo criterio que ya usa `galleryProjects.js` con los placeholders SVG). Tecnología
// no tiene foto real todavía — sigue con el placeholder tipo blueprint.
//
// Cómo agregar un departamento o proyecto nuevo (sección 10.7):
// 1. Verificar el DPTO_CNMBR exacto: geoData.features.map(f => f.properties.DPTO_CNMBR)
// 2. Agregar la entrada aquí con esa key exacta.
// 3. No agregar proyectos, departamentos ni cifras que no estén en el brochure.

export const DEPARTMENT_PROJECTS = {
  'BOGOTÁ, D.C.': [
    {
      title: 'Sistemas de control de acceso · Aeropuerto El Dorado',
      year: '2012–2013',
      vertical: 'Tecnología',
      metrics: '+1.100 puntos · +5 Km F.O · +220 controles',
      image: placeholderTecnologia,
    },
    {
      title: 'Subestación eléctrica 800 KVA',
      year: '2017–2018',
      vertical: 'Energía',
      metrics: '+50 m² cuarto técnico · +220 m² andén · 13 cajas',
      image: fotoSubestacion,
    },
    {
      title: 'AUCE, semaforización y cámaras inteligentes',
      year: '2020–2021',
      vertical: 'Tecnología',
      metrics: 'Sistema integrado de movilidad urbana',
      image: placeholderTecnologia,
    },
  ],
  ANTIOQUIA: [
    {
      title: 'Obra civil para proyecto de cámaras LPR',
      year: '2018',
      vertical: 'Infraestructura',
      metrics: 'Obra civil para sistema de videovigilancia',
      image: fotoObraCivil,
    },
    {
      title: 'Iluminación y sistema DALI · Túnel de Occidente',
      year: '2023',
      vertical: 'Energía',
      metrics: 'Sistema de iluminación inteligente',
      image: fotoSubestacion,
    },
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoTelecomunicaciones,
    },
  ],
  CÓRDOBA: [
    {
      title: 'Planta solar flotante 1.350 KW',
      year: '2022',
      vertical: 'Energía',
      metrics: '+2.800 paneles · +13.000 flotadores · 9 inversores',
      image: fotoPanelesSolares,
    },
  ],
  BOLÍVAR: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoTelecomunicaciones,
    },
  ],
  SUCRE: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoTelecomunicaciones,
    },
  ],
  SANTANDER: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoTelecomunicaciones,
    },
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoTelecomunicaciones,
    },
  ],
  META: [
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoTelecomunicaciones,
    },
  ],
  CALDAS: [
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoTelecomunicaciones,
    },
  ],
}

// Proyecto de cobertura nacional — no se mapea a departamentos individuales (sección 10.2).
export const INVIAS_PROJECT = {
  title: 'Implementación sistema CCTV con energía solar',
  location: 'Vías Invías — 16 departamentos',
  year: '2019–2020',
  vertical: 'Telecom. / Energía',
  metrics: 'Cobertura nacional (16 departamentos, sin desglose específico)',
  image: fotoTelecomunicaciones,
}

// Chip de categoría por vertical — sección 10.6 (también reutilizado en la galería, sección 11).
export const VERTICAL_CHIP_CLASS = {
  Energía: 'bg-amber/15 text-amber border-amber/30',
  Telecomunicaciones: 'bg-cyan/15 text-cyan border-cyan/30',
  Tecnología: 'bg-cyan/15 text-cyan border-cyan/30',
  Infraestructura: 'bg-steel/15 text-steel border-steel/30',
  'Telecom. / Energía': 'bg-amber/15 text-amber border-amber/30',
}
