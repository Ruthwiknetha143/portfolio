import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 8 (Rolldown + Oxc). plugin-react v6 handles Fast Refresh natively, no Babel needed.
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works at any URL, including https://<user>.github.io/<repo>/
  base: './',
  build: {
    target: 'es2022',
    cssMinify: true,
  },
})
