import { SessionsActions } from './sessions.actions';
import { SessionsState } from './sessions.state';

export const sessionsReducer = (state: SessionsState, action: SessionsActions): SessionsState => {
  switch (action.type) {
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
    case 'add-post': {
      action.data.id = state.posts.length+1
      return { ...state, posts: [...(state.posts), action.data] };
    }
    case 'delete-post': {
      return { ...state, posts: [...(state.posts).filter(x => x.id !== action.id)] };
    }
  }
}