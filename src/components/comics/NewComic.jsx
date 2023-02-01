import './NewComic.css'
import axios from "axios";
import { useRef, useState,useEffect } from "react";
import React from "react";
import { useDispatch } from 'react-redux';
//import alertActions from '../../store/alert/alertAction';


function NewComic() {
  let dispatch=useDispatch()
  let [categories, setCategories] = useState([]);
  //let {alert}=alertActions
  const tilte = useRef("");
  const photo = useRef("");
  const description = useRef("");

  const [value, setValue] = useState("");

  const getData = async()=>{
    try {
       const response = await axios.get("http://localhost:8000/api/categories")
       setCategories(response.data.response)
      }
      catch(error){
        console.log(error)
      }
  }
  useEffect( () => {
    getData()
  },[])

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
        dispatch(alert(res.data.response))
      })
      .catch((err)=>console.log(err))
}

  return (
    <div>
      <form className='formP'  onSubmit={createComic}>
        <div className="form12">
            <h1 className='titulo1'>New Comic</h1>
            <img className='img1' src='assets/Rectanglea.jpg' alt='img'/>
            <div className="grupo">
                <input type="text" placeholder="Insert title" className='input1' name='title' ref={tilte}/>
            </div>
            <div className="grupo">
                <select name="categories" className="input1" id="categories" onChange={(e) => setValue(e.target.value)}>
                  <option value="">Insert category</option>
                  {
                    categories.map((e,index)=>{return (<option key={index} value={e.name}>{e.name}</option>)})
                  }
                </select>
            </div>
            <div className="grupo">
                <input type="text" placeholder="Insert description" className='input1' name='description' ref={description}/>
            </div>
            <div className="grupo">
                <input type="text" placeholder="Insert cover photo" className="input1" name='photo' ref={photo}/>
            </div>
            <button className='btn' type='submit' >Send</button>
          </div>
        </form>
      {/* <form action="" className="section-form" onSubmit={createComic}>
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
      </form> */}
    </div>
  );
}

export default NewComic;

