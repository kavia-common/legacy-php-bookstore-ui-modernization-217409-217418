import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleBooks } from '../data/sampleBooks';
import { Badge, Button, Card } from 'react-bootstrap'; // top-level named imports

// PUBLIC_INTERFACE
export default function BookDetails(): JSX.Element {
  /**
   * Displays details for a single book selected from sample data.
   */
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const book = sampleBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Book not found</Card.Title>
          <Card.Text>The requested book does not exist.</Card.Text>
          <Button as={Link} to="/catalog" variant="secondary">
            Back to Catalog
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{book.title}</span>
          <Badge bg="info" text="dark">
            {book.category}
          </Badge>
        </Card.Title>
        <Card.Subtitle className="mb-3 text-muted">by {book.author}</Card.Subtitle>
        <Card.Text>{book.description}</Card.Text>
        <div className="d-flex gap-2 align-items-center">
          <strong className="fs-5">${book.price.toFixed(2)}</strong>
          <Button variant="primary" disabled>
            Add to Cart (demo)
          </Button>
          <Button as={Link} to="/catalog" variant="outline-secondary">
            Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
