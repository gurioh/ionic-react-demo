import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';
import { Post } from "../models/post";


interface ContentProps {
  post: Post;
}

const PostCard = ({post}: ContentProps) => {
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
    <IonCard className="post-card">
      <IonCardHeader>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          
        </IonReorderGroup>
        <IonLabel>{post.title}</IonLabel>
      </IonCardHeader>
      <IonCardContent class="outer-content">
        <IonLabel>{post.content}</IonLabel>
      </IonCardContent>
    </IonCard>
  );
}

export default PostCard;
