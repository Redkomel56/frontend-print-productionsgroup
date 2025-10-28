import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'print-productionsgroup.ru',
      'localhost',
      '127.0.0.1'
    ],
    host: '0.0.0.0', // Разрешаем доступ с любого IP
    port: 4173
  }
})

