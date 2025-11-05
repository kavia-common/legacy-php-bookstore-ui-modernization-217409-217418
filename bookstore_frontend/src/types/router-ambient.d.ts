/**
 * Minimal ambient types for react-router-dom to satisfy the compiler.
 */
declare module 'react-router-dom' {
  export const BrowserRouter: React.FC<React.PropsWithChildren>;
  export const Routes: React.FC<React.PropsWithChildren>;
  export const Route: React.FC<any>;
  export const Navigate: React.FC<any>;
  export const Link: React.FC<any>;
  export const NavLink: React.FC<any>;
  export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T;
}
