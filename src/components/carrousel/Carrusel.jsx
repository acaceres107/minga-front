import React, { useState, useEffect } from 'react'
import Slide from './Slide'
import '../carrousel/carrusel.css'
import { useDispatch, useSelector } from 'react-redux'
import actionAllComic from '../../store/allcomic/actions'

const { allComics }= actionAllComic


export default function Carrusel() {
    const [slideActivo, setSlideActivo] = useState(0)
    const dispach = useDispatch()

    const comics = useSelector((store) => store?.all.comic)

  const comicSort = [...comics]

  let comic = comicSort.sort(function compare(a, b) {
    let dateA = new Date(a.createdAt);
    let dateB = new Date(b.createdAt);
    return dateB - dateA;
  }).slice(0,5)

console.log(comic)

useEffect(() => {
    let interval = setInterval(() => {
        siguienteSlide()
    }, 3000);
    return () => clearInterval(interval)
}
)


useEffect( ()=>{
    dispach(allComics())
},[]
)
 

     const siguienteSlide = (e) =>  {
        setSlideActivo(slideActivo === comic.length - 1 ? 0 : slideActivo + 1)
    }
    const siguienteSlide2 = (e) =>  {
        e.preventDefault()
        setSlideActivo(slideActivo === comic.length - 1 ? 0 : slideActivo + 1)
    }
    const anteriorSlide = (e) => {
        e.preventDefault()
        setSlideActivo(slideActivo === 0 ? comic.length - 1 : slideActivo - 1)
    } 



    return (
            <div className="padre">
             <div className='carrusel'> 
                <Slide url={comic[slideActivo]?.photo} />
                <div className="text">{comic[slideActivo]?.title}</div> 
                <a href='.' className="prev" onClick={anteriorSlide}>&#10094;</a>
                <a href='.' className="next" onClick={siguienteSlide2}>&#10095;</a>
            </div> 
            </div>
    )
}