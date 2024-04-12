import './Money.css';
import React, { useState } from 'react'


export default function Moneycon() {
    const [USD,setUSD]=useState('');
    const [INR,setINR]=useState('');
    const [MYR,setMYR]=useState('');
    const handlemyr=(e)=>{
        setMYR(e.target.value);
        setINR(e.target.value*17.5273);
        setUSD(e.target.value*0.2096);

    }
    const handleusd=(e)=>{
        setUSD(e.target.value);
        setINR(e.target.value*83.6029);
        setMYR(e.target.value/0.2096);

    }
    const handleinr=(e)=>{
        setINR(e.target.value);
        setUSD(e.target.value/83.6029);
        setMYR(e.target.value/17.5273);
    }
  return (
    <div>
        <h1>**** Money Conversion ****</h1>
        <form>
            <label>INR :</label>
            <input type='number' value={INR} onChange={handleinr}/>
            <br></br><br></br><br></br>
            <label>USD :</label>
            <input type='number' value={USD} onChange={handleusd}/>
            <br></br><br></br><br></br>
            <label>MYR :</label>
            <input type='number' value={MYR} onChange={handlemyr}/>
            <br></br><br></br><br></br>
        </form>
    </div>
  )
}
