import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  preview: {
    port: Number(process.env.PORT) || 4173, // Use Render's PORT
    host: true, // Allow external access
    allowedHosts: ['candidate-search-app-pk5z.onrender.com'], // Allow Render's domain
  },
});
