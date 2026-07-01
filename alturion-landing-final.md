# Alturion — Landing Page — Documento de Diseño Definitivo
> Versión 4.0 · Síntesis final · Julio 2026
> Documento único de referencia para diseñador y desarrollador front-end
> Fuente de contenido: Brochure Corporativo Alturion 2026 (no inventar cifras, proyectos ni departamentos)

---

## 0. Qué es este documento y de dónde sale

Este es el diseño definitivo, construido a partir de tres propuestas previas y de decisiones tomadas junto al equipo de diseño después de ver los tres resultados en contexto real (jefe de diseño + cliente):

- **`alturion_landing_design.md`** (diseño 1) → aporta el **motor visual**: paleta "Deep Infrastructure", grid técnico animado, reveal tipo trazo, ensamblaje por scroll. Es el look que el jefe de diseño aprobó.
- **`alturion-landing.md`** (diseño 2) → aporta la **arquitectura de información**: orden de secciones, copy, tipografía Barlow Semi Condensed, formulario, footer, SEO. Es la estructura que el cliente aprobó.
- **`alturion-landing-master.md`** (diseño 3) → intento previo de fusión. No funcionó porque recoloreó la piel del diseño 2 sin adoptar el motor de movimiento del diseño 1 — el resultado se sintió como "diseño 2 con otros colores", no como una fusión real.

**La corrección clave de este documento v4:** el motor visual (grid animado, glow, reveal tipo trazo, ensamblaje por scroll) se aplica de forma real y consistente en cada sección — no es un cambio de paleta, es un cambio de comportamiento. Además, se resuelven aquí tres decisiones nuevas que no existían en ninguna versión anterior: el hero con panel de fotos reales sin overlay de texto, el mapa con mecánica de "encoger y trasladar", y el contraste amber/azul en el mapa ajustado para no perder la silueta de Colombia.

### 0.1 Decisiones de fusión (resumen ejecutivo)

| Tema | Decisión | Origen |
|---|---|---|
| Tipografía | Barlow Semi Condensed (títulos) + Inter (cuerpo) | Diseño 2 |
| Paleta | Deep Infrastructure: navy + cyan + amber | Diseño 1 |
| Motor visual | Grid isométrico animado + reveal tipo trazo + ensamblaje por scroll | Diseño 1 |
| Estructura de secciones | Orden y copy del diseño 2, con 2 secciones nuevas del diseño 3 | Diseño 2 + ajuste |
| Nav | Sin ítem "Mapa" (redundante con "Proyectos") | Ajuste cliente |
| Hero | Texto sólido a la izquierda + panel de fotos reales tipo HUD a la derecha, sin overlay de texto sobre las fotos | Nuevo — este documento |
| Mapa interactivo | Base técnica real de `mapa-interactivo.md` (D3+GeoJSON) + nueva mecánica: al seleccionar depto, el mapa se encoge y se traslada, cediendo protagonismo al panel | Nuevo — este documento |
| Color del mapa | Azul base visible para TODOS los departamentos (silueta de Colombia siempre legible) + amber sólido para deptos con proyectos + cyan para selección | Nuevo — este documento |
| Galería de proyectos | Sección nueva — fotos reales protagónicas, sin overlay ni métricas, carrusel manual | Diseño 3 + ajuste |
| Nosotros | Sección nueva — intro corta + acordeón "Conocer más" | Diseño 3 |
| Formulario | Estructura del diseño 2 + campo reCAPTCHA v2 anti-spam | Diseño 2 + ajuste |

---

## 1. Identidad de marca (datos verificados — Brochure 2026)

- **Nombre legal:** Alturion
- **Tagline:** Ingeniería que conecta
- **Sede:** Cra. 10 # 79-33, Ibagué, Colombia
- **Correo:** contacto@alturion.com.co
- **Teléfono / WhatsApp:** 311 552 6686
- **Web:** www.alturion.com.co
- **4 verticales:** Tecnología · Telecomunicaciones · Energía · Infraestructura
- **Origen:** evolución estratégica del equipo técnico y directivo de **SINERCOM S.A.S.** (17+ años de operación), accionista fundador de Alturion.

**Manifiesto de marca:**
> *"La excavación con el dato. La energía con la conectividad. La obra física con la inteligencia digital."*

**Síntesis de identidad:** Alturion debe verse como una **sala de control de ingeniería de misión crítica**. El sitio transmite precisión, escala y confianza técnica — no es un folleto corporativo genérico, es un plano de ingeniería que cobra vida mientras el usuario navega.

### Cifras clave (barra de stats)

| Cifra | Descripción |
|---|---|
| +17 años | De experiencia acumulada del equipo |
| $18.000 M | En proyectos desarrollados |
| +20 departamentos | Con cobertura operativa en Colombia |
| +40 proyectos | De referencia ejecutados |

### Proyectos de referencia (fuente única: Brochure 2026 — no agregar otros)

