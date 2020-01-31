import React, { useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBackButton, IonItem, IonInput, IonText, IonButton } from "@ionic/react";
import { addPost } from "../data/sessions/sessions.actions";
import { Post } from "../models/post";
import { connect } from "../data/connect";

interface OwnProps { };

interface StateProps {
    posts: Post[];
    tests: number[];
};

interface DispatchProps {
    addPost: typeof addPost
};

interface PostProps extends OwnProps, StateProps, DispatchProps { };

const CreateTheme = ({ posts, addPost }: PostProps) => {
    const data: Post = {
        id: 6,
        name: "string",
        profilePic: "string",
        twitter: "string",
        about: "string",
        location: "string",
        email: "string",
        phone: "string"
    }

    const addPostData = () => addPost(data)

    useEffect(() => {
        console.log("useEffect")
        return () => {
            console.log('clean')
        }
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Create-Theme</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonContent>

                    <IonButton onClick={() => addPostData()}>ADD</IonButton>
                    {/* <div className="login-logo">
                        <img src="assets/img/appicon.svg" alt="Ionic logo" />
                    </div>

                    <form noValidate onSubmit={add}>
                        <IonList>
                            <IonItem>
                                <IonLabel position="stacked" color="primary">Username</IonLabel>
                                <IonInput name="username" type="text" required>
                                </IonInput>
                            </IonItem>
                        </IonList>

                        <IonRow>
                            <IonCol>
                                <IonButton type="submit" expand="block">Login</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton routerLink="/signup" color="light" expand="block">Signup</IonButton>
                            </IonCol>
                        </IonRow>
                    </form> */}

                </IonContent>
            </IonContent>
        </IonPage>
    );
}

export default connect<OwnProps, StateProps, DispatchProps>({
    
    mapDispatchToProps: {
        addPost
    },
    component: React.memo(CreateTheme)
});
