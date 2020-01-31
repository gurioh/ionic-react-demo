import React, { useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBackButton, IonItem, IonInput, IonText, IonButton, IonItemDivider, IonTextarea, IonRippleEffect } from "@ionic/react";
import { addPost } from "../data/sessions/sessions.actions";
import { Post } from "../models/post";
import { connect } from "../data/connect";
import "./CreateTheme.scss";
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
                    <div>
                        <IonItem>
                            <IonLabel> Title</IonLabel>
                            <IonInput name="username" type="text" spellCheck={false} autocapitalize="off" required> </IonInput>
                        </IonItem>
                        <IonItemDivider>
                            <IonLabel>
                                Category
                            </IonLabel>
                        </IonItemDivider>
                        <IonItem>
                            <IonLabel position="floating">Description</IonLabel>
                            <IonTextarea></IonTextarea>
                        </IonItem>
                        <IonText color="danger">
                            <p className="ion-padding-start">
                                IonText
                            </p>
                        </IonText>

                    </div>
                    <div className="ion-activatable">
                        A plain div with a bounded ripple effect
                        <IonRippleEffect></IonRippleEffect>
                    </div>
                    <IonButton onClick={() => addPostData()}>ADD</IonButton>
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
