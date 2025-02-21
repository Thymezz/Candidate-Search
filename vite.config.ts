import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  base: '/', // Changed from './'
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: true,
    allowedHosts: ['candidate-search-app-pk5z.onrender.com'],
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});
