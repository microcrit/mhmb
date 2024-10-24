import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    solid(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer()
      ]
    },
    preprocessorOptions: {
      sass: {
        api: 'modern'
      }
    }
  }
})
