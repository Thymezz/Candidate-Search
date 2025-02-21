import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  },
  server: {
    port: 3000,
  },
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: true
  }
});
