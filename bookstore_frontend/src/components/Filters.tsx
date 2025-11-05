import React, { PropsWithChildren } from 'react';

// PUBLIC_INTERFACE
export default function Filters({ children }: PropsWithChildren): JSX.Element {
  /** Sidebar filters container */
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Filters</h5>
        {children}
      </div>
    </div>
  );
}
