import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicSafe(): import('vite').Plugin {
  return {
    name: 'copy-public-safe',
    apply: 'build',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(publicDir)) return;
      fs.readdirSync(publicDir).forEach(file => {
        if (file.includes(' ')) return;
        try {
          fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
        } catch (_) {}
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicSafe()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false,
  },
});
