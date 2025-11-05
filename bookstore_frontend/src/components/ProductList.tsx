import React from 'react';
import { Link } from 'react-router-dom';

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  imageUrl?: string; // optional cover image url
};

// PUBLIC_INTERFACE
export default function ProductList({ items }: { items: Book[] }): JSX.Element {
  /**
   * Renders a grid of book cards with cover images.
   * Adds an accessible overlay with quick actions on hover and focus within:
   * - "View details" navigates to /book/:id
   * - "Add to Cart" shows non-blocking feedback (console + inline badge)
   */
  if (!items.length) {
    return <p className="text-muted">No books match your criteria.</p>;
  }

  const fallback = '/assets/books/placeholder-book.png';

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, originalSrc?: string) => {
    const t = e.currentTarget;
    // Prevent infinite loop if fallback also fails
    if (!t.getAttribute('data-fallback-applied')) {
      console.warn('Image failed to load, applying fallback:', originalSrc || t.src);
      t.src = fallback;
      t.setAttribute('data-fallback-applied', 'true');
    }
  };

  function handleAddToCart(book: Book, badgeId: string) {
    // Placeholder cart handler: non-blocking console log and show a transient inline badge
    console.log(`Add to Cart clicked for book id=${book.id} title="${book.title}"`);
    const badge = document.getElementById(badgeId);
    if (badge) {
      badge.classList.add('show');
      // Auto-hide after short delay without blocking UI
      window.setTimeout(() => {
        badge.classList.remove('show');
      }, 1200);
    }
  }

  return (
    <div className="row g-3">
      {items.map((book) => {
        const addedBadgeId = `added-badge-${book.id}`;
        return (
          <div key={book.id} className="col-12 col-sm-6 col-lg-4">
            {/* Make the card focusable to enable :focus-within styles on keyboard nav */}
            <div className="card h-100 shadow-sm product-card border-0" tabIndex={0}>
              {/* Image header with overlay actions */}
              <div className="ratio ratio-3x4 position-relative product-media">
                <img
                  src={book.imageUrl || fallback}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  className="card-img-top book-cover"
                  onError={(e) => handleImgError(e, book.imageUrl)}
                />
                {/* Quick actions overlay - visible on hover and focus-within */}
                <div
                  className="product-actions-overlay"
                  aria-hidden="true"
                />
                <div
                  className="product-actions"
                  role="group"
                  aria-label={`Quick actions for ${book.title}`}
                >
                  <Link
                    to={`/book/${book.id}`}
                    className="btn btn-sm btn-light shadow-sm"
                    aria-label={`View details for ${book.title}`}
                  >
                    View details
                  </Link>
                  <button
                    className="btn btn-sm btn-primary shadow-sm"
                    aria-label={`Add ${book.title} to cart`}
                    onClick={() => handleAddToCart(book, addedBadgeId)}
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="card-title mb-1">{book.title}</h5>
                  <span className="badge text-bg-light text-dark">{book.category}</span>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
                <p className="card-text text-truncate" title={book.description}>
                  {book.description}
                </p>

                <div className="mt-auto d-flex justify-content-between align-items-center pt-2">
                  <strong className="fs-5">${book.price.toFixed(2)}</strong>
                  <div className="position-relative">
                    {/* Non-blocking small badge feedback when Add to Cart is clicked */}
                    <span id={addedBadgeId} className="added-badge" role="status" aria-live="polite">
                      Added
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
