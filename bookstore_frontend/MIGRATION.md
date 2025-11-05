# Migration Guide: Legacy PHP UI to React (Vite)

This document maps legacy PHP pages to their new React routes and components and summarizes structural changes to run under Vite on port 3000.

## Build/Runtime Changes
- Standardized on Vite + React + TypeScript
- No service worker is used
- No references to /static/js/bundle.js anywhere
- Dev server: http://localhost:3000 (npm run dev)
- Entry HTML: index.html (Vite template)
- Entrypoint: src/main.tsx (React 18 createRoot)

## Routes Mapping (PHP → React)
- index.php → / → src/pages/Home.tsx
- catalog.php → /catalog → src/pages/Catalog.tsx
- book.php?id={id} → /book/:id → src/pages/BookDetails.tsx
- cart.php → /cart → src/pages/Cart.tsx
- checkout.php → /checkout → src/pages/Checkout.tsx
- about.php → /about → src/pages/About.tsx

Router definition: src/router.tsx  
Layout: src/layouts/MainLayout.tsx (Header, Footer, main container)

## Component Equivalences
- Header/Footer (shared layout): src/components/Header.tsx, src/components/Footer.tsx
- Catalog grid/items: src/components/BookCard.tsx + Bootstrap cards
- Search/filter controls: src/components/SearchBar.tsx, src/components/Filters.tsx
- Pagination: src/components/Pagination.tsx
- Cart state: src/context/CartContext.tsx (localStorage persistence)
- Mock data: src/data/books.json

## Folder Structure
- src/
  - components/
  - context/
  - data/
  - hooks/
  - layouts/
  - pages/
  - types/
  - main.tsx (entry)
  - App.tsx
  - router.tsx
  - main.css, theme.css

## Getting Started
1) npm install
2) npm run dev (opens http://localhost:3000)

## Notes
- If your browser had an old service worker, src/main.tsx proactively unregisters SWs and clears caches at startup.
- Use BrowserRouter with base '/' for all routes.
