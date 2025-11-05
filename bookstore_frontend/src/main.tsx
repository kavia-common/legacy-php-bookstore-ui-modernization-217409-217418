import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import './main.css';
import App from './App';

/**
 * React 18 bootstrap for Vite:
 * - Mount to #root in index.html
 * - Use BrowserRouter with base '/'
 * - Clean up any previously registered service workers and caches to avoid "no-op fetch handler" warnings.
 */
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

// Unregister any service workers and clear caches on load (defensive).
(async () => {
  try {
    if ('serviceWorker' in navigator) {
      const regs = await (navigator.serviceWorker.getRegistrations?.() ?? Promise.resolve([]));
      for (const reg of regs) {
        try { await reg.unregister(); } catch { /* ignore */ }
      }
      try {
        const single = await navigator.serviceWorker.getRegistration?.();
        if (single) { try { await single.unregister(); } catch { /* ignore */ } }
      } catch { /* ignore */ }
    }
  } catch { /* ignore */ }

  try {
    const keys: string[] = (await (globalThis as any).caches?.keys?.()) || [];
    for (const k of keys) {
      try {
        await (globalThis as any).caches.delete?.(k);
      } catch { /* ignore */ }
    }
  } catch { /* ignore */ }
})();

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
