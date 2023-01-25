import { createAsyncThunk, AsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";

let getMycomics = createAsyncThunk(
    "getMycomics",
    async({token})=>{
        console.log(token);
        try{
            
            let url = `http://localhost:8000/api/comics/me/`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.get(url, headers)

            console.log(response);
            console.log(response.data)
            return{
                    response: {comics:  response.data,
                    } 
             }
             
        }catch (error){
            console.log(error);
        }
    }
)
const myComicsAction = {
    getMycomics
}
/* let updateComics = createAsyncThunk(
    "updateComics",
    async()
)
 */
export default myComicsAction;