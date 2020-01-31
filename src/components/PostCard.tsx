import React from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar } from "@ionic/react";




const PostCard = () => {
  return (
    <IonCard className="speaker-card">
      <IonCardHeader>
        <IonItem button detail={false} routerLink={`/tabs/theme`} lines="none">
          <IonAvatar slot="start">
          </IonAvatar>
        </IonItem>
      </IonCardHeader>
      <IonCardContent class="outer-content">
        <h2> This is test contents</h2>
      </IonCardContent>
    </IonCard>
  );
}

export default PostCard;
