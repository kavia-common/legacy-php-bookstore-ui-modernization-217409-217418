import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function AppNavbar(): JSX.Element {
  /** Top navigation bar */
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📚 Bookstore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalog">
              Catalog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={NavLink} to="/checkout">
              Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
