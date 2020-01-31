import React from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBackButton } from "@ionic/react";

const Theme = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Theme</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <label>Theme</label>
            </IonContent>
        </IonPage>
    );
}

export default Theme;