import './comics-list.css';
import React,{ useEffect,useState,useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Cards from '../cards/Cards';
import actionComic from '../../store/comics/comics.action';
import BtnCategories from '../btnCategories/BtnCategories';


const {getComics}=actionComic


function ComicsList() {

  let comicstore=useSelector((store)=>store.comics);
  let dispatch=useDispatch();
  let categoriesStore=useSelector((store)=>store.categories.filterCategory);
  const btnCategory=categoriesStore
  let inputText=useRef('')
  const [page,setPage]=useState(1)
  const comics=comicstore.comic
  let title=''
  
  useEffect(()=>{
    dispatch(getComics({
      page:page,
      title:title,
      category:btnCategory.join(',')
    }))
  },[dispatch,title,page,btnCategory])
  
  const next= ()=>{
    setPage(page+1)
  };
  const prev= ()=>{
    setPage(page-1)
  };
  const getInput=(e)=>{
    e.preventDefault()
    
    dispatch(getComics({
      page:page,
      title:inputText.current.value,
      category:btnCategory
    }))
   
    
  }
  const btn=()=>{
    dispatch(getComics({
      page:page,
      title:inputText.current.value,
      category:btnCategory
    }))
  }

  return (
    <>
        <div className='header-comics'>
          <p>Comic</p>
          <h1>COMICS</h1>
          <form className='search'>
            <input onChange={getInput} ref={inputText} type="text" placeholder="Search Comics" /> 
          </form>
          
        </div>

        <main className='main-comics'>
            <h2>Explore</h2>
            <div className='img-category'>
              <img src="./assets/adventures.png" alt="adventures" />
              <img src="./assets/nostalgic.png" alt="nostalgic" />
              <img src="./assets/popular.png" alt="popular" />
            </div>
            <form className='input-buttom'>
              <BtnCategories onClick={btn}></BtnCategories>
            </form>
            <div className='card-container'>
              {
                comics?.length!==0?comics?.map((e,index)=>{return (<Cards category={e} title={e.title} id={e._id} photo={e.photo} key={index}></Cards>)}):<h1 className='message'>COMIC NOT FOUND</h1>
              }
              
            </div>
            <div className='pages-btn'>
              {
                page===1?null:(<button  className='btn-pages' onClick={prev}>Prev</button>)
              }
              {
                comics.length<10?null:( <button onClick={next}>Next</button>)
              }
              
             
            </div>
        </main>
      
    </>
  )
}

export default ComicsList