| Proyecto | Ubicación | Año | Vertical | Métricas |
|---|---|---|---|---|
| Sistemas de control de acceso · Aeropuerto El Dorado | Bogotá D.C. | 2012–2013 | Tecnología | +1.100 puntos · +5 Km F.O · +220 controles |
| Implementación sistema CCTV | Cartagena · B/manga (Bolívar, Sucre, Santander) | 2015–2018 | Telecomunicaciones | +830 postes · +239 Km F.O · +510 cámaras · +550 SPT |
| Subestación eléctrica 800 KVA | Bogotá D.C. | 2017–2018 | Energía | +50 m² cuarto técnico · +220 m² andén · 13 cajas |
| Obra civil para proyecto de cámaras LPR | Medellín, Antioquia | 2018 | Infraestructura | Obra civil para sistema de videovigilancia |
| Implementación sistema CCTV con energía solar | Vías Invías — 16 departamentos | 2019–2020 | Telecom. / Energía | Cobertura nacional (16 departamentos, sin desglose específico) |
| AUCE, semaforización y cámaras inteligentes | Bogotá D.C. | 2020–2021 | Tecnología | Sistema integrado de movilidad urbana |
| Planta solar flotante 1.350 KW | Tierralta, Córdoba | 2022 | Energía | +2.800 paneles · +13.000 flotadores · 9 inversores |
| Iluminación y sistema DALI · Túnel de Occidente | Vía Medellín al Mar, Antioquia | 2023 | Energía | Sistema de iluminación inteligente |
| Escuelas en potencia 5G | Antioquia · Santander · Meta · Caldas | 2024–2026 | Telecomunicaciones | 27 escuelas · +310 Km F.O · +810 postes · +400 SPT · +20 sitios |

> **Regla de contenido (no negociable):** no agregar proyectos, cifras o departamentos que no estén en el Brochure Corporativo Alturion 2026. Si Alturion entrega información adicional verificada, se actualiza este documento citando la fuente.

---

## 2. Arquitectura de la página (orden de secciones)

```
1.  Nav bar (sticky)
2.  Hero — grid animado + panel de fotos reales + headline + CTAs + glass card certificaciones
3.  Barra de stats (4 cifras clave)
4.  Nosotros — quiénes somos, con "Conocer más" expandible
5.  Cuatro verticales de servicio (qué hacemos)
6.  Tres pilares (cómo lo hacemos)
7.  Proyectos ejecutados — Mapa interactivo de Colombia
8.  Galería de proyectos — Carrusel de fotos reales
9.  Formulario de contacto
10. Footer (con bloque de cierre "Hablemos")
```

**Flujo narrativo:**
```
¿Qué hacen y por qué ellos?      → Hero + Stats
¿Cumplen normas?                 → Glass card del Hero (RITEL · RETIE · SG-SST)
¿Quiénes son, de dónde vienen?   → Nosotros
¿Qué servicios ofrecen?          → 4 Verticales
¿Cómo trabajan?                  → 3 Pilares
¿Lo han demostrado? (dónde)      → Mapa interactivo
¿Lo han demostrado? (cómo se ve) → Galería de proyectos
¿Hablamos?                       → Formulario + CTA final en footer
```

**Elemento flotante permanente:** botón WhatsApp visible en toda la página.

---

## 3. Sistema visual — Paleta "Deep Infrastructure"

| Rol | Nombre | HEX |
|---|---|---|
| Background base | Abyssal Navy | `#020B18` |
| Background secundario | Slate Depth | `#0A1628` |
| Acento primario (interactividad, CTAs) | Electric Cyan | `#00D4FF` |
| Acento secundario (evidencia, cifras, alertas técnicas) | Signal Amber | `#F59E0B` |
| Superficie de cards | Carbon Glass | `#0F2035` |
| Texto principal | Ice White | `#F0F6FF` |
| Texto secundario | Steel Gray | `#8BA3BC` |
| Grid / líneas técnicas | Blueprint Line | `#1A3A5C` |
| WhatsApp | Verde | `#25D366` |

**Lógica cromática:**
- **Cyan** = interactividad y estado activo (CTAs, hover de verticales, departamento seleccionado en el mapa).
- **Amber** = evidencia y trayectoria comprobada (cifras de stats, checks de pilares, departamentos con proyectos ejecutados).
- Esta separación de significado se mantiene consistente en todo el sitio — el usuario aprende el código de color una sola vez (en el hero/stats) y lo reutiliza para leer el mapa sin necesitar instrucciones.

### Tipografía

- **Display / Títulos:** Barlow Semi Condensed 700 — uppercase, headlines, stats, números.
- **UI / Cuerpo:** Inter — todo lo demás.
- Tamaño mínimo en mobile: **16px** (cuerpo).
- Cargar desde Google Fonts con `<link rel="preconnect">` antes del `<link>` de fuentes, `font-display: swap`.

### Motor visual — "Blueprint in Motion"

Cuatro técnicas que deben estar presentes de forma real (no solo mencionadas) en la implementación:

**① Grid técnico animado (fondo persistente)**
SVG de cuadrícula isométrica tipo blueprint, líneas en `#1A3A5C`, presente en hero, Nosotros (muy tenue) y como base del mapa. Reacciona sutilmente al cursor (parallax máx. 8px) con Framer Motion o `transform` + `requestAnimationFrame`. Nunca usar `filter: blur()` en elementos grandes — penaliza rendimiento.

