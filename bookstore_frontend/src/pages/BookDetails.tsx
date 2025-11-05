import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleBooks } from '../data/sampleBooks';

// PUBLIC_INTERFACE
export default function BookDetails(): JSX.Element {
  /**
   * Displays details for a single book selected from sample data, including a large cover image.
   */
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const book = sampleBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Book not found</h5>
          <p className="card-text">The requested book does not exist.</p>
          <Link to="/catalog" className="btn btn-secondary">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const fallback = '/assets/books/placeholder-book.png';

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, originalSrc?: string) => {
    const t = e.currentTarget;
    if (!t.getAttribute('data-fallback-applied')) {
      console.warn('Image failed to load, applying fallback:', originalSrc || t.src);
      t.src = fallback;
      t.setAttribute('data-fallback-applied', 'true');
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="ratio ratio-3x4">
              <img
                src={book.imageUrl || fallback}
                alt={`Cover of ${book.title} by ${book.author}`}
                className="img-fluid rounded book-cover"
                onError={(e) => handleImgError(e, book.imageUrl)}
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{book.title}</h5>
              <span className="badge text-bg-info text-dark">{book.category}</span>
            </div>
            <h6 className="card-subtitle mb-3 text-muted">by {book.author}</h6>
            <p className="card-text">{book.description}</p>
            <div className="d-flex gap-2 align-items-center">
              <strong className="fs-4">${book.price.toFixed(2)}</strong>
              <button className="btn btn-primary" disabled>
                Add to Cart (demo)
              </button>
              <Link to="/catalog" className="btn btn-outline-secondary">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
