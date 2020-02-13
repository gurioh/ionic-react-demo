import { SessionsActions } from './sessions.actions';
import { SessionsState } from './sessions.state';

export const sessionsReducer = (state: SessionsState, action: SessionsActions): SessionsState => {
  switch (action.type) {
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
    case 'add-post': {
      action.data.id = state.posts.length+1
      console.log(action.data)
      return { ...state, posts: [...(state.posts), action.data] };
    }
    case 'delete-post': {
      return { ...state, posts: [...(state.posts).filter(x => x.id !== action.id)] };
    }
    case 'edit-post': {
      console.log(action.data.id)
      console.log(action.data)
      //console.log(state.posts.splice(action.data.id, 1, action.data))
      
      return { ...state, posts: state.posts.map(
        info => action.data.id === info.id
          ? { ...info, ...action.data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )};
    }
  }
}