export const BOOKS_ASSET_BASE = '/assets/books/';
export const PLACEHOLDER_BOOK = `${BOOKS_ASSET_BASE}placeholder-book.png`;

// PUBLIC_INTERFACE
export function getImageSrc(candidate?: string): string {
  /** Resolve image src to a valid path under /assets/books/ with placeholder fallback. */
  if (!candidate || typeof candidate !== 'string') return PLACEHOLDER_BOOK;

  // Normalize candidate: ensure it starts with the public assets base
  let src = candidate.trim();
  if (!src.startsWith(BOOKS_ASSET_BASE)) {
    // Only allow filenames and relative hints; coerce to /assets/books/<filename>
    const justName = src.split('/').pop() || '';
    src = `${BOOKS_ASSET_BASE}${justName}`;
  }

  // If normalized path doesn't have a filename, use placeholder
  const name = src.split('/').pop() || '';
  if (!name || !name.includes('.')) {
    return PLACEHOLDER_BOOK;
  }

  return src;
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
