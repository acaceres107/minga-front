import React from 'react'
import { Link } from 'react-router-dom';
import './mycomics.cards.css'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import myComicsAction from '../../store/mycomics/mycomics.actions.js'
import { useDispatch, useSelector } from 'react-redux';




function Mycards({title, photo, id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getMycomics } = myComicsAction;
  const token = localStorage.getItem("token")
const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMycomics({token}))
  },[]);
  const  myComics  = useSelector((store) => store.Mycomics.myComics);
console.log(myComics)
  return (
  <>
    <div className='allContainer'>
    <Link to={`/comic/${id}`}>
      <div className='card' >
        <h3>{title}</h3>
        <img src={photo} alt="img"/>
      </div>
    </Link>
    <div className='btnContainer'>
      <button className='btnE' onClick={openModal}>Edit</button>            
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <button className='btnD' onClick={openModal}>Delete</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
</div>
  </>
  )
}

export default Mycards