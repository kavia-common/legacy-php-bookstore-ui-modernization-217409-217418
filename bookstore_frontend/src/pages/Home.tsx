import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap'; // top-level named imports
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home(): JSX.Element {
  /** Landing page with a short intro */
  return (
    <div>
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body className="p-5 text-center">
          <h1 className="display-6 fw-bold">Welcome to the Bookstore</h1>
          <p className="lead text-muted mt-3">
            Discover your next favorite read from our curated catalog.
          </p>
          <Button as={Link} to="/catalog" variant="primary" className="mt-2">
            Browse Catalog
          </Button>
        </Card.Body>
      </Card>

      <Row className="g-3">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Modern UI</Card.Title>
              <Card.Text>Clean, responsive interface powered by Bootstrap 5.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Browse & Explore</Card.Title>
              <Card.Text>Use filters to find books that match your interests.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Fast & Lightweight</Card.Title>
              <Card.Text>Built with Vite and React 18 for great developer experience.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
