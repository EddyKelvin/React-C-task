import React,{ useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeScreen(params){
    
        const handleSubmit =(event)=> 
        {
            let Celsius_Temprature = celsiusValue;
            let Kelvin_Temprature = kelvinValue;
            let Farenheit_Temprature = fahrenheitValue;
            let model = {};
            model.Celsius_Temprature = Celsius_Temprature;
            model.Kelvin_Temprature = Kelvin_Temprature;
            model.Farenheit_Temprature = Farenheit_Temprature;
            model.WhatFrom = whatFor;
            
            model = JSON.stringify(model);
            // console.log(model);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: model
            };
            fetch('http://localhost:11673/weatherforecast', requestOptions)
                .then(response => response.json())
                .then(data => showAlert(data));

        }
        function showAlert(model)
        {
            
            let Celsius_Temprature = model.celsius_Temprature;
            let Kelvin_Temprature = model.kelvin_Temprature;
            let Farenheit_Temprature = model.farenheit_Temprature;

            if(model.whatFrom === 1){
                setreturnText(`Forenhiet :  ${Farenheit_Temprature}   |  kelvin :  ${Kelvin_Temprature}`);
            }
            if(model.whatFrom === 2){
                setreturnText(`Celsius :  ${Celsius_Temprature}   |  kelvin :  ${Kelvin_Temprature}`);
            }
            if(model.whatFrom === 3){
                setreturnText(`Celsius :  ${Celsius_Temprature}    |  Forenhiet :  ${Farenheit_Temprature}`);
            }
        }


        const [whatFor, setwhatFor] = useState(0);
        const[returnText , setreturnText] = useState('');
        const [celsiusValue, setcelsiusValue] = useState('');
        const [fahrenheitValue, setfahrenheitValue] = useState('');
        const [kelvinValue, setkelvinValue] = useState('');
        return(
            <Container>
                <Row>
                <Col md='2' className='mt-2'>
                            <label>Celsius : </label>
                        </Col>
                        <Col md='2' className='mt-2'>
                            <input 
                                type="radio"
                                name="selectradio"
                                onChange={e=> setwhatFor(e.target.value)}
                                value='1'
                            />
                        </Col>
                        <Col md='8' className='mt-2'>
                            <input 
                                type='number' 
                                className='form-control'
                                placeholder='Enter Celsius Value'
                                onChange={e=> setcelsiusValue(e.target.value)}
                                value={celsiusValue}
                            />
                        </Col>
                        <Col md='2' className='mt-2'>
                            <label>Forenhiet : </label>
                        </Col>
                        <Col md='2' className='mt-2'>
                            <input 
                                type="radio"
                                name="selectradio" 
                                onChange={e=> setwhatFor(e.target.value)}
                                value='2'
                            />
                        </Col>
                        
                        <Col md='8' className='mt-2'>
                            <input 
                                type='number' 
                                className='form-control'
                                placeholder='Enter Forenhiet Value'
                                onChange={e=> setfahrenheitValue(e.target.value)}
                                value={fahrenheitValue}
                            />
                        </Col>
                        <Col md='2' className='mt-2'>
                            <label>Kelvin : </label>
                        </Col>
                        <Col md='2' className='mt-2'>
                            <input 
                                type="radio"
                                name="selectradio"
                                onChange={e=> setwhatFor(e.target.value)}
                                value='3'
                            />
                        </Col>
                        
                        <Col md='8' className='mt-2'>
                            <input 
                                type='number' 
                                placeholder='Enter Kelvin Value'
                                className='form-control'
                                onChange={e=> setkelvinValue(e.target.value)}
                                value={kelvinValue}
                            />
                        </Col>
                        <Col md='12' className='mt-5'>
                            <button type='button' className='btn btn-success' onClick={e=> handleSubmit(e)}>Calculate</button>
                        </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <h3>{returnText}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }


export default HomeScreen;