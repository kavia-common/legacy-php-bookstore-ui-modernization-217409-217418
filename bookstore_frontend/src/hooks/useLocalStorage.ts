import { useEffect, useState } from 'react';

// PUBLIC_INTERFACE
export function useLocalStorage<T>(key: string, initialValue: T) {
  /**
   * Syncs a state value with localStorage.
   * @param key Storage key
   * @param initialValue Initial value when no stored value
   * @returns [value, setValue]
   */
  // Avoid generic type parameter on useState for ambient/minimal React typings
  // Keep state as any internally to prevent tuple inference issues (TS2488) and avoid functional init under untyped useState
  let initial: any;
  try {
    const item = localStorage.getItem(key);
    initial = item ? JSON.parse(item) : initialValue;
  } catch {
    initial = initialValue;
  }
  const [value, setValue] = useState(initial as any);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore write errors
    }
  }, [key, value]);

  // Maintain tuple return but relax inference under minimal types
  return [value as T, setValue as (v: T | ((prev: T) => T)) => void] as const;
}
