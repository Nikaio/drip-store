import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'; // Importe o plugin
import { vercelPreset } from '@vercel/react-router';

export default defineConfig({
  plugins: [
    reactRouter({
      presets: [vercelPreset()],
    }),
    tailwindcss(),
  ],
});