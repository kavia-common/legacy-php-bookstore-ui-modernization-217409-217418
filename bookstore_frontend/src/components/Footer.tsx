import React from 'react';

// PUBLIC_INTERFACE
export default function AppFooter(): JSX.Element {
  /** Footer with light background */
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      <div className="bg-white border-top py-3">
        <div className="container text-center text-muted small">
          © {year} Bookstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