**② Reveal por "construcción"**
Los títulos principales (hero, cabeceras de sección) no hacen fade-in: se dibujan con stroke animation SVG, como trazo de lápiz técnico.

**③ Ensamblaje por scroll**
Cada sección de servicios/portafolio entra al viewport como si se ensamblara — sus componentes llegan desde distintos ejes con spring physics de Framer Motion (`{ type: "spring", stiffness: 260, damping: 28 }`).

**④ Mapa interactivo como centro de gravedad**
Ver sección 8 — el mapa no es decorativo, es el activo de credibilidad más fuerte del sitio.

### Efectos permitidos / prohibidos

**Permitidos:** fadeIn en scroll (Intersection Observer), hover `translateY(-4px)` + shadow sutil, transición de color en botones (`0.2s`), pulso WhatsApp (`box-shadow`, loop 3s), animaciones `layout` de Framer Motion en el mapa.

**Prohibidos:** parallax agresivo, partículas de fondo, gradientes en movimiento perpetuo, animaciones de entrada que retrasen el LCP, `filter: blur()` en elementos grandes, sliders automáticos, más de 2 CTAs compitiendo en la misma sección, pop-ups de entrada.

---

## 4. Nav bar

```
Logo ALTURION | Nosotros · Servicios · Proyectos | [Hablemos]
```

- Sticky (`position: sticky; top: 0`).
- Fondo: `rgba(10,22,40,0.85)` + `backdrop-filter: blur(12px)`.
- Borde inferior: `1px solid rgba(0,212,255,0.15)`.
- Links: Barlow, mayúsculas, `12px`, letter-spacing `2px`. Hover → cyan `#00D4FF`.
- `Hablemos` como botón con borde cyan, texto cyan, ancla al formulario.
- Sin ítem "Mapa" — queda cubierto por "Proyectos", que ancla directamente al mapa interactivo.
- Mobile: hamburger icon → menú desplegable full-width.

---

## 5. Hero

### Objetivo
Que en 5 segundos el visitante sepa: quiénes son, qué hacen, y qué debe hacer — sin que el texto compita con las imágenes ni viceversa.

### Layout — "Monitor de obra" (dos zonas)

```
┌─────────────────────────────────┬───────────────┐
│                                   │               │
│  ZONA TEXTO (~55%)                │  ZONA FOTO    │
│  Fondo navy sólido + grid técnico │  (~45%)        │
│                                   │  Panel HUD    │
│  Eyebrow                          │  con fotos    │
│  Headline (reveal tipo trazo)     │  reales en    │
│  Subhead                          │  crossfade,   │
│  Glass card certificaciones       │  opacidad     │
│  CTAs                             │  completa     │
│  Diferenciadores                  │  Sin overlay  │
│                                   │  de texto     │
└─────────────────────────────────┴───────────────┘
```

**Por qué esta división y no fotos de fondo con overlay:** un fondo fotográfico full-bleed obliga a elegir entre lavar la foto (para que el texto se lea) o tapar el texto (para que la foto se vea). Separar el hero en dos zonas evita el conflicto — el texto siempre vive sobre navy sólido, las fotos siempre se muestran a opacidad completa.

### Zona texto — elementos (en este orden en el DOM)

1. Fondo `#020B18` + `radial-gradient` sutil desde `#0A1628`.
2. Grid técnico animado (líneas verticales en 25/50/75%, `rgba(240,246,255,0.04)`, solo desktop).
3. Glow amber muy sutil (`rgba(245,158,11,0.08)`), `radial-gradient` puro, centrado arriba. Nunca `filter: blur()`.
4. **Glass card** (reemplaza sección de Certificaciones independiente):
   - `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(0,212,255,0.3)`, `backdrop-filter: blur(4px)`, `border-radius: 8px`.
   - Contenido: `[ 2026 ] · Ingeniería Integral` + `RITEL · RETIE · SG-SST · Cobertura Nacional`.
5. **Eyebrow:** `Tecnología · Telecomunicaciones · Energía · Infraestructura` — 11px, bold, cyan, uppercase, letter-spacing 3px.
6. **Headline** (reveal tipo trazo SVG, no fade-in):
   ```
   Ingeniería
   que CONECTA
   el país.
   ```
   Barlow Semi Condensed 700, `clamp(36px, 5vw, 62px)`, uppercase. "CONECTA" o el punto final en cyan `#00D4FF`.
7. **Subhead:** 15px, `rgba(240,246,255,0.6)`, max-width 480px, line-height 1.7.
   > `Diseñamos, construimos e integramos infraestructura de alto impacto. Del diseño a la operación, con rigor técnico y cobertura en más de 20 departamentos.`
8. **CTAs:**
   - Primario: `Ver proyectos` → ancla al mapa. Fondo cyan, texto navy.
   - Secundario: `Contáctenos →` → ancla al formulario. Borde blanco semitransparente.
