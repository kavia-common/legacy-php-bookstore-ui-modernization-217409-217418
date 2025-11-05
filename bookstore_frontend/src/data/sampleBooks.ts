import type { Book } from '../components/ProductList';

/**
 * Image assets are served from the public folder:
 * public/assets/books/* -> available at /assets/books/*
 *
 * Important:
 * - Filenames are case-sensitive. Ensure sampleBooks imageUrl exactly matches the actual file name.
 * - Always start imageUrl with '/assets/books/' to leverage Vite public directory serving.
 * - If a specific cover is missing, set imageUrl to '/assets/books/placeholder-book.png'.
 */
const base = '/assets/books/';
const ph = `${base}placeholder-book.png`;

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
    imageUrl: `${base}pragmatic-programmer.jpg`
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 34.99,
    category: 'Software',
    description:
      'Best practices and principles for writing clean, maintainable code across projects.',
    imageUrl: `${base}clean-code.jpg`
  },
  {
    id: 3,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    price: 36.5,
    category: 'Software',
    description:
      'Timeless principles of software architecture that help you design robust systems.',
    imageUrl: `${base}clean-architecture.jpg`
  },
  {
    id: 4,
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: 42.0,
    category: 'Software',
    description:
      'Improving the design of existing code with proven refactoring techniques.',
    imageUrl: `${base}refactoring.jpg`
  },
  {
    id: 5,
    title: 'Design Patterns',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    price: 44.99,
    category: 'Software',
    description:
      'Elements of reusable object-oriented software—classic patterns that shaped modern development.',
    imageUrl: `${base}design-patterns.jpg`
  },
  {
    id: 6,
    title: 'You Don’t Know JS Yet',
    author: 'Kyle Simpson',
    price: 19.99,
    category: 'Software',
    description:
      'Deep dive into the core mechanisms of JavaScript with clarity and rigor.',
    imageUrl: `${base}ydkjs.jpg`
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
    imageUrl: `${base}atomic-habits.jpg`
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 18.99,
    category: 'Self-Help',
    description:
      'Rules for focused success in a distracted world—cultivate the ability to concentrate.',
    imageUrl: `${base}deep-work.jpg`
  },
  {
    id: 9,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    price: 21.0,
    category: 'Self-Help',
    description:
      'Powerful lessons in personal change that have influenced millions.',
    imageUrl: `${base}7-habits.jpg`
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
    imageUrl: `${base}educated.jpg`
  },
  {
    id: 11,
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 20.99,
    category: 'Memoir',
    description:
      'An intimate, powerful, and inspiring memoir by the former First Lady of the United States.',
    imageUrl: `${base}becoming.jpg`
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
    imageUrl: `${base}where-the-crawdads-sing.jpg`
  },
  {
    id: 13,
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    price: 14.99,
    category: 'Fiction',
    description:
      'A phantasmagorical novel centered on a magical competition between two young illusionists.',
    imageUrl: `${base}the-night-circus.jpg`
  },
  {
    id: 14,
    title: 'Normal People',
    author: 'Sally Rooney',
    price: 13.5,
    category: 'Fiction',
    description:
      'A nuanced story about the entanglement of two young people as they transition into adulthood.',
    imageUrl: `${base}normal-people.jpg`
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
    imageUrl: `${base}project-hail-mary.jpg`
  },
  {
    id: 16,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 17.99,
    category: 'Science Fiction',
    description:
      'A science fiction epic that explores politics, religion, and ecology on the desert planet Arrakis.',
    imageUrl: `${base}dune.jpg`
  },
  {
    id: 17,
    title: 'Neuromancer',
    author: 'William Gibson',
    price: 15.49,
    category: 'Science Fiction',
    description:
      'Cyberpunk classic that coined the term “cyberspace” and influenced the genre for decades.',
    imageUrl: `${base}neuromancer.jpg`
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
    imageUrl: `${base}pride-and-prejudice.jpg`
  },
  {
    id: 19,
    title: '1984',
    author: 'George Orwell',
    price: 10.99,
    category: 'Classics',
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    imageUrl: `${base}1984.jpg`
  },
  {
    id: 20,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 11.5,
    category: 'Classics',
    description:
      'A novel about racial injustice and moral growth in the American South.',
    imageUrl: `${base}to-kill-a-mockingbird.jpg`
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
    imageUrl: `${base}lean-startup.jpg`
  },
  {
    id: 22,
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 18.25,
    category: 'Business',
    description:
      'Notes on startups and building the future—how to create new value rather than compete on existing things.',
    imageUrl: `${base}zero-to-one.jpg`
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
    imageUrl: `${base}hands-on-ml.jpg`
  },
  {
    id: 24,
    title: 'Pattern Recognition and Machine Learning',
    author: 'Christopher Bishop',
    price: 55.0,
    category: 'Software',
    description:
      'Comprehensive introduction to the fields of pattern recognition and machine learning.',
    imageUrl: `${base}prml.jpg`
  }
];
