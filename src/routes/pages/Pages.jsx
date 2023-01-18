import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../layouts/nav/Nav'
import chapterActions from '../../store/chapter/actions'
import { useParams, useNavigate } from 'react-router-dom'
import "./pages.css"

const { getChapterDetails, getChapters } = chapterActions

function Pages() {
  
  const [current, setCurrent] = useState (JSON.parse(localStorage.getItem('page')))
  const chapterStore = useSelector(state => state?.pages )
  const dispatch = useDispatch()
  const { id } = useParams() 
  const navigation = useNavigate()
  useEffect(() => {
      dispatch(getChapterDetails(id));
      dispatch(getChapters("63bd819810acd63e286e5a76"))
  }, [id])
  const getPagesImages = () => { 
    if (chapterStore.chapter?.pages?.length === 0) {
      return <p>Loading...</p>
    } else {
      return ( 
        <div className="imageContainer"><img className='img' src={chapterStore?.chapter?.pages?.[current]} alt="Comic Page" /></div> 
        )
    }
  }
  const getChapterTitle = () => {
    if (chapterStore.pages?.title?.length === 0) {
      return <p>Loading...</p>
    } else {
      return <h2 className='title'>Cap N°: {chapterStore.chapter?.order}, {chapterStore.chapter?.title}</h2>
    }
  }

  const pageActual = () => {
    const currenActual = current
    let page =  localStorage.setItem("page", JSON.stringify(currenActual));
    return page
} 
pageActual();
  
  const traerPageActual = () =>{
      let lastPageRead =  JSON.parse(localStorage.getItem("page"));
      return lastPageRead
}
traerPageActual()

  const next = () => {
    console.log(chapterStore);
    if (current >= chapterStore.chapter?.pages?.length - 1) {
      console.log("end chapter");

      const nextchapter = chapterStore?.chapters.response.find(
        (chapter) => chapterStore.chapter.order + 1 === chapter.order
      );

      console.log(nextchapter)
      navigation(`/pages/${nextchapter._id}`);
      setCurrent(0);
    }
    if (current !== chapterStore.chapter.pages?.length - 1) {
      setCurrent(current + 1);
    }
  };

    const prev = () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
      else if (chapterStore.chapter.order === 1) {
        navigation(`/comic/${chapterStore.chapter.comic_id}`);
      }
      else if (current === 0) {
        const prevchaptes = chapterStore.chapters.response.find(
          (chapter) => chapterStore.chapter.order - 1 === chapter.order
        );
        navigation(`/pages/${prevchaptes._id}`);
        setCurrent(prevchaptes.pages.length - 1);
        console.log("");
    }
    }
  return (
    <>
        <Nav /> 

      <div className="container">
          <div className="titleContainer">
            {getChapterTitle()}
          </div>
        <div className="comicPage">
          {getPagesImages()}
          <div className="leftButton" onClick={prev}></div>
          <div className="rightButton" onClick={next}></div>
        </div>
        <div className="commentContainer">
        <img className="puntos" src="/assets/puntos.png" alt="" />
        <p className="pcomments">42</p>
        </div>
      </div>
      </>
);
  }
  export default Pages