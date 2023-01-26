import "./mycomics.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mycards from "../mycomics/Mycomics.cards";
import myComicsAction from "../../store/mycomics/mycomics.actions";
import BtnCategories from '../btnCategories/BtnCategories';


function Mycomics() {
  const { getMycomics } = myComicsAction;
  let comicstore = useSelector((store) => store);
  let mail = comicstore.auth.mail;
  let dispatch = useDispatch();
  let categoriesStore = useSelector((store) => store?.categories?.filterCategory);
  const btnCategory = categoriesStore;
  const comics = comicstore.comic;
  const [page,setPage]=useState(1)
  let inputText=useRef('')
  const token = localStorage.getItem('token')
  
  useEffect(() => {
      dispatch(getMycomics( {token} ));
  }, []);

  const  myComics  = useSelector((store) => store?.Mycomics?.myComics);
  console.log(myComics)
  const btn=()=>{
    dispatch(getMycomics({
      page:page,
      title:inputText.current.value,
      category:btnCategory
    }))
  }


  return (
    <>
      <div className="header-comics1">
        <h1>Welcome Back! {mail}</h1>
      </div>
      <main className="main-comics1">
            <form className='input-buttom'>
              <BtnCategories onClick={btn}></BtnCategories>
            </form>
        <div className="card-container1">
          {myComics?.length !== 0 ? (
            myComics?.map((card, index) => {
              return (
                <div key={index}>
                  <Mycards
                    title={card.title}
                    id={card._id}
                    photo={card.photo}
                  ></Mycards>
                </div>
              );
            })
          ) : (
            <h1 className="message1">COMIC NOT FOUND</h1>
          )}
        </div>
      </main>
    </>
  );
}

export default Mycomics;
