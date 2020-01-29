import { getConfData } from '../dataApi';
import { ActionType } from '../../util/types';
import { SessionsState } from './sessions.state';

export const loadConfData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await getConfData();
  dispatch(setData(data));
}


export const setData = (data: Partial<SessionsState>) => ({
  type: 'set-conf-data',
  data
} as const);

export type SessionsActions =
  | ActionType<typeof setData>
