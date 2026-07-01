/** @type {import('tailwindcss').Config} */

// Permite usar modificadores de opacidad de Tailwind (bg-cyan/10, border-cyan/30...)
// sobre colores definidos como CSS custom properties.
function withOpacity(rgbVarName) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgb(var(${rgbVarName}) / ${opacityValue})`
      : `rgb(var(${rgbVarName}))`
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Deep Infrastructure" — sección 3 del documento de diseño.
        navy: withOpacity('--color-navy-rgb'), // Abyssal Navy — background base
        slate: withOpacity('--color-slate-rgb'), // Slate Depth — background secundario
        cyan: withOpacity('--color-cyan-rgb'), // Electric Cyan — acento primario
        amber: withOpacity('--color-amber-rgb'), // Signal Amber — acento secundario
        carbon: withOpacity('--color-carbon-rgb'), // Carbon Glass — superficie de cards
        ice: withOpacity('--color-ice-rgb'), // Ice White — texto principal
        steel: withOpacity('--color-steel-rgb'), // Steel Gray — texto secundario
        blueprint: withOpacity('--color-blueprint-rgb'), // Blueprint Line — grid/líneas técnicas
        whatsapp: withOpacity('--color-whatsapp-rgb'),
        'map-base': withOpacity('--color-map-base-rgb'), // fill base de departamentos sin proyectos (sección 10.5)
      },
      fontFamily: {
        display: ['"Barlow Semi Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
