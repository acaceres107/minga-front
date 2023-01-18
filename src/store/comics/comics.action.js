import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

let getComics= createAsyncThunk(
    "getComics",
    async({page,title,category})=>{
        try{
            const res=await axios.get(`http://localhost:8000/api/comics?page=${page}&title=${title}&category_id=${category}`)
            console.log(category)
            return{
                res : { comic : res.data.response},
                message : "comic"
            }
              
        }
        catch(err){
            console.log(err)
        }

    }
)

let actionComic={getComics}

export default actionComic