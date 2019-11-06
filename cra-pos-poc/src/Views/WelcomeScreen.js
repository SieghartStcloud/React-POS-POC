import React, { useState, useEffect } from 'react'
import './WelcomeScreen.css';
import { useGlobalState } from "../States/GlobalState"

export default function WelcomeScreen() {
const [state, dispatch] = useGlobalState();
const [counter, setCounter] = useState(state)
useEffect(()=>{
    setCounter(state)
},[state])

    return (
        <div className="WelcomeScreen-base">
            <header className="WelcomeScreen-header">
                <div className="Bunnings-logo"></div>
            </header>

            <div className="WelcomeScreen-body">
                <div className="CardOnly-message-box">
                    <h1 className="CardOnly-title">CARD ONLY {counter}</h1>
                    
                    <p className="CardOnly-subtext">Cash payments and cash out </p>
                    <p className="CardOnly-subtext" style={{color:'#F2AE3D'}}>not available </p>
                    <p className="CardOnly-subtext">at Self Checkout</p>
                    <br/>
                    <button className="Button-start" onClick={()=>dispatch({type: "INCREMENT"})}>Tap Screen Or Scan To Start</button>
                </div>
            </div>

            <footer className="WelcomeScreen-footer">
                
                <div className="Support-button-container">
                    <div className="TEMP-SupportButton">
                        <div className="TEMP-Icon"></div>
                        <div>English</div>
                    </div>  

                    <div className="TEMP-SupportButton">
                        <div className="TEMP-Icon"></div>
                        <div>Accessibility</div>
                    </div>                  
                </div>

                <div className="PaymentType-list-Container">
                    <p style={{textAlign:'left', marginLeft:'7%'}}>Accepted Payment Types</p>
                    <div>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                    </div>
                    
                </div>
            </footer>
        </div>
    )
}
