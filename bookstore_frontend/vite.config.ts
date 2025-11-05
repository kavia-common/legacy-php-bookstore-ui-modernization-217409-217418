import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load envs prefixed with REACT_APP_ to mimic CRA.
   * Force dev server to bind to 0.0.0.0 on port 3000 without auto-switching.
   * Allow the cloud preview host to fix "blocked host" errors.
   * Disable blocking error overlay to avoid preview interruptions.
   * Ensure optimizeDeps pre-bundles react-bootstrap/bootstrap and allow fs from project root.
   */
  loadEnv(mode, process.cwd(), 'REACT_APP_');

  // Host and port settings
  const PORT = 3000;
  const ALLOWED_HOSTS = ['vscode-internal-17941-beta.beta01.cloud.kavia.ai'];

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    },
    optimizeDeps: {
      include: ['react-bootstrap', 'bootstrap']
    },
    server: {
      port: PORT,
      strictPort: true, // do not auto-increment if busy
      host: true,       // 0.0.0.0
      allowedHosts: ALLOWED_HOSTS,
      fs: {
        strict: false,
        allow: [resolve(__dirname, '.'), process.cwd()]
      },
      hmr: {
        overlay: false
      }
    },
    preview: {
      port: PORT,
      strictPort: true,
      host: true,
      allowedHosts: ALLOWED_HOSTS
    },
    define: {
      // Make REACT_APP_* variables available via import.meta.env if needed by code
      'process.env': {}
    }
  };
});
