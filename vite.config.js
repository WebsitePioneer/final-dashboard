import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://mock-react-dashboard-api.alphaos.workers.dev',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '') // Removes /api prefix if needed
  //     }
  //   }
  // }
})
