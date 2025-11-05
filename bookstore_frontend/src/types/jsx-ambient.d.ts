/**
 * Minimal JSX namespace declaration to satisfy TypeScript when @types/react
 * are not available. This covers intrinsic elements and common attributes.
 * It is intentionally permissive (using any) to unblock builds in CI.
 */
declare namespace JSX {
  // Allow any HTML/SVG intrinsic elements
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  // Support fragments <>...</>
  interface IntrinsicAttributes {
    key?: any;
  }
}
