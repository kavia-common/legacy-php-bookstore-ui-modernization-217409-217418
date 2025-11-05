# Modern Bookstore UI (React 18 + Vite + Bootstrap 5)

This is a standalone React 18+ frontend that modernizes a legacy PHP bookstore UI. It uses functional components, hooks, React Router for routing, Bootstrap 5 for styling, and React Context for cart state. No backend or API calls are made; all data is loaded locally and state is in-memory with localStorage persistence.

See MIGRATION.md for mapping of legacy PHP pages to React routes/components.

## Features
- React 18 functional components + hooks
- Vite dev server on port 3000
- Routing with React Router v6+ (Home, Catalog, Book Details, Cart, Checkout, About)
- Bootstrap 5 responsive styling (primary #3b82f6, success #06b6d4, light theme)
- Shared layout: Header with nav and cart badge, Footer
- Catalog grid with:
  - Search bar
  - Filters: Category, price range, rating
  - Pagination
- Cart state managed by React Context with localStorage persistence
- Checkout form with client-side validation (no submission)
- No backend/API calls

## Project Structure
- index.html (Vite template)
- src/
  - components/
  - context/
  - data/
  - hooks/
  - layouts/
  - pages/
  - types/
  - App.tsx
  - main.tsx (Vite entrypoint)
  - router.tsx
  - main.css
  - theme.css

## Scripts
- npm run dev: Run the Vite dev server (http://localhost:3000)
- npm run build: Production build (Vite)
- npm run preview: Preview production build
- npm run typecheck: TypeScript check

## Getting Started
1. Install dependencies:
   npm install
   # If you’re migrating from CRA, ensure dev deps are updated: vite, @vitejs/plugin-react, typescript, @types/react, @types/react-dom
2. Start the development server:
   npm run dev
3. Open http://localhost:3000

## Notes
- No service worker is used. If a prior SW existed in your browser, it is unregistered at app startup and caches are cleared.
- No environment variables are required.
- All data is local-only. Replace data in src/data/books.json as needed.

## Styling
- Bootstrap 5 is included via npm.
- Theme colors:
  - Primary: #3b82f6
  - Success/Accent: #06b6d4
  - Background: #f9fafb
  - Surface: #ffffff
  - Text: #111827
- CSS variables are defined in src/theme.css.

## Accessibility
- Semantic HTML elements
- Proper labeling for forms and controls
- Keyboard-accessible buttons and controls

## License
MIT
