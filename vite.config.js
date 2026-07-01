import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' para dominio propio (alturion.com.co) o Netlify/Vercel.
// Si se despliega en GitHub Pages, cambiar a '/<repo>/' y usar import.meta.env.BASE_URL en assets/GeoJSON.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
