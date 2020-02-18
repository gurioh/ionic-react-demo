import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge, IonButton, IonCol } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';
import { deletePost } from "../data/sessions/sessions.actions";
import { Book } from "../models/book";

interface StateProps {
  book: Book;
}


interface DispatchProps {
  deletePost: typeof deletePost;
}


interface BookListProps extends StateProps, DispatchProps { };
const BookList = ({ book, deletePost }: BookListProps) => {
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
    <IonCol size="12" size-md="4">
      <IonCard className="post-card">
        <IonCardHeader>
          <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>

          </IonReorderGroup>
          <IonLabel>{book.title}</IonLabel>
          <IonLabel>{book.isbn}</IonLabel>
          
        </IonCardHeader>
        <IonCardContent class="outer-content">
          <img src={book.thumbnail} width="50" height="400"></img>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
}

export default BookList;
