import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import BookDetails from '../pages/BookDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

// PUBLIC_INTERFACE
export default function AppRoutes(): JSX.Element {
  /** Defines all routes for the application */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
