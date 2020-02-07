import React, { useEffect, useState } from "react";
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
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
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

    const addPostData = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            console.log(title)
        }
        data.name = title
        data.about = content
        addPost(data)
        console.log(data)
        console.log('push')
    }
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
                    <form noValidate onSubmit={addPostData}>
                        <IonItem>
                            <IonLabel> Title</IonLabel>
                            <IonInput name="title" type="text" value={title} onIonChange={e => setTitle(e.detail.value!)} spellCheck={false} autocapitalize="off" required> </IonInput>
                        </IonItem>
                        <IonItemDivider>
                            <IonLabel>
                                Category
                            </IonLabel>
                        </IonItemDivider>
                        <IonItem>
                            <IonLabel position="floating">Description</IonLabel>
                            <IonTextarea name="content" value={content} onIonChange={e => setContent(e.detail.value!)}></IonTextarea>
                        </IonItem>
                        <IonButton type="submit" expand="block">Add</IonButton>
                    </form>
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
