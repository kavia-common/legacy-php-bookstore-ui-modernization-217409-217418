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
 */
const container = document.getElementById('root');
if (!container) {
  // Fail fast if the root element is missing
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
