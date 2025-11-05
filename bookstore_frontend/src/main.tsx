import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Import Bootstrap styles once here so components rely on a single source of truth
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import App from './App';

// PUBLIC_INTERFACE
function bootstrapApp() {
  /**
   * This is the main entry point of the React application.
   * Wraps the App with BrowserRouter and attaches it to #root.
   * Enables React Router v7 future flags to silence deprecation warnings and
   * opt into upcoming behavior changes.
   */
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    throw new Error('Root element #root not found');
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

bootstrapApp();