9. **Diferenciadores** (fila de 3, separador `1px solid rgba(240,246,255,0.08)` arriba, íconos check cyan 14px, texto Inter 13px `rgba(240,246,255,0.5)`):
   ```
   ✓  Ciclo completo propio — del diseño a la operación, sin intermediarios
   ✓  Respaldados por 17 años de operación de SINERCOM S.A.S.
   ✓  Proyectos ejecutados en más de 20 departamentos de Colombia
   ```

### Zona foto — panel tipo HUD

- Contenedor con esquinas tipo visor técnico (bracket corners), borde `1px solid rgba(0,212,255,0.3)`, `border-radius: 8px`.
- 3–4 fotos reales de proyectos/obra en crossfade lento (8–10s por imagen), **opacidad completa, sin overlay de texto**.
- Primera imagen precargada como LCP (`fetchpriority="high"`, `loading="eager"`); siguientes en diferido.
- Grid técnico de fondo continúa (muy tenue) por debajo del panel, para que ambas zonas se sientan del mismo sistema visual.

### Mobile

- Headline se parte en máximo 2–3 líneas.
- Panel de fotos: bloque de altura fija (~280px) debajo del headline, antes de los CTAs.
- CTAs apilados verticalmente.
- Grid lines verticales: ocultas.
- Glass card: ancho completo.
- Diferenciadores: stack vertical.

---

## 6. Barra de stats

Franja inmediata debajo del hero, ancho completo. Fondo `rgba(245,158,11,0.07)`, bordes superior/inferior `1px solid rgba(245,158,11,0.15)`.

| Cifra | Descripción |
|---|---|
| +17 años | De experiencia acumulada del equipo |
| $18.000 M | En proyectos desarrollados |
| +20 departamentos | Con cobertura operativa en Colombia |
| +40 proyectos | De referencia ejecutados |

- Números: Barlow Semi Condensed 700, `32px`, color amber `#F59E0B`.
- Labels: Inter 11px, uppercase, letter-spacing 1px, Steel Gray `#8BA3BC`.
- Separadores verticales: `1px solid rgba(240,246,255,0.08)`.
- Mobile: grid 2×2.

---

## 7. Nosotros

Sección nueva. Intro corta siempre visible + "Conocer más" que expande contenido dentro de la misma sección (acordeón), sin modal.

**Eyebrow:** `Quiénes somos`
**Título:** `Una nueva generación de ingeniería`

**Intro (siempre visible, máx. 3 líneas):**
> Alturion es una empresa colombiana de soluciones integrales de ingeniería, con sede en Ibagué y cobertura nacional. Diseñamos, construimos e integramos infraestructura de alto impacto para el sector público y privado.

**Botón:** `Conocer más ↓` — borde cyan, texto cyan, chevron que rota 180° al expandir.

**Contenido expandido** (`fadeIn + translateY(8px→0)` en 200ms), organizado en 3 fichas técnicas:

```
01 · ¿Qué hacemos?
Proyectos de infraestructura civil, eléctrica, de
telecomunicaciones y tecnología — desde el diseño
hasta la operación.

02 · ¿Cómo lo hacemos?
Equipo técnico certificado, cumplimiento normativo
estricto y procesos de calidad auditables.

03 · ¿Para quién?
Entidades gubernamentales, privadas, constructoras,
operadores de telecomunicaciones y empresas del
sector energético.
```

Cada bloque: número en amber + título Barlow + texto Inter 14px `rgba(240,246,255,0.7)`.

**Línea de cierre del acordeón:**
> Nuestro equipo reúne trayectoria en proyectos de infraestructura esencial en más de 15 departamentos del país, como evolución estratégica del equipo técnico de SINERCOM S.A.S. — accionista fundador de Alturion.

**Diseño:**
- Fondo de sección: `#0A1628` (se diferencia del navy del hero).
- Grid técnico de fondo casi imperceptible — la sección "respira" menos que el hero.
- Bloques del acordeón en tarjetas Carbon Glass `#0F2035`, borde `1px solid rgba(240,246,255,0.07)`.

---

## 8. Cuatro verticales de servicio

**Eyebrow:** `Lo que hacemos`
**Título:** `Cuatro verticales / un mismo sistema`
**Descripción:** `Estructuramos nuestra oferta en cuatro verticales integradas que permiten desarrollar proyectos de ingeniería de principio a fin.`

### Las cuatro verticales — contenido completo

**01 · Infraestructura**
*La base física de todo proyecto. Obras civiles especializadas para el despliegue de redes con capacidad para operar en todo tipo de terreno.*
Tags: Obra civil · Canalización · SPT · Zanjas y ductos
Detalle: Obra civil en terrenos complejos · Canalización subterránea/aérea · Cajas de inspección y empalme · Sistemas de puesta a tierra (SPT) · Mampostería y acabados técnicos · Excavación y zanjas · Pedestales · Cuartos técnicos · Andenes y urbanismo.

