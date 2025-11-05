import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/books.json';
import type { Book } from '../types';
import { useCart } from '../context/CartContext';

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const books = data as Book[];
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="alert alert-warning">
        Book not found. <Link to="/catalog">Go back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-5">
        <img src={book.cover} alt={book.title} className="img-fluid rounded" />
      </div>
      <div className="col-12 col-md-7">
        <h2>{book.title}</h2>
        <p className="text-muted">{book.author}</p>
        <div className="d-flex align-items-center mb-2">
          <span className="rating me-2">{"★".repeat(Math.round(book.rating))}</span>
          <small className="text-muted">({book.rating.toFixed(1)})</small>
        </div>
        <p>{book.description}</p>
        <p><span className="badge bg-secondary">{book.category}</span></p>
        <h4 className="text-primary">${book.price.toFixed(2)}</h4>
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-primary" onClick={() => addToCart(book, 1)}>Add to Cart</button>
          <Link to="/catalog" className="btn btn-outline-primary">Back to Catalog</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
