import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Book } from '../components/ProductList';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  totalQty: number;
  subtotal: number;
  // PUBLIC_INTERFACE
  addToCart: (book: Book, qty?: number) => void;
  // PUBLIC_INTERFACE
  removeFromCart: (id: number) => void;
  // PUBLIC_INTERFACE
  updateQty: (id: number, qty: number) => void;
  // PUBLIC_INTERFACE
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const LS_KEY = 'bookstore.cart.v1';

// PUBLIC_INTERFACE
export function CartProvider({ children }: { children: React.ReactNode }): JSX.Element {
  /** Client-side cart persisted in localStorage. */
  const [items, setItems] = useState<CartItem[]>([]);

  // load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed.filter((i) => Number.isFinite(i.id) && Number.isFinite(i.qty) && i.qty > 0));
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  // PUBLIC_INTERFACE
  const addToCart = useCallback((book: Book, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === book.id);
      if (existing) {
        return prev.map((i) => i.id === book.id ? { ...i, qty: Math.min(99, i.qty + qty) } : i);
      }
      return [...prev, { id: book.id, title: book.title, price: book.price, qty: Math.min(99, Math.max(1, qty)) }];
    });
  }, []);

  // PUBLIC_INTERFACE
  const removeFromCart = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  // PUBLIC_INTERFACE
  const updateQty = useCallback((id: number, qty: number) => {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.min(99, Math.max(1, Math.floor(qty) || 1)) } : i));
  }, []);

  // PUBLIC_INTERFACE
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalQty = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(() => Number(items.reduce((sum, i) => sum + i.qty * i.price, 0).toFixed(2)), [items]);

  const value = useMemo(() => ({ items, totalQty, subtotal, addToCart, removeFromCart, updateQty, clearCart }), [items, totalQty, subtotal, addToCart, removeFromCart, updateQty, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// PUBLIC_INTERFACE
export function useCart(): CartContextType {
  /** Access the CartContext; throws if used outside provider. */
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
