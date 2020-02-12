import { Post } from '../models/post';

const postsUrl = '/assets/data/posts.json';

export const componentDidMount = async ()=>{
  fetch('http://localhost:3001/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch(console.log)
}
export const getConfData = async () => {
    const response = await Promise.all([
      fetch(postsUrl)]);
    const posts = await response[0].json() as Post[];
    const data = {
      posts,
    }
    return data;
  }