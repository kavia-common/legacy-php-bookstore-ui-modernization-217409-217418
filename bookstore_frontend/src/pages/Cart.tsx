import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

// PUBLIC_INTERFACE
export default function Cart(): JSX.Element {
  /**
   * Cart page showing items, quantity controls, subtotal, and a proceed-to-checkout button.
   * Requires login to proceed to checkout.
   */
  const { items, subtotal, updateQty, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  function proceed() {
    if (!user) {
      navigate(`/login?next=${encodeURIComponent('/checkout/payment')}`);
      return;
    }
    navigate('/checkout/payment');
  }

  if (items.length === 0) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Your Cart</h5>
          <div className="alert alert-info">Your cart is empty.</div>
          <Link to="/catalog" className="btn btn-outline-primary">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Your Cart</h5>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Book</th>
                    <th style={{ width: 140 }}>Quantity</th>
                    <th className="text-end" style={{ width: 120 }}>Price</th>
                    <th className="text-end" style={{ width: 120 }}>Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {items.map((i) => (
                    <tr key={i.id}>
                      <td className="text-truncate">{i.title}</td>
                      <td>
                        <div className="input-group input-group-sm" style={{ maxWidth: 140 }}>
                          <button className="btn btn-outline-secondary" onClick={() => updateQty(i.id, i.qty - 1)}>-</button>
                          <input
                            className="form-control text-center"
                            value={i.qty}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              if (Number.isFinite(val)) updateQty(i.id, val);
                            }}
                          />
                          <button className="btn btn-outline-secondary" onClick={() => updateQty(i.id, i.qty + 1)}>+</button>
                        </div>
                      </td>
                      <td className="text-end">${i.price.toFixed(2)}</td>
                      <td className="text-end">${(i.price * i.qty).toFixed(2)}</td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(i.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Link className="btn btn-outline-secondary" to="/catalog">Continue shopping</Link>
              <button className="btn btn-primary" onClick={proceed}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h6 className="card-title">Summary</h6>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div className="text-secondary small mt-2">Taxes and shipping are not applied in this demo.</div>
            <button className="btn btn-gradient-primary w-100 mt-3" onClick={proceed}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
