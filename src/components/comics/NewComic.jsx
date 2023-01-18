import './NewComic.css'
import axios from "axios";
import { useRef, useState } from "react";
import React from "react";
import { useDispatch } from 'react-redux';
import alertActions from '../../store/alert/alertAction';


function NewComic() {
  let dispatch=useDispatch()
  let {alert}=alertActions

  const tilte = useRef("");
  const photo = useRef("");
  const description = useRef("");

  const [value, setValue] = useState("");
  console.log(value);

  const createComic = (e) => {
    e.preventDefault();
    const comic = {
      author_id: "63b31c350bddc55d435910d7",
      company_id: "63b31c350bddc55d435910d7",
      title: tilte.current.value,
      photo: photo.current.value,
      description: description.current.value,
      category: "63b31c350bddc55d435910d7",
    }; 
    axios.post('http://localhost:8000/api/comics',comic)
      .then((res)=>{
        console.log(res)
        dispatch(alert(res.data.response))
      })
      .catch((err)=>console.log(err))
}

  return (
    <div>
      <form action="" className="section-form" onSubmit={createComic}>
        <input
          type="text"
          placeholder="Insert title"
          className="input"
          ref={tilte}
        />
        <select
          name="categories"
          className="input"
          id="categories"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Insert category</option>
          <option value="category1">category 1</option>
          <option value="category2">category2</option>
          <option value="category3">category3</option>
        </select>
        <input
          type="text"
          placeholder="Insert description"
          className="input"
          ref={description}
        />
        <input
          type="text"
          placeholder="Insert cover photo"
          className="input"
          ref={photo}
        />
        <input
          type="submit"
          value="Send"
          className="button-form"
        />
      </form>
    </div>
  );
}

export default NewComic;

