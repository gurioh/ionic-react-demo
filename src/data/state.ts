import { combineReducers } from './combineReducers';
import { sessionsReducer } from './sessions/sessions.reducer';
import { book } from 'ionicons/icons';
import { getBooks } from './selectors';

export const initialState: AppState = {
  data: {
    posts: [],
    books: {
      data: {
        documents:[],
        meta: {
          "is_end": false,
          "pageable_count": 1000,
          "total_count": 4308
        }
      }
    }
  }
};

export const reducers = combineReducers({
  data: sessionsReducer
});



export type AppState = ReturnType<typeof reducers>;