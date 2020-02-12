import React, { useEffect, useState, Props } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBackButton, IonItem, IonInput, IonText, IonButton, IonItemDivider, IonTextarea, IonRippleEffect } from "@ionic/react";
import { addPost } from "../data/sessions/sessions.actions";
import { Post } from "../models/post";
import { connect } from "../data/connect";
import "./CreatePost.scss";

import * as selectors from '../data/selectors';
import { RouteComponentProps, Route, useHistory } from "react-router";
import {     } from 'react-router-dom';
interface OwnProps { };

interface StateProps {
    posts: Post[];
};

interface DispatchProps {
    addPost: typeof addPost
};

interface PostProps extends OwnProps, StateProps, DispatchProps { };

const CreateTheme = ({ posts, addPost}: PostProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory()
    const data: Post = {
        id: posts.length+1,
        title: "",
        content: "",
    }

    const addPostData = async (e: React.FormEvent) => {
        e.preventDefault();
        data.title = title
        data.content = content
        console.log(data)
        addPost(data)
        history.goBack()
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
    mapStateToProps: (state) => ({
        posts: selectors.getPosts(state)
      }),
    mapDispatchToProps: {
        addPost
    },
    component: React.memo(CreateTheme)
});
