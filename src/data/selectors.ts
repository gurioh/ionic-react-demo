import { createSelector } from 'reselect';
import { parseISO as parseDate } from 'date-fns';
import { Post } from '../models/post';
import { AppState } from './state';

export const getPosts = (state: AppState) => state.data.posts;


const getIdParam = (_state: AppState, props: any) => {
  const stringParam = props.match.params['id'];
  return parseInt(stringParam, 10);
}


export const getPost = createSelector(
  getPosts, getIdParam,
  (posts, id) => posts.find(x => x.id === id)
);
