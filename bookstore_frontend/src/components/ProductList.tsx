import React from 'react';
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
    <div className="row g-3">
      {items.map((book) => (
        <div key={book.id} className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="card-title mb-1">{book.title}</h5>
                <span className="badge text-bg-light text-dark">{book.category}</span>
              </div>
              <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
              <p className="card-text text-truncate" title={book.description}>
                {book.description}
              </p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <strong>${book.price.toFixed(2)}</strong>
                <div className="d-flex gap-2">
                  <Link to={`/book/${book.id}`} className="btn btn-sm btn-outline-primary">
                    Details
                  </Link>
                  <button className="btn btn-sm btn-primary" disabled>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
