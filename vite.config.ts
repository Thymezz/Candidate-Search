import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  base: '/', // Set the base URL to the root
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: '0.0.0.0', // Allow external access on Render
  },
  server: {
    port: parseInt(process.env.PORT || '3000'),
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist', // Ensure the build outputs to the dist folder
    rollupOptions: {
      input: '/index.html',
    },
  },
});
