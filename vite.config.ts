import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  base: './', // Ensure relative paths for assets
  preview: {
    port: parseInt(process.env.PORT || '4173'), // Use Render's assigned port
    host: '0.0.0.0', // Allow external access on Render
  },
  server: {
    port: parseInt(process.env.PORT || '3000'), // Use environment port
    host: '0.0.0.0', // Allow external access
  },
  build: {
    outDir: 'dist', // Ensure Vite outputs to the dist folder
    rollupOptions: {
      input: '/index.html',
    },
  },
});
