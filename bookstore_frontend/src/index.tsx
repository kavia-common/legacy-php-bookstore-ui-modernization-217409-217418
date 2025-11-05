import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import './main.css';
import App from './App';

/**
 * React 18 bootstrap:
 * - Mount to the #root div defined in public/index.html
 * - Use BrowserRouter with default base path '/'
 * - Import Bootstrap and local theme before rendering
 * - Add a runtime guard to surface clearer context if a legacy bundle path is requested.
 */
const container = document.getElementById('root');
if (!container) {
  // Fail fast if the root element is missing
  throw new Error('Root element not found');
}

// Warn clearly if a legacy bundler path (like /bundle.js) is being requested,
// which can happen if a stale index.html was cached or manually edited.
try {
  const scripts = Array.from(document.scripts).map(s => s.getAttribute('src') || '');
  const hasLegacyBundle = scripts.some(src => /(^|\/)bundle(\.min)?\.js(\?|#|$)/i.test(src));
  if (hasLegacyBundle) {
    // eslint-disable-next-line no-console
    console.warn(
      '[Boot Warning] Detected a legacy script reference to bundle.js. This project uses CRA with react-scripts which injects scripts automatically. Remove any hardcoded bundle.js script tags from index.html.'
    );
  }
} catch {
  // no-op
}

const root = createRoot(container);

// Ensure any previously registered service workers are unregistered to avoid
// no-op fetch handlers and caching issues serving stale assets.
import('./serviceWorker')
  .then(m => {
    try { m.unregisterServiceWorker?.(); } catch { /* ignore */ }
  })
  .catch(() => { /* ignore */ });

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
