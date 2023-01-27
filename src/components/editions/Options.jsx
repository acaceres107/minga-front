import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actionAllComic from "../../store/allcomic/actions";
import { useEffect } from "react";
import actionChapter from "../../store/allcomic/actionchapter";
import chapterAction from "../../store/chapter/actions";
import "./ChapterEdit.css";
import { Slide, ToastContainer, toast } from "react-toastify";
/* import RenderEditChapter from '../renderEditChapter/RenderEditChapter'
 */
export default function Options() {
  const dispatch = useDispatch();
  const comicstore = useSelector((store) => store?.all.comic);
  const id = useSelector((store) => store?.chap.idComic?.payload);
  const chapters = useSelector((store) => store?.chapters.chapter);
  const chapterStore = useSelector((store) => store?.chapters);

 console.log(chapterStore?.chapter?.chapters)


  const inputdata = useRef("");
  const input = useRef("");
 console.log(inputdata.current.value)
 console.log(chapters)


 

  const { obtenerChapters, deleteChapter, updateChapter } = chapterAction;
  const { chapterComic } = actionChapter;
  const { allComics } = actionAllComic;


  const editChapterNotify = () =>
  toast.success(chapterStore?.message, {
    autoClose: 3000,
    theme: "colored",
  });
const errorEditChapterNotify = () => {
  toast.error(chapterStore?.message, {
    autoClose: 3000,
    theme: "colored",
  });
};

useEffect(() => {
  if (chapters?.data?.success === true) {
    editChapterNotify();
  }
  if (chapters?.data?.success === false) {
    errorEditChapterNotify();
  }
}, [chapterStore]);

useEffect(() => {
  if (chapterStore?.chapter?.chapters?.success === true) {
    editChapterNotify();
  }
  if (chapterStore?.chapter?.chapters?.success === false) {
    errorEditChapterNotify();
  }
}, [chapterStore]);


  useEffect(() => {
    dispatch(allComics());
    if (id) {
      dispatch(obtenerChapters({ id }));
    }
  }, [id]);

  const valuer = (e) => {
    dispatch(chapterComic(e.target.value));
  };

  let [valueSelect, setValueSelect] = useState("");
  const clickvalue1 = (e) => {
    setValueSelect(e.target?.value);
  };



  let [idValue, setIdValue] = useState("");
  const clickvalue = (e) => {
    setIdValue(e.target?.value);
  };

  const deletChapter = async (e) => {
    e.preventDefault();
    await dispatch(deleteChapter(idValue))
    await dispatch(obtenerChapters({ id }));
  };

  const editChapter = async (e) => {
    e.preventDefault();
    let chapter = {};
    if (input.current.value === "Title") {
      chapter.title = inputdata.current.value;
    }else if (valueSelect === "order") {
      chapter.order = inputdata.current.value;
    }else if (input.current.value === "pages") {
      chapter.page = inputdata.current.value;
    }

    await dispatch(updateChapter({ id: idValue, chapter }))
    
    await dispatch(obtenerChapters({ id }))
    
  };

  return (
    <>
     <ToastContainer transition={Slide} />
      <div className="container">
        <div className="divContainerForm">
          <form className="formNewComic">
            <h1 className="titulo2">Chapter Edit</h1>
            <div className="formNewComic">
              <select className="inpFormSelect" name="select" onChange={valuer}>
                {comicstore?.map((comic) => {
                  return (
                    <option
                      className="inpFormSelect"
                      value={comic._id}
                      key={comic._id}
                    >
                      {comic.title}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={clickvalue}
                className="inpFormSelect"
                name="select"
              >
                <option className="inpFormSelect1" value="value1">
                  Chapters
                </option>
                {chapters?.response?.map((chapter) => {
                  return (
                    <option
                      onClick={clickvalue}
                      className="inpFormSelect"
                      value={chapter._id}
                      key={chapter._id}
                    >
                      {chapter.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select ref={input} onChange={clickvalue1} name="categories" className="inpFormSelect">
                <option  value="Title" className="default-select">Title</option>
                <option  value="order" className="default-select">Order</option>
                <option  value="pages" className="default-select">pages</option>
              </select>
            </div>
            <div>
              <input
                ref={inputdata}
                type="text"
                placeholder="data to edit"
                className="inpFormSelect"
              ></input>
            </div>
            <input
              onClick={editChapter}
              type="submit"
              value="Edit"
              className="button_edit"
            />
            <button onClick={deletChapter} className="button_delete">
              Delete
            </button>
          </form>
        </div>
        <div className="chapter"></div>

      </div>
    </>
  );
}
