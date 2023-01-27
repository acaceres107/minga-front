/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./coments.css";


function Coments({chapter_id,reload,set}) {
  const text = useRef("");
  let userStore=useSelector((store)=>store.auth?.token)
  
  let guardaData =async (e) => {
    e.preventDefault();
    let data = {
      chapter_id: chapter_id,
      text: text?.current?.value,
    };
    let headers = {headers: {'Authorization':` Bearer  ${userStore} `}}   

    await axios
      .post("http://localhost:8000/api/comments", data,headers)
      .then((e) => console.log(e))
      .catch((error) => console.log(error));
      set(!reload)
  };
  return (
    <>
      <div className="comment-container">
          <form className="form-comment" onSubmit={guardaData}>
            <div className="border-input">
              <input className="text" type='text' rows="5" cols="33" placeholder="Say something here..." ref={text}></input>
              <button type="submit" className="submit-comment" onClick={(e)=>{guardaData(e)}}>
                <img  src="/assets/send.png" alt="sendimg" ></img>
              </button>
            </div>
            
          </form>
      </div>
    </>
  );
}

export default Coments;
