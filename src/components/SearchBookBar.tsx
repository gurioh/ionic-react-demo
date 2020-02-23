import React, { useState } from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge, IonButton, IonCol, IonCardSubtitle, IonCardTitle, IonImg, IonInput, IonItemDivider, IonTextarea } from "@ionic/react";
import queryString from 'query-string'
import { searchBook } from '../data/sessions/sessions.actions';
import { searchCondition } from "../models/searchCondition";
interface StateProps {

}


interface DispatchProps {
  searchBook: typeof searchBook;
}


interface SearchBookProps extends StateProps, DispatchProps { };

const SearchBookBar = ({ searchBook}: SearchBookProps) => {
  const query : string = "query=Java&size=3&page=1&sort=accuracy&target=title";
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const searchCondition: searchCondition = {
    query: "",
    size: 10,
    page: 1,
    target: "title"
  }
  const searchBookList = async (e: React.FormEvent) => {
    e.preventDefault();
    searchCondition.query = title
    searchBook(searchCondition);
  }

  return (
    <form noValidate onSubmit={searchBookList}>
      <IonItem>
        <IonInput name="title" type="text" value={title}
          onIonChange={e => setTitle(e.detail.value!)}
          spellCheck={false} autocapitalize="off"
          required>
        </IonInput>
        <IonButton type="submit" expand="block">Search</IonButton>
      </IonItem>
    </form>
  );
}

export default SearchBookBar;
