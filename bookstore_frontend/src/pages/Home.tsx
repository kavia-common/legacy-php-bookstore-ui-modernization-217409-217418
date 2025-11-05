import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home(): JSX.Element {
  /** Landing page with a short intro */
  return (
    <div>
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-5 text-center">
          <h1 className="display-6 fw-bold">Welcome to the Bookstore</h1>
          <p className="lead text-muted mt-3">
            Discover your next favorite read from our curated catalog.
          </p>
          <Link to="/catalog" className="btn btn-primary mt-2">
            Browse Catalog
          </Link>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Modern UI</h5>
              <p className="card-text">Clean, responsive interface powered by Bootstrap 5.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Browse & Explore</h5>
              <p className="card-text">Use filters to find books that match your interests.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Fast & Lightweight</h5>
              <p className="card-text">Built with Vite and React 18 for great developer experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
