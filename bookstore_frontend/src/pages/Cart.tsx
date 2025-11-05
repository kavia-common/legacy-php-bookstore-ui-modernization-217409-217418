import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div>
      <h2 className="h4 mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/catalog">Browse the catalog</Link>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Price</th>
                  <th style={{ width: 140 }}>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ book, quantity }) => (
                  <tr key={book.id}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src={book.cover} alt={book.title} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 6 }} />
                        <div>
                          <div className="fw-semibold">{book.title}</div>
                          <small className="text-muted">{book.author}</small>
                        </div>
                      </div>
                    </td>
                    <td>${book.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        value={quantity}
                        onChange={(e) => updateQuantity(book.id, Math.max(1, Number(e.target.value)))}
                        aria-label={`Quantity for ${book.title}`}
                      />
                    </td>
                    <td>${(book.price * quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(book.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={clearCart}>Clear Cart</button>
                    <span className="fw-bold me-3">Subtotal: ${totalPrice.toFixed(2)}</span>
                    <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
