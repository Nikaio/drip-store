import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { preset } from '@vercel/react-router';

export default defineConfig({
  plugins: [
    reactRouter({
      presets: [preset()],
    }),
    tailwindcss(),
  ],
});