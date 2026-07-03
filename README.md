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

## Deploy — GitHub Pages

El sitio se publica automáticamente en GitHub Pages en cada push a `main`, vía
`.github/workflows/deploy.yml` (build con `npm ci && npm run build`, deploy del contenido de
`dist/` con las actions oficiales `upload-pages-artifact` / `deploy-pages`). URL pública:

```
https://camiloluna9508.github.io/alturionversion4.0/
```

**Requiere un paso manual una sola vez:** en GitHub → repo → *Settings → Pages → Build and
deployment → Source*, seleccionar **GitHub Actions** (en vez de "Deploy from a branch"). Sin esto
el workflow corre pero no hay dónde publicar el resultado.

`vite.config.js` tiene `base: '/alturionversion4.0/'` porque el sitio vive en un subpath de
`github.io`, no en la raíz del dominio — coincide con el nombre del repo. Si en algún momento se
migra a dominio propio (`alturion.com.co`) o a Netlify/Vercel, hay que volver a poner `base: '/'`.

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
    projects/*.svg          # placeholders tipo "blueprint" por vertical (galería, sin fotos reales aún)
    projects/real/*.webp    # fotos reales de obra usadas en el panel del Hero
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
- **Panel HUD / fondo del Hero** (`HeroPhotoPanel.jsx`): crossfade cada 9s entre 4 imágenes vía
  `AnimatePresence`, primera imagen con `loading="eager"` + `fetchPriority="high"` para LCP. Usa 4
  fotos reales de obra en `src/assets/projects/real/` (telecomunicaciones, energía solar,
  subestación, obra civil), comprimidas a WebP calidad 72 / máx. 1600px de ancho (~200–270 KB c/u,
  bajaron de ~1.4 MB originales). Cada foto tiene un **zoom Ken Burns** sutil (escala 1 → 1.06 en
  9s) vía `@keyframes ken-burns` en `index.css` — deliberadamente **CSS puro, no Framer Motion**:
  `AnimatePresence initial={false}` (para no retrasar el LCP con un fade-in) suprime la animación
  `initial`→`animate` en el primer montaje, así que si el zoom viviera en el `animate` de Framer la
  primera foto nunca lo mostraría. Además del crossfade, tiene una viñeta radial
  (`rgba(2,11,24,0.55)` en los bordes) para fundirse con el navy. El componente acepta la prop
  `background` (`<HeroPhotoPanel background />`) que quita el marco HUD (bracket corners, borde,
  esquinas redondeadas) para usarse como fondo a sangre completa en vez de panel lateral.
- **Hero full-bleed con foto de fondo** (`Hero.jsx`): la foto ocupa **todo** el hero como fondo
  (`<HeroPhotoPanel background />` en `absolute inset-0 z-0`), con un scrim en degradado
  (`linear-gradient` horizontal, oscuro a la izquierda → transparente a la derecha, más un segundo
  scrim vertical que protege la fila de diferenciadores) para que el texto se mantenga legible sobre
  la foto. **Esto es una desviación deliberada de las secciones 5 y 18 del spec**, que documentan por
  qué se descartó el hero full-bleed originalmente (conflicto entre legibilidad del texto y opacidad
  de la foto) y prohíben explícitamente overlay de texto sobre fotos del hero. Se adoptó a pedido
  explícito del cliente tras comparar ambas versiones. **Limitación conocida:** el scrim está
  calibrado para desktop; en mobile (viewport angosto) el mismo degradado horizontal no alcanza a
  oscurecer todo el ancho de texto y el contraste baja — pendiente de un tratamiento de scrim
  específico para mobile (ver sección de deuda técnica más abajo).

### Verticales de servicio (`Verticals.jsx`)

- **Panel de detalle inline en el grid, no al final de la sección**: al seleccionar una tarjeta
  (sección 8, "Cuatro verticales / un mismo sistema"), el panel "— detalle de capacidades" se
  renderiza como un ítem más del propio grid (`col-span-full` justo después de la tarjeta activa,
  vía `Fragment` por cada vertical), en vez de un único bloque fijo después de las 4 tarjetas.
  **Corrección 2026-07-03:** con el bloque fijo al final, en mobile (`grid-cols-1`, las 4 tarjetas
  apiladas) tocar la primera o segunda tarjeta abría el panel debajo de la cuarta tarjeta, fuera
  del viewport y sin ningún indicio de que había aparecido contenido nuevo — el usuario tenía que
  adivinar que debía hacer scroll. Con `col-span-full` dentro del grid, en mobile el panel queda
  pegado a la tarjeta tocada; en desktop (`sm:grid-cols-2`) sigue expandiéndose a todo el ancho,
  empujando el resto de las tarjetas hacia abajo, igual que antes.

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
- **Fotos por proyecto** (`ProjectPanel.jsx`, `InviasCard.jsx`): cada proyecto en
  `departmentProjects.js` tiene un campo `image`. Donde hay match exacto con una de las 4 fotos
  reales (Subestación 800 KVA en Bogotá, Planta solar en Córdoba, Obra civil LPR en Antioquia) se
  usa esa foto puntual; el resto reutiliza la foto real más representativa de su vertical (mismo
  criterio que ya usaba `galleryProjects.js` con los placeholders SVG — reutilización consistente,
  no cifras/proyectos inventados). Tecnología no tiene foto real todavía y sigue con el placeholder
  blueprint. La foto vive como fondo absoluto de la tarjeta (`position: absolute; inset: 0`) con un
  degradado `linear-gradient(to bottom, ...)` que la funde con el texto — nunca una foto suelta
  arriba de la tarjeta, para mantener el bloque compacto.
- **Grilla de proyectos responsive**: `ProjectPanel.jsx` usa `grid-cols-1 sm:grid-cols-2`. Cuando un
  departamento tiene un solo proyecto, esa tarjeta recibe `sm:col-span-2` para ocupar todo el ancho
  en vez de dejar la mitad del panel vacía.
- **Layout mobile del mapa seleccionado — desviación del spec**: la sección 10.4 del spec pide
  mini-mapa arriba y panel de proyectos debajo en mobile (apilado vertical). A pedido explícito del
  cliente, `MapSection.jsx` usa el mismo layout en fila (mini-mapa + panel lado a lado) en **todos**
  los breakpoints, no solo desde `lg`. El mini-mapa se achica a 100px en mobile (`sm:140px`,
  `lg:220px`) para dejarle aire al panel.

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
| Fotos reales de proyectos — Hero | `src/assets/projects/real/*.webp` | ✅ Reemplazadas — 4 fotos reales en crossfade |
| Fotos reales de proyectos — Galería | `src/assets/projects/*.svg` (Galería) | Pendiente — sigue con placeholders tipo blueprint por vertical, según indica la sección 11 del spec |
| Site key de reCAPTCHA v2 real | `.env` → `VITE_RECAPTCHA_SITE_KEY` | Usa la key de pruebas de Google |
| Endpoint de Formspree | `.env` → `VITE_FORMSPREE_ENDPOINT` | Sin configurar |
| `og-image.jpg` | Referenciado en `index.html` (Open Graph) | No existe el archivo aún |

## Checklist de lanzamiento

Ver sección 17 de `alturion-landing-final.md`. Auditado contra la sección 18 ("Lo que NO hacer") el
2026-07-01 — sin violaciones en ese momento (sin autoplay fuera del crossfade permitido del hero,
sin `filter: blur()` en fondos grandes, mapa 100% D3+GeoJSON, D3 solo modular, máx. 2 CTAs por
sección, paleta cerrada a los colores de la sección 3).

**Actualización 2026-07-02 — desviaciones deliberadas del spec, a pedido del cliente:**
- ❗ El Hero ahora **sí** tiene overlay de texto sobre foto (sección 18 lo prohíbe explícitamente) —
  ver "Hero full-bleed con foto de fondo" arriba. Cambio consciente tras comparar ambas versiones
  con fotos reales; queda documentado como excepción, no como bug.
- ❗ El layout mobile del mapa seleccionado ya no sigue el patrón apilado de la sección 10.4 — ver
  "Layout mobile del mapa seleccionado" arriba.

**Deuda técnica pendiente:** el scrim del Hero full-bleed no tiene tratamiento específico para
mobile todavía (ver limitación conocida arriba) — el contraste del texto sobre la foto baja en
viewports angostos.
