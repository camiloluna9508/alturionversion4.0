import fotoControlAcceso from '../assets/projects/real/controlaccesoeldorado.webp'
import fotoCctvBolivar from '../assets/projects/real/cctvbolivar.webp'
import fotoSubestacion800 from '../assets/projects/real/subestacion800kva.webp'
import fotoObraCivilLpr from '../assets/projects/real/obracivillpr.webp'
import fotoCctvSolarInvias from '../assets/projects/real/cctvsolarinvias.webp'
import fotoAuceSemaforizacion from '../assets/projects/real/aucesemaforizacion.webp'
import fotoPlantaSolarFlotante from '../assets/projects/real/plantasolarflotante.webp'
import fotoIluminacionDali from '../assets/projects/real/iluminaciondali.webp'
import fotoEscuelas5g from '../assets/projects/real/escuelas5g.webp'

// Proyectos por departamento — sección 10.3 del documento de diseño.
// Las keys deben coincidir EXACTAMENTE con la propiedad DPTO_CNMBR del GeoJSON
// (public/colombia.geo.json), tildes y comas incluidas. Fuente: Brochure Alturion 2026.
//
// `image`: foto real dedicada por proyecto (match 1:1, mismo criterio y mismos archivos que
// `galleryProjects.js` — un proyecto que aparece en varios departamentos reutiliza su propia
// foto, nunca la de otro proyecto).
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
      image: fotoControlAcceso,
    },
    {
      title: 'Subestación eléctrica 800 KVA',
      year: '2017–2018',
      vertical: 'Energía',
      metrics: '+50 m² cuarto técnico · +220 m² andén · 13 cajas',
      image: fotoSubestacion800,
    },
    {
      title: 'AUCE, semaforización y cámaras inteligentes',
      year: '2020–2021',
      vertical: 'Tecnología',
      metrics: 'Sistema integrado de movilidad urbana',
      image: fotoAuceSemaforizacion,
    },
  ],
  ANTIOQUIA: [
    {
      title: 'Obra civil para proyecto de cámaras LPR',
      year: '2018',
      vertical: 'Infraestructura',
      metrics: 'Obra civil para sistema de videovigilancia',
      image: fotoObraCivilLpr,
    },
    {
      title: 'Iluminación y sistema DALI · Túnel de Occidente',
      year: '2023',
      vertical: 'Energía',
      metrics: 'Sistema de iluminación inteligente',
      image: fotoIluminacionDali,
    },
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoEscuelas5g,
    },
  ],
  CÓRDOBA: [
    {
      title: 'Planta solar flotante 1.350 KW',
      year: '2022',
      vertical: 'Energía',
      metrics: '+2.800 paneles · +13.000 flotadores · 9 inversores',
      image: fotoPlantaSolarFlotante,
    },
  ],
  BOLÍVAR: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoCctvBolivar,
    },
  ],
  SUCRE: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoCctvBolivar,
    },
  ],
  SANTANDER: [
    {
      title: 'Implementación sistema CCTV',
      year: '2015–2018',
      vertical: 'Telecomunicaciones',
      metrics: '+830 postes · +239 Km F.O · +510 cámaras · +550 SPT',
      image: fotoCctvBolivar,
    },
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoEscuelas5g,
    },
  ],
  META: [
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoEscuelas5g,
    },
  ],
  CALDAS: [
    {
      title: 'Escuelas en potencia 5G',
      year: '2024–2026',
      vertical: 'Telecomunicaciones',
      metrics: '27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios',
      image: fotoEscuelas5g,
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
  image: fotoCctvSolarInvias,
}

// Chip de categoría por vertical — sección 10.6 (también reutilizado en la galería, sección 11).
export const VERTICAL_CHIP_CLASS = {
  Energía: 'bg-amber/15 text-amber border-amber/30',
  Telecomunicaciones: 'bg-cyan/15 text-cyan border-cyan/30',
  Tecnología: 'bg-cyan/15 text-cyan border-cyan/30',
  Infraestructura: 'bg-steel/15 text-steel border-steel/30',
  'Telecom. / Energía': 'bg-amber/15 text-amber border-amber/30',
}
