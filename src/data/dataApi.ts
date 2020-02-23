import { Post } from '../models/post';
import { Book } from '../models/book';
import { Books } from '../models/books';
import { IonItem } from '@ionic/react';
import { searchCondition } from '../models/searchCondition';
import qs from 'query-string';

const postsUrl = '/assets/data/posts.json';
const kakaoBookUrl = 'http://localhost:3001/kakao?';
export const componentDidMount = async ()=>{
  fetch('http://localhost:3001/users')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch(console.log)
}
export const getKakaoBookData = async (searchCondition: searchCondition)=>{
  
  const query = qs.stringify(searchCondition);
  const responseKakao = await Promise.all([
    fetch(kakaoBookUrl+query)]);
  var books = await responseKakao[0].json() as Books;

  const data = {
    books
  }
  return data;
}


export const getConfData = async () => {
    const response = await Promise.all([
      fetch(postsUrl)]);
    const responseKakao = await Promise.all([
        fetch(kakaoBookUrl)]);

        console.log(responseKakao)
    const posts = await response[0].json() as Post[];
    // var books = await responseKakao[0].json() as Books;
    // console.log(books.data)
    
    // if(books.data !== null){
    //   books.data.documents = books.data.documents.map((item,index) =>{
    //     console.log({
    //       ...item, bookId: index
    //     })
    //       return {
    //         ...item, bookId: index
    //       }
    //     }
    //   )
    //   console.log(books)
    // }
    const data = {
      posts
    }
    return data;
  }