import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Cups from './pages/Cups';
// eslint-disable-next-line
import Hooks from './pages/Hooks';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import ContextSample from './pages/ContextSample';
// import Categories from './pages/Categories';
import MainBoard from './pages/MainBoard';

const App: React.FC = () => {
  // const onClick = (type: string) => {
  //   console.log(`${type} says hello`);
  // };
  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/cups" component={Cups} exact={true} />
        <Route path="/context" component={ContextSample} exact={true} />
        <Route path="/board" component={MainBoard} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
}

export default App;

// const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
//   mapStateToProps: (state) => ({
//     darkMode: state.user.darkMode,
//     sessions: state.data.sessions
//   }),
//   mapDispatchToProps: { loadConfData, loadUserData, setIsLoggedIn, setUsername },
//   component: IonicApp
// });