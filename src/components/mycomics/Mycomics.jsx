import "./mycomics.css"
import React,{ useEffect,useState,useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Cards from '../cards/Cards';
import actionComic from '../../store/comics/comics.action';
import BtnCategories from '../btnCategories/BtnCategories';
const {getComics}=actionComic
function Mycomics() {

  let comicstore=useSelector((store)=>store.comics);
  let dispatch=useDispatch();
  let categoriesStore=useSelector((store)=>store.categories.filterCategory);
  const btnCategory=categoriesStore
  console.log(btnCategory)
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
  },[page,btnCategory])
  
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
        <div className='header-comics1'>
          <p>Comic</p>
          <h1>COMICS</h1>
          
        </div>

        <main className='main-comics1'>
            <form className='input-buttom1'>
              <BtnCategories onClick={btn}></BtnCategories>
            </form>
            <div className='card-container1'>
              {
                comics?.length!==0?comics?.map((e,index)=>{return (<Cards title={e.title} id={e._id} photo={e.photo} key={index}></Cards>)}):<h1 className='message1'>COMIC NOT FOUND</h1>
              }
              
            </div>
            <div className='pages-btn1'>
              {
                page===1?null:(<button  className='btn-pages1' onClick={prev}>Prev</button>)
              }
              {
                comics.length<10?null:( <button onClick={next}>Next</button>)
              }
              
             
            </div>
        </main>
      
    </>
  )
}

export default Mycomics;