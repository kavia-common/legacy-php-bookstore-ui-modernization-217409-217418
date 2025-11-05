import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load envs prefixed with REACT_APP_ to mimic CRA.
   * Force dev server to bind to 0.0.0.0 on port 3000 without auto-switching.
   */
  loadEnv(mode, process.cwd(), 'REACT_APP_');

  return {
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true, // do not auto-increment if busy
      host: true        // 0.0.0.0
    },
    preview: {
      port: 3000,
      host: true
    },
    define: {
      // Make REACT_APP_* variables available via import.meta.env if needed by code
      'process.env': {}
    }
  };
});
