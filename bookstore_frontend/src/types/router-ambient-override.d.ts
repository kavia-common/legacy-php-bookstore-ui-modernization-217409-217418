declare module 'react-router-dom' {
  import type { FC, PropsWithChildren } from 'react';

  export interface BrowserRouterProps {
    basename?: string;
    window?: any;
    future?: any;
    children?: any;
  }

  export const BrowserRouter: FC<PropsWithChildren<BrowserRouterProps>>;
  export const Routes: FC<PropsWithChildren>;
  export const Route: FC<any>;
  export const Navigate: FC<any>;
  export const Link: FC<any>;
  export const NavLink: FC<any>;
  export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T;
}
