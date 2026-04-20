import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is critical for GitHub Pages. 
  // It ensures assets are linked relatively (e.g., "assets/logo.png" instead of "/assets/logo.png").
  // If your repo name is 'portfolio', this allows it to work at https://user.github.io/portfolio/
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});