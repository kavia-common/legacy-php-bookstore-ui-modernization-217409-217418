import React, { useEffect, useMemo, useState } from 'react';
import { sampleBooks } from '../data/sampleBooks';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { useLocation, useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Catalog(): JSX.Element {
  /**
   * Displays a list of books with client-side filtering.
   * Reads ?q=<query> from the URL to pre-filter results and shows an active filter badge.
   * Tests stub: verify that navigating to /catalog?q=clean filters to "Clean Code".
   */
  const location = useLocation();
  const navigate = useNavigate();

  const urlQ = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('q') || '';
  }, [location.search]);

  const [query, setQuery] = useState<string>(urlQ);
  const [category, setCategory] = useState('All');

  // Sync local state when URL changes (e.g., user submits search from navbar)
  useEffect(() => {
    setQuery(urlQ);
  }, [urlQ]);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(sampleBooks.map((b) => b.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return sampleBooks.filter((b) => {
      const matchesQuery =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      const matchesCat = category === 'All' || b.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  function clearSearch() {
    setQuery('');
    const params = new URLSearchParams(location.search);
    params.delete('q');
    navigate({ pathname: '/catalog', search: params.toString() }, { replace: true });
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-3">
        <Filters>
          <div className="mb-3">
            <label className="form-label">Search</label>
            <input
              type="search"
              className="form-control"
              placeholder="Title or author"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {urlQ && (
              <div className="mt-2 d-flex align-items-center gap-2">
                <span className="badge text-bg-light text-dark">
                  Filter: “{urlQ}”
                </span>
                <button className="btn btn-sm btn-outline-secondary" onClick={clearSearch}>
                  Clear
                </button>
              </div>
            )}
          </div>
          <div>
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </Filters>
      </div>
      <div className="col-12 col-md-9">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            {query && (
              <span className="badge rounded-pill bg-primary-subtle text-primary me-2">
                “{query}”
              </span>
            )}
            {category !== 'All' && (
              <span className="badge rounded-pill bg-info-subtle text-info">
                {category}
              </span>
            )}
          </div>
        </div>
        <ProductList items={filtered} />
      </div>
    </div>
  );
}
