import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import {ArrowDown} from '../assets/arrow-down';
import { requestAmountSource, requestAmountTarget } from '../fetches';
import Fees from './Fees';
import Footer from './Footer';

const payCur = 'USD';
const receiveCur = 'USDC_EVMOS';

const CurrencyConverter = () => {
    const [payAmount, setPayAmount] = useState(100);
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [fees, setFees] = useState([0, 0, 0]);

    useEffect(() => {
        handlePayAmountChange(payAmount);
    }, [])

    const handlePayAmountChange = async (amount) => {
        setPayAmount(amount);
        const res = await requestAmountSource(payCur, receiveCur, amount);
        setReceiveAmount(res.data.target_amount);
        setFees(parseFees(res));
    }

    const handleReceiveAmountChange = async (amount) => {
        setReceiveAmount(amount);
        const res = await requestAmountTarget(payCur, receiveCur, amount);
        setPayAmount(res.data.source_amount);
        setFees(parseFees(res));
    }

    const parseFees = (res) => {
        return [
            res.data.fiat_blockchain_fee, 
            res.data.absolute_internal_fee, 
            Math.floor(+res.data.fiat_blockchain_fee + +res.data.absolute_internal_fee)
        ];
    }

    return (
        <div className='CurrencyConverter'>
          <div className='header'>
            Select Your Amount
            </div>
            
          <div className='Card Pay'>
            <div className='CardHeader'>You Pay</div>
            <div className='CardContent'>
              <input 
              className='Amount' 
              value={payAmount} 
              type='number'
              onChange={(e) => handlePayAmountChange(e.target.value)}/>
              <div className='CurrencySelect'>
              USD
              <div className='currency-icon'>
              <img className='flag-img' src={require('../assets/us-flag.png')}></img>
              </div>
              <ArrowDown/>
              </div>
            </div>
          </div>
  
            <Fees fees={fees}/>
  
          <div className='Card'>
            <div className='CardHeader'>You Receive</div>
            <div className='CardContent'>
              <input 
              className='Amount' 
              value={receiveAmount} 
              type='number'
              onChange={(e) => handleReceiveAmountChange(e.target.value)}/>
              <div className='CurrencySelect' onClick={() => console.log('CurrencySelect click')}>
              USDC EVMOS
              <div className='cur-select-logo'>
              <img className='diamond-img' src={require('../assets/diamond.png')}></img>
              </div>
              <ArrowDown/>
              </div>
            </div>
          </div>

          <Footer/>
          <div className='Button'>Buy Now</div>
        </div>
    );
  }

  export default CurrencyConverter;