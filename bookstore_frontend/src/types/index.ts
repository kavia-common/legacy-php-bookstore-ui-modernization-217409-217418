export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  price: number;
  rating: number; // 0-5
  cover: string; // image url or path
};

export type CartItem = {
  book: Book;
  quantity: number;
};
