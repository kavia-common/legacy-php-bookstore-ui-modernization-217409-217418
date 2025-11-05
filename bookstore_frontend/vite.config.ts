import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for React 18 + TS app.
   * - Dev server runs on port 3000
   * - Base is '/' for BrowserRouter
   * - strictPort prevents auto-shifting to 3001+
   */
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  base: '/',
});
