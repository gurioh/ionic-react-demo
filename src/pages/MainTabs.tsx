import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { addCircleOutline } from 'ionicons/icons';
import MainView from './MainView';
import Theme from './Theme';
import CreatePost from './CreatePost';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/tabs/main" />
        {/* 
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.        
        */}
        <Route path="/tabs/main" render={() => <MainView/>} exact={true} />
        <Route path="/tabs/theme" component={Theme} exact={true} />
        <Route path="/tabs/create-post" render={() => <CreatePost/>} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="Add" href="/tabs/create-post">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Add</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;