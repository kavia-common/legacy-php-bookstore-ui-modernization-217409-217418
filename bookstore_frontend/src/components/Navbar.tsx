import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { sampleBooks } from '../data/sampleBooks';
import type { Book } from './ProductList';
import { attachFallback, getImageSrc } from '../utils/imageUtils';

// PUBLIC_INTERFACE
export default function AppNavbar(): JSX.Element {
  /**
   * Top navigation bar with a global search box.
   * The search shows an accessible dropdown of up to 6 suggestions with thumbnails.
   * Keyboard interactions: Up/Down to move, Enter to select, Esc to close.
   * Enter on a free text navigates to /catalog?q=<query>.
   * If the query exactly matches a title (case-insensitive) it redirects to that book details.
   */
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // Search state
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const listboxId = 'navbar-search-listbox';
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.trim().toLowerCase();
    // Filter by title match priority then author as secondary
    const matches = sampleBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
    );
    // Sort to move closer title matches first
    matches.sort((a, b) => {
      const at = a.title.toLowerCase().indexOf(q);
      const bt = b.title.toLowerCase().indexOf(q);
      const aa = a.author.toLowerCase().indexOf(q);
      const ba = b.author.toLowerCase().indexOf(q);
      const ascore = (at === -1 ? 999 : at) + (aa === -1 ? 1000 : aa + 5);
      const bscore = (bt === -1 ? 999 : bt) + (ba === -1 ? 1000 : ba + 5);
      return ascore - bscore;
    });
    return matches.slice(0, 6);
  }, [search]);

  // Open/close dropdown depending on results and input focus
  useEffect(() => {
    setDropdownOpen(search.trim().length > 0 && results.length > 0);
    setActiveIndex(-1);
  }, [search, results.length]);

  // Click outside to close
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(t) &&
        inputRef.current &&
        !inputRef.current.contains(t)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  function goToCatalogWithQuery(q: string) {
    const queryParam = encodeURIComponent(q.trim());
    navigate(`/catalog?q=${queryParam}`);
    setDropdownOpen(false);
    // Note for tests: assert that URL contains ?q= and Catalog pre-filters.
  }

  function goToBookDetails(id: number) {
    navigate(`/book/${id}`);
    setDropdownOpen(false);
  }

  function handleSubmit() {
    const q = search.trim();
    if (!q) {
      // If empty, go to catalog
      navigate('/catalog');
      setDropdownOpen(false);
      return;
    }
    // Exact title match redirect
    const exact = sampleBooks.find(
      (b) => b.title.toLowerCase() === q.toLowerCase()
    );
    if (exact) {
      goToBookDetails(exact.id);
      return;
    }
    goToCatalogWithQuery(q);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!dropdownOpen && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
      return;
    }
    if (!dropdownOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((idx) => {
        const next = idx + 1;
        return next >= results.length ? 0 : next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((idx) => {
        const prev = idx - 1;
        return prev < 0 ? results.length - 1 : prev;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < results.length) {
        goToBookDetails(results[activeIndex].id);
      } else {
        handleSubmit();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setDropdownOpen(false);
    }
  }

  const fallback = '/assets/books/placeholder-book.png';

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={close}>
          📚 Bookstore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={close} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog" onClick={close}>
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" onClick={close}>
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout" onClick={close}>
                Checkout
              </NavLink>
            </li>
          </ul>

          {/* Global Search */}
          <form
            className="d-flex position-relative"
            role="search"
            aria-label="Global book search"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">🔎</span>
              <input
                ref={inputRef}
                type="search"
                className="form-control border-start-0"
                placeholder="Search books by title or author"
                aria-label="Search books"
                aria-controls={listboxId}
                aria-expanded={dropdownOpen}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>

            {/* Suggestions dropdown */}
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="dropdown-menu show mt-1 p-0 w-100 shadow search-dropdown"
                role="listbox"
                id={listboxId}
              >
                {results.map((book: Book, idx: number) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={book.id}
                      type="button"
                      role="option"
                      aria-selected={active}
                      className={`dropdown-item d-flex align-items-center gap-2 ${active ? 'active' : ''}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => goToBookDetails(book.id)}
                    >
                      <div className="flex-shrink-0 rounded overflow-hidden" style={{ width: 32, height: 42 }}>
                        <img
                          src={getImageSrc(book.imageUrl)}
                          alt={`Cover of ${book.title}`}
                          className="w-100 h-100 object-fit-cover"
                          onError={(e) => attachFallback(e, book.imageUrl)}
                        />
                      </div>
                      <div className="d-flex flex-column text-start">
                        <span className="fw-semibold">{book.title}</span>
                        <small className="text-muted">{book.author}</small>
                      </div>
                      <span className="ms-auto small text-secondary">${book.price.toFixed(2)}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
