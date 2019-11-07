import React, {useState, useEffect} from 'react';
import './App.css';
import { Provider, Reducer, InitialState, useGlobalState } from './States/GlobalState';

//Views
import WelcomeScreen from './Views/WelcomeScreen';
import ScanningScreen from './Views/ScanningScreen';

function App() {
  
  const [state] = useGlobalState()
  const [currentScreen, setCurrentScreen] = useState(state.currentScreen)
  useEffect(()=>{
    setCurrentScreen(state.currentScreen)
  },[state.currentScreen])

  return (
      <div className="App">
      
      <div className="Screen-view">
        {currentScreen === "welcome"? <WelcomeScreen/> : <ScanningScreen/> }
      </div>
    </div>
  );
}

export default App;
