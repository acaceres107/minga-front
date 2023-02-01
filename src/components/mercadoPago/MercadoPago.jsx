import React from 'react';
import './mercadoPago.css'
import donationActions from '../../store/mercadPago/mercadoPago.actions'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';


const {donation} = donationActions;  

const Donation = ({ isOpen, onClose }) => {
  let mpStore = useSelector(store=>store.mercadoPago)
  console.log(mpStore)
  let { token } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const donation4 = useRef()
   if (!isOpen) {
    return null;
  }
  let donation1 = 1000;
  let donation2 = 5000;
  let donation3 = 10000;


  const dispatch1 = ()=>{
    let data = {
      unit_price: donation1
    }
    dispatch(donation({data, token}))
  } 
  const dispatch2 = ()=>{
    let data = {
      unit_price: donation2
    }
    dispatch(donation({data, token}))
  } 
  const dispatch3 = ()=>{
    let data = {
      unit_price: donation3
    }
    dispatch(donation({data, token}))
  } 
  const dispatch4 = ()=>{
    let price4 = parseInt(donation4.current.value);
    let data = {
      unit_price: price4
    }
    console.log(data);
    console.log(price4)
    dispatch(donation({data, token}))
  } 
  const {}=donationActions

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
      <div className='equisClose'>
          <button className="modal-close-btn" onClick={onClose}><img src="../assets/cerrar.png" alt="" /></button>
        </div>
        <div className='payment-title'>
          <p>How much would you like to donate?</p>
        </div>
        <div className= 'payment-container'>
        <div className='payment-card'>
          <p> $1000 </p>
          <button className='payment-btn' onClick={dispatch1}><img className='mp' src="../assets/mp.png" alt="" /></button>
        </div>
        <div className='payment-card'>
          <p> $5000 </p>
          <button className='payment-btn' onClick={dispatch2}><img className='mp' src="../assets/mp.png" alt="" /></button>
        </div>
        <div className='payment-card'>
          <p> $10000 </p>
          <button className='payment-btn' onClick={dispatch3}><img className='mp' src="../assets/mp.png" alt="" /></button>
        </div>
        </div>
        <div className='payment-input'>
          <p>Or you could what you want! </p>
          <input type="number" className='payment-personal' ref={donation4} />
          <button className='payment-btn' onClick={dispatch4}><img className='mp' src="../assets/mp.png" alt="" /></button>
        </div>

      </div>


  </div>
  );
}

export default Donation;