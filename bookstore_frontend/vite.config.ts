import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /** Load envs prefixed with REACT_APP_ to mimic CRA */
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');

  return {
    plugins: [react()],
    server: {
      port: Number(env.REACT_APP_PORT) || 5173,
      host: true
    },
    preview: {
      port: Number(env.REACT_APP_PORT) || 4173,
      host: true
    },
    define: {
      // Make REACT_APP_* variables available via import.meta.env
      'process.env': {}
    }
  };
});
