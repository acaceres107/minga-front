import axios from "axios";
import React, {useEffect, useState} from "react";
import './btncategories.css'
import Button from "../button/Button";

 

const BtnCategories = () => {
  let [categories, setCategories] = useState([]);

  const getData = async()=>{
    try {
       const response = await axios.get("https://mingaback-production.up.railway.app/api/categories")
       setCategories(response.data.response)
      }
      catch(error){
        console.log(error)
      }
  }

  useEffect( () => {

      getData()

  },[])

 return (
   <div className="input-buttom">
     {
        categories.map(((e,index)=>{
          return (
            <Button  id={e._id} key={index} num={index} name={e.name} ></Button>
          )
        }))
     }
   </div>
 )
}
export default BtnCategories;


