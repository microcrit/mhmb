import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    }
  },
  server: {
    fs: {
      cachedChecks: false
    }
  },
  plugins: [react()],
})
