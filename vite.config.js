import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' para dominio propio (alturion.com.co) o Netlify/Vercel.
// En GitHub Pages (sin dominio propio) el sitio vive en /<repo>/, por eso el base coincide
// con el nombre del repo — los componentes ya usan import.meta.env.BASE_URL para assets/GeoJSON.
export default defineConfig({
  base: '/alturionversion4.0/',
  plugins: [react()],
})
