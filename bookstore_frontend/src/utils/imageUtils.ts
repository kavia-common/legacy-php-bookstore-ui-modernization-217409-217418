export const BOOKS_ASSET_BASE = '/assets/books/';
// Use a remote placeholder so we never depend on local public assets.
export const PLACEHOLDER_BOOK = 'https://placehold.co/480x640?text=Book';

// PUBLIC_INTERFACE
export function getImageSrc(candidate?: string): string {
  /**
   * Resolve image src with graceful handling:
   * - If candidate is a full URL (http/https/data), return as-is.
   * - If candidate is a relative/local path, return as-is (legacy tolerance).
   * - Otherwise, return the remote placeholder.
   */
  if (!candidate || typeof candidate !== 'string') return PLACEHOLDER_BOOK;
  const src = candidate.trim();

  // Allow external URLs directly
  if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) {
    return src;
  }

  // Allow absolute public paths e.g., /assets/books/name.jpg (legacy tolerance)
  if (src.startsWith('/')) {
    return src;
  }

  // If it's a bare filename, previously we coerced to /assets/books/<name>;
  // now we avoid constructing local paths—prefer placeholder if not a URL/absolute.
  const hasFileLike = /\.[a-z0-9]+$/i.test(src);
  if (hasFileLike) {
    // Still allow pre-existing cases pointing under /assets/books.
    return `${BOOKS_ASSET_BASE}${src.split('/').pop()}`;
  }

  return PLACEHOLDER_BOOK;
}

// PUBLIC_INTERFACE
export function attachFallback(e: React.SyntheticEvent<HTMLImageElement>, originalSrc?: string): void {
  /** Swap to placeholder once if the image load fails; emit console.warn with failing src. */
  const img = e.currentTarget;
  const applied = img.getAttribute('data-fallback-applied');
  if (!applied) {
    const failing = originalSrc || img.src;
    console.warn('Image failed to load, applying placeholder:', failing);
    img.src = PLACEHOLDER_BOOK;
    img.setAttribute('data-fallback-applied', 'true');
  }
}

// PUBLIC_INTERFACE
export function useImageDiagnostics(): boolean {
  /**
   * Return true if developer diagnostics mode is enabled to render a small status badge
   * below images/cards. This uses REACT_APP_NODE_ENV and REACT_APP_FEATURE_FLAGS from env.
   * Enable by setting REACT_APP_FEATURE_FLAGS=diagnostics or building in development.
   */
  const env = (import.meta as any).env || {};
  const isDev = env?.MODE === 'development' || env?.DEV || process?.env?.NODE_ENV === 'development';
  const flags = (env?.REACT_APP_FEATURE_FLAGS as string) || (process?.env?.REACT_APP_FEATURE_FLAGS as string) || '';
  return isDev || flags.split(',').map((s) => s.trim().toLowerCase()).includes('diagnostics');
}
