import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for React 18 + TS app.
   * - Dev/Preview servers run on port 3001
   * - Base is '/' for BrowserRouter
   * - strictPort prevents auto-shifting to other ports
   * - allowedHosts includes the preview domain to avoid blocked host errors
   * - host: true ensures server binds to 0.0.0.0 for external access
   * - hmr.clientPort set to external port to avoid 502 on HMR websocket behind proxy
   */
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: true,
    open: false,
    host: true, // listen on all interfaces (0.0.0.0)
    // Allow the preview domain to access the dev server
    allowedHosts: ['vscode-internal-34954-beta.beta01.cloud.kavia.ai'],
    // Ensure HMR connects via the external port when behind a proxy
    hmr: {
      clientPort: 3001
    }
  },
  preview: {
    port: 3001,
    strictPort: true,
    host: true,
    // Align preview allowed hosts with dev server for consistency
    allowedHosts: ['vscode-internal-34954-beta.beta01.cloud.kavia.ai'],
  },
  base: '/',
});
