import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Определяем базу в зависимости от среды
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/MasterInk/' : '/', // <-- магия тут
})