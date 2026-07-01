import placeholderTelecom from '../assets/projects/placeholder-telecom.svg'
import placeholderEnergia from '../assets/projects/placeholder-energia.svg'
import placeholderInfraestructura from '../assets/projects/placeholder-infraestructura.svg'
import placeholderTecnologia from '../assets/projects/placeholder-tecnologia.svg'

// Los 9 proyectos de referencia — sección 1 del documento de diseño (Brochure Alturion 2026).
// `image` usa placeholders tipo blueprint por vertical mientras no existan fotos reales
// (sección 11, "Nota sobre fotos") — se reemplazan por fotografía real proyecto a proyecto.
export const GALLERY_PROJECTS = [
  {
    title: 'Sistemas de control de acceso · Aeropuerto El Dorado',
    location: 'Bogotá D.C.',
    year: '2012–2013',
    vertical: 'Tecnología',
    image: placeholderTecnologia,
  },
  {
    title: 'Implementación sistema CCTV',
    location: 'Cartagena · B/manga (Bolívar, Sucre, Santander)',
    year: '2015–2018',
    vertical: 'Telecomunicaciones',
    image: placeholderTelecom,
  },
  {
    title: 'Subestación eléctrica 800 KVA',
    location: 'Bogotá D.C.',
    year: '2017–2018',
    vertical: 'Energía',
    image: placeholderEnergia,
  },
  {
    title: 'Obra civil para proyecto de cámaras LPR',
    location: 'Medellín, Antioquia',
    year: '2018',
    vertical: 'Infraestructura',
    image: placeholderInfraestructura,
  },
  {
    title: 'Implementación sistema CCTV con energía solar',
    location: 'Vías Invías — 16 departamentos',
    year: '2019–2020',
    vertical: 'Telecom. / Energía',
    image: placeholderTelecom,
  },
  {
    title: 'AUCE, semaforización y cámaras inteligentes',
    location: 'Bogotá D.C.',
    year: '2020–2021',
    vertical: 'Tecnología',
    image: placeholderTecnologia,
  },
  {
    title: 'Planta solar flotante 1.350 KW',
    location: 'Tierralta, Córdoba',
    year: '2022',
    vertical: 'Energía',
    image: placeholderEnergia,
  },
  {
    title: 'Iluminación y sistema DALI · Túnel de Occidente',
    location: 'Vía Medellín al Mar, Antioquia',
    year: '2023',
    vertical: 'Energía',
    image: placeholderEnergia,
  },
  {
    title: 'Escuelas en potencia 5G',
    location: 'Antioquia · Santander · Meta · Caldas',
    year: '2024–2026',
    vertical: 'Telecomunicaciones',
    image: placeholderTelecom,
  },
]
