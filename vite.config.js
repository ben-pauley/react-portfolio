import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 4100
  },
  plugins: [react()],
  base: '/react-portfolio/',
})