**02 · Energía**
*Diseño, construcción y operación de sistemas eléctricos que garantizan suministro confiable y eficiente, en cumplimiento de la normativa nacional.*
Tags: Subestaciones · Redes B.T / M.T · Energía solar · RETIE
Detalle: Subestaciones hasta 800 KVA · Redes B.T y M.T · Plantas solares on-grid/off-grid · Plantas solares flotantes · Caja combinadora e inversores · Transformadores y medidores · Iluminación DALI · Eficiencia energética.

**03 · Telecomunicaciones**
*Despliegue e integración de redes que conectan ciudades, empresas y territorios. Desde la fibra óptica hasta los sistemas de videovigilancia urbana.*
Tags: Fibra óptica · CCTV urbano · Cableado estructurado · RITEL
Detalle: Tendido de fibra óptica · Empalmería y certificación · Sistemas CCTV urbano · Cableado estructurado certificado · Postes y estructuras · Videovigilancia LPR · Radioenlaces y microondas · Infraestructura BTS/5G · Cumplimiento RITEL.

**04 · Tecnología**
*Integración tecnológica para entornos inteligentes, automatización industrial y gestión remota de infraestructura esencial.*
Tags: Integración 5G · Semaforización · Sistemas DALI · LPR / SCADA
Detalle: Redes 5G y conectividad avanzada · Semaforización y AUCE · Iluminación inteligente DALI · Automatización y SCADA · Gestión remota · Control de acceso · Routers/switches/equipos activos · Cámaras LPR y analítica · UPS y sensores.

### Diseño

**Tarjetas (grid 2×2 desktop, stack mobile):**
- Fondo `rgba(240,246,255,0.03)`, borde `1px solid rgba(240,246,255,0.07)`, `border-radius: 12px`.
- Borde izquierdo activo: `3px solid #00D4FF` (hover/activo).
- Número de vertical: Barlow 700, 52px, `rgba(0,212,255,0.15)` reposo → `rgba(0,212,255,0.35)` hover.
- Ícono: 44×44px, fondo `rgba(0,212,255,0.08)`, borde cyan sutil.
- Hover: `translateY(-4px)`, fondo `rgba(0,212,255,0.04)`.

**Panel de detalle expandible:**
- Se despliega debajo del grid al hacer clic. Solo una tarjeta activa a la vez.
- Animación: `fadeIn + translateY(8px→0)` en 200ms.
- Grid interno: 3 columnas desktop, 1 mobile. Cada ítem: fondo `rgba(240,246,255,0.03)`, punto cyan + texto 12px.

**Banda de Servicios Profesionales** (capa transversal, ancho completo, debajo del grid):
- Fondo `linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,212,255,0.02))`, borde `1px solid rgba(0,212,255,0.2)`.
- Layout: ícono + título a la izquierda | línea divisoria | chips a la derecha.
- Servicios: Diseños de ingeniería · Interventoría técnica y administrativa · Consultoría especializada · Auditoría técnica · Evaluación financiera de proyectos.
- Mobile: stack vertical, sin línea divisoria.

---

## 9. Tres pilares (cómo lo hacemos)

**Eyebrow:** `Cómo trabajamos`
**Título:** `Tres pilares, un solo propósito`
**Descripción:** `Ejecutamos cada proyecto con precisión técnica, control y trazabilidad en cada etapa — con un compromiso real por la sostenibilidad desde el diseño.`

| Pilar | Contenido |
|---|---|
| **01 · Calidad** | Procesos documentados · Entregables auditables · Planes de calidad · Cumplimiento normativo |
| **02 · Seguridad** | Personal certificado · Protocolos de trabajo · SG-SST · Planes de emergencia |
| **03 · Sostenibilidad** | Manejo ambiental · Prácticas responsables · Eficiencia energética · Disposición adecuada |

**Diseño:**
- Todo en amber `#F59E0B` (no cyan) — diferencia deliberada del bloque de capacidades técnicas; aquí el amber funciona como "sello de garantía".
- Número de pilar pequeño en amber, ícono simple, lista de 4 ítems con check amber.
- Cierre de sección, cita del manifiesto, cursiva, centrada, `rgba(240,246,255,0.6)`:
  > *"Más que entregar soluciones, construimos relaciones basadas en confianza, seguridad y responsabilidad con el entorno."*

---

## 10. Mapa interactivo de Colombia

### 10.1 Por qué D3 + GeoJSON (y no paths manuales)

- Formas exactas: paths manuales deforman departamentos pequeños (Quindío, Atlántico, San Andrés).
- `d3.geoMercator().fitSize()` ajusta el mapa automáticamente al contenedor sin distorsión, en cualquier pantalla.
- Mantenibilidad: agregar un departamento o proyecto es editar el archivo de datos, no tocar SVG.

### 10.2 Base técnica (ya construida — se conserva intacta)

```
colombia.geo.json ──→ d3.geoMercator().fitSize() ──→ d3.geoPath() ──→ <path> × 33 dptos
                                                              │
departmentProjects.js ──────────────────────────────→ ¿tiene proyectos? ──→ color activo
                                                              │
                                                         click/hover ──→ ProjectPanel
```

