import { getConfData, componentDidMount } from '../dataApi';
import { ActionType } from '../../util/types';
import { SessionsState } from './sessions.state';
import { Post } from '../../models/post';

export const loadConfData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await getConfData();
  const test = await componentDidMount();
  console.log(test)
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

export type SessionsActions =
  | ActionType<typeof setData>
  | ActionType<typeof addPost>
