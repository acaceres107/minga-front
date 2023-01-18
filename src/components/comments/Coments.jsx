/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useRef } from "react";
import axios from "axios";
import "./coments.css";


function Coments() {
  const [salidaComents, setSalidaComents] = useState(false);
  const coment = () => setSalidaComents(!salidaComents);
  const text = useRef("");


  let guardaData = (e) => {
    e.preventDefault();
    let data = {
      chapter_id: "63acd1e28e7c0313cba77725",
      user_id: "63acd1e28e7c0313cba77725",
      text: text?.current?.value,
      commentable_id: "63acd1e28e7c0313cba77725",
    };   
    console.log(data)
    axios
      .post("http://localhost:8000/api/comments", data)
      .then((e) => console.log(e))
      .catch((error) => console.log(error));
      console.log(data)
  };

  return (
    <>
      <div className="container">
        <span className="boton" onClick={coment}>Comment</span>
        {salidaComents ? (
          <form className="form" onSubmit={guardaData}>
            <label>
              Dejanos un comentario :
            </label>
            <textarea rows="5" cols="33" ref={text}></textarea>
            <input onClick={()=>{coment()}}  type="submit"></input>
          </form>
        ) : null}
      </div>
    </>
  );
}

export default Coments;
