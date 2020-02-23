import { getConfData, componentDidMount, getKakaoBookData } from '../dataApi';
import { ActionType } from '../../util/types';
import { SessionsState } from './sessions.state';
import { Post } from '../../models/post';
import { Book } from '../../models/book';

export const loadConfData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await getConfData();
  // const test = await componentDidMount();
  dispatch(setData(data));
}

export const searchBook = (query: any) => async (dispatch: React.Dispatch<any>) => {
  console.log("starta'")
  const data = await getKakaoBookData(query);
  console.log(data)
  // const test = await componentDidMount();
  dispatch(setData(data));
}

export const setData = (data: Partial<SessionsState>) => ({
  type: 'set-conf-data',
  data
} as const);

export const addPost = (data: Post) => ({
  type: 'add-post',
  data
} as const)

export const deletePost = (id: number) => ({
  type: 'delete-post',
  id
} as const)

export const editPost = (data: Post) => ({
  type: 'edit-post',
  data
} as const)

export const getBook = (data: Book) => ({
  type: 'get-book',
  data
} as const)

export const addToCart = (data: Book) => ({
  type: 'add-book',
  data
} as const)


export type SessionsActions =
  | ActionType<typeof setData>
  | ActionType<typeof addPost>
  | ActionType<typeof deletePost>
  | ActionType<typeof editPost>
  | ActionType<typeof getBook>
  | ActionType<typeof addToCart>
