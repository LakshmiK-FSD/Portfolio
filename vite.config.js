import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname+'/src'),
      '@components': path.resolve(import.meta.dirname, '/src/components'),
      '@pages': path.resolve(import.meta.dirname, '/src/pages'),
      '@services': path.resolve(import.meta.dirname, '/src/services'),
    },
  },
  server: {
    port: 5173,
    open: true, 
  }
})
