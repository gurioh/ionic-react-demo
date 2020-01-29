import { Post } from '../models/post';

const postsUrl = '/assets/data/posts.json';


export const getConfData = async () => {
    const response = await Promise.all([
      fetch(postsUrl)]);
    const posts = await response[0].json() as Post[];
    const data = {
      posts,
    }
    return data;
  }