import React from 'react';
import { Card, Alert } from 'react-bootstrap'; // top-level named imports

// PUBLIC_INTERFACE
export default function Cart(): JSX.Element {
  /** Simple placeholder for the shopping cart */
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Your Cart</Card.Title>
        <Alert variant="info" className="mb-0">
          Cart functionality is not implemented in this demo.
        </Alert>
      </Card.Body>
    </Card>
  );
}
