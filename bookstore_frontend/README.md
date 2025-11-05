# Modern Bookstore UI (React 18 + Bootstrap 5)

This is a standalone React 18+ frontend that modernizes a legacy PHP bookstore UI. It uses functional components, hooks, React Router for routing, Bootstrap 5 for styling, and React Context for cart state. No backend or API calls are made; all data is loaded locally and state is in-memory with localStorage persistence.

## Features
- React 18 functional components + hooks
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
- public/
  - index.html
- src/
  - assets/
  - components/
    - BookCard.tsx
    - Filters.tsx
    - Footer.tsx
    - Header.tsx
    - Pagination.tsx
    - SearchBar.tsx
  - context/
    - CartContext.tsx
  - data/
    - books.json
  - hooks/
    - useLocalStorage.ts
  - layouts/
    - MainLayout.tsx
  - pages/
    - About.tsx
    - BookDetails.tsx
    - Catalog.tsx
    - Cart.tsx
    - Checkout.tsx
    - Home.tsx
  - types/
    - index.ts
  - App.tsx
  - index.tsx
  - router.tsx
  - main.css
  - theme.css

## Scripts
- npm start: Run the dev server (http://localhost:3000)
- npm run build: Production build
- npm test: Run tests (if present)

## Getting Started
1. Install dependencies:
   npm install
2. Start the development server:
   npm start
3. Open http://localhost:3000

## Notes
- Port 3000 is used by default via CRA dev server.
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
