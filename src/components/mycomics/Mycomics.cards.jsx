import React from 'react'
import { Link } from 'react-router-dom';
import './mycomics.cards.css'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import myComicsAction from '../../store/mycomics/mycomics.actions.js'
import { useDispatch, useSelector } from 'react-redux';

const {deleteMyCard} = myComicsAction; 

function Mycards({title, photo, id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Link  className='btnE' to={`/edit-comics/${id}`}>Edit</Link>
      </div>
    </div>
  </>
  )
}

export default Mycards