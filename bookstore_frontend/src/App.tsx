import React from 'react';
import Container from 'react-bootstrap/Container';
import AppNavbar from './components/Navbar';
import AppFooter from './components/Footer';
import AppRoutes from './routes';

// PUBLIC_INTERFACE
export default function App(): JSX.Element {
  /**
   * App shell hosting the layout: header, main content (routes), and footer.
   */
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <AppNavbar />
      <Container as="main" className="flex-grow-1 py-4">
        <AppRoutes />
      </Container>
      <AppFooter />
    </div>
  );
}
