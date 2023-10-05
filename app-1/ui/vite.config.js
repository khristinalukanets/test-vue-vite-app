import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@common": fileURLToPath(new URL('../../ui-common', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: [vue, 'element-plus'] // here I provide a config for that import
    }
  }
})
