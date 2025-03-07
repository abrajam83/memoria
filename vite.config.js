import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige las solicitudes que comienzan con "/api" a "http://localhost:5000"
      '/api': {
        target: 'http://localhost:5000',  // URL del servidor donde se encuentra la API
        changeOrigin: true,              // Cambia el origen de la solicitud a la URL de destino
        secure: false,                   // Útil si el servidor no usa HTTPS (opcional)
        rewrite: (path) => path.replace(/^\/api/, ''),  // Opcional: reescribe la URL
      },
    },
  },
})
