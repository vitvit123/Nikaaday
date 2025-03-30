import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nikaaday/', // 👈 Set the correct base URL for GitHub Pages
});