- **Librerías:** `d3-geo` ^3.1.1, `d3-selection` ^3.0.0, `d3-transition` ^3.0.1 (importar solo módulos necesarios, nunca `import * as d3`).
- **GeoJSON:** repositorio `caticoa3/colombia_mapa`, archivo `co_2018_MGN_DPTO_POLITICO.geojson`, alojado localmente en `public/colombia.geo.json` (no depender de CDN externo).
- **Propiedad clave:** `DPTO_CNMBR` — las keys de `departmentProjects.js` deben coincidir exactamente (tildes y comas incluidas). Verificar con:
  ```js
  console.log(geoData.features.map(f => f.properties.DPTO_CNMBR))
  ```
- **Framer Motion:** anima entrada/salida del panel y ahora también el resize del mapa (ver 10.4).
- **Accesibilidad:** lista `sr-only` navegable por teclado, SVG con `role="img"` y `aria-label` descriptivo.
- **Proyecto de cobertura nacional (INVÍAS):** tarjeta fija debajo del mapa, fuera del SVG — cubrió 16 departamentos no especificados en el brochure, no se mapea a departamentos individuales.

### 10.3 Departamentos actualmente mapeados

| Key (DPTO_CNMBR) | Proyectos |
|---|---|
| `BOGOTÁ, D.C.` | 3 |
| `ANTIOQUIA` | 3 |
| `CÓRDOBA` | 1 |
| `BOLÍVAR` | 1 |
| `SUCRE` | 1 |
| `SANTANDER` | 2 |
| `META` | 1 |
| `CALDAS` | 1 |

### 10.4 Nueva mecánica — "Se encoge y cede el protagonismo"

Esta es la pieza distintiva de este diseño frente a las tres versiones anteriores. En vez de un panel lateral fijo junto a un mapa de tamaño constante, el mapa **se transforma en su propia miniatura de referencia** al seleccionar un departamento — como cuando un dashboard de control minimiza el mapa general al enfocarse en un sitio.

**Estado por defecto (nada seleccionado):**
```
┌─────────────────────────────────────────────┐
│         MAPA COMPLETO, CENTRADO              │
│         (max-width ~640px, protagonista)     │
├───────────────────────────────────────────────┤
│  Leyenda: ● con proyectos  ○ sin proyectos    │
├───────────────────────────────────────────────┤
│  [ Tarjeta fija INVÍAS · 16 departamentos ]   │
└─────────────────────────────────────────────┘
```

**Estado con departamento seleccionado (desktop):**
```
┌───────────┬─────────────────────────────────┐
│  MAPA     │     PANEL DE PROYECTOS           │
│  MINI     │     (protagonista, ~65% ancho)   │
│  (~30%,   │                                 │
│  ~220px)  │                                 │
│  [× volver a mapa completo]                  │
└───────────┴─────────────────────────────────┘
```

**Estado con departamento seleccionado (mobile) — mismo patrón, orientación vertical:**
```
┌─────────────────────┐
│  MAPA MINI (arriba,   │
│  centrado, ~140px)   │
│  [× volver]           │
├─────────────────────┤
│  PANEL DE PROYECTOS   │
│  (debajo, ancho       │
│  completo, prioridad) │
└─────────────────────┘
```

**Especificación de la animación:**
- Contenedor del mapa usa `layout` de Framer Motion (no transiciones CSS manuales) para que el resize + reposición sea un solo movimiento fluido.
- Spring: `{ type: "spring", stiffness: 260, damping: 28 }` — mecánico y preciso, no rebota como elemento juguetón.
- Tamaño mini: `~220px` ancho desktop, `~140px` mobile (vs. `~640px` / ancho completo en estado default).
- Panel de proyectos entra con `x: 40 → 0, opacity: 0 → 1`, `AnimatePresence` — ocupa el espacio liberado por el mapa.
- Botón `× Ver mapa completo` fijo sobre la mini-versión. Click ahí, o click de nuevo sobre el mismo departamento, revierte la animación.
- Leyenda: visible en estado default, se colapsa a ícono (ⓘ) junto al mini-mapa en estado seleccionado.

### 10.5 Sistema de colores — ajustado para preservar la silueta de Colombia

Requisito explícito: los 33 departamentos deben leerse siempre como mapa completo de Colombia (silueta y líneas divisorias visibles), y sobre ese lienzo los departamentos con proyectos deben "encenderse" con contraste fuerte — sin que el amber quede tan sutil que se pierda, y sin que el resto del mapa se hunda en el fondo de la página.

| Estado | Fill | Stroke |
|---|---|---|
| Sin proyectos | `#112248` — azul visible, mismo tono para todo el lienzo del país | `rgba(240,246,255,0.12)` |
| Con proyectos (reposo) | `#F59E0B` al 55%, sólido y notorio | `#F59E0B` sólido, `1.5px` |
| Hover | `#F59E0B` al 70% | `#F59E0B` sólido |
| Seleccionado | `#00D4FF` al 65% | `#00D4FF` sólido |

