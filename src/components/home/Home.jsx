import React from 'react'
import Carrusel from '../carrousel/Carrusel'
import './home.css'


export default function Header() {

  return (
    <div>
      <header>
        <div className="sectionhome">
          <h1>Tu tienda de comics favorita</h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        </div>
      </header>
      <Carrusel/>
    </div>
  )
}