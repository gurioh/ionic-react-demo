import React from "react";
import ItemList from "../components/ItemList"
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol } from "@ionic/react";



const MainBoard = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonGrid fixed>
            <IonRow align-items-stretch>
              <IonCol>
                <ItemList />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default MainBoard;