**Lógica del código de color:** amber = evidencia/trayectoria comprobada (mismo lenguaje que Stats y Pilares), cyan = estado activo/interactivo ahora mismo (mismo lenguaje que Verticales y CTAs). El usuario aprende este código una sola vez en el hero/stats y lo reutiliza sin necesitar leyenda extensa.

### 10.6 Panel de proyectos — contenido

Cada tarjeta dentro del panel:
```
[Categoría: chip pequeño]  Título del proyecto
Año · Métricas clave
```
- Chip de categoría con color por vertical: Energía → amber, Telecomunicaciones/Tecnología → cyan, Infraestructura → Steel Gray.
- Fondo de tarjeta: Carbon Glass `#0F2035`, borde `rgba(240,246,255,0.07)`.

### 10.7 Cómo agregar un nuevo departamento o proyecto

1. Verificar el `DPTO_CNMBR` exacto (ver 10.2).
2. Agregar la entrada en `departmentProjects.js` con esa key exacta.
3. Deploy automático vía `git push`.

> **Regla de contenido:** no agregar proyectos, departamentos ni cifras que no estén en el Brochure Corporativo Alturion 2026.

---

## 11. Galería de proyectos

Sección nueva. Aquí las fotos reales del hero encuentran su lugar protagónico, con contexto completo y sin restricciones de espacio.

**Eyebrow:** `Evidencia`
**Título:** `Proyectos que hablan por sí solos`
**Descripción:** `Una muestra visual del trabajo ejecutado — del diseño a la obra terminada.`

**Formato:** carrusel horizontal manual (scroll-snap nativo, swipe/drag + indicador de puntos, sin autoplay ni flechas obligatorias).

**Cada tarjeta:**
```
[ FOTO — aspect ratio 4:3, opacidad completa ]
─────────────────────────────────────────
CATEGORÍA (chip amber o cyan según vertical)
Título del proyecto
Ubicación · Año
```
- Fondo: Carbon Glass `#0F2035`, borde `1px solid rgba(240,246,255,0.07)`, `border-radius: 12px`.
- Ancho: `~340px` desktop, `~280px` mobile, `scroll-snap-align: start`.
- Hover (desktop): `translateY(-4px)` + borde se ilumina según categoría.

**Contenido — los 9 proyectos de referencia del brochure** (sección 1), sin inventar nada nuevo.

**Nota sobre fotos:** mientras no existan fotos reales de todos los proyectos, se prioriza mostrar primero los que sí tienen imagen disponible. Los pendientes usan un placeholder tipo blueprint (ilustración lineal simple del tipo de obra) — nunca foto genérica de stock, para no romper la promesa de "evidencia real".

**Relación con el mapa:** el mapa responde "¿dónde?", la galería responde "¿cómo se ve?". Por eso va inmediatamente después en el scroll.

---

## 12. Formulario de contacto

**Eyebrow:** `Hablemos`
**Título:** `De su próximo proyecto`

**Campos:** Nombre · Empresa/Entidad · Correo · Teléfono · Vertical de interés (select: Infraestructura/Energía/Telecomunicaciones/Tecnología) · Mensaje · **reCAPTCHA v2**.

- Inputs: fondo `rgba(240,246,255,0.03)`, borde `1px solid rgba(240,246,255,0.1)`, focus → borde cyan.
- Altura táctil mínima `44px` en todos los campos (mobile).
- **Anti-spam:** widget reCAPTCHA v2 de Google (checkbox "No soy un robot"), ubicado justo antes del botón de envío. Requiere registrar el dominio en Google reCAPTCHA Admin Console y validar el token server-side antes de procesar el envío (no basta con validar en el cliente).
- Botón enviar: fondo cyan, texto navy oscuro.
- Backend: EmailJS o Formspree.

**Botón flotante de WhatsApp:** visible en toda la página, verde `#25D366`, pulso animado (`box-shadow`, loop 3s), sin solaparse con el nav en mobile landscape.

---

## 13. Footer

```
[ Columna marca: logo + manifiesto corto + redes ]
[ Servicios ]  [ Empresa ]  [ Contacto ]
─────────────────────────────────────────
Bloque de cierre: "¿Hablemos de su próximo proyecto?" + botón único
─────────────────────────────────────────
Barra inferior: © Alturion 2026 · Política de datos (Ley 1581/2012)
```

- Fondo `#020B18` — cierre visual, más oscuro que el resto del sitio.
- Wordmark grande "ALTURION" de fondo, muy tenue, recortado por el contenedor (`overflow: hidden`).
- Un solo CTA en el bloque de cierre, ancla al formulario.
- Mobile: stack vertical, grid 2 columnas con columna de marca ocupando ambas (`grid-column: 1 / -1`).

---

## 14. SEO — Estándares Google

### Técnico (obligatorio)

- [ ] `<title>`: `Alturion | Ingeniería en Telecomunicaciones, Energía e Infraestructura`
- [ ] `<meta name="description">` de 150–160 caracteres
- [ ] `lang="es-CO"` en `<html>`
- [ ] Canonical tag, HTTPS activo, Sitemap XML, `robots.txt`
- [ ] Imágenes con `alt` descriptivo
- [ ] Open Graph tags:
  ```html
  <meta property="og:title" content="Alturion — Ingeniería que conecta el país">
  <meta property="og:description" content="Infraestructura, telecomunicaciones, energía y tecnología. Diseño, construcción e integración en más de 20 departamentos de Colombia.">
  <meta property="og:image" content="https://alturion.com.co/og-image.jpg">
  <meta property="og:url" content="https://alturion.com.co">
  ```

