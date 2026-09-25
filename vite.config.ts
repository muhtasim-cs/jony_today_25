import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    watch: {
      ignored: ['**/dist/**', '**/.git/**']
    }
  },
  build: {
    rollupOptions: {
      input: {
        admin: resolve(__dirname, 'Admin/admin.html'),
        farmer: resolve(__dirname, 'Farmer/farmer.html'),
      }
    }
  }
});
