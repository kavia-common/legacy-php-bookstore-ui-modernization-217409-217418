import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for React 18 + TS app.
   * - Dev/Preview servers run on port 3000
   * - Base is '/' for BrowserRouter
   * - strictPort prevents auto-shifting to other ports
   * - host: true ensures server binds to 0.0.0.0 for external access
   * - hmr.clientPort set to external port to avoid 502 on HMR websocket behind proxy
   * - allowedHosts explicitly includes the preview domain to prevent host-block
   */
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true, // listen on all interfaces (0.0.0.0)
    // Ensure HMR connects via the external port when behind a proxy
    hmr: {
      clientPort: 3000
    },
    // Permit preview host (and localhost by default)
    allowedHosts: ['vscode-internal-40642-beta.beta01.cloud.kavia.ai']
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    // Mirror the allowedHosts behavior for preview mode
    allowedHosts: ['vscode-internal-40642-beta.beta01.cloud.kavia.ai']
  },
  base: '/',
});
