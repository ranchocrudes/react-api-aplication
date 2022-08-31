import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function BarSup() {
    const navigate = useNavigate();
    function handleBtc() {
        navigate('/graficBtc')
    }
    function handleCurrency() {
        navigate('/')
    }
    return (
        <div className='container'>
            <h1 className='links' onClick={handleCurrency}>
                CURRENCYLAYER
            </h1>

            <h1 className='links' onClick={handleBtc}>
                GRAFIC BTC
            </h1>


        </div>
    );
}

export default BarSup;
