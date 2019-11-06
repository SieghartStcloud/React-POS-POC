import React, { useReducer, createContext, useContext } from "react";

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

export function Reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
          console.log(state)
        return state += 1;
      default:
        return state;
    }
  }
  
  export const InitialState = 0;
