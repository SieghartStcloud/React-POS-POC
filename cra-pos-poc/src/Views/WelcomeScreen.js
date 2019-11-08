import React, { useState, useEffect } from 'react'
import './WelcomeScreen.css';
import { useGlobalState } from "../States/GlobalState"

//MATERIAL UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//Modal
import SupportButton from '../Components/SupportButton'

//ACTIONS
import { currentScreen } from '../Actions/appSettings'
import { countIncrement } from '../Actions/counter'

export default function WelcomeScreen() {
const [state, dispatch] = useGlobalState();
const [counter, setCounter] = useState(state.count)
const [languageModal, setLanguageModal] = useState(false)
useEffect(()=>{
    setCounter(state.count)
},[state.count])

useEffect(()=>{
    console.log(state)
},[state])


const startAction = () => {
    dispatch(countIncrement)
    dispatch(currentScreen)
}
    return (
        <div className="WelcomeScreen-base">
            <header className="WelcomeScreen-header">
                <div className="Bunnings-logo"></div>
                <br></br>
                <div style={{color:'white'}}></div>
            </header>

            <Container className="WelcomeScreen-body" maxWidth="lg">
                <Typography component="div" style={{height:'40vh', margin:'0 auto 0 auto'}} className="CardOnly-message-box">
                    
                    <Grid container spacing={1} direction="column">
                        <Grid item xs={12} direction="row" justify="center" alignItems='center'>
                            <h1 className="CardOnly-title">CARD ONLY</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="CardOnly-subtext">Cash payments and cash out </p>
                            <p className="CardOnly-subtext" style={{color:'#F2AE3D'}}>not available </p>
                            <p className="CardOnly-subtext">at Self Checkout</p>

                        </Grid>
                        {/* <button className="Button-start" onClick={startAction}>Tap Screen Or Scan To Start</button> */}
                        <Button 
                            variant="outlined" 
                            color="default"     
                            style={{color: 'white', borderColor:'white', height:'10vh', background: '#00000014 0% 0% no-repeat padding-box', textTransform:'none'}}
                            onClick={startAction}
                            >
                                Tap Screen Or Scan To Start
                        </Button>
                    </Grid>
                </Typography>
            </Container>

            <Container className="WelcomeScreen-footer" maxWidth="xlg">
                
                <Grid container direction='row' alignItems='flex-end'>
                    <SupportButton title='English'/>  
                    <SupportButton title='Accessibility'/>                                    
                </Grid>

                <Grid container direction='column' alignItems='left' className='PaymentType-list-Container'>
                    <p style={{textAlign:'left', marginLeft:"1%"}}>Accepted Payment Types</p>
                    <Grid container direction='row' alignItems="left">
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                        <div className="PaymentType-icon"/>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}
