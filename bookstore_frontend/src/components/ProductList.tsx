import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { attachFallback, getImageSrc, useImageDiagnostics } from '../utils/imageUtils';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

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
   * Includes diagnostics mode badge to show image status.
   */
  if (!items.length) {
    return <p className="text-muted">No books match your criteria.</p>;
  }

  const diagnostics = useImageDiagnostics();
  const [failedIds, setFailedIds] = useState<Record<number, boolean>>({});
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  function showBadge(badgeId: string) {
    const badge = document.getElementById(badgeId);
    if (!badge) return;
    badge.classList.add('show');
    window.setTimeout(() => {
      badge.classList.remove('show');
    }, 1200);
  }

  function handleAddToCart(book: Book, badgeId: string) {
    if (!user) {
      // Require login to add to cart
      const next = location.pathname + location.search;
      navigate(`/login?next=${encodeURIComponent(next)}`);
      return;
    }
    addToCart(book, 1);
    showBadge(badgeId);
  }

  return (
    <div className="row g-3">
      {items.map((book) => {
        const addedBadgeId = `added-badge-${book.id}`;
        const src = getImageSrc(book.imageUrl);
        const didFail = !!failedIds[book.id];

        return (
          <div key={book.id} className="col-12 col-sm-6 col-lg-4">
            {/* Make the card focusable to enable :focus-within styles on keyboard nav */}
            <div className="card h-100 product-card shadow-hover" tabIndex={0}>
              {/* Image header with overlay actions */}
              <div className="card-media-3x4 position-relative product-media">
                <img
                  src={src}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  className="cover-image"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    setFailedIds((prev) => ({ ...prev, [book.id]: true }));
                    attachFallback(e, book.imageUrl);
                  }}
                />
                {/* Quick actions overlay - visible on hover and focus-within */}
                <div className="product-actions-overlay" aria-hidden="true" />
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

                {diagnostics && (
                  <div className="mt-1">
                    <span
                      className={`badge rounded-pill ${didFail ? 'bg-warning text-dark' : 'bg-success-subtle text-success'}`}
                      title={didFail ? 'Image failed, using placeholder' : 'Image loaded'}
                    >
                      {didFail ? 'img: placeholder' : 'img: ok'}
                    </span>
                  </div>
                )}

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
