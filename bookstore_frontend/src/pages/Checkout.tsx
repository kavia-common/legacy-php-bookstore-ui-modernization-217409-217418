import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    exp: '',
    cvc: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!/^[0-9]{5}(-[0-9]{4})?$/.test(form.zip)) e.zip = 'Valid ZIP is required';
    if (!/^[0-9]{13,19}$/.test(form.card.replace(/\s+/g, ''))) e.card = 'Card number must be 13-19 digits';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.exp)) e.exp = 'Expiry must be MM/YY';
    if (!/^\d{3,4}$/.test(form.cvc)) e.cvc = 'CVC must be 3-4 digits';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      clearCart();
    }
  };

  if (submitted) {
    return (
      <div className="alert alert-success">
        <h4 className="alert-heading">Order placed!</h4>
        <p>Thank you for your purchase. This is a demo — no payment was processed.</p>
        <hr />
        <Link className="btn btn-primary" to="/catalog">Continue Shopping</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="alert alert-info">
        Your cart is empty. <Link to="/catalog">Browse the catalog</Link>
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-7">
        <h2 className="h4 mb-3">Checkout</h2>
        <form noValidate onSubmit={onSubmit}>
          <div className="card mb-3">
            <div className="card-body">
              <h6 className="mb-3">Contact</h6>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Name</label>
                  <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="mb-3">Shipping</h6>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input className={`form-control ${errors.address ? 'is-invalid' : ''}`} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label">City</label>
                  <input className={`form-control ${errors.city ? 'is-invalid' : ''}`} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label">ZIP</label>
                  <input className={`form-control ${errors.zip ? 'is-invalid' : ''}`} value={form.zip} onChange={e => setForm({ ...form, zip: e.target.value })} />
                  {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6 className="mb-3">Payment</h6>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Card Number</label>
                  <input className={`form-control ${errors.card ? 'is-invalid' : ''}`} value={form.card} onChange={e => setForm({ ...form, card: e.target.value })} placeholder="1234123412341234" />
                  {errors.card && <div className="invalid-feedback">{errors.card}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label">Expiry (MM/YY)</label>
                  <input className={`form-control ${errors.exp ? 'is-invalid' : ''}`} value={form.exp} onChange={e => setForm({ ...form, exp: e.target.value })} placeholder="12/27" />
                  {errors.exp && <div className="invalid-feedback">{errors.exp}</div>}
                </div>
                <div className="col-6">
                  <label className="form-label">CVC</label>
                  <input className={`form-control ${errors.cvc ? 'is-invalid' : ''}`} value={form.cvc} onChange={e => setForm({ ...form, cvc: e.target.value })} placeholder="123" />
                  {errors.cvc && <div className="invalid-feedback">{errors.cvc}</div>}
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-success btn-lg" type="submit">Place Order</button>
        </form>
      </div>
      <div className="col-12 col-lg-5">
        <div className="card">
          <div className="card-body">
            <h6 className="mb-3">Order Summary</h6>
            <ul className="list-group list-group-flush">
              {items.map(({ book, quantity }) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={book.id}>
                  <span>{book.title} × {quantity}</span>
                  <span>${(book.price * quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fw-bold">Total</span>
              <span className="fw-bold text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
