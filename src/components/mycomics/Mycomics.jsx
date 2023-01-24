import "./mycomics.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mycards from "../mycomics/Mycomics.cards";
import actionComic from "../../store/comics/comics.action";
import BtnCategories from "../btnCategories/BtnCategories";
import myComicsAction from "../../store/mycomics/mycomics.actions";


function Mycomics() {
  const { getMycomics } = myComicsAction;
  let comicstore = useSelector((store) => store);
  console.log(comicstore);

  let dispatch = useDispatch();
  let categoriesStore = useSelector((store) => store.categories.filterCategory);
  const btnCategory = categoriesStore;
  const comics = comicstore.comic;
    let token = localStorage.getItem('token')
    console.log(token);
  useEffect(() => {

      dispatch(getMycomics( {token} ));
  }, []);



  const  myComics  = useSelector((store) => store.Mycomics?.myComics);
  console.log(myComics)

  return (
    <>
      <div className="header-comics1">
        <h1>COMICS author_/ company</h1>
      </div>

      <main className="main-comics1">
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
