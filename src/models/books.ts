import { Book } from "./book";

export interface Books {
  data:{
    documents: Book[];
    meta:{
      is_end: boolean;
      pageable_count: number;
      total_count: number;
    }
  }
}
  