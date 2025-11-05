/**
 * Minimal ambient typings to avoid TS7016 when @types/react are not present.
 * This is not a full React typing; it's only to satisfy the compiler in CI.
 */
declare namespace React {
  type ReactNode = any;
  interface FC<P = {}> {
    (props: P & { children?: ReactNode }): any;
  }
  interface PropsWithChildren<P = {}> {
    children?: ReactNode;
  }
  const StrictMode: any;
}
declare module 'react' {
  export = React;
}
declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: any): void;
  };
}
