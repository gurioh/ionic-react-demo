import { Post } from '../../models/post';
import { Book } from '../../models/book';
export interface SessionsState {
  posts: Post[];
  books: Book[];
}
