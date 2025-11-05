import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Checkout(): JSX.Element {
  /** Simple placeholder for the checkout */
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Checkout</h5>
        <div className="alert alert-info">
          Use the Payment step to complete your order in this demo.
        </div>
        <Link className="btn btn-primary" to="/checkout/payment">Go to Payment</Link>
      </div>
    </div>
  );
}
