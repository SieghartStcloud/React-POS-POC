import React, { useState, useContext} from 'react'
import { useGlobalState } from "../States/GlobalState"

//ACTIONS
import { currentScreen } from '../Actions/appSettings'
import { countIncrement } from '../Actions/counter'

export default function ScanningScreen() {
    const [state, dispatch] = useGlobalState();

    const changeScreenAction = () => {
        dispatch({type:"UPDATE_CURRENT_SCREEN", payload:'welcome'})
    }

    return (
        <div onClick={changeScreenAction}>
           scanning 
        </div>
    )
}
