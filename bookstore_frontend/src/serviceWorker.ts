 // PUBLIC_INTERFACE
 export function unregisterServiceWorker(): void {
   /**
    * Unregister any existing service workers for this origin.
    * This project does not use a service worker. If you had previously registered one,
    * calling this function will remove it.
    */
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.getRegistrations?.().then(regs => {
       regs.forEach(reg => {
         try {
           reg.unregister();
         } catch {
           // ignore
         }
       });
     }).catch(() => {
       // ignore
     });
   }
 }
