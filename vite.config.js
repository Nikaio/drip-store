import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'; // Importe o plugin

export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(), 
  ],
});