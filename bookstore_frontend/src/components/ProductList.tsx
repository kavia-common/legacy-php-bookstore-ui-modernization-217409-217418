import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
};

// PUBLIC_INTERFACE
export default function ProductList({ items }: { items: Book[] }): JSX.Element {
  /** Renders a grid of book cards */
  if (!items.length) {
    return <p className="text-muted">No books match your criteria.</p>;
  }

  return (
    <Row className="g-3">
      {items.map((book) => (
        <Col key={book.id} xs={12} sm={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <Card.Title className="mb-1">{book.title}</Card.Title>
                <Badge bg="light" text="dark">
                  {book.category}
                </Badge>
              </div>
              <Card.Subtitle className="mb-2 text-muted">by {book.author}</Card.Subtitle>
              <Card.Text className="text-truncate" title={book.description}>
                {book.description}
              </Card.Text>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <strong>${book.price.toFixed(2)}</strong>
                <div className="d-flex gap-2">
                  <Button as={Link} to={`/book/${book.id}`} size="sm" variant="outline-primary">
                    Details
                  </Button>
                  <Button size="sm" variant="primary" disabled>
                    Add
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
