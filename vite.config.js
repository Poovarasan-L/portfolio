import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base './' makes assets load correctly anywhere:
  // e.g. https://poovarasan-l.github.io/portfolio/ or https://poovarasan-l.github.io/
  base: './',
  server: {
    port: 5173,
    open: true
  }
})
