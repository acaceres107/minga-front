import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";


let allComics = createAsyncThunk(
    "allComics",
    async()=>{
        
        try{
              
            const res=await axios.get(`${urlApi}api/comics`)

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

let actionAllComic={allComics}

export default actionAllComic




