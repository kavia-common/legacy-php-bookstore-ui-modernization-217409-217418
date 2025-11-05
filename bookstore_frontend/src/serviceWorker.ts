 /**
  * Service worker is intentionally disabled for this project.
  * This module provides a no-op export to avoid accidental registrations elsewhere.
  */

 // PUBLIC_INTERFACE
 export function unregisterServiceWorker(): void {
   /** No-op: kept for backward compatibility. All SW cleanup is done in index.tsx at startup. */
 }
