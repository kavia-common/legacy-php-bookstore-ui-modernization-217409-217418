import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load envs prefixed with REACT_APP_ to mimic CRA.
   * We default dev server to port 3000 and bind to all interfaces (host: true).
   */
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');

  // Prefer explicit REACT_APP_PORT if provided; otherwise default to 3000 for dev.
  const devPort = Number(env.REACT_APP_PORT) || 3000;
  const previewPort = Number(env.REACT_APP_PORT) || 3000;

  return {
    plugins: [react()],
    server: {
      port: devPort,
      host: true
    },
    preview: {
      port: previewPort,
      host: true
    },
    define: {
      // Make REACT_APP_* variables available via import.meta.env
      'process.env': {}
    }
  };
});
