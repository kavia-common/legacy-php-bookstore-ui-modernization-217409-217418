import React from 'react';
import { Card, Alert } from 'react-bootstrap';

// PUBLIC_INTERFACE
export default function Checkout(): JSX.Element {
  /** Simple placeholder for the checkout */
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Checkout</Card.Title>
        <Alert variant="info" className="mb-0">
          Checkout flow is not implemented in this demo.
        </Alert>
      </Card.Body>
    </Card>
  );
}
