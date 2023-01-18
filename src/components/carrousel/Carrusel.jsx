import React, { useState, useEffect } from 'react'
import Slide from './Slide'
import '../carrousel/carrusel.css'


export default function Carrusel() {
    const [slideActivo, setSlideActivo] = useState(0)
    const [manga, setManga] = useState([])

    const traerDatos = async () => {
        try {
            const respuesta = await fetch("./manga.json")
            const data = await respuesta.json()
            setManga(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        traerDatos()
    }, []
    )

    useEffect(() => {
        let interval = setInterval(() => {
            siguienteSlide()
        }, 3000);
        return () => clearInterval(interval)

    })

    const siguienteSlide = (e) =>  {
        setSlideActivo(slideActivo === manga.length - 1 ? 0 : slideActivo + 1)
    }
    const siguienteSlide2 = (e) =>  {
        e.preventDefault()
        setSlideActivo(slideActivo === manga.length - 1 ? 0 : slideActivo + 1)
    }
    const anteriorSlide = (e) => {
        e.preventDefault()
        setSlideActivo(slideActivo === 0 ? manga.length - 1 : slideActivo - 1)
    }



    return (
            <div className="padre">
            <div className='carrusel'>
                <Slide url={manga[slideActivo]?.photo} />
                <div className="text">{manga[slideActivo]?.title}</div>
                <a href='.' className="prev" onClick={anteriorSlide}>&#10094;</a>
                <a href='.' className="next" onClick={siguienteSlide2}>&#10095;</a>
            </div>
            </div>
    )
}