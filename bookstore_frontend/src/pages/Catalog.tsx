import React, { useMemo, useState } from 'react';
import data from '../data/books.json';
import type { Book } from '../types';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 8;

const Catalog: React.FC = () => {
  const books = data as Book[];

  const categories = useMemo(() => {
    return Array.from(new Set(books.map(b => b.category)));
  }, [books]);

  const maxPrice = useMemo(() => Math.ceil(Math.max(...books.map(b => b.price))), [books]);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(maxPrice);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter(b => {
      const matchesQuery = q ? (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)) : true;
      const matchesCategory = category ? b.category === category : true;
      const matchesPrice = b.price <= price;
      const matchesRating = b.rating >= rating;
      return matchesQuery && matchesCategory && matchesPrice && matchesRating;
    });
  }, [books, query, category, price, rating]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 on filter changes
  React.useEffect(() => {
    setPage(1);
  }, [query, category, price, rating]);

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-3">
        <div className="sidebar">
          <div className="mb-3">
            <SearchBar query={query} onChange={setQuery} />
          </div>
          <Filters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
            maxPrice={maxPrice}
            selectedMaxPrice={price}
            onPriceChange={setPrice}
            minRating={0}
            selectedMinRating={rating}
            onRatingChange={setRating}
          />
        </div>
      </div>
      <div className="col-12 col-lg-9">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">Catalog</h2>
          <span className="text-muted">{filtered.length} result(s)</span>
        </div>
        <div className="row g-3">
          {pageItems.map(b => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={b.id}>
              <BookCard book={b} />
            </div>
          ))}
          {pageItems.length === 0 && (
            <div className="col-12">
              <div className="alert alert-info">No books found matching your criteria.</div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <Pagination current={page} totalPages={totalPages} onPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
