import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-3">
      <h2 className="h4">About</h2>
      <p>
        This demo modernizes a legacy PHP bookstore UI into a React 18+ application with Bootstrap 5 styling.
        It is completely frontend-only and uses mock data, React Router, and React Context for state management.
      </p>
      <p className="text-muted">
        Primary: #3b82f6, Success: #06b6d4, Light theme.
      </p>
    </div>
  );
};

export default About;
