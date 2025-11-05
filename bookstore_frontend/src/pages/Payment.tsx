import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

// PUBLIC_INTERFACE
export default function Payment(): JSX.Element {
  /**
   * Mock payment form capturing name, card number, expiry, and CVC.
   * Validates fields client-side and shows a success screen. No backend calls.
   */
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [agree, setAgree] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const canPay = useMemo(() => {
    return (
      name.trim().length > 1 &&
      /^\d{13,19}$/.test(number.replace(/\s+/g, '')) &&
      /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry) &&
      /^\d{3,4}$/.test(cvc) &&
      agree &&
      items.length > 0
    );
  }, [name, number, expiry, cvc, agree, items.length]);

  function formatCardNumber(value: string) {
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!canPay) {
      setError('Please fill in valid payment details.');
      return;
    }
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 600));
    setProcessing(false);
    setSuccess(true);
    clearCart();
  }

  if (items.length === 0 && !success) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Payment</h5>
          <div className="alert alert-info mb-0">Your cart is empty.</div>
          <div className="mt-3">
            <Link to="/catalog" className="btn btn-outline-primary">Continue shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <div className="display-6 mb-2">✅</div>
          <h5 className="card-title">Payment successful</h5>
          <p className="text-secondary">Thank you for your purchase! A confirmation has been generated for this demo.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Go to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-7">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Payment details</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name on card</label>
                <input id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="number">Card number</label>
                <input
                  id="number"
                  inputMode="numeric"
                  className="form-control"
                  placeholder="4242 4242 4242 4242"
                  value={number}
                  onChange={(e) => setNumber(formatCardNumber(e.target.value))}
                  required
                />
                <div className="form-text">No real payment is processed.</div>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label" htmlFor="expiry">Expiry (MM/YY)</label>
                  <input id="expiry" className="form-control" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} required />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label" htmlFor="cvc">CVC</label>
                  <input id="cvc" inputMode="numeric" className="form-control" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))} required />
                </div>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <label className="form-check-label" htmlFor="agree">I agree to the terms & conditions</label>
              </div>
              <button className="btn btn-primary" type="submit" disabled={!canPay || processing}>
                {processing ? 'Processing…' : `Pay $${subtotal.toFixed(2)}`}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h6 className="card-title">Order summary</h6>
            <ul className="list-group list-group-flush">
              {items.map((i) => (
                <li key={i.id} className="list-group-item d-flex justify-content-between">
                  <span className="text-truncate">{i.title} × {i.qty}</span>
                  <span>${(i.price * i.qty).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Subtotal</strong>
                <strong>${subtotal.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
