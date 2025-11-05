/**
 * Minimal DOM typings for event targets used in change handlers.
 */
interface HTMLInputElement {
  value: any;
}
interface HTMLSelectElement {
  value: any;
}
interface EventTarget {
  value?: any;
}
