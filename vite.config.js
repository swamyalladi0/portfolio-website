import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative assets work on GitHub Pages, Netlify, or direct preview
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
