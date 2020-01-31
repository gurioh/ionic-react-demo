import { SessionsActions } from './sessions.actions';
import { SessionsState } from './sessions.state';

export const sessionsReducer = (state: SessionsState, action: SessionsActions): SessionsState => {
  switch (action.type) {
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
    case 'add-post': {
      return { ...state, posts: [...(state.posts), action.data] };
    }
  }
}