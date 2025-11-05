import React from 'react';
import { CartProvider } from './context/CartContext';
import { AppRouter } from './router';


// PUBLIC_INTERFACE
export default function App() {
  /** Main application entry mounting Router inside CartProvider. */
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}
