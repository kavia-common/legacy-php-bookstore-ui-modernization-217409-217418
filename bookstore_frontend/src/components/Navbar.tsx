import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function AppNavbar(): JSX.Element {
  /** Top navigation bar using Bootstrap classes only */
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={close}>
          📚 Bookstore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={close} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog" onClick={close}>
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" onClick={close}>
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout" onClick={close}>
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
