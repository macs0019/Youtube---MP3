import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Youtube---MP3/",
  build: {
    outDir: './build', // Cambia 'build' al nombre del directorio deseado
  },
})
