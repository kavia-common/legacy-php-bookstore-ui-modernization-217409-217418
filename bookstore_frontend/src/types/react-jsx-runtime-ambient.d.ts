/**
 * Minimal ambient module for React 17+ automatic JSX runtime.
 * This unblocks TypeScript when @types/react is not available in CI.
 */
declare module 'react/jsx-runtime' {
  const jsx: any;
  const jsxs: any;
  const Fragment: any;
  export { jsx, jsxs, Fragment };
}
