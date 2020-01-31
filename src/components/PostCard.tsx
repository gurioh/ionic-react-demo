import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';


const PostCard = () => {
  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonCard className="speaker-card">
      <IonCardHeader>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          <IonItem button detail={false} routerLink={`/tabs/theme`} lines="none">
            <IonLabel>Item 1</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem button detail={false} routerLink={`/tabs/theme`} lines="none">
            <IonLabel>Item 2</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
        </IonReorderGroup>
      </IonCardHeader>
      <IonCardContent class="outer-content">
        <h2> This is test contents</h2>
      </IonCardContent>
      <IonBadge color="primary">11</IonBadge>
      <IonBadge color="secondary">22</IonBadge>
      <IonBadge color="tertiary">33</IonBadge>
      <IonItem>
        <IonBadge slot="start">11</IonBadge>
        <IonLabel>My Item</IonLabel>
        <IonBadge slot="end">22</IonBadge>
      </IonItem>
    </IonCard>
  );
}

export default PostCard;
