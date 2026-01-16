import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-dim': {
        target: 'https://exidmet.dim.gov.az',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-dim/, ''),
        secure: false, // In case of certificate issues
      },
    },
  },
})
