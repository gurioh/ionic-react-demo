import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge, IonButton, IonCol, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';
import { deletePost, addToCart, getBook } from "../data/sessions/sessions.actions";
import { Book } from "../models/book";

interface StateProps {
  book: Book;
}


interface DispatchProps {
  addToCart: typeof addToCart;
  getBook: typeof getBook;
}


interface BookListProps extends StateProps, DispatchProps { };

const BookCard = ({ book, addToCart, getBook}: BookListProps) => {
  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Drsagged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonItem>
      <div>
        <IonLabel>{book.status}</IonLabel>

      </div>
      <div>
        <img src={book.thumbnail} height="100%" width="100%" />
      </div>
      <div>
        {book.title}
        {book.contents}
      </div>

      <IonLabel>{book.title}</IonLabel>
      <IonLabel>{book.isbn}</IonLabel>
      {book.authors.map(author => (
        <IonLabel>{author}</IonLabel>
      ))
      }
      {book.publisher}
      <div>
        <IonLabel>price : {book.price}</IonLabel>
        <IonLabel>sale_price : {book.price}</IonLabel>
        <IonButton onClick = {() => getBook(book)}>
          구매
        </IonButton>
        <IonButton onClick = {() => addToCart(book)}>
          장바구니
        </IonButton>
      </div>

    </IonItem>
  );
}

export default BookCard;
