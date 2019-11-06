import React from 'react';
import './App.css';
import { Provider, Reducer, InitialState } from './States/GlobalState';

//Views
import WelcomeScreen from './Views/WelcomeScreen';

function App() {
  return (
    <Provider reducer={Reducer} initialState={InitialState}>
      <div className="App">
      
      <div className="Screen-view">
        <WelcomeScreen/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
