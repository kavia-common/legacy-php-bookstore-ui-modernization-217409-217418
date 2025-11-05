import React from 'react';
import { Container } from 'react-bootstrap';

// PUBLIC_INTERFACE
export default function AppFooter(): JSX.Element {
  /** Footer with light background */
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      <div className="bg-white border-top py-3">
        <Container className="text-center text-muted small">
          © {year} Bookstore. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
