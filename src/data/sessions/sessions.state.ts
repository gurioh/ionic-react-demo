import { Post } from '../../models/post';
import { Book } from '../../models/book';
import { Books } from '../../models/books';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';
export interface SessionsState {
  userId: string;
  posts: Post[];
  books: Books;
  order: Order;
  cart: Cart;
}
