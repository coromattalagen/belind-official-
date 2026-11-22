import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// VITE_BASE is set by the GitHub Pages workflow (e.g. "/belind-site/"). Locally it is "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
  build: { sourcemap: false, target: 'es2022', cssCodeSplit: true },
});
