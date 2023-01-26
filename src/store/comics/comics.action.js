import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";


let getComics= createAsyncThunk(
    "getComics",
    async({page,title,category})=>{
        try{
            const res=await axios.get(`${urlApi}api/comics?page=${page}&title=${title}&category_id=${category}`)
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