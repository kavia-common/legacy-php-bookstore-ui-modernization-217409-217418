import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  // PUBLIC_INTERFACE
  login: (email: string, password: string) => Promise<void>;
  // PUBLIC_INTERFACE
  signup: (name: string, email: string, password: string) => Promise<void>;
  // PUBLIC_INTERFACE
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LS_KEY = 'bookstore.auth.user';

// PUBLIC_INTERFACE
export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  /**
   * Provides mock authentication persisted to localStorage.
   * No backend calls; simple validation and storage.
   */
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthUser;
        if (parsed && parsed.email) {
          setUser(parsed);
        }
      }
    } catch {
      // ignore parse errors
    } finally {
      setLoading(false);
    }
  }, []);

  const persist = useCallback((u: AuthUser | null) => {
    if (u) {
      localStorage.setItem(LS_KEY, JSON.stringify(u));
    } else {
      localStorage.removeItem(LS_KEY);
    }
  }, []);

  // PUBLIC_INTERFACE
  const login = useCallback(async (email: string, password: string) => {
    // Very basic validation to mimic auth
    if (!email || !password) {
      throw new Error('Email and password are required.');
    }
    // Fake delay
    await new Promise((r) => setTimeout(r, 300));
    const u: AuthUser = { id: 'u_' + Date.now(), name: email.split('@')[0] || 'User', email };
    setUser(u);
    persist(u);
  }, [persist]);

  // PUBLIC_INTERFACE
  const signup = useCallback(async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      throw new Error('All fields are required.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }
    await new Promise((r) => setTimeout(r, 300));
    const u: AuthUser = { id: 'u_' + Date.now(), name, email };
    setUser(u);
    persist(u);
  }, [persist]);

  // PUBLIC_INTERFACE
  const logout = useCallback(() => {
    setUser(null);
    persist(null);
  }, [persist]);

  const value = useMemo(() => ({ user, loading, login, signup, logout }), [user, loading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// PUBLIC_INTERFACE
export function useAuth(): AuthContextType {
  /** Access the AuthContext; throws if used outside provider. */
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
