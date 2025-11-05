import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/books.json';
import type { Book } from '../types';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  // Use existing mock data, pick a few featured items deterministically
  const books = data as Book[];

  const featuredBooks = useMemo(() => {
    // Simple pick: top 4 by rating
    return [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }, [books]);

  const categories = useMemo(() => {
    const base = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance'];
    // Blend with actual categories to remain relevant
    const fromData = Array.from(new Set(books.map(b => b.category)));
    const merged = Array.from(new Set([...base, ...fromData]));
    return merged.slice(0, 8);
  }, [books]);

  return (
    <div className="py-4">
      {/* Hero Section */}
      <section
        className="rounded-4 p-5 p-md-6 mb-5 shadow-sm position-relative overflow-hidden"
        aria-label="Welcome section"
        style={{
          background:
            'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.12) 40%, rgba(255,255,255,0.6) 100%)',
          border: '1px solid var(--border)'
        }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-7">
            <h1 className="display-6 fw-bold mb-3">
              Discover your next great read
            </h1>
            <p className="lead text-muted mb-4">
              Explore technology, fiction, design, and more — curated picks with a clean, modern experience.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/catalog" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline-primary btn-lg">
                About
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="ratio ratio-16x9 rounded-4" aria-hidden="true" style={{
              background:
                'radial-gradient(75% 60% at 20% 20%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 60%), radial-gradient(75% 60% at 80% 30%, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0) 60%), linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
              border: '1px solid var(--border)'
            }}>
              {/* purely decorative block */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-5" aria-labelledby="featured-categories-heading">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 id="featured-categories-heading" className="h4 mb-0">Browse by Category</h2>
          <Link to="/catalog" className="btn btn-sm btn-outline-primary">View all</Link>
        </div>
        <div className="row g-3">
          {categories.map((c) => (
            <div key={c} className="col-6 col-md-4 col-lg-3">
              <Link
                to={`/catalog`}
                className="text-decoration-none"
                aria-label={`Browse category ${c}`}
              >
                <div className="card h-100 hover-shadow-sm">
                  <div className="card-body d-flex align-items-center gap-2">
                    <span
                      className="badge bg-primary rounded-pill"
                      aria-hidden="true"
                      style={{ width: 10, height: 10, padding: 0 }}
                    />
                    <span className="fw-semibold text-body">{c}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section aria-labelledby="featured-books-heading">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 id="featured-books-heading" className="h4 mb-0">Featured Books</h2>
          <Link to="/catalog" className="btn btn-sm btn-outline-primary">Shop Featured</Link>
        </div>
        <div className="row g-3">
          {featuredBooks.map((b) => (
            <div key={b.id} className="col-12 col-sm-6 col-lg-3">
              <BookCard book={b} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
