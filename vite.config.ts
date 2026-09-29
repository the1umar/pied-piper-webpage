import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://the1umar.github.io/pied-piper-webpage/, so assets need
// the repo name as their base path.
export default defineConfig({
  base: '/pied-piper-webpage/',
  plugins: [react(), tailwindcss()],
})
