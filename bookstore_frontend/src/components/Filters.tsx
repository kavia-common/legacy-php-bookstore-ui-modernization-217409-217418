import React, { PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap'; // top-level named imports

// PUBLIC_INTERFACE
export default function Filters({ children }: PropsWithChildren): JSX.Element {
  /** Sidebar filters container */
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Filters</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}
