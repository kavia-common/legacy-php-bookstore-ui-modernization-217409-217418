/**
 * Global ambient module declarations to unblock TS build in environments
 * where npm may not have resolved @types packages yet.
 * Prefer real @types from npm; this is a minimal fallback.
 */
declare module 'react';
declare module 'react-dom/client';
declare module 'react-router-dom';
