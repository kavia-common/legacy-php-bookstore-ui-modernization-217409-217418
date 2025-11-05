import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import BookDetails from './pages/BookDetails';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';

/* Router uses BrowserRouter basename='/' in index.tsx */
//
// PUBLIC_INTERFACE
export function AppRouter() {
  /**
   * Sets up application routes and wraps them in MainLayout.
   * Routes:
   * - / (Home)
   * - /catalog
   * - /book/:id
   * - /cart
   * - /checkout
   * - /about
   */
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
