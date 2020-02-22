import { SessionsActions, addToCart } from './sessions.actions';
import { SessionsState } from './sessions.state';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';

export const sessionsReducer = (state: SessionsState, action: SessionsActions): SessionsState => {
  switch (action.type) {
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
    case 'add-post': {
      console.log(state.posts)
      return { ...state, posts: [...(state.posts), action.data] };
    }
    case 'delete-post': {
      return { ...state, posts: [...(state.posts).filter(x => x.id !== action.id)] };
    }
    case 'edit-post': {
      return { ...state, posts: state.posts.map(
        info => action.data.id === info.id
          ? { ...info, ...action.data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )};
    }
    case 'get-book': {
      const newOrder: Order = {
        id: 0,
        userId: state.userId,
        items: state.order.items.map(
          item => item.bookId === action.data.bookId
          ? {...item, ... action.data}
          : item
        )
      }
      return { ...state, order: newOrder}
    }
    case 'add-book': {
      const myCart : Cart = state.cart;
      myCart.item.push(action.data)
      console.log(myCart.item.length)
      return { ...state, cart : myCart};
    }
  }
}