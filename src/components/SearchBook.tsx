import React, { useState } from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge, IonButton, IonCol, IonCardSubtitle, IonCardTitle, IonImg, IonInput, IonItemDivider, IonTextarea } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';
import { title } from "process";

interface StateProps {
}


interface DispatchProps {
}


interface SearchBookProps extends StateProps, DispatchProps { };

const SearchBook = ({ }: SearchBookProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
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
      <IonItem>
      <IonLabel> Title</IonLabel>
      <IonInput name="title" type="text" value={title} onIonChange={e => setTitle(e.detail.value!)} spellCheck={false} autocapitalize="off" required> </IonInput>
      </IonItem>
      <IonButton type="submit" expand="block">Add</IonButton>
    </IonItem>
  );
}

export default SearchBook;
