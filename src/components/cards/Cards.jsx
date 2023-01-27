import React from 'react'
import { Link } from 'react-router-dom';
import './cards.css'
function Cards ({title, photo, id}) {
  return (
    <>
        <Link to={`/comic/${id}`}>
          <div className='card' >
          <h3>{title}</h3>
          <img src={photo} alt="img"/>
          </div>
        </Link>
    </>
  )
}
export default Cards