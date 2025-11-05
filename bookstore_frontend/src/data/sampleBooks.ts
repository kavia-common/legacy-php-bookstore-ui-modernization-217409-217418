import type { Book } from '../components/ProductList';

/**
 * Remote image policy:
 * - All imageUrl values must use reliable remote URLs.
 * - Prefer Open Library covers: https://covers.openlibrary.org/b/{IDTYPE}/{ID}-L.jpg
 * - If unsure, avoid placeholders; pick widely-known titles with Open Library covers.
 * - Components use centralized helpers (getImageSrc, attachFallback) to gracefully handle failures.
 *
 * Note: Several entries use Open Library cover IDs (olid or isbn) for stability.
 */
export const sampleBooks: Book[] = [
  // Software
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    price: 39.99,
    category: 'Software',
    description:
      'A classic guide for programmers on practical techniques and professional development.',
    // Open Library cover via OLID (works without query params)
    imageUrl: 'https://covers.openlibrary.org/b/olid/OL27210622M-L.jpg' // source: Open Library
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 34.99,
    category: 'Software',
    description:
      'Best practices and principles for writing clean, maintainable code across projects.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg' // source: Open Library
  },
  {
    id: 3,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    price: 36.5,
    category: 'Software',
    description:
      'Timeless principles of software architecture that help you design robust systems.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg' // source: Open Library
  },
  {
    id: 4,
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: 42.0,
    category: 'Software',
    description:
      'Improving the design of existing code with proven refactoring techniques.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg' // source: Open Library (2nd ed.)
  },
  {
    id: 5,
    title: 'Design Patterns',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    price: 44.99,
    category: 'Software',
    description:
      'Elements of reusable object-oriented software—classic patterns that shaped modern development.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg' // source: Open Library
  },
  {
    id: 6,
    title: 'You Don’t Know JS Yet',
    author: 'Kyle Simpson',
    price: 19.99,
    category: 'Software',
    description:
      'Deep dive into the core mechanisms of JavaScript with clarity and rigor.',
    imageUrl: 'https://covers.openlibrary.org/b/olid/OL28622156M-L.jpg' // source: Open Library
  },

  // Self-Help
  {
    id: 7,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 24.5,
    category: 'Self-Help',
    description:
      'An easy and proven way to build good habits and break bad ones through small changes.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg' // source: Open Library
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 18.99,
    category: 'Self-Help',
    description:
      'Rules for focused success in a distracted world—cultivate the ability to concentrate.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg' // source: Open Library
  },
  {
    id: 9,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    price: 21.0,
    category: 'Self-Help',
    description:
      'Powerful lessons in personal change that have influenced millions.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg' // source: Open Library
  },

  // Memoir
  {
    id: 10,
    title: 'Educated',
    author: 'Tara Westover',
    price: 18.99,
    category: 'Memoir',
    description:
      'A memoir about a woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg' // source: Open Library
  },
  {
    id: 11,
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 20.99,
    category: 'Memoir',
    description:
      'An intimate, powerful, and inspiring memoir by the former First Lady of the United States.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg' // source: Open Library
  },

  // Fiction
  {
    id: 12,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 16.0,
    category: 'Fiction',
    description:
      'A coming-of-age story intertwined with a mysterious murder in the marshes of North Carolina.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780735219106-L.jpg' // source: Open Library
  },
  {
    id: 13,
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    price: 14.99,
    category: 'Fiction',
    description:
      'A phantasmagorical novel centered on a magical competition between two young illusionists.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780385534635-L.jpg' // source: Open Library
  },
  {
    id: 14,
    title: 'Normal People',
    author: 'Sally Rooney',
    price: 13.5,
    category: 'Fiction',
    description:
      'A nuanced story about the entanglement of two young people as they transition into adulthood.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780571334650-L.jpg' // source: Open Library (Faber)
  },

  // Science Fiction
  {
    id: 15,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 21.99,
    category: 'Science Fiction',
    description:
      'A lone astronaut must save Earth from disaster in this thrilling science-based adventure.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg' // source: Open Library
  },
  {
    id: 16,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 17.99,
    category: 'Science Fiction',
    description:
      'A science fiction epic that explores politics, religion, and ecology on the desert planet Arrakis.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg' // source: Open Library
  },
  {
    id: 17,
    title: 'Neuromancer',
    author: 'William Gibson',
    price: 15.49,
    category: 'Science Fiction',
    description:
      'Cyberpunk classic that coined the term “cyberspace” and influenced the genre for decades.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg' // source: Open Library
  },

  // Classics
  {
    id: 18,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 9.99,
    category: 'Classics',
    description:
      'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg' // source: Open Library (Penguin Classics)
  },
  {
    id: 19,
    title: '1984',
    author: 'George Orwell',
    price: 10.99,
    category: 'Classics',
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg' // source: Open Library (Signet Classic)
  },
  {
    id: 20,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 11.5,
    category: 'Classics',
    description:
      'A novel about racial injustice and moral growth in the American South.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg' // source: Open Library
  },

  // Business
  {
    id: 21,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    price: 19.49,
    category: 'Business',
    description:
      'How today’s entrepreneurs use continuous innovation to create radically successful businesses.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg' // source: Open Library
  },
  {
    id: 22,
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 18.25,
    category: 'Business',
    description:
      'Notes on startups and building the future—how to create new value rather than compete on existing things.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg' // source: Open Library
  },

  // Data / AI
  {
    id: 23,
    title: 'Hands-On Machine Learning',
    author: 'Aurélien Géron',
    price: 43.0,
    category: 'Software',
    description:
      'Concepts, tools, and techniques for building intelligence systems with Scikit-Learn, Keras, and TensorFlow.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9781492032649-L.jpg' // source: Open Library (2nd ed.)
  },
  // Replaced placeholder entry with a reliable-title alternative
  {
    id: 24,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    price: 55.0,
    category: 'Software',
    description:
      'Comprehensive textbook covering modern algorithms with rigorous analysis and practical applications.',
    imageUrl: 'https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg' // source: Open Library (CLRS 3rd ed.)
  }
];
