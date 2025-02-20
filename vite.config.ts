import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT || '4173'), // Use Render's PORT
    host: true, // Allow external access
    allowedHosts: ['candidate-search-app-pk5z.onrender.com'], // Allow Render's domain
  },
  server: {
    fs: {
      allow: ['.'], // Allow serving files from the root
    }
  },
  build: {
    rollupOptions: {
      input: '/index.html' // Ensure that all routes resolve to index.html
    }
  }
});
