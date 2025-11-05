import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../types';
import { useCart } from '../context/CartContext';

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{book.title}</h5>
          <span className="badge bg-primary">${book.price.toFixed(2)}</span>
        </div>
        <p className="text-muted mb-1">{book.author}</p>
        <p className="small flex-grow-1">{book.description}</p>
        <div className="d-flex align-items-center mb-2">
          <span className="rating me-2">{"★".repeat(Math.round(book.rating))}</span>
          <small className="text-muted">({book.rating.toFixed(1)})</small>
        </div>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary w-50" to={`/book/${book.id}`}>Details</Link>
          <button className="btn btn-primary w-50" onClick={() => addToCart(book, 1)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
