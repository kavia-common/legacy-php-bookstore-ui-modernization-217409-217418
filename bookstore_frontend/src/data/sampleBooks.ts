import type { Book } from '../components/ProductList';

/**
 * Image assets are served from the public folder:
 * public/assets/books/* -> available at /assets/books/*
 */
const base = '/assets/books/';

export const sampleBooks: Book[] = [
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
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 24.5,
    category: 'Self-Help',
    description:
      'An easy and proven way to build good habits and break bad ones through small changes.',
    imageUrl: `${base}atomic-habits.jpg`
  },
  {
    id: 4,
    title: 'Educated',
    author: 'Tara Westover',
    price: 18.99,
    category: 'Memoir',
    description:
      'A memoir about a woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD.',
    imageUrl: `${base}educated.jpg`
  },
  {
    id: 5,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 21.99,
    category: 'Science Fiction',
    description:
      'A lone astronaut must save Earth from disaster in this thrilling science-based adventure.',
    imageUrl: `${base}project-hail-mary.jpg`
  },
  {
    id: 6,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: 16.0,
    category: 'Fiction',
    description:
      'A coming-of-age story intertwined with a mysterious murder in the marshes of North Carolina.',
    imageUrl: `${base}where-the-crawdads-sing.jpg`
  }
];
