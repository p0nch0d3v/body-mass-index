import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
})