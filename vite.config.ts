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
        main: resolve(__dirname, 'index.html'),
        homepage: resolve(__dirname, 'homepage.html'),
        login: resolve(__dirname, 'login.html'),
        orders: resolve(__dirname, 'orders.html'),
        register: resolve(__dirname, 'register.html'),
        admin: resolve(__dirname, 'Admin/admin.html'),
        farmer: resolve(__dirname, 'Farmer/farmer.html'),
      }
    }
  }
});
