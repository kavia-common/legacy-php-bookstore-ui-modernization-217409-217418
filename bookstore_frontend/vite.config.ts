import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 // PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for React 18 + TS app.
   * - Dev/Preview servers run on port 3000 (matches platform)
   * - Base is '/' for BrowserRouter
   * - strictPort prevents auto-shifting to other ports
   * - host: true ensures server binds to 0.0.0.0 for external access
   * - hmr.clientPort aligned with 3000 to avoid proxy/HMR websocket issues
   */
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
    hmr: {
      clientPort: 3000
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true
  },
  base: '/',
});
