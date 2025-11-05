import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home(): JSX.Element {
  /**
   * Landing page with modern hero section, featured categories, and CTA.
   * Uses Bootstrap 5 utility classes only.
   */
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient rounded-4 p-4 p-md-5 mb-5 text-center text-md-start position-relative overflow-hidden">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-7">
            <h1 className="display-5 fw-bold mb-3">
              Find your next great read
            </h1>
            <p className="lead text-secondary mb-4">
              Explore a curated selection of titles across genres—from timeless classics to the latest bestsellers.
            </p>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <Link to="/catalog" className="btn btn-primary btn-lg px-4">
                Browse catalog
              </Link>
              <a href="#featured" className="btn btn-outline-info btn-lg px-4">
                Explore categories
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5 d-none d-md-block">
            <div className="card border-0 shadow-sm bg-white/75">
              <div className="card-body p-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle bg-primary-subtle text-primary d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 56, height: 56 }}>
                    📚
                  </div>
                  <div>
                    <h5 className="mb-1">Handpicked selections</h5>
                    <p className="mb-0 text-secondary small">
                      Quality over quantity—discover books recommended by enthusiasts and professionals.
                    </p>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle bg-info-subtle text-info d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 56, height: 56 }}>
                    ✨
                  </div>
                  <div>
                    <h5 className="mb-1">Modern & lightweight</h5>
                    <p className="mb-0 text-secondary small">
                      Built with React 18 and Bootstrap 5 for a fast, accessible experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="featured" className="mb-4">
        <div className="d-flex align-items-baseline justify-content-between mb-3">
          <h2 className="h4 mb-0">Featured categories</h2>
          <Link to="/catalog" className="btn btn-link p-0 link-primary">See all</Link>
        </div>

        <div className="row g-3">
          {[
            { name: 'Software', desc: 'Coding best practices, architecture, and more.', badge: 'New' },
            { name: 'Fiction', desc: 'Stories to spark your imagination.', badge: 'Hot' },
            { name: 'Science Fiction', desc: 'Futures imagined—space, tech, and beyond.', badge: 'Trending' },
            { name: 'Self-Help', desc: 'Build habits and level up your life.', badge: 'Popular' },
            { name: 'Memoir', desc: 'True stories, deep insights, real journeys.', badge: 'Editor’s pick' },
            { name: 'Classics', desc: 'Timeless literature that endures.', badge: 'Classic' }
          ].map((cat) => (
            <div className="col-12 col-sm-6 col-lg-4" key={cat.name}>
              <div className="card h-100 shadow-sm border-0 category-card">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title mb-1">{cat.name}</h5>
                    <span className="badge text-bg-light text-dark">{cat.badge}</span>
                  </div>
                  <p className="card-text text-secondary mb-4">{cat.desc}</p>
                  <div className="mt-auto">
                    <Link to="/catalog" className="btn btn-sm btn-outline-primary">
                      Browse {cat.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Feature Cards */}
      <section className="row g-3 mt-1">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm feature-accent">
            <div className="card-body">
              <h5 className="card-title">Curated & simple</h5>
              <p className="card-text text-secondary">
                Clean, responsive interface powered by Bootstrap 5 utilities.
              </p>
              <span className="badge rounded-pill bg-primary-subtle text-primary">UI</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm feature-accent">
            <div className="card-body">
              <h5 className="card-title">Browse & explore</h5>
              <p className="card-text text-secondary">
                Use filters to find titles that match your interests.
              </p>
              <span className="badge rounded-pill bg-info-subtle text-info">Discovery</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm feature-accent">
            <div className="card-body">
              <h5 className="card-title">Fast & lightweight</h5>
              <p className="card-text text-secondary">
                Built with Vite and React 18 for a great developer experience.
              </p>
              <span className="badge rounded-pill bg-success-subtle text-success">Performance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
