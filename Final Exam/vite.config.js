import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js',
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/sass/abstracts/variables";
          @import "./src/sass/abstracts/mixins";
          @import "./src/sass/base/typography";
        `
      }
    }
  },
  build: {
    sourcemap: true
  }
});