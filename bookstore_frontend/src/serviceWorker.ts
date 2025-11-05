 // PUBLIC_INTERFACE
 export function unregisterServiceWorker(): void {
   /**
    * Unregister any existing service workers for this origin.
    * This project does not use a service worker. If you had previously registered one,
    * calling this function will remove it.
    */
   if ('serviceWorker' in navigator) {
     // Unregister all known registrations
     navigator.serviceWorker.getRegistrations?.()
       .then(regs => {
         regs.forEach(reg => {
           try { reg.unregister(); } catch { /* ignore */ }
         });
       })
       .catch(() => { /* ignore */ });

     // Best-effort: also try the default scope registration (if supported)
     try {
       navigator.serviceWorker.getRegistration?.()
         ?.then(reg => { try { reg?.unregister(); } catch { /* ignore */ } })
         .catch(() => { /* ignore */ });
     } catch { /* ignore */ }

     // Clear SW caches if any were left over
     try {
       // @ts-ignore - caches is a global in browsers
       caches?.keys?.().then((keys: string[]) => {
         keys.forEach(k => {
           try {
             // @ts-ignore
             caches.delete?.(k);
           } catch { /* ignore */ }
         });
       }).catch(() => { /* ignore */ });
     } catch { /* ignore */ }
   }
 }
