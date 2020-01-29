import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
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
import { connect } from './data/connect';
// import Categories from './pages/Categories';
import MainBoard from './pages/MainBoard';
import { AppContextProvider } from './data/AppContext';
import { loadConfData } from './data/sessions/sessions.actions';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};


interface StateProps {
  darkMode: boolean
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
}

interface IonicAppProps extends StateProps, DispatchProps { }
const IonicApp: React.FC<IonicAppProps> = ({ darkMode, loadConfData }) => {

  useEffect(() => {
    loadConfData();
    // eslint-disable-next-line
  }, []);

  return (
        <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <IonRouterOutlet id="main">
                <Route path="/tabs" component={MainBoard} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
  )
}

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: false
  }),
  mapDispatchToProps: { loadConfData},
  component: IonicApp
});