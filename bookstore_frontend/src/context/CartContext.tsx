import React, { createContext, useContext, useMemo, useCallback } from 'react';
import type { Book, CartItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CartState = {
  items: CartItem[];
  addToCart: (book: Book, quantity?: number) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
};

// Avoid generic parameter because ambient React types may be minimal in CI
const CartContext = createContext(undefined as unknown as CartState);

// PUBLIC_INTERFACE
export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  /** Provides cart state and actions with localStorage persistence. */
  const [items, setItems] = useLocalStorage<CartItem[]>('cart_items', []);

  const addToCart = useCallback((book: Book, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(ci => ci.book.id === book.id);
      if (existing) {
        return prev.map(ci =>
          ci.book.id === book.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prev, { book, quantity }];
    });
  }, [setItems]);

  const removeFromCart = useCallback((bookId: string) => {
    setItems(prev => prev.filter(ci => ci.book.id !== bookId));
  }, [setItems]);

  const updateQuantity = useCallback((bookId: string, quantity: number) => {
    setItems(prev => prev.map(ci => ci.book.id === bookId ? { ...ci, quantity } : ci));
  }, [setItems]);

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const totalCount = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity * it.book.price, 0),
    [items]
  );

  const value = useMemo(() => ({
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice
  }), [items, addToCart, removeFromCart, updateQuantity, clearCart, totalCount, totalPrice]) as CartState;

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// PUBLIC_INTERFACE
export const useCart = (): CartState => {
  /** Access the cart context state and actions. */
  const ctx = useContext(CartContext) as CartState | undefined;
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
