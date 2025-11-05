import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load envs prefixed with REACT_APP_ to mimic CRA.
   * Configure dev/preview servers on port 3000.
   * Set proper base path and extension resolution for TS/TSX.
   * Index.html is the single input (implicit) for Rollup build.
   */
  loadEnv(mode, process.cwd(), 'REACT_APP_');

  // Host and port settings
  const PORT = 3000;
  const ALLOWED_HOSTS = ['vscode-internal-17941-beta.beta01.cloud.kavia.ai'];

  return {
    plugins: [react()],
    base: '/', // app served from root
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
      },
      // Allow imports without specifying extensions
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    optimizeDeps: {
      // Only bootstrap CSS is used via import in main.tsx
      include: ['bootstrap']
    },
    server: {
      port: PORT,
      strictPort: true,
      host: true,
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
    // build.rollupOptions.input is derived from index.html automatically
  };
});
