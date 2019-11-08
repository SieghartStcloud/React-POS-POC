import React, { useState, useContext} from 'react'
import { useGlobalState } from "../States/GlobalState"
import './ScanningScreen.css';

//ACTIONS
import { currentScreen } from '../Actions/appSettings'
import { countIncrement } from '../Actions/counter'

export default function ScanningScreen() {
    const [state, dispatch] = useGlobalState();

    const changeScreenAction = () => {
        dispatch({type:"UPDATE_CURRENT_SCREEN", payload:'welcome'})
    }

    return (
        <div className="scanningScreen-Container">
            
            <div className="scannedItem-Display">
                
                <div className="useScanner-Box">
                    <div className="scannedItem-Title">
                        Use Scanner to add items to your cart
                    </div>
                </div>

                <div className="information-Box"></div>

                <div className="supportButtons-Container">
                        <div className="TEMP-SupportButton">
                            <div className="TEMP-Icon"></div>
                            <div>English</div>
                        </div>  

                        <div className="TEMP-SupportButton">
                            <div className="TEMP-Icon"></div>
                            <div>Accessibility</div>
                        </div>                  
                </div>

            
                
            </div>

            <div className="myCart-Container">
                
                <div className="MyCart-Toolbar">
                    <div style={{height:'20px', width: '20px', color: '#DA291C'}}></div>
                </div>
                
                {/* just to allow flicking between screens */}
                <div onClick={changeScreenAction}>
                scanning 
                </div>

            </div>
            


        </div>
    )
}
