import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterAction from "../../store/chapter/actions";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link as Anchor } from "react-router-dom";
import comicsActions from "../../store/mangas/actions";
import "./chapter.css";

const { obtenerComics } = comicsActions;

const { obtenerChapters } = chapterAction;

export default function Chapters() {
  const chapterStore = useSelector((store) => store.chapters);
  const dispatch = useDispatch();
  const { id } = useParams();
  const comicStore = useSelector((store) => store.comic);

  const [pages, setPages] = useState(1);

  const next = () => {
    setPages(pages + 1);
  };
  const prev = () => {
    setPages(pages - 1);
  };
  useEffect(() => {
    dispatch(obtenerChapters({ id, pages }));
    dispatch(obtenerComics(id));
  }, [pages, id]);

  let cantidadCapitulos = chapterStore?.chapter?.response;
  


  return (
    <div>
      {cantidadCapitulos?.map((chapter) => (
        <div className="chaptercontent" key={chapter.order}>
          <img
            className="imagecard"
            src={comicStore.comic.response?.photo}
            alt=""
          />
          <p className="title">{chapter.title}</p>
          <Anchor className="boton" to={`/pages/${chapter._id}`}>
            Read ...
          </Anchor>
        </div>
      ))}
      <div className="button">
        <div>
          {pages === 1 ? null : (
            <p className="prev1" onClick={prev}>
              prev
            </p>
          )}
        </div>
        <div>
          {cantidadCapitulos?.length < 5 ? null : (
            <div>
              <p className="next1" onClick={next}>
                next
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
