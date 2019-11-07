import React, { useReducer, createContext, useContext } from "react";

//STATES
import { counterState } from '../States/counter'
import { appSettingsState } from '../States/appSettings'

//ACTIONS
import { countIncrement } from '../Actions/counter'
import { currentScreen } from '../Actions/appSettings'

const StateContext = createContext(null);

export function Provider({ children, reducer, initialState }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(StateContext);
}

export function Reducer(state, Actions) {
    switch (Actions.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count += Actions.payload
        }
      case "UPDATE_CURRENT_SCREEN": 
        return {
          ...state,
          currentScreen: Actions.payload
        }
      default:
        return state;
    }
  }

  export const Actions = {
    ...countIncrement,
    ...currentScreen
  }
  
  export const InitialState = { 
    ...appSettingsState,
    ...counterState

  }
