import type { Book } from '../components/ProductList';

/**
 * Remote image policy:
 * - All imageUrl values should point to reliable remote URLs (CDN or placeholders).
 * - Use Open Library covers when you have ISBNs: https://covers.openlibrary.org/b/ISBN/{isbn}-L.jpg
 * - Otherwise, use a generic placeholder service, e.g.:
 *   https://placehold.co/480x640?text=Book  or  https://via.assets.so/img.jpg?w=480&h=640&tc=white&bg=%233b82f6&text=Book
 * - Components use centralized helpers (getImageSrc, attachFallback) to gracefully handle failures.
 * - To change a cover: simply replace the imageUrl with a different remote URL.
 */
const PLACEHOLDER = 'https://placehold.co/480x640?text=Book';

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
    imageUrl: 'https://m.media-amazon.com/images/I/81y5d5kI9wL._SL1500_.jpg'
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 34.99,
    category: 'Software',
    description:
      'Best practices and principles for writing clean, maintainable code across projects.',
    imageUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg'
  },
  {
    id: 3,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    price: 36.5,
    category: 'Software',
    description:
      'Timeless principles of software architecture that help you design robust systems.',
    imageUrl: 'https://m.media-amazon.com/images/I/51szD1LP3-L.jpg'
  },
  {
    id: 4,
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: 42.0,
    category: 'Software',
    description:
      'Improving the design of existing code with proven refactoring techniques.',
    imageUrl: 'https://m.media-amazon.com/images/I/41uPjEenkFL.jpg'
  },
  {
    id: 5,
    title: 'Design Patterns',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    price: 44.99,
    category: 'Software',
    description:
      'Elements of reusable object-oriented software—classic patterns that shaped modern development.',
    imageUrl: 'https://m.media-amazon.com/images/I/51k+eA4ZQHL.jpg'
  },
  {
    id: 6,
    title: 'You Don’t Know JS Yet',
    author: 'Kyle Simpson',
    price: 19.99,
    category: 'Software',
    description:
      'Deep dive into the core mechanisms of JavaScript with clarity and rigor.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41W6Zq9V1oL._SX331_BO1,204,203,200_.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg'
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 18.99,
    category: 'Self-Help',
    description:
      'Rules for focused success in a distracted world—cultivate the ability to concentrate.',
    imageUrl: 'https://m.media-amazon.com/images/I/71g2ednj0JL.jpg'
  },
  {
    id: 9,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    price: 21.0,
    category: 'Self-Help',
    description:
      'Powerful lessons in personal change that have influenced millions.',
    imageUrl: 'https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/81WojUxbbFL.jpg'
  },
  {
    id: 11,
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 20.99,
    category: 'Memoir',
    description:
      'An intimate, powerful, and inspiring memoir by the former First Lady of the United States.',
    imageUrl: 'https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/81WWiiLgUKL.jpg'
  },
  {
    id: 13,
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    price: 14.99,
    category: 'Fiction',
    description:
      'A phantasmagorical novel centered on a magical competition between two young illusionists.',
    imageUrl: 'https://m.media-amazon.com/images/I/81tqQb1YpXL.jpg'
  },
  {
    id: 14,
    title: 'Normal People',
    author: 'Sally Rooney',
    price: 13.5,
    category: 'Fiction',
    description:
      'A nuanced story about the entanglement of two young people as they transition into adulthood.',
    imageUrl: 'https://m.media-amazon.com/images/I/71cql2jU6IL.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/91w-Rt8DoGS.jpg'
  },
  {
    id: 16,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 17.99,
    category: 'Science Fiction',
    description:
      'A science fiction epic that explores politics, religion, and ecology on the desert planet Arrakis.',
    imageUrl: 'https://m.media-amazon.com/images/I/91zBwV0CVlL.jpg'
  },
  {
    id: 17,
    title: 'Neuromancer',
    author: 'William Gibson',
    price: 15.49,
    category: 'Science Fiction',
    description:
      'Cyberpunk classic that coined the term “cyberspace” and influenced the genre for decades.',
    imageUrl: 'https://m.media-amazon.com/images/I/71iG2I3J3cL.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL.jpg'
  },
  {
    id: 19,
    title: '1984',
    author: 'George Orwell',
    price: 10.99,
    category: 'Classics',
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    imageUrl: 'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg'
  },
  {
    id: 20,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 11.5,
    category: 'Classics',
    description:
      'A novel about racial injustice and moral growth in the American South.',
    imageUrl: 'https://m.media-amazon.com/images/I/81OdwZ9WQnL.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg'
  },
  {
    id: 22,
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 18.25,
    category: 'Business',
    description:
      'Notes on startups and building the future—how to create new value rather than compete on existing things.',
    imageUrl: 'https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg'
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
    imageUrl: 'https://m.media-amazon.com/images/I/81c8wAJ2c2L.jpg'
  },
  {
    id: 24,
    title: 'Pattern Recognition and Machine Learning',
    author: 'Christopher Bishop',
    price: 55.0,
    category: 'Software',
    description:
      'Comprehensive introduction to the fields of pattern recognition and machine learning.',
    imageUrl: PLACEHOLDER
  }
];
