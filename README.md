# Alturion — Landing Page

Landing page corporativa de Alturion, construida siguiendo al pie de la letra
[`alturion-landing-final.md`](./alturion-landing-final.md) — el documento de diseño definitivo
(fuente de verdad para arquitectura de secciones, copy, paleta, tipografía, animaciones y
comportamiento del mapa interactivo). Este README documenta **cómo quedó implementado** cada
punto del spec, no repite el spec en sí.

## Stack

- **React 18 + Vite** — SPA, sin SSR.
- **Tailwind CSS** — utilidades + paleta "Deep Infrastructure" como CSS custom properties.
- **Framer Motion** — reveal por scroll, animaciones `layout` (mapa), `AnimatePresence`.
- **D3 modular** — `d3-geo` (proyección/paths), `d3-selection` + `d3-transition` (interacción
  imperativa del mapa). Nunca `import * as d3`.
- **Lucide React** — iconografía de toda la UI (excepto el glifo de WhatsApp, ver abajo).
- **Google reCAPTCHA v2** + **Formspree** — formulario de contacto.

## Cómo correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción a dist/
npm run preview  # sirve el build de producción localmente
```

### Variables de entorno

Copiar `.env.example` a `.env` y completar:

| Variable | Para qué | Estado actual |
|---|---|---|
| `VITE_RECAPTCHA_SITE_KEY` | Site key de reCAPTCHA v2 registrada en Google reCAPTCHA Admin Console para el dominio real | Sin configurar — usa la site key de pruebas de Google (siempre "pasa") por defecto |
| `VITE_FORMSPREE_ENDPOINT` | Endpoint `https://formspree.io/f/XXXXXXX` del formulario de contacto | Sin configurar — sin esto el formulario no envía nada |

## Estructura

```
public/
  colombia.geo.json       # GeoJSON oficial (caticoa3/colombia_mapa), minificado, 33 deptos
src/
  assets/
    logo.png               # logo real de Alturion (hexágono ámbar/azul)
    projects/*.svg          # placeholders tipo "blueprint" por vertical (sin fotos reales aún)
  components/                # un componente por bloque de la página, ver detalle abajo
  data/                      # contenido estructurado, editable sin tocar componentes
  App.jsx                    # ensambla las secciones en el orden de la sección 2 del spec
  index.css                  # paleta como CSS custom properties + utilidades globales
```

### `src/data/` — de dónde sale el contenido

Todo el copy con cifras/proyectos vive separado de los componentes, para que agregar o corregir
contenido no implique tocar JSX:

- `stats.js` — las 4 cifras de la barra de stats (sección 6).
- `verticals.js` — las 4 verticales de servicio + banda de Servicios Profesionales (sección 8).
- `pillars.js` — los 3 pilares (sección 9).
- `departmentProjects.js` — proyectos por departamento para el mapa (sección 10.3), más el
  proyecto INVÍAS de cobertura nacional y el mapa de color por vertical (chips).
- `galleryProjects.js` — los 9 proyectos de referencia del brochure para la galería (sección 11).

**Regla de contenido:** todo lo anterior es contenido literal del Brochure Corporativo Alturion
2026, citado en la sección 1 del spec. No se agregaron proyectos, cifras ni departamentos que no
estén ahí.

## Componentes — notas de implementación por bloque

### Hero (`Hero.jsx`, `AnimatedHeadline.jsx`, `HeroPhotoPanel.jsx`, `TechGrid.jsx`)

- **Grid técnico animado** (`TechGrid.jsx`): patrón SVG con parallax de cursor (máx. 8px) vía
  `useMotionValue` + `useSpring` de Framer Motion. Reutilizado en Hero, Nosotros, Verticales y Mapa
  con distintas opacidades.
- **Reveal tipo trazo** (`AnimatedHeadline.jsx`): el headline **no** hace fade-in. Cada línea se
  dibuja calculando `getComputedTextLength()` en runtime sobre `<tspan>` con `stroke-dasharray` /
  `stroke-dashoffset`, animado vía CSS transition (no vía el `pathLength` de Framer Motion, que no
  funciona de forma fiable sobre `<text>` porque no implementa `getTotalLength()`). Una segunda
  pasada de texto con relleno sólido aparece justo después del trazo.
