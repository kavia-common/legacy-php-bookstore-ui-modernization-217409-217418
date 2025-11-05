import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// PUBLIC_INTERFACE
export default function Login(): JSX.Element {
  /**
   * Frontend-only login form. Validates email/password and sets mock auth in localStorage.
   */
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    try {
      setSubmitting(true);
      await login(email, password);
      const params = new URLSearchParams(location.search);
      const next = params.get('next') || '/';
      navigate(next);
    } catch (err: any) {
      setError(err?.message || 'Login failed.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Sign in</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
              </div>
              <button className="btn btn-primary w-100" type="submit" disabled={submitting}>
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
            <div className="text-center mt-3">
              <small className="text-secondary">
                Don't have an account? <Link to="/signup">Create one</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
