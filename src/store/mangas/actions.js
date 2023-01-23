
import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";


const obtenerComics = createAsyncThunk (
    "obtenerComics",
    async (comic) => {
        try {
      const response = await axios.get(`${urlApi}api/comics/${comic}`)
      return{
        response : { comics : response.data},
        message : " comic obtained "
      }
            
        } catch (error) {
            console.log(error)
            return{
                response : { comics : error.response.data},
                message : " error comic obtained "
              }
            
        }

    }
)

const comicsActions = { obtenerComics}

export default comicsActions


