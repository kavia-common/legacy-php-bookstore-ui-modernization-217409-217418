import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { totalCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">Bookstore</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink to="/cart" className="btn btn-outline-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {totalCount}
                <span className="visually-hidden">items in cart</span>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
