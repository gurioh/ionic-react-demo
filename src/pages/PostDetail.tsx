import React, { useEffect, useState, Props } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBackButton, IonItem, IonInput, IonText, IonButton, IonItemDivider, IonTextarea, IonRippleEffect } from "@ionic/react";
import { addPost, editPost } from "../data/sessions/sessions.actions";
import { Post } from "../models/post";
import { connect } from "../data/connect";
import "./PostDetail.scss";

import * as selectors from '../data/selectors';
import { RouteComponentProps, Route, useHistory, withRouter } from "react-router";
import {     } from 'react-router-dom';
interface OwnProps extends RouteComponentProps { };

interface StateProps {
    post: Post;
};

interface DispatchProps {
    editPost: typeof editPost
};

type PostProps = OwnProps & StateProps & DispatchProps;

const PostDetail = ({ post, editPost}: PostProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory()
    const data: Post = {
        id: 0,
        title: "",
        content: ""
    }

    const editPostData = async (e: React.FormEvent) => {
        e.preventDefault();
        data.id = post.id
        data.title = title
        data.content = content
        console.log(data)
        editPost(data)
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
                    <form noValidate onSubmit={editPostData}>
                        <IonItem>
                            <IonLabel> Title</IonLabel>
                            <IonInput name="title" type="text" value={title} onIonChange={e => setTitle(e.detail.value!)} spellCheck={false} autocapitalize="off" required>
                                {post?.title} </IonInput>
                        </IonItem>
                        <IonItemDivider>
                            <IonLabel>
                                Category
                            </IonLabel>
                        </IonItemDivider>
                        <IonItem>
                            <IonLabel position="floating">Description</IonLabel>
                            <IonTextarea name="content" value={content} onIonChange={e => setContent(e.detail.value!)}>
                            {post?.content} 

                            </IonTextarea>
                        </IonItem>
                        <IonButton type="submit" expand="block">Edit</IonButton>
                    </form>
                </IonContent>
            </IonContent>
        </IonPage>
    );
}

export default connect({
    mapStateToProps: (state, OwnProps) => ({
        post: selectors.getPost(state, OwnProps)
    }),
    mapDispatchToProps: {
        addPost,
        editPost
    },
    component: withRouter(PostDetail)
});
