import { combineReducers } from './combineReducers';
import { sessionsReducer } from './sessions/sessions.reducer';

export const initialState: AppState = {
  data: {
    posts: [],
    books: []
  }
};

export const reducers = combineReducers({
  data: sessionsReducer
});



export type AppState = ReturnType<typeof reducers>;