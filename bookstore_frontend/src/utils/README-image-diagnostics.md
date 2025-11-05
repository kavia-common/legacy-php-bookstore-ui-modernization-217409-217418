Image diagnostics mode

- The components ProductList and BookDetails render a small status badge indicating whether the image loaded ("img: ok") or fell back to placeholder ("img: placeholder").
- Diagnostics is enabled when:
  * the build runs in development (Vite's import.meta.env.DEV), or
  * REACT_APP_FEATURE_FLAGS contains "diagnostics" (comma-separated).

To enable via env:
  REACT_APP_FEATURE_FLAGS=diagnostics

The helper functions live in src/utils/imageUtils.ts:
- getImageSrc(candidate?): string
- attachFallback(event, originalSrc?)
- useImageDiagnostics(): boolean
