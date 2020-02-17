import { Post } from '../../models/post';
import { Book } from '../../models/book';
import { Books } from '../../models/books';
export interface SessionsState {
  posts: Post[];
  books: Books;
}