- **Panel HUD** (`HeroPhotoPanel.jsx`): crossfade cada 9s entre 4 imágenes vía `AnimatePresence`,
  primera imagen con `loading="eager"` + `fetchPriority="high"` para LCP. Sin overlay de texto.

### Mapa interactivo (`MapSection.jsx`, `ColombiaMap.jsx`, `ProjectPanel.jsx`, `InviasCard.jsx`)

Pieza más compleja del sitio. Decisiones clave:

- **Geometría vs. animación desacopladas**: `d3-geo` calcula los `path` una sola vez sobre un
  `viewBox` interno fijo (520×620). El "encoger y trasladar" (sección 10.4) es una animación de
  **tamaño del contenedor** (`motion.div layout`, spring `{stiffness:260, damping:28}`), no un
  recálculo de paths — mucho más barato en cada frame.
- **D3 imperativo para color**: `d3-selection` + `d3-transition` mutan `fill`/`stroke` de los
  `<path>` directamente en el DOM (hover, selección). Los valores JSX de React para esos atributos
  se calculan **solo** a partir de `hasProjectsSet` (nunca de `selectedDept`), para que React nunca
  reconcilie esos atributos y pise la animación de D3 en un re-render ajeno.
- **San Andrés excluido del encuadre**: el archipiélago está a ~7° de longitud del continente;
  incluirlo en `fitSize()` encoge la silueta continental hasta hacerla ilegible. Se excluye del
  cálculo de encuadre y del renderizado (no tiene proyectos en el brochure).
- **Accesibilidad**: lista `<ul className="sr-only">` con un `<button>` por departamento con
  proyectos, misma función que clicar el path correspondiente.

Verificación de integridad de datos (`DPTO_CNMBR` del GeoJSON vs. keys de `departmentProjects.js`):

```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('public/colombia.geo.json')).features.map(f=>f.properties.DPTO_CNMBR))"
```

### Galería (`Gallery.jsx`)

Carrusel 100% manual: `scroll-snap-type: x mandatory` nativo (touch/trackpad sin JS) + drag-to-scroll
con mouse vía Pointer Events + indicador de puntos (clicables). **Sin `setInterval`, sin autoplay.**

### Formulario y WhatsApp (`Contact.jsx`, `Recaptcha.jsx`, `WhatsAppButton.jsx`)

- `Recaptcha.jsx` carga `recaptcha/api.js` de forma perezosa y renderiza el widget en modo
  `explicit`; expone un método `reset()` vía `useImperativeHandle` que `Contact.jsx` llama tras un
  envío exitoso.
- El envío es un `fetch` con `FormData` a `VITE_FORMSPREE_ENDPOINT`. La verificación real del token
  de reCAPTCHA ocurre server-side en Formspree (hay que activar la integración de reCAPTCHA en su
  dashboard) — el chequeo en `Contact.jsx` de que exista `recaptchaToken` es solo un gate de UX en
  cliente, no la validación de seguridad real.
- `WhatsAppButton.jsx` dibuja el glifo de WhatsApp a mano (`<svg>` con el path del logo) porque
  Lucide no incluye íconos de marca — es la única excepción a "solo Lucide" en todo el proyecto, y
  es deliberada (el botón necesita ser reconocible al instante).

## Assets pendientes de reemplazo

| Qué | Dónde | Estado |
|---|---|---|
| Fotos reales de proyectos | `src/assets/projects/*.svg` (Hero + Galería) | Placeholders tipo blueprint por vertical, según indica la sección 11 del spec mientras no haya fotos |
| Site key de reCAPTCHA v2 real | `.env` → `VITE_RECAPTCHA_SITE_KEY` | Usa la key de pruebas de Google |
| Endpoint de Formspree | `.env` → `VITE_FORMSPREE_ENDPOINT` | Sin configurar |
| `og-image.jpg` | Referenciado en `index.html` (Open Graph) | No existe el archivo aún |

## Checklist de lanzamiento

Ver sección 17 de `alturion-landing-final.md`. Auditado contra la sección 18 ("Lo que NO hacer") el
2026-07-01 — sin violaciones (sin autoplay fuera del crossfade permitido del hero, sin
`filter: blur()` en fondos grandes, mapa 100% D3+GeoJSON, D3 solo modular, máx. 2 CTAs por sección,
sin overlays de texto en fotos del hero, paleta cerrada a los colores de la sección 3).
