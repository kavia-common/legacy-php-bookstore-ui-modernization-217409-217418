import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="py-5">
      <div className="p-5 mb-4 bg-white rounded-3 shadow-sm">
        <div className="container-fluid py-5">
          <h1 className="display-6 fw-bold">Welcome to the Modern Bookstore</h1>
          <p className="col-md-8 fs-5">
            Explore a curated collection of books across technology, fiction, design, and more.
            Browse the catalog, read details, add to cart, and complete a mock checkout — all in a modern UI.
          </p>
          <Link to="/catalog" className="btn btn-primary btn-lg">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
