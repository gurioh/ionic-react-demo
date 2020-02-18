import React, { useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from "@ionic/react";
import { connect } from "../data/connect";
import { calendar, contacts, map, informationCircle, addCircle } from 'ionicons/icons';

import * as selectors from '../data/selectors';
import { Post } from "../models/post";
import { deletePost, editPost } from "../data/sessions/sessions.actions";
import PostCard from "../components/PostCard";
import Book from "../components/BookList";
import { Books } from "../models/books";
import BookList from "../components/BookList";


interface OwnProps { };

interface StateProps {
  posts: Post[];
  books: Books;
};

interface DispatchProps {
  deletePost: typeof deletePost
  editPost: typeof editPost
};

interface PostListProps extends OwnProps, StateProps, DispatchProps { };

const MainView = ({ books, posts, deletePost, editPost }: PostListProps) => {

  const booksd = books as Books
  useEffect(() => {
    console.log("useEffect")
    console.log(
      books.data
    );

    return () => {
      console.log('clean')
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Board2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonGrid fixed>
            <IonRow align-items-stretch>
              {books.data.documents.map(book => (
                <IonCol size="12" size-md="6">
                  <BookList
                    book={book}
                    deletePost={deletePost}
                  />
                </IonCol>
              ))
              }

              {posts.map(post => (
                <IonCol size="12" size-md="6" key={post.id}>
                  <PostCard
                    key={post.id}
                    post={post}
                    deletePost={deletePost}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>

    </IonPage>
  );
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    posts: selectors.getPosts(state),
    books: selectors.getBooks(state)
  }),
  mapDispatchToProps: {
    deletePost,
    editPost
  },
  component: React.memo(MainView)
});
