import React, { createContext, useReducer } from 'react';
import { initialState, AppState } from './state'


port interface AppContextState {
    state: AppState;
    dispatch: React.Dispatch<any>;
  }
  
  export const AppContext = createContext<AppContextState>({
    state: initialState,
    dispatch: () => undefined
  });
  
  export const AppContextProvider: React.FC = (props => {
  
    const [store, dispatch] = useReducer(reducers, initialState);
  
    return (
      <AppContext.Provider value={{
        state: store,
        dispatch
      }}>
        {props.children}
      </AppContext.Provider>
    )
  });