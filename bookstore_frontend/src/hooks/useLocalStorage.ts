import { useEffect, useState } from 'react';

// PUBLIC_INTERFACE
export function useLocalStorage<T>(key: string, initialValue: T) {
  /**
   * Syncs a state value with localStorage.
   * @param key Storage key
   * @param initialValue Initial value when no stored value
   * @returns [value, setValue]
   */
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore write errors
    }
  }, [key, value]);

  return [value, setValue] as const;
}