### Core Web Vitals

- LCP < 2.5s → primera foto del panel HUD del hero precargada (`fetchpriority="high"`)
- CLS < 0.1 → `font-display: swap`
- INP < 200ms → no bloquear el thread principal con JS pesado

### Palabras clave objetivo

```
ingeniería telecomunicaciones Colombia
fibra óptica carrier Colombia
infraestructura redes telecomunicaciones
RITEL RETIE Colombia empresa
montaje fibra óptica operadores
proyectos CCTV urbano Colombia
energía solar fotovoltaica Colombia
ingeniería integral Ibagué
```

### Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alturion",
  "url": "https://www.alturion.com.co",
  "logo": "https://www.alturion.com.co/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+57-311-552-6686",
    "contactType": "sales",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra. 10 # 79-33",
    "addressLocality": "Ibagué",
    "addressCountry": "CO"
  }
}
```

---

## 15. Stack tecnológico

```
React 18 + Vite
D3.js (solo d3-geo + d3-selection + d3-transition)
Framer Motion (panel del mapa + mecánica de encoger/trasladar + reveal de títulos)
Tailwind CSS
Lucide React (íconos)
Google reCAPTCHA v2
EmailJS o Formspree (formulario)
```

Deploy: Netlify o Vercel.

**Ruta base:** si se despliega en GitHub Pages, configurar `base` en `vite.config.js` y usar `import.meta.env.BASE_URL` para assets y GeoJSON. Si se migra a dominio propio (`alturion.com.co`), `base: '/'`.

---

## 16. Mobile — Consideraciones específicas

- Diseño mobile-first: CSS base para mobile, `min-width` media queries para desktop.
- Mapa: comportamiento mini-mapa + panel idéntico al desktop, en columna en vez de fila (ver 10.4).
- Formulario: inputs mínimo 44px de altura táctil.
- Nav: hamburger limpio, sin mega-menús.
- Probar en: iPhone SE (375px), iPhone 14 (390px), Samsung Galaxy A (360px), iPad (768px).
- Botón WhatsApp no debe solaparse con el nav en landscape mobile.

---

## 17. Checklist de lanzamiento

### Contenido
- [ ] Fotos reales de proyectos cargadas y referenciadas en `departmentProjects.js` y en la galería
- [ ] Cifras verificadas con el equipo directivo
- [ ] Texto revisado por alguien de Alturion
- [ ] Formulario probado: recibe correos correctamente, reCAPTCHA bloquea spam de prueba
- [ ] WhatsApp redirige al número correcto con mensaje pre-cargado
- [ ] Mapa: verificar que `DPTO_CNMBR` del GeoJSON coincide con las keys de `departmentProjects.js`
- [ ] Animación de encoger/trasladar del mapa probada en desktop y mobile

### Técnico
- [ ] SSL activo (https)
- [ ] Google Search Console configurado y sitemap enviado
- [ ] Google Analytics 4 instalado
- [ ] Open Graph tags
- [ ] Favicon: logo Alturion en 32×32 y 180×180 (apple-touch-icon)
- [ ] Página 404 personalizada
- [ ] Política de tratamiento de datos publicada (Ley 1581/2012)
- [ ] `npm run build` sin errores, preview revisado

### Velocidad
- [ ] PageSpeed Insights > 90 en mobile
- [ ] Imágenes en WebP, comprimidas (< 200 KB cada una)
- [ ] GeoJSON de Colombia minificado
- [ ] D3 importado solo con módulos necesarios
- [ ] Fuentes con `font-display: swap`

---

## 18. Lo que NO hacer

- ❌ No usar sliders/carousels automáticos (el de la galería es manual, sin autoplay).
- ❌ No poner el PDF del brochure como reemplazo de la página.
- ❌ No dibujar el mapa de Colombia con paths SVG manuales — usar D3 + GeoJSON.
- ❌ No importar D3 completo (`import * as d3`) — solo los módulos usados.
- ❌ No usar `filter: blur()` en elementos de fondo grandes.
- ❌ No tener más de 2 CTAs compitiendo en la misma sección.
- ❌ No usar pop-ups de entrada.
- ❌ No colocar overlay de texto sobre las fotos del hero — el texto vive solo en la zona sólida.
- ❌ No dejar que los departamentos sin proyectos se hundan tanto en el fondo que se pierda la silueta de Colombia.
- ❌ No usar colores fuera de la paleta Deep Infrastructure definida en la sección 3.
- ❌ No escribir bloques de texto de más de 3 líneas seguidas.

---

*Documento vivo — actualizar con decisiones de diseño, nuevas fotos de proyectos, cambios de contenido o nuevas certificaciones a medida que avance el proyecto.*
