import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./mangas.css";
import Chapters from "../../../components/chapters/Chapter";
import comicsActions from "../../../store/mangas/actions";
const { obtenerComics } = comicsActions;

export default function Comic() {
  const comicStore = useSelector((store) => store.comic);
  const dispatch = useDispatch();
  const [chapter, setChapter] = useState(false);

  //useParam Hook buscas!!

  const { id } = useParams();

  useEffect(() => {
    if (comicStore.comic?.length === 0) {
      dispatch(obtenerComics(id));
    }
  }, []);

  const handleClick = () => {
    setChapter(true);
  };
  const handleClick1 = () => {
    setChapter(false);
  };
  return (
    <div className="container">
      <div className="comics">
        <img src={comicStore.comic.response?.photo} alt="" />
        <h3>By {comicStore.comic.response?.author_id.name}</h3>
        <h1>{comicStore.comic.response?.title}</h1>
      </div>
      <div className="emojis">
        {/*   <button className="buton" href=".">
          &#128077;
        </button>
        <button className="buton" href=".">
          &#128525;
        </button>
        <button className="buton" href=".">
          &#128558;
        </button>
        <button className="buton" href=".">
          &#128078;
        </button> */}
      </div>
      <div className="botones">
        {chapter ? (
          <button onClick={handleClick1} className="btn-white">
            Manga
          </button>
        ) : (
          <button onClick={handleClick1} className="btn-blue">
            Manga
          </button>
        )}
        {chapter ? (
          <button onClick={handleClick} className="btn-blue">
            Chapter
          </button>
        ) : (
          <button onClick={handleClick} className="btn-white">
            Chapter
          </button>
        )}
      </div>
      <div >
        {chapter ? (
          <Chapters />
        ) : (
          <div className="descripcion">
            <h2>description</h2>
            <div>{comicStore.comic.response?.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}
