import { Post } from '../models/post';
import { Book } from '../models/book';
import { Books } from '../models/books';
import { IonItem } from '@ionic/react';

const postsUrl = '/assets/data/posts.json';
const kakaoBookUrl = 'http://localhost:3001/kakao?query=Java&size=3&page=1&sort=accuracy&target=title';
export const componentDidMount = async ()=>{
  fetch('http://localhost:3001/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch(console.log)
}
export const getKakaoBookData = async ()=>{
  fetch('http://localhost:3001/kakao?query=Java&size=3&page=1&sort=accuracy&target=title')
  .then(res => res.json())
  .then((data) => {
    console.log(data.body.documents)
  return data.body.documents
  })
  .catch(console.log)
}


export const getConfData = async () => {
    const response = await Promise.all([
      fetch(postsUrl)]);
    const responseKakao = await Promise.all([
        fetch(kakaoBookUrl)]);

    const posts = await response[0].json() as Post[];
    var books = await responseKakao[0].json() as Books;

    books.data.documents = books.data.documents.map((item,index) =>{
      console.log({
        ...item, bookId: index
      })
        return {
          ...item, bookId: index
        }
      }
    )
    console.log(books)
    const data = {
      posts,
      books
    }
    return data;
  }