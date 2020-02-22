import React, { useEffect } from "react";
import { IonCard, IonCardHeader, IonItem, IonCardContent, IonAvatar, IonReorder, IonLabel, IonReorderGroup, IonBadge, IonButton, IonCol, IonHeader, IonContent, IonPage, IonList, IonGrid, IonRow, IonCheckbox } from "@ionic/react";
import { ItemReorderEventDetail } from '@ionic/core';
import { deletePost, addToCart, getBook } from "../data/sessions/sessions.actions";
import { Book } from "../models/book";

import * as selectors from '../data/selectors';
import { connect } from "../data/connect";
import { Books } from "../models/books";
import BookCard from "../components/BookCard";
import { Order } from "../models/order";
import { Cart } from "../models/cart";

interface OwnProps {

}

interface StateProps {
  cart: Cart;
}


interface DispatchProps {
}


interface BookListProps extends OwnProps, StateProps, DispatchProps { };

const CartList = ({ cart }: BookListProps) => {
  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Drsagged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
  useEffect(() => {

  }, [])

  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent>
        <IonList>
          <IonGrid fixed>
            <IonRow align-items-stretch>
              {cart.item.map(book => (
                <IonItem align-items-stretch>
                  <IonCol size="1">
                    <IonCheckbox></IonCheckbox>
                  </IonCol>
                  <IonCol size="11" offset="1">
                    <BookCard
                      book={book}
                      addToCart={addToCart}
                      getBook={getBook}
                    />
                  </IonCol>
                </IonItem>
              ))
              }
            </IonRow>
            <IonButton> 전채구매</IonButton>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>

  );
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    cart: selectors.getCart(state),
  }),
  mapDispatchToProps: {
  },
  component: React.memo(CartList)
});