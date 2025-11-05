import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-4 mt-auto">
      <div className="container text-center text-muted">
        <small>&copy; {new Date().getFullYear()} Modern Bookstore UI · Built with React & Bootstrap</small>
      </div>
    </footer>
  );
};

export default Footer;